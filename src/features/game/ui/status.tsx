import { GameEntity, getGameCurrentStep } from '@/entities/game'

export function GameStatus({ game }: { game: GameEntity }) {
	switch (game.status) {
		case 'idle':
			return <div className='text-lg'>Ожидание игрока</div>
		case 'inProgress': {
			const currentSymbol = getGameCurrentStep(game)
			return <div className='text-lg'>Ход игрока {currentSymbol}</div>
		}
		case 'victory':
			const currentSymbol = getGameCurrentStep(game)
			return <div className='text-lg'>Победил игрок {currentSymbol}</div>
		case 'draw':
			return <div className='text-lg'>Ничья</div>
	}

	return null
}
