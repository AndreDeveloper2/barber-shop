import { Button } from '@/components/ui/button'
import { Header } from '@/components/header'
import { Input } from '@/components/ui/input'
import { SearchIcon } from 'lucide-react'
import { Label } from '@/components/ui/label'
import Image from 'next/image'
import { db } from '@/lib/prisma'
import { BarberShopItem } from '@/components/barbershop-item'
import type React from 'react'
import { quickSearchOptions } from './_constants/search'
import { Icon } from '@/components/icons'
import { BookingItem } from '@/components/booking-item'

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

        <div className="mt-6 flex gap-3 overflow-x-scroll [&::-webkit-scrollbar]:hidden">
          {quickSearchOptions.map((option) => {
            return (
              <Button
                aria-label={option.aria}
                variant="secondary"
                key={option.title}
              >
                <Icon name={option.IconsName} width={16} height={16} />
                {option.title}
              </Button>
            )
          })}
        </div>

        <div className="relative mt-6 h-[150px] w-full">
          <Image
            src="/banner-01.png"
            fill
            className="rounded-xl object-cover"
            alt="Agende nos melhores com fsw barber"
          />
        </div>

        <BookingItem />

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
    </div>
  )
}
