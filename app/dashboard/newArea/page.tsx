'use client'
import { newAreaStore } from '@/store/habitStore'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'
import { Label } from '@/components/ui/label'



const AddHabitForm = () => {
  const { addArea, areas } = newAreaStore()
  const router = useRouter()
  return (
    <div className="flex flex-col justify-center items-center h-screen gap-4 p-4">
      <h1 className="text-2xl font-bold">Dodaj nowy obszar</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault()
          const formData = new FormData(e.target as HTMLFormElement)
          const id = Date.now()
          const name = formData.get('name') as string
          
          addArea({ id, name })
          router.push('/dashboard/areas')
        }}
        className="max-w-3xl w-full flex flex-col gap-4"
      >
        <Label htmlFor="name">Nazwa obszaru</Label>
        <Input
          type="text"
          name="name"
          placeholder="Wpisz nazwę obszaru"
        />
        
        <Button type="submit">Dodaj  Obszar</Button>
      </form>
    </div>
  )
}

export default AddHabitForm
