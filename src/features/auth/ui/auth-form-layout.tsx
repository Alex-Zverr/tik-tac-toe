import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/shared/ui/card'

export function AuthFormLayout({
	actions,
	description,
	fields,
	link,
	title,
	error,
	action,
}: {
	actions: React.ReactNode
	description: string
	fields: React.ReactNode
	link: React.ReactNode
	title: React.ReactNode
	error: React.ReactNode
	action: (formData: FormData) => void
}) {
	return (
		<Card className='w-full max-w-md'>
			<CardHeader className='text-center'>
				<CardTitle className='text-2xl font-bold'>{title}</CardTitle>
				<CardDescription>{description}</CardDescription>
			</CardHeader>
			<form action={action}>
				<CardContent className='space-y-4'>{fields}</CardContent>
				<CardFooter className='flex flex-col space-y-4'>
					{error}
					{actions}
					{link}
				</CardFooter>
			</form>
		</Card>
	)
}
