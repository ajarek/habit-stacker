'use client'
import { newHabitStore } from '@/store/habitStore'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'
import { Label } from '@/components/ui/label'
import { formatDate } from '@/utils/dataFormat'
import { newAreaStore } from '@/store/habitStore'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

const AddHabitForm = () => {
  const { addHabit } = newHabitStore()
  const { addArea, areas } = newAreaStore()
  const router = useRouter()
  return (
    <div className="flex flex-col justify-center items-center h-screen gap-4">
      <h1 className="text-2xl font-bold">Dodaj nowy nawyk</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault()
          const formData = new FormData(e.target as HTMLFormElement)
          const id = Date.now()
          const name = formData.get('name') as string
          const area = formData.get('area') as string
          const repeat = formData.get('repeat') as string
          const originalDate = formData.get('date') as unknown as Date
          const date = formatDate(originalDate) as unknown as Date
          const completed = false
          addHabit({ id, name, area, repeat, date, completed })
          router.push('/dashboard')
        }}
        className="max-w-3xl w-full flex flex-col gap-4"
      >
        <Label htmlFor="name">Nazwa nawyku</Label>
        <Input
          type="text"
          name="name"
          placeholder="Wpisz nazwę nawyku"
        />
        <Label htmlFor="area">Obszary</Label>
        <Select name="area">
          <SelectTrigger className="text-gray-500">
            <SelectValue placeholder="Wybierz swój obszar" />
          </SelectTrigger>
          <SelectContent>
            {areas.length > 0 ? (
              areas.map((area) => (
                <SelectItem
                  key={area.id}
                  value={area.name}
                >
                  {area.name}
                </SelectItem>
              ))
            ) : (
              <SelectItem value="none">Brak danych. Dodaj obszary.</SelectItem>
            )}
          </SelectContent>
        </Select>
        <Label htmlFor="repeat">Powtarzać</Label>
        <Select name="repeat">
          <SelectTrigger className="text-gray-500">
            <SelectValue placeholder="Co ile powtarzać?" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="one">Tylko raz</SelectItem>
            <SelectItem value="every">Codziennie</SelectItem>
            <SelectItem value="week">Co tydzień</SelectItem>
          </SelectContent>
        </Select>
        <Label htmlFor="date">Data</Label>
        <Input
          type="date"
          name="date"
          defaultValue={new Date().toLocaleDateString()}
        />
        <Button type="submit">Dodaj Nowy Nawyk</Button>
      </form>
    </div>
  )
}

export default AddHabitForm
