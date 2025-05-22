import { Button } from '@/components/ui/button'
import { Header } from '@/components/header'
import { Input } from '@/components/ui/input'
import { SearchIcon } from 'lucide-react'
import { Label } from '@/components/ui/label'
import Image from 'next/image'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Avatar } from '@/components/ui/avatar'
import { AvatarImage } from '@radix-ui/react-avatar'
import { db } from '@/lib/prisma'
import { BarberShopItem } from '@/components/barbershop-item'
import { Icon } from '@/components/icons'

export default async function Home() {
  const barbershops = await db.barbershop.findMany({})
  const popularBarberShops = await db.barbershop.findMany({
    orderBy: {
      name: 'desc',
    },
  })

  return (
    <div>
      <Header />
      <div className="p-5">
        <h2 className="text-xl font-bold">Olá André</h2>
        <p>Sexta, 02 de fevereiro</p>

        <div className="mt-6 flex items-center gap-2">
          <Label htmlFor="search-input" className="sr-only">
            Buscar
          </Label>
          <Input id="search-input" placeholder="Faça sua busca..." />
          <Button>
            <SearchIcon />
          </Button>
        </div>

        <div className="mt-6 flex gap-3">
          <Button
            aria-label="Busca rapida por corte de cabelo"
            variant="secondary"
          >
            <Icon name="scissors" width={16} height={16} />
            Cabelo
          </Button>

          <Button
            aria-label="Busca rapida por corte de barba"
            variant="secondary"
          >
            <Icon name="moustache" width={16} height={16} />
            Barba
          </Button>

          <Button aria-label="Busca rapida por acabamento" variant="secondary">
            <Icon name="blade" width={16} height={16} />
            Acabamento
          </Button>
        </div>

        <div className="relative mt-6 h-[150px] w-full">
          <Image
            src="/banner-01.png"
            fill
            className="rounded-xl object-cover"
            alt="Agende nos melhores com fsw barber"
          />
        </div>

        <h2 className="mb-3 mt-6 text-xs font-bold uppercase text-gray-700 dark:text-gray-400">
          Agendamentos
        </h2>

        <Card>
          <CardContent className="flex justify-between p-0">
            <div className="flex flex-col gap-2 py-5 pl-5">
              <Badge className="w-fit">Confirmado</Badge>
              <h3 className="font-semibold">Corte de cabelo</h3>
              <div className="flex items-center gap-2">
                <Avatar className="h-6 w-6">
                  <AvatarImage src="https://utfs.io/f/c97a2dc9-cf62-468b-a851-bfd2bdde775f-16p.png" />
                </Avatar>
                <p className="text-sm">Barbearia FSW</p>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center border-l-2 border-solid px-5">
              <p className="text-sm">Agosto</p>
              <p className="text-2xl">05</p>
              <p className="text-sm">20:00</p>
            </div>
          </CardContent>
        </Card>

        <h2 className="mb-3 mt-6 text-xs font-bold uppercase text-gray-700 dark:text-gray-400">
          Recomendados
        </h2>

        <div className="flex gap-4 overflow-auto [&::-webkit-scrollbar]:hidden">
          {barbershops.map((barbershop) => (
            <BarberShopItem key={barbershop.id} barbershop={barbershop} />
          ))}
        </div>

        <h2 className="mb-3 mt-6 text-xs font-bold uppercase text-gray-700 dark:text-gray-400">
          Populares
        </h2>

        <div className="flex gap-4 overflow-auto [&::-webkit-scrollbar]:hidden">
          {popularBarberShops.map((barbershop) => (
            <BarberShopItem key={barbershop.id} barbershop={barbershop} />
          ))}
        </div>
      </div>

      <footer className="mt-8">
        <Card className="rounded-none">
          <CardContent className="px-5 py-6">
            <p className="text-sm text-gray-400">
              &copy; {new Date().getFullYear()} Copyright{' '}
              <strong>FSW Barber</strong>
            </p>
          </CardContent>
        </Card>
      </footer>
    </div>
  )
}
