import { createUser } from '@/entities/user/server'
import { left, mapLeft } from '@/shared/lib/either'
import { z } from 'zod'

const formDataSchema = z.object({
	login: z.string().min(3),
	password: z.string().min(3),
})

export const signUpAction = async (state: unknown, formData: FormData) => {
	const data = Object.fromEntries(formData.entries())
	const parsed = formDataSchema.safeParse(data)

	if (!parsed.success) {
		return left(`${parsed.error.message}`)
	}

	const createUserResult = await createUser(parsed.data)

	return mapLeft(createUserResult, error => {
		return {
			'user-login-exists': 'Логин занят',
		}[error]
	})
}
