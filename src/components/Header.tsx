import NavItem, {type NavItemsProps} from "./header/NavItem.tsx";
import Logo from "./Logo.tsx";
import {BackgroundMusic} from "@/components/BackgroundMusic.tsx";
import {useState} from "react";
import {Link} from "react-router";

const navbarItems: NavItemsProps[] = [
    {text: "Sobre", link: "/#sobre", selected: false},
    {text: "Skills", link: "/#skills", selected: false},
    {text: "Projetos", link: "/projects", selected: false},
    {text: "Jornada", link: "/#jornada", selected: false},
    {text: "Contato", link: "/#contato", selected: false},
]
export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed z-20 w-full bg-gray-950/75 shadow-sm backdrop-blur-2xl">
            <div className="relative mx-auto flex min-h-18 max-w-7xl items-center justify-between px-5 py-4 sm:px-8 lg:px-12">
            <Link to={"/"}>
                <Logo />
            </Link>
            <button type="button" aria-label="Abrir menu" aria-expanded={isOpen} onClick={() => setIsOpen(!isOpen)}
                    className="rounded-md p-2 text-2xl text-white transition hover:bg-cyan-950/60 hover:text-cyan-300 md:hidden">
                <i className={`bi ${isOpen ? "bi-x-lg" : "bi-list"}`}/>
            </button>
            <ul className={`${isOpen ? "flex" : "hidden"} absolute left-0 top-full w-full flex-col gap-1 border-t border-cyan-950 bg-gray-950/95 px-5 py-4 shadow-lg backdrop-blur-xl md:static md:flex md:w-auto md:flex-row md:gap-7 md:border-0 md:bg-transparent md:p-0 md:shadow-none`}>
                {navbarItems.map((item) => (
                    <NavItem key={item.text} text={item.text} selected={item.selected} link={item.link} onNavigate={() => setIsOpen(false)}/>
                ))}
            </ul>
            <div className="hidden gap-2 md:flex">
                <BackgroundMusic />
            </div>
            </div>
        </nav>
    )
}
