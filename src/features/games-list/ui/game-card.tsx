import { Card, CardContent, CardHeader, CardTitle } from '@/shared/ui/card'

export function GameCard({ login, rating }: { login: string; rating: number }) {
	return (
		<Card>
			<CardHeader>
				<CardTitle>Соперник: {login}</CardTitle>
			</CardHeader>
			<CardContent>Рейтинг: {rating}</CardContent>
		</Card>
	)
}