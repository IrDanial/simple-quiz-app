// 'use client'

// import { Label } from '@/components/ui/label'
// import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
// import { Button } from './ui/button'
// import type { Multichoice } from '@/payload-types'
// import { useState } from 'react'
// import { saveUserAction } from '@/app/actions/SaveUserAction'

// // user id
// //

// interface MultipleChoiceOptionsProps {
//   answer: Multichoice['answer']
//   questionId: string
// }

// export default function MultipleChoiceOptions({ answer, questionId }: MultipleChoiceOptionsProps) {
//   const [chosenAnswerId, setChosenAnswerId] = useState('')
// // const {userId} = useUser()

//   const radioItems = answer.map((answer) => {
//     if (!answer.id) {
//       return null
//     }
//     return (
//       <div key={answer.id} className="flex items-center space-x-2">
//         <RadioGroupItem value={answer.id} id={answer.id} />
//         <Label htmlFor={answer.id}>{answer.jawaban}</Label>
//       </div>
//     )
//   })

//   // Metain dari 1 array ke array lain
//   // Petakan dari answer array ke array yang isinya JSX

//   const onSubmitClick = () => {
//     console.log('Submit')
//     console.log(chosenAnswerId)

//     const chosenAnswerData = answer.find((answer) => {
//       return answer.id === chosenAnswerId
//     })

//     console.log(chosenAnswerData)
//     if (chosenAnswerData) {
//       console.log(chosenAnswerData.isCorrect)
//       const { isCorrect } = chosenAnswerData

//       /*
//       Buat dokumen Answer baru di collection answer dengan menggunakan saveUserAction;

//       Jangan lupa ini server action asinkron jadi kamu harus await dan kirim argumen2nya

//       Tapi, ada 2 argumen yang ga tersedia di komponen ini, jadi kamu perlu cari tahu cara untuk
//       memperoleh argumen itu

//       Hasil akhirnya adalah setelah kamu klik tombol submit, itu akan membuat
//       dokumen Answer baru yang isinya sesuai dengan chosenAnswerData
//       */

//       saveUserAction(chosenAnswerData, '123', '123')
//     }
//   }

//   return (
//     <section className="flex flex-col gap-y-4">
//       <RadioGroup onValueChange={(val) => setChosenAnswerId(val)}>{radioItems}</RadioGroup>

//       {/* Tambah button dari shadnc */}
//       <Button onClick={onSubmitClick}>Submit</Button>
//     </section>
//   )
// }

'use client'

import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Button } from './ui/button'
import type { Multichoice } from '@/payload-types'
import { useState } from 'react'
import { saveUserAction } from '@/app/actions/SaveUserAction'
import { redirect, useRouter } from 'next/navigation'

interface MultipleChoiceOptionsProps {
  answer: Multichoice['answer']
  questionId: string
}

export default function MultipleChoiceOptions({ answer, questionId }: MultipleChoiceOptionsProps) {
  const [chosenAnswerId, setChosenAnswerId] = useState<string | null>(null)

  const radioItems = answer.map((ans) => {
    if (!ans.id) {
      return null
    }
    return (
      <div key={ans.id} className="flex items-center space-x-2">
        <RadioGroupItem value={ans.id} id={ans.id} />
        <Label htmlFor={ans.id}>{ans.jawaban}</Label>
      </div>
    )
  })

  const router = useRouter()

  const onSubmitClick = async () => {
    if (!chosenAnswerId) {
      console.error('Missing answer or user ID.')
      return
    }

    const chosenAnswerData = answer.find((ans) => ans.id === chosenAnswerId)

    if (chosenAnswerData) {
      console.log(`Question: ${questionId}`)
      console.log('Answer Data:', chosenAnswerData)

      await saveUserAction(chosenAnswerData, questionId)
      router.replace(`/quiz/${questionId}/result`)
    }
  }

  return (
    <section className="flex flex-col gap-y-4">
      <RadioGroup onValueChange={(val) => setChosenAnswerId(val)}>{radioItems}</RadioGroup>

      <Button onClick={onSubmitClick}>Submit</Button>
    </section>
  )
}
