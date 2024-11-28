import { GameIdle } from '../domain'
import { gameRepository } from '../repositories/game'

export async function getIdleGames() {
	return (await gameRepository.gameList({
		status: 'idle',
	})) as GameIdle[]
}
