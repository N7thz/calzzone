import { StyleProps } from "@/@types"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { Menu } from "lucide-react"

export const MenuRight = ({ className }: StyleProps) => {

    return (

        <Sheet>
            <SheetTrigger asChild>
                <Menu className={className} />
            </SheetTrigger>
            <SheetContent side="left">
                <div>
                    <h1>
                        Options
                    </h1>
                    <div>
                        <section className="flex gap-2 items-center">
                            <h2>background color:</h2>
                            <Input
                                type="color"
                                className="w-12 h-9 rounded-lg"
                            />
                        </section>
                    </div>
                </div>
            </SheetContent>
        </Sheet>
    )
}
