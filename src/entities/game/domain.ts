import { GameId, UserId } from '@/kernel/ids'

export type GameEntity =
	| GameIdle
	| GameInProgress
	| GameFinishedVictory
	| GameFinishedDraw

export type GameIdle = {
	id: GameId
	creator: Player
	status: 'idle'
}

export type GameInProgress = {
	id: GameId
	players: Player[]
	field: Field
	status: 'inProgress'
}

export type GameFinishedVictory = {
	id: GameId
	players: Player[]
	field: Field
	status: 'victory'
	winner: Player
}

export type GameFinishedDraw = {
	id: GameId
	players: Player[]
	field: Field
	status: 'draw'
}

export type Player = {
	id: UserId
	login: string
	rating: number
}

export type Field = Cell[]

export type Cell = GameSymbol | null
export type GameSymbol = string
