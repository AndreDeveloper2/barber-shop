import type { IconName } from '@/components/icons'

interface QuickSearchOptionProps {
  IconsName: IconName
  title: string
  aria: string
}

export const quickSearchOptions: QuickSearchOptionProps[] = [
  {
    IconsName: 'scissors',
    title: 'Cabelo',
    aria: 'Busca rapida por corte de cabelo',
  },
  {
    IconsName: 'moustache',
    title: 'Barba',
    aria: 'Busca rapida por corte de barba',
  },
  {
    IconsName: 'blade',
    title: 'Acabamento',
    aria: 'Busca rapida por acabamentos',
  },
  {
    IconsName: 'eyebrow',
    title: 'Sobrancelha',
    aria: 'Busca rapida por acabamento na sobrancelha',
  },
  {
    IconsName: 'massage',
    title: 'Massagem',
    aria: 'Busca rapida por massagens',
  },
  {
    IconsName: 'hydration',
    title: 'Hidratação',
    aria: 'Busca rapida por corte de hidratações',
  },
]
