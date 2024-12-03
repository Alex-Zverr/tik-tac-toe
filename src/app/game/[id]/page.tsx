export default async function Page({
	params,
}: {
	params: Promise<{ id: string }>
}) {
	const { id } = await params
	return <div className='flex flex-col'>game {id}</div>
}
