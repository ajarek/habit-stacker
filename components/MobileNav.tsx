'use client'

import { Menu } from 'lucide-react'
import Link from 'next/link'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
  SheetHeader,
} from '@/components/ui/sheet'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import {BookOpenText} from 'lucide-react'
const MobileNav = () => {
  const pathname = usePathname()
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Menu size={36} />
      </SheetTrigger>
      <SheetContent
        side="left"
        className="border-none bg-card text-card-foreground  shadow-none lg:hidden"
      >
        <SheetHeader>
          <Link
            href="/"
            className="flex items-center gap-2 max-sm-gap-1"
          >
          <div className="bg-primary  p-2 rounded-lg shadow-sm">

<Image src={"/icons/leafs.svg"} alt="Logo" width={20} height={20}/>
</div>
<h1 className='font-semibold text-xl  capitalize '>
        <span className='text-primary'>Układarka</span>  Nawyków
        </h1>
          </Link>
        </SheetHeader>
        <div className="flex flex-col gap-4 mt-4">
   
        </div>
      </SheetContent>
    </Sheet>
  )
}

export default MobileNav
