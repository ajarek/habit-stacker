import Logout from './Logout'
import Links from '@/components/Links'
import { ModeToggle } from '@/components/ModeToggle'
import { auth } from '@/app/api/auth/auth'

const Navbar = async () => {
  const session = await auth()

  return (
    <div className="h-16 w-full  flex justify-between items-center gap-4  px-8 max-sm:px-2">
      <div className="w-full flex items-center gap-2 ">
        <Links />
      </div>
      <div className=" flex justify-between items-center italic gap-6  ">
        <Logout session={session} />
        <ModeToggle />
        <div className="w-full max-w-[264px] lg:hidden"></div>
      </div>
    </div>
  )
}

export default Navbar
