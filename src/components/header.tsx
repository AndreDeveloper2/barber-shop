import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { MenuIcon } from 'lucide-react'
import { ModeToggle } from './theme/theme-toggle'
import { Icon } from './icons'
import { Sheet, SheetTrigger } from './ui/sheet'

import { SidebarSheet } from './sidebar-sheet'

export function Header() {
  return (
    <Card className="rounded-none">
      <CardContent className="flex flex-row items-center justify-between p-5">
        <Icon name="logo" height={18} width={120} />
        <div className="flex gap-4">
          <ModeToggle />

          <Sheet>
            <SheetTrigger asChild>
              <Button size="icon" variant="outline">
                <MenuIcon />
              </Button>
            </SheetTrigger>
            <SidebarSheet />
          </Sheet>
        </div>
      </CardContent>
    </Card>
  )
}
