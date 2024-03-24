import {
    Card, CardHeader, CardTitle, CardContent, CardDescription, CardFooter
} from '@/components/ui/card'
import { AvatarUser } from './avatar-user'

export const CardNoStyle = () => {

    return (

        <Card className='h-[240px] w-[340px] overflow-hidden'>
            <CardHeader className='h-1/3 border-b border-muted relative'>
                <AvatarUser
                    className='absolute -bottom-[20%] scale-150'
                />
            </CardHeader>
            <CardContent className='h-2/3 flex flex-col justify-center'>
                <CardTitle className=''>
                    name
                </CardTitle>
                <CardDescription>
                    description
                </CardDescription>
            </CardContent>
        </Card>
    )
}
