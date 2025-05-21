import { Button } from '@/components/ui/button';
import { Header } from '@/components/header';
import { Input } from '@/components/ui/input';
import { SearchIcon } from 'lucide-react';
import { Label } from '@/components/ui/label';
import Image from 'next/image';


export default function Home() {
  return (
    <div>
      <Header />
      <div className='p-5'>
        <h2 className='text-xl font-bold'>Olá André</h2>
        <p>Sexta, 02 de fevereiro</p>

        <div className='flex items-center gap-2 mt-6'>
          <Label htmlFor='search-input' className='sr-only'>
            Buscar
          </Label>
          <Input id='search-input' placeholder='Faça sua busca...' />
          <Button>
            <SearchIcon />
          </Button>
        </div>

        <div className='relative w-full h-[150px] mt-6'>
          <Image src="/banner-01.png" fill className='object-cover rounded-xl' alt='Agende nos melhores com fsw barber' />
        </div>
      </div>
    </div>
  );
}