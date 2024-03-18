import { Main } from '@/components/main'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Calzzone | Login'
}

export default function Home() {

  return (

    <div className='min-h-screen'>
      <Main />
    </div>
  )
}
