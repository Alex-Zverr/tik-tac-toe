import Link from 'next/link'

export function BottomLink({
	text,
	linkText,
	url,
}: {
	text: string
	linkText: string
	url: string
}) {
	return (
		<p className='text-sm text-center text-primary/50'>
			{text}{' '}
			<Link href={url} className='text-primary hover:underline'>
				{linkText}
			</Link>
		</p>
	)
}