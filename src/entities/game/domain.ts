export type GameEntity =
	| GameIdle
	| GameInProgress
	| GameFinishedVictory
	| GameFinishedDraw

export type GameIdle = {
	id: string
	creator: Player
	status: 'idle'
}

export type GameInProgress = {
	id: string
	players: Player[]
	field: Field
	status: 'inProgress'
}

export type GameFinishedVictory = {
	id: string
	players: Player[]
	field: Field
	status: 'victory'
	winner: Player
}

export type GameFinishedDraw = {
	id: string
	players: Player[]
	field: Field
	status: 'draw'
}

export type Player = {
	id: string
	login: string
	rating: number
}

export type Field = Cell[]

export type Cell = GameSymbol | null
export type GameSymbol = string
