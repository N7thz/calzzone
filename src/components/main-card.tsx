'use client'

import { useState } from 'react'
import { RotateCcwSquare } from 'lucide-react'
import { Card, CardHeader, CardTitle } from './ui/card'
import { Button } from './ui/button'
import { Animation } from './animation'

export const MainCard = () => {

    const [isActive, setIsActive] = useState(true)

    return (

        <Card
            className='w-2/3 border border-primary p-2 rounded-md flex flex-col items-center gap-20 relative'
        >
            <CardHeader>
                <CardTitle>
                    card selecionado
                </CardTitle>
            </CardHeader>
            <Animation
                animate={{ rotate: isActive ? 90 : 0 }}
            >
                <Card className='min-h-[240px] min-w-[340px]'/>
            </Animation>
            <Button
                size={'icon'}
                onClick={() => setIsActive(!isActive)}
                className='absolute bottom-3 right-3'
            >
                <RotateCcwSquare />
            </Button>
        </Card>
    )
}
