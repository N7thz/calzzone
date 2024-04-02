import { ModeToggle } from "./mode-toggle"


export const Header = () => {

    return (

        <header
            className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 pb-1 fixed top-0 left-0 right-0"
        >
            <div className="w-full bg-zinc-50 dark:bg-zinc-950 p-2">
                <ModeToggle />
            </div>
        </header>
    )
}
