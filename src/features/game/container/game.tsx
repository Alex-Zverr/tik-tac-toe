'use client'

import { GameEntity } from '@/entities/game'
import { GameId } from '@/kernel/ids'
import { GameField } from '../ui/field'
import { GameLayout } from '../ui/layout'
import { GamePlayers } from '../ui/players'
import { GameStatus } from '../ui/status'

export function Game({ gameId }: { gameId: GameId }) {
	const game: GameEntity = {
		id: '1',
		players: [
			{
				id: '1',
				login: 'Саня',
				rating: 1000,
			},
			{
				id: '2',
				login: 'Васякула',
				rating: 5,
			},
		],
		status: 'inProgress',
		field: ['X', 'O', 'X', null, null, null, null, null, null],
	}

	return (
		<GameLayout
			players={<GamePlayers game={game} />}
			status={<GameStatus game={game} />}
			field={
				<GameField
					game={game}
					onCellClick={index => {
						console.log(index)
					}}
				/>
			}
		/>
	)
}
