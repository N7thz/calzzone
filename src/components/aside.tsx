import {
    Card, CardHeader, CardTitle, CardContent, CardFooter
} from '@/components/ui/card'
import { ScrollArea } from "@/components/ui/scroll-area"
import { array } from '@/data'

import { ButtonCreateCards } from './button-create-cards'

export const Aside = () => {

    return (

        <Card
            className='h-[500px] w-1/3 flex flex-col justify-between border-primary p-2 rounded-md'
        >
            <CardHeader>
                <CardTitle>
                    my cards
                </CardTitle>
            </CardHeader>
            <ScrollArea
                className='w-full h-[300px]'
            >
                <CardContent className='flex flex-col gap-3'>
                    {
                        (true)
                            ? array.map((_, index) =>
                                <Card
                                    key={index}
                                    className='h-16 w-full rounded-md flex justify-center items-center'
                                >
                                    {index}
                                </Card>
                            )
                            : (
                                <CardTitle
                                    className='italic text-muted-foreground'
                                >
                                    You dont have any cards yet
                                </CardTitle>
                            )
                    }
                </CardContent>
            </ScrollArea>
            <CardFooter className='flex justify-end'>
                <ButtonCreateCards />
            </CardFooter>
        </Card>
    )
}
