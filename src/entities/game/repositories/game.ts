import { prisma } from '@/shared/lib/db'
import { removePassword } from '@/shared/lib/password'
import { Game, Prisma, User } from '@prisma/client'
import { z } from 'zod'
import { GameEntity, GameFinishedVictory, GameIdle } from '../domain'

async function gameList(where?: Prisma.GameWhereInput): Promise<GameEntity[]> {
	const games = await prisma.game.findMany({
		where,
		include: {
			players: true,
			winner: true,
		},
	})

	return games.map(game => dbGameToGameEntity(game))
}

async function createGame(game: GameIdle): Promise<GameEntity> {
	const createGame = await prisma.game.create({
		data: {
			status: game.status,
			id: game.id,
			field: Array(9).fill(null),
			players: {
				connect: {
					id: game.creator.id,
				},
			},
		},
		include: {
			players: true,
			winner: true,
		},
	})

	return dbGameToGameEntity(createGame)
}

const fieldSchema = z.array(z.union([z.string(), z.null()]))

function dbGameToGameEntity(
	game: Game & {
		players: User[]
		winner?: User | null
	}
): GameEntity {
	const players = game.players.map(removePassword)
	switch (game.status) {
		case 'idle': {
			const [creator] = players
			if (!creator) {
				throw new Error('Game has no creator')
			}
			return {
				id: game.id,
				creator: creator,
				status: game.status,
				field: fieldSchema.parse(game.field),
			} satisfies GameIdle
		}
		case 'inProgress':
		case 'draw': {
			return {
				id: game.id,
				players: players,
				field: fieldSchema.parse(game.field),
				status: game.status,
			}
		}
		case 'victory': {
			if (!game.winner) {
				throw new Error('Game has no winner')
			}

			return {
				id: game.id,
				players: players,
				field: fieldSchema.parse(game.field),
				status: 'victory',
				winner: game.winner,
			} satisfies GameFinishedVictory
		}
	}
}

export const gameRepository = { gameList, createGame }
