import Link from 'next/link'
import Image from 'next/image'
import Navbar from '@/components/Navbar'

export default function Home() {
  return (
    <main className="flex  flex-col items-center justify-start px-16  ">
      <Navbar />
      <div className='min-h-[calc(100vh-64px)] flex flex-col items-center justify-center max-w-3xl text-center gap-4 '>
        <h1 className="text-3xl font-bold ">
          Buduj nawyki, które mają{' '}
          <span className="text-primary ">znaczenie!</span>{' '}
        </h1>
        <p className="text-xl text-center">
          Masz łatwe w obsłudze narzędzie do śledzenia nawyków, pomoże Ci
          przejąć kontrolę nad swoim dniem i osiągnąć swoje cele.
        </p>
        <Link href="/dashboard" className="px-4 py-2 bg-primary hover:bg-[#f52649] text-primary-foreground rounded-sm ">Zaczynaj!</Link>
      </div>
    </main>
  )
}
