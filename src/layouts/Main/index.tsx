import { ReactNode } from "react";

const Main = ({ children }: { children: ReactNode }) => {
    return (
        <main className="flex-1 flex">
            {children}
        </main>
    )
}
export default Main;