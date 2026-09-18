import type { ReactNode } from "react"

interface Props {
    children?: ReactNode
}

export default function Main({ children }: Props) {
    return (
        <div className="flex flex-col flex-1 items-center justify-center font-sans bg-brand-800 ">
            <main className="flex flex-1 w-full max-w-6xl flex-col items-center justify-between p-4 sm:items-start">
                {children}
            </main>
        </div>
    )
}

