'use client'
import Link from 'next/link'
import { newAreaStore } from '@/store/habitStore'
import { Plus, Trash2 } from 'lucide-react'
import { Button } from '@/components/ui/button'

const Areas = () => {
  const { removeArea, areas } = newAreaStore()
  return (
    <div>
      <div className="flex justify-between items-center border-[12px] border-gray-500 py-2   px-4">
        <h1 className="text-xl ">Obszary</h1>
        <Link
          href="/dashboard/newArea"
          className="flex gap-2 bg-primary px-4 py-2  hover:bg-[#f52649] rounded-lg"
        >
          <Plus />
          Dodaj obszar
        </Link>
      </div>
      <div className="flex flex-col justify-between items-center border-[12px] border-gray-500 py-2   px-4 gap-4">
        {areas.length>0?
        areas.map((area) => (
           <div key={area.id} className="w-full  flex justify-between items-center border-[12px] border-gray-500 py-2   px-4">
            <h1> {area.name}</h1>
            <Button
                    size="icon"
                    onClick={() => removeArea(area.id)}
                    className="w-8 h-8 p-0 bg-transparent hover:bg-primary "
                  >
                    <Trash2 />
                  </Button>
            </div>
        )):(
          <p className="text-xl">Brak obszarów</p>
        )
      }
      </div>
    </div>
  )
}

export default Areas
