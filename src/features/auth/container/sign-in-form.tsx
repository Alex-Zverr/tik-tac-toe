'use client'

import { right } from '@/shared/lib/either'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { AuthFields } from '../ui/auth-fields'
import { AuthFormLayout } from '../ui/auth-form-layout'
import { BottomLink } from '../ui/bottom-link'
import { ErrorMassage } from '../ui/error-massage'
import { SubmitButton } from '../ui/submit-button'

export function SignInForm() {
	const [login, setLogin] = useState('')
	const [password, setPassword] = useState('')
	const [error, setError] = useState('')
	const router = useRouter()

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault()
		setError('')

		if (!login || !password) {
			setError('All fields are required')
			return
		}
	}

	return (
		<AuthFormLayout
			title='Войти'
			description='Войдите в свой аккаунт'
			onSubmit={handleSubmit}
			fields={
				<AuthFields
					login={login}
					onChangeLogin={setLogin}
					password={password}
					onChangePassword={setPassword}
				/>
			}
			actions={<SubmitButton>Войти</SubmitButton>}
			error={<ErrorMassage error={right(null)} />}
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
