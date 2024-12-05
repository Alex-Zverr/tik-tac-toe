export type {
	Field,
	GameEntity,
	GameFinishedDraw,
	GameFinishedVictory,
	GameIdle,
	GameInProgress,
	Player,
} from './domain'

export { getGameCurrentStep, getGameNextStep } from './domain'
