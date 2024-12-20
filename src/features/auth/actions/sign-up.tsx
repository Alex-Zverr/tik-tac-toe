'use server'

import { createUser, sessionService } from '@/entities/user/server'
import { redirect } from 'next/navigation'
import { z } from 'zod'

const formDataSchema = z.object({
	login: z.string().min(3),
	password: z.string().min(3),
})

export type SignUpFromState = {
	formData?: FormData
	errors?: {
		login?: string
		password?: string
		_errors?: string
	}
}

export const signUpAction = async (
	state: SignUpFromState,
	formData: FormData
): Promise<SignUpFromState> => {
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

	const createUserResult = await createUser(parsed.data)

	if (createUserResult.type === 'right') {
		await sessionService.addSession(createUserResult.value)

		redirect('/')
	}

	const errors = {
		'user-login-exists': 'Логин занят',
	}[createUserResult.error]

	return {
		formData,
		errors: {
			_errors: errors,
		},
	}
}
