'use server'

import { prisma } from '@/shared/lib/db'

export const createGameActions = async () => {
	const user = await prisma.user.findFirst()

	createGam(user)
}
