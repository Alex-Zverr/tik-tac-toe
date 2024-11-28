import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main() {
	const user = await prisma.user.create({
		data: {
			login: 'Александр',
			rating: 1000,
			passwordHash: 'password-1',
		},
	})
	const user2 = await prisma.user.create({
		data: {
			login: 'Васька',
			rating: 20,
			passwordHash: 'password-2',
		},
	})

	await prisma.game.create({
		data: {
			field: Array(9).fill(null),
			status: 'idle',
			players: {
				connect: {
					id: user.id,
				},
			},
		},
	})
	await prisma.game.create({
		data: {
			field: Array(9).fill(null),
			status: 'idle',
			players: {
				connect: {
					id: user2.id,
				},
			},
		},
	})
}
main()
	.then(async () => {
		await prisma.$disconnect()
	})
	.catch(async e => {
		console.error(e)
		await prisma.$disconnect()
		process.exit(1)
	})