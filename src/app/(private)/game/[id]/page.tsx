import { Game } from '@/features/game/server'

export default async function Page({
	params,
}: {
	params: Promise<{ id: string }>
}) {
	const { id } = await params
	return (
		<main className='flex flex-col grow items-center justify-center'>
			<Game gameId={id} />
		</main>
	)
}
