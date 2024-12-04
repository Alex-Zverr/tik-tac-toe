import { Alert, AlertDescription } from '@/shared/ui/alert'

export function ErrorMassage({ error }: { error?: string }) {
	if (!error) return null

	return (
		<Alert variant='destructive'>
			<AlertDescription className='text-center'>{error}</AlertDescription>
		</Alert>
	)
}
