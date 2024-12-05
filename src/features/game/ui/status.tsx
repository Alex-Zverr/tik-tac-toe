import {
	GameEntity,
	getGameCurrentStep,
	getGameNextStep,
} from '@/entities/game'

export function GameStatus({ game }: { game: GameEntity }) {
	switch (game.status) {
		case 'idle':
			return <div className='text-lg'>Ожидание игрока</div>
		case 'inProgress': {
			const currentSymbol = getGameCurrentStep(game)
			const nextSymbol = getGameNextStep(currentSymbol)
		}
		case 'draw':
			return <div className='text-lg'>Ожидание игрока</div>
		case 'victory':
			return <div className='text-lg'>Ожидание игрока</div>
	}

	return null
}
