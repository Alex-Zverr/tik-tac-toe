import { Either, matchEither } from '@/shared/lib/either'
import { Alert, AlertDescription } from '@/shared/ui/alert'

export function ErrorMassage({ error }: { error: Either<string, unknown> }) {
	return matchEither(error, {
		left: error => (
			<Alert variant='destructive'>
				<AlertDescription className='text-center'>{error}</AlertDescription>
			</Alert>
		),
		right: () => null,
	})
}
