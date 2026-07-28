import type {ReactNode} from "react";
import Header from "../components/Header.tsx";

interface LayoutProps {
    children: ReactNode
}

export default function Layout({children} : LayoutProps) {
    return (
        <div className={"min-h-screen text-neutral-100 font-text bg-[linear-gradient(to_right,#083344,#030712,#030712,#030712,#030712,#083344)]"}>
            <Header />
            {children}
        </div>
    )
}