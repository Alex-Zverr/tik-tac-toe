import { Button } from '@/shared/ui/button'

export function CreateButton({ actions }: { actions: () => Promise<void> }) {
	return <Button>Создать игру</Button>
}
