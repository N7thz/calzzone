import { Register } from '@/components/register'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Calzzone | Register'
}

export default function Page() {

    return (

        <div className='w-full h-full flex justify-center items-center pt-56'>
            <Register />
        </div>
    )
}