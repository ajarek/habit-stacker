
import { auth } from '@/app/api/auth/auth'
import Sidebar from '@/components/Sidebar'

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await auth()

  return (
    <div className=" flex flex-row lg:pl-64 max-lg:pl-8 ">
      <Sidebar session={session} />
      <div className="w-full p-10 max-sm:p-2">{children}</div>
    </div>
  )
}
