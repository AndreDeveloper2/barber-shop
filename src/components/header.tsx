import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Calendar1Icon, HomeIcon, LogOutIcon, MenuIcon } from 'lucide-react'
import { ModeToggle } from './theme/theme-toggle'
import { Icon } from './icons'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from './ui/sheet'
import { quickSearchOptions } from '@/app/_constants/search'
import { Avatar, AvatarImage } from './ui/avatar'
import Link from 'next/link'

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
            <SheetContent className="overflow-y-auto">
              <SheetHeader>
                <SheetTitle className="text-left">Menu</SheetTitle>
              </SheetHeader>

              <div className="flex items-center gap-3 border-b border-solid py-5">
                <Avatar>
                  <AvatarImage src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                </Avatar>

                <div>
                  <p className="font-bold">Felipe Rocha</p>
                  <p className="text-xs">felipe@teste.com.br</p>
                </div>
              </div>

              <div className="flex flex-col gap-2 border-b border-solid py-5">
                <SheetClose asChild>
                  <Button className="justify-start gap-2" asChild>
                    <Link href="/">
                      <HomeIcon size={18} />
                      Inicio
                    </Link>
                  </Button>
                </SheetClose>
                <Button className="justify-start gap-2" variant="ghost">
                  <Calendar1Icon size={18} />
                  Agendamentos
                </Button>
              </div>

              <div className="flex flex-col gap-2 border-b border-solid py-5">
                {quickSearchOptions.map((option) => (
                  <Button
                    key={option.title}
                    className="justify-start gap-2"
                    variant="ghost"
                  >
                    <Icon name={option.IconsName} height={18} width={18} />
                    {option.title}
                  </Button>
                ))}
              </div>

              <div className="flex flex-col gap-2 py-5">
                <Button className="justify-start gap-2" variant="ghost">
                  <LogOutIcon size={18} />
                  Sair da conta
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </CardContent>
    </Card>
  )
}
