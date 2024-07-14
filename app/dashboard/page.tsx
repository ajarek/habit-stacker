import { auth } from '@/app/api/auth/auth'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { redirect } from 'next/navigation'
import {
  Globe,
  Handshake,
  Plus,
  CircleArrowLeft,
  CircleArrowRight,
} from 'lucide-react'
import DateInput from '@/components/DateInput'
import Link from 'next/link'
import ListHabits from '@/components/ListHabits'

const Dashboard = async () => {
  const session = await auth()
  if (!session) {
    redirect('/register')
  }
  return (

    <div className="w-full grid grid-cols-[2fr_1fr]">
      <div className="">
        <div className="flex justify-between items-center border-[12px] border-gray-500 py-2   px-4">
          <div className="">
            <h2 className="text-xl  capitalize ">Cześć {session.user?.name}</h2>
            <p>Witamy ponownie</p>
          </div>
          <div>
            <Input
              type="search"
              placeholder="🔎Szukaj..."
              className="text-xl"
            />
          </div>
        </div>
        <div className="flex justify-start items-center border-[12px] border-gray-500 py-2   px-4">
          <div className="flex gap-2">
            <Button className="flex gap-2">
              <Globe />
              Wszystko
            </Button>
            <Button
              variant={'outline'}
              className="flex gap-2"
            >
              <Handshake />
              Zdrowie
            </Button>
          </div>
        </div>

        <div className="flex flex-col justify-start items-center border-[12px] border-gray-500 py-2   px-4 gap-4">
          <div className="w-full flex items-center justify-end">
           
            <div className="flex gap-2">
              <Link href='dashboard/newHabit' className="flex gap-2 bg-primary px-4 py-2  hover:bg-[#f52649] rounded-lg">
                <Plus />
                Nowy nawyk
              </Link>
            </div>
          </div>
          <ListHabits checked={false} />
          
        </div>
        <div className=" w-full flex  flex-col items-start justify-between  gap-4 border-[12px] border-gray-500 py-2   px-4">
          <h2 className="text-xl   ">Zrealizowane nawyki </h2>
          <ListHabits checked={true} />
        
          <div className="w-full text-gray-400">
            <p className="text-center ">Nakładanie nawyków jest jak supermoc</p>
            <p className="text-center">Nie pozwól by się zmarnowała</p>
          </div>
        </div>
      </div>
      <div className='flex justify-center items-center border-[12px] border-gray-500 py-2 border-l-[0px]  px-4'>
        <DateInput/>
      </div>
    </div>
  )
}

export default Dashboard
