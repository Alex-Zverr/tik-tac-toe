'use client'

import { useActionState } from '@/shared/lib/react'
import { signUpAction, SignUpFromState } from '../actions/sign-up'
import { AuthFields } from '../ui/auth-fields'
import { AuthFormLayout } from '../ui/auth-form-layout'
import { BottomLink } from '../ui/bottom-link'
import { ErrorMassage } from '../ui/error-massage'
import { SubmitButton } from '../ui/submit-button'

export function SignUpForm() {
	const [fromState, action, isPending] = useActionState(
		signUpAction,
		{} as SignUpFromState
	)

	return (
		<AuthFormLayout
			title='Зарегистрироваться'
			description='Создайте аккаунт для входа в игры'
			action={action}
			fields={<AuthFields {...fromState} />}
			actions={
				<SubmitButton isPending={isPending}>Зарегистрироваться</SubmitButton>
			}
			error={<ErrorMassage error={fromState.errors?._errors} />}
			link={
				<BottomLink text='Уже есть аккаунт?' linkText='Войти' url='/sign-in' />
			}
		/>
	)
}
