import { auth } from '@/app/api/auth/auth'
import { redirect } from 'next/navigation'

const Dashboard = async () => {
  const session = await auth()
  if(!session){
    redirect('/register')
  }
  return (
    <div className=''>Dashboard</div>
  )
}

export default Dashboard