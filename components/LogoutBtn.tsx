'use client'
import {LogOut} from 'lucide-react'
import { Button } from './ui/button'
import { useRouter } from 'next/navigation'
const LogoutBtn = () => {
  
  const router = useRouter()
  const handleLogout = () => {
    router.push('/api/auth/signout')
    
  }
  return (
    <Button
      
      size={'sm'}
      onClick={handleLogout}
      className='flex gap-2 italic bg-primary'
    >
     <LogOut /> Logout
    </Button>
  )
}

export default LogoutBtn
