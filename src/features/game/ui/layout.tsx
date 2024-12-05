import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/shared/ui/card'

export function GameLayout({
	players,
	status,
	field,
	actions,
}: {
	players?: React.ReactNode
	status?: React.ReactNode
	field?: React.ReactNode
	actions?: React.ReactNode
}) {
	return (
		<Card className='w-full max-w-md'>
			<CardHeader>
				<CardTitle>Крестики нолики 3x3</CardTitle>
			</CardHeader>
			<CardContent className='flex flex-col gap-4'>
				{players}
				{status}
				{field}
			</CardContent>
			<CardFooter>{actions}</CardFooter>
		</Card>
	)
}
