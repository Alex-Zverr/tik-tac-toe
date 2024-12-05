import { sessionService } from '@/entities/user/server'
import { Button } from '@/shared/ui/button'
import Image from 'next/image'
import { redirect } from 'next/navigation'

export default async function PrivateLayout({
	children,
}: {
	children: React.ReactNode
}) {
	const { session } = await sessionService.verifySession()

	return (
		<div className='flex flex-col grow'>
			<header className='px-12 py-2 flex flex-row gap-4 justify-between border-b border-b-primary/50 items-center'>
				<div className='font-xl'>
					<Image src='/logo.png' alt='Логотип' width={70} height={70} />
				</div>
				<div className='flex items-center gap-4'>
					<div className='text-lg'>{session.login}</div>
					<form
						action={async () => {
							'use server'
							sessionService.deleteSession()
							redirect('/sign-in')
						}}
					>
						<Button>Выйти</Button>
					</form>
				</div>
			</header>
			{children}
		</div>
	)
}
