import { Input } from '@/shared/ui/input'
import { Label } from '@/shared/ui/label'
import { useId } from 'react'

export function AuthFields({
	errors,
	formData,
}: {
	formData?: FormData
	errors?: {
		login?: string
		password?: string
	}
}) {
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
					defaultValue={formData?.get('login')?.toString() || ''}
					required
					placeholder='Введите ваш логин'
				/>
				{errors?.login && <p className='text-red-500'>{errors.login}</p>}
			</div>
			<div className='space-y-2'>
				<Label htmlFor={passwordId}>Password</Label>
				<Input
					id={passwordId}
					name='password'
					type='password'
					defaultValue={formData?.get('password')?.toString() || ''}
					required
					placeholder='Введите ваш пароль'
				/>
				{errors?.password && <p className='text-red-500'>{errors.password}</p>}
			</div>
		</>
	)
}
