import NavItem, {type NavItemsProps} from "./header/NavItem.tsx";
import Logo from "./Logo.tsx";

const navbarItems: NavItemsProps[] = [
    {text: "Sobre", link: "/", selected: false},
    {text: "Skills", link: "/", selected: false},
    {text: "Projetos", link: "/", selected: false},
    {text: "Jornada", link: "/", selected: false},
    {text: "Contato", link: "/", selected: false},
]
export default function Header() {
    return (
        <nav className={"bg-gray-950/40 backdrop-blur-2xl bg-clip-padding w-dvw flex justify-between " +
            "p-7 px-20 fixed shadow-sm z-10"}>
            <Logo />
            <ul className={"flex gap-10"}>
                {navbarItems.map((item) => (
                    <NavItem text={item.text} selected={item.selected} link={item.link}/>
                ))}
            </ul>
        </nav>
    )
}