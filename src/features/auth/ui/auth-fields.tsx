import { Input } from '@/shared/ui/input'
import { Label } from '@/shared/ui/label'
import { useId } from 'react'

export function AuthFields() {
	const loginId = useId()
	const passwordId = useId()

	return (
		<>
			<div className='space-y-2'>
				<Label htmlFor={loginId}>Логин</Label>
				<Input
					id={loginId}
					name='login'
					type='login'
					required
					placeholder='Введите ваш логин'
				/>
			</div>
			<div className='space-y-2'>
				<Label htmlFor={passwordId}>Password</Label>
				<Input
					id={passwordId}
					name='password'
					type='password'
					required
					placeholder='Введите ваш пароль'
				/>
			</div>
		</>
	)
}
