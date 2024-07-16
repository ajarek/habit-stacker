'use client'

import Link from 'next/link'
import Logout from '@/components/Logout'
import Image from 'next/image'
import { Menu, X, List, BarChart, Layers3 } from 'lucide-react'
import { useState } from 'react'
import { usePathname } from 'next/navigation'

const Sidebar = ({ session }: any) => {
  const [mobile, setMobile] = useState(false)
  const pathname = usePathname()
  return (
    <>
      {mobile ? (
        <X
          size={36}
          className="text-primary fixed top-0 left-0 z-40 lg:hidden"
          onClick={() => setMobile(!mobile)}
        />
      ) : (
        <Menu
          size={36}
          className="text-primary fixed top-0 left-0 z-40 lg:hidden"
          onClick={() => setMobile(!mobile)}
        />
      )}
      <div
        className={`fixed top-0 left-0 z-1 w-64  min-h-screen  px-5 py-10 duration-500 z-30  ${
          mobile ? 'translate-x-0 ' : '-translate-x-64 '
        } lg:translate-x-0 bg-background border-r border-gray-300 `}
      >
        <Link
          href="/"
          className="flex items-center gap-2 max-sm-gap-1"
        >
          <div className="bg-primary  p-2 rounded-lg shadow-sm">
            <Image
              src={'/icons/leafs.svg'}
              alt="Logo"
              width={20}
              height={20}
            />
          </div>
          <h1 className="font-semibold text-xl  capitalize ">
            <span className="text-primary">Układarka</span> Nawyków
          </h1>
        </Link>
        <div className="flex flex-col gap-8 mt-10  ">
          <Link
            href="/dashboard"
            className={`flex gap-2 border-b border-gray-300 hover:text-primary ${
              pathname === '/dashboard' ? 'active ' : ''} `}
          >
           <List className='text-primary'/> Wszystkie Nawyki
          </Link>
          <Link
            href="/dashboard/statistics"
            className={`flex gap-2 border-b border-gray-300 hover:text-primary ${
              pathname === '/dashboard/statistics' ? 'active ' : ''}`}
          >
            <BarChart className='text-primary'/>Statystyka
          </Link>
          <Link
            href="/dashboard/areas"
            className={`flex gap-2 border-b border-gray-300 hover:text-primary ${
              pathname === '/dashboard/areas' ? 'active ' : ''}`}
          >
            <Layers3 className='text-primary'/>Obszary
          </Link>

          <Logout session={session} />
        </div>
      </div>
    </>
  )
}

export default Sidebar
