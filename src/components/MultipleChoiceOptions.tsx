'use client'

import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Button } from './ui/button'
import type { Multichoice } from '@/payload-types'
import { useState } from 'react'

export default function MultipleChoiceOptions({ answer }: { answer: Multichoice['answer'] }) {
  const [chosenAnswerId, setChosenAnswerId] = useState('')

  const radioItems = answer.map((answer) => {
    if (!answer.id) {
      return null
    }
    return (
      <div key={answer.id} className="flex items-center space-x-2">
        <RadioGroupItem value={answer.id} id={answer.id} />
        <Label htmlFor={answer.id}>{answer.jawaban}</Label>
      </div>
    )
  }) // => [answer, answer, answer]

  // Metain dari 1 array ke array lain
  // Petakan dari answer array ke array yang isinya JSX

  const onSubmitClick = () => {
    console.log('Submit')
    console.log(chosenAnswerId)

    const chosenAnswerData = answer.find((answer) => {
      return answer.id === chosenAnswerId
    })

    console.log(chosenAnswerData)
    if (chosenAnswerData) {
      console.log(chosenAnswerData.isCorrect)
      const { isCorrect } = chosenAnswerData

      /* 
      Buat dokumen Answer baru di collection answer dengan menggunakan saveUserAction;

      Jangan lupa ini server action asinkron jadi kamu harus await dan kirim argumen2nya

      Tapi, ada 2 argumen yang ga tersedia di komponen ini, jadi kamu perlu cari tahu cara untuk
      memperoleh argumen itu

      Hasil akhirnya adalah setelah kamu klik tombol submit, itu akan membuat
      dokumen Answer baru yang isinya sesuai dengan chosenAnswerData
      */
    }
  }

  return (
    <section className="flex flex-col gap-y-4">
      <RadioGroup onValueChange={(val) => setChosenAnswerId(val)}>{radioItems}</RadioGroup>

      {/* Tambah button dari shadnc */}
      <Button onClick={onSubmitClick}>Submit</Button>
    </section>
  )
}
