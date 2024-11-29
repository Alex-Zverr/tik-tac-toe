'use client'

import { mapLeft, right } from '@/shared/lib/either'
import { useActionState } from '@/shared/lib/react'
import { Button } from '@/shared/ui/button'
import { createGameActions } from '../actions/create-game'

export function CreateButton() {
	const [state, dispatch, isPending] = useActionState(
		createGameActions,
		right(undefined)
	)

	return (
		<Button
			disabled={isPending}
			onClick={dispatch}
			error={mapLeft(
				state,
				e =>
					({
						['can-create-only-one-game']: 'Вы можете создать только одну игру',
						['user-not-found']: 'Пользователь не найден',
					}[e])
			)}
		>
			Создать игру
		</Button>
	)
}
