import { Metadata } from 'next'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { ScrollArea } from "@/components/ui/scroll-area"

export const metadata: Metadata = {
    title: 'Calzzone | Home'
}

export default function Page() {

    return (

        <div
            className='min-h-screen flex justify-center items-center'
        >
            <Card className='w-10/12 max-h-[600px] border-primary'>
                <CardHeader>
                    <CardTitle>
                        Olá nome
                    </CardTitle>
                </CardHeader>
                <CardContent className='flex gap-6'>
                    <ScrollArea
                        className='w-1/3 h-[500px] border border-primary p-2 rounded-md'
                    >
                        <Card className='border-none'>
                            <CardHeader>
                                <CardTitle>
                                    meus cards
                                </CardTitle>
                            </CardHeader>
                            <CardContent className='flex flex-col gap-3'>
                                {
                                    Array
                                        .from({ length: 12 })
                                        .map((item, index) =>
                                            <Card
                                                key={index}
                                                className='h-16 w-full rounded-md'
                                            />
                                        )
                                }
                            </CardContent>
                        </Card>
                    </ScrollArea>
                    <Card
                        className='w-2/3 border border-primary p-2 rounded-md flex flex-col items-center gap-16'
                    >
                        <CardHeader>
                            <CardTitle>
                                card selecionado
                            </CardTitle>
                        </CardHeader>
                        <Card className='min-h-[280px] w-2/3' />
                    </Card>
                </CardContent>
            </Card>
        </div>
    )
}