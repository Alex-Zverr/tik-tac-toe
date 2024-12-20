import { left, right } from '@/shared/lib/either'
import cuid from 'cuid'
import { Player } from '../domain'
import { gameRepository } from '../repositories/game'

export async function createGame(player: Player) {
	const playerGames = await gameRepository.gameList({
		players: { some: { id: player.id } },
		status: 'idle',
	})

	const isGameInIdleStatus = playerGames.some(
		game => game.status === 'idle' && game.creator.id === player.id
	)

	if (isGameInIdleStatus) {
		return left('can-create-only-one-game' as const)
	}

	const createdGame = await gameRepository.createGame({
		id: cuid(),
		creator: player,
		status: 'idle',
	})

	return right(createdGame)
}
