'use server'

import { sessionService, verifyUser } from '@/entities/user/server'
import { redirect } from 'next/navigation'
import { z } from 'zod'

export type SignInFromState = {
	formData?: FormData
	errors?: {
		login?: string
		password?: string
		_errors?: string
	}
}

const formDataSchema = z.object({
	login: z.string().min(3),
	password: z.string().min(3),
})

export const signInAction = async (
	state: SignInFromState,
	formData: FormData
): Promise<SignInFromState> => {
	const data = Object.fromEntries(formData.entries())
	const parsed = formDataSchema.safeParse(data)

	if (!parsed.success) {
		const errors = parsed.error.format()
		return {
			formData,
			errors: {
				login: errors.login?._errors.join(', '),
				password: errors.password?._errors.join(', '),
				_errors: errors._errors.join(', '),
			},
		}
	}

	const verifyUserResult = await verifyUser(parsed.data)

	if (verifyUserResult.type === 'right') {
		await sessionService.addSession(verifyUserResult.value)

		redirect('/')
	}

	const errors = {
		'wrong-password': 'Неправильный логин или пароль',
	}[verifyUserResult.error]

	return {
		formData,
		errors: {
			_errors: errors,
		},
	}
}
