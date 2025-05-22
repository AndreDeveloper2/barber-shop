import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { MenuIcon } from 'lucide-react'
import { ModeToggle } from './theme/theme-toggle'
import { Logo } from './logo'

export function Header() {
  return (
    <Card className="rounded-none">
      <CardContent className="flex flex-row items-center justify-between p-5">
        <Logo height={18} width={120} />
        <div className="flex gap-4">
          <ModeToggle />
          <Button size="icon" variant="outline">
            <MenuIcon />
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
