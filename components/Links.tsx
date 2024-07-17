'use client'

import Image from 'next/image'
import Link from 'next/link'

const Links = () => {
  return (
    <div className="max-lg:hidden w-full flex items-center justify-between  ">
      <Link
        href="/"
        className="flex items-center gap-2 max-sm-gap-1 "
      >
        <div className="bg-primary  p-2 rounded-lg shadow-sm">
          <Image
            src={'/icons/leafs.svg'}
            alt="Logo"
            width={30}
            height={30}
          />
        </div>
        <h1 className="font-semibold text-2xl  capitalize ">
          <span className="text-primary">Układarka</span> Nawyków
        </h1>
      </Link>

      <div className="flex items-center gap-8 mr-4 "></div>
    </div>
  )
}

export default Links
