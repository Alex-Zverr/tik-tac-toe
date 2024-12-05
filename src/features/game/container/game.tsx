import { GameEntity } from '@/entities/game'
import { GameId } from '@/kernel/ids'
import { GameLayout } from '../ui/layout'
import { GamePlayers } from '../ui/players'

export function Game({ gameId }: { gameId: GameId }) {
	const game: GameEntity = {
		id: '1',
		creator: {
			id: '1',
			login: 'Test',
			rating: 1100,
		},
		status: 'idle',
	}

	return <GameLayout players={<GamePlayers game={game} />} />
}
