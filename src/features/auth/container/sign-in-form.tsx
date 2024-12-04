'use client'

import { useActionState } from '@/shared/lib/react'
import { signInAction, SignInFromState } from '../actions/sign-in'
import { AuthFields } from '../ui/auth-fields'
import { AuthFormLayout } from '../ui/auth-form-layout'
import { BottomLink } from '../ui/bottom-link'
import { ErrorMassage } from '../ui/error-massage'
import { SubmitButton } from '../ui/submit-button'

export function SignInForm() {
	const [fromState, action, isPending] = useActionState(
		signInAction,
		{} as SignInFromState
	)

	return (
		<AuthFormLayout
			title='Войти'
			description='Войдите в свой аккаунт'
			action={action}
			fields={<AuthFields {...fromState} />}
			actions={<SubmitButton isPending={isPending}>Войти</SubmitButton>}
			error={<ErrorMassage error={fromState.errors?._errors} />}
			link={
				<BottomLink
					text='Нет аккаунта?'
					linkText='Зарегистрироваться'
					url='/sign-up'
				/>
			}
		/>
	)
}
