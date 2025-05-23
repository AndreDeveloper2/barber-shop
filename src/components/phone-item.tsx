'use client'

import { SmartphoneIcon } from 'lucide-react'
import { Button } from './ui/button'
import { useToast } from '@/hooks/use-toast'

interface PhoneItemProps {
  phone: string
}

export function PhoneItem({ phone }: PhoneItemProps) {
  const { toast } = useToast()

  function handleCopyPhoneClick(phone: string) {
    navigator.clipboard.writeText(phone)

    toast({
      title: 'Número Copiado',
      description: `${phone} Foi copiado para área de transferência`,
      duration: 2000,
    })
  }
  return (
    <div className="flex justify-between" key={phone}>
      <div className="flex items-center gap-2">
        <SmartphoneIcon />
        <p className="text-sm">{phone}</p>
      </div>
      <Button
        onClick={() => handleCopyPhoneClick(phone)}
        variant="outline"
        size="sm"
      >
        Copiar
      </Button>
    </div>
  )
}
