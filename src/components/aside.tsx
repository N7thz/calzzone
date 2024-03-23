import {
    Card, CardHeader, CardTitle, CardContent, CardFooter
} from '@/components/ui/card'
import { ScrollArea } from "@/components/ui/scroll-area"
import { array } from '@/data'
import { Button } from '@/components/ui/button'

export const Aside = () => {

    return (

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
                        (true)
                            ? array
                                .map((_, index) =>
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
                                    Você ainda não possui cards
                                </CardTitle>
                            )
                    }
                </CardContent>
                <CardFooter>
                    <Button>
                        Adicionar card
                    </Button>
                </CardFooter>
            </Card>
        </ScrollArea>
    )
}
