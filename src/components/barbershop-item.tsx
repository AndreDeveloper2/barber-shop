import type { Barbershop } from '@/generated/prisma'
import { Card, CardContent } from './ui/card'
import Image from 'next/image'
import { Button } from './ui/button'
import { Badge } from './ui/badge'
import { StarIcon } from 'lucide-react'

interface BarberShopItemProps {
  barbershop: Barbershop
}

export function BarberShopItem({ barbershop }: BarberShopItemProps) {
  return (
    <Card className="mt-2 min-w-[180px] rounded-2xl">
      <CardContent className="p-0">
        <div className="relative h-[159px] w-full">
          <Image
            fill
            className="rounded-t-md object-cover"
            src={barbershop.imageUrl}
            alt={barbershop.name}
          />

          <Badge
            className="absolute left-2 top-2 space-x-1"
            variant="secondary"
          >
            <StarIcon size={12} className="fill-primary text-primary" />
            <p className="text-xs font-semibold">5,0</p>
          </Badge>
        </div>
        <div className="px-2 py-3">
          <h3 className="truncate font-semibold">{barbershop.name}</h3>
          <p className="truncate text-sm text-gray-400">{barbershop.address}</p>
          <Button className="mt-3 w-full" variant="secondary">
            Reservar
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
