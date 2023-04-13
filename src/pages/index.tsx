import Image from 'next/image'
import Form from '../components/Form'
import { Inter } from 'next/font/google'
import questions from "../utils/faq.json"

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="bg-black opacity-25 z-1">
      <Image
        src="/background.png"
        alt="background image"
        fill
      />
      </div>
      <div className="w-full text-center pt-24 pb-48 z-0">
        <div className="animate-text bg-gradient-to-r from-green-200 via-blue-400 to-indigo-400 bg-clip-text text-transparent text-7xl pb-6 font-black">️TreeHacks Reunion 2023</div>
        <div className="text-gray-300 font-medium text-3xl pb-12">Reunion II: Embracing a new tradition</div>
        <div className="text-white font-light text-lg pb-2">Wednesday May 17th, 7-11pm</div>
        <div className="text-white font-light text-lg pb-2">🛥 on the  🌉 🌊</div>
      </div>
      <div className="pb-10 w-3/4 z-0">
        <div className="text-center text-3xl font-bold pb-8">Accept Invitation</div>
        <Form/>
      </div>
      <div className="py-12 w-2/3">
        <div className="text-center text-3xl font-bold py-8">FAQs</div>
        <div>{questions.map((question) => ( 
          <div key={question.id}>
          <div className="font-bold">{question.question}</div>
          <div className="pb-4">{question.answer}</div>
          </div>
        ))}</div>
      </div>
    </main>
  )
}
