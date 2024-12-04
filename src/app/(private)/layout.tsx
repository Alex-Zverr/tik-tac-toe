export default function PrivateLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<div>
			<header className='px-10 py-4 flex flex-row gap-4 justify-between border-b border-b-primary/50'>
				<div>Tik tak toe</div>
				<div className='flex flex-row gap-4'>
					<div>Login</div>
				</div>
			</header>
		</div>
	)
}
