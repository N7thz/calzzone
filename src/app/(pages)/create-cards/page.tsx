import { Metadata } from 'next'
import {
    Card, CardHeader, CardTitle, CardContent, CardDescription, CardFooter
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { MenuRight } from '@/components/menu-right'
import { CardNoStyle } from '@/components/card-no-style'

export const metadata: Metadata = {
    title: 'Calzzone | Create Cards'
}

export default function Page() {

    return (

        <Card className='min-h-screen pt-20'>
            <CardHeader>
                <CardTitle>
                    Create your cards
                </CardTitle>
                <CardDescription>
                    Customize your cards to make them your own
                </CardDescription>
            </CardHeader>
            <CardContent
                className='h-full border border-primary p-4 m-6 rounded-md flex justify-center gap-3 relative'
            >
                <MenuRight className='absolute top-3 left-3' />
                <div className='flex flex-col gap-5'>
                    <h1 className='text-2xl text-center capitalize'>
                        preview
                    </h1>
                    <CardNoStyle />
                </div>
            </CardContent>
        </Card>
    )
}