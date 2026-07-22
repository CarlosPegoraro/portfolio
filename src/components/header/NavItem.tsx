import {Link} from "react-router";

export interface NavItemsProps {
    text: string;
    selected: boolean;
    link: string
}

export default function NavItem({text, selected, link} : NavItemsProps) {
    return (
        <li>
            <Link to={link} className={"text-white text-lg font-medium uppercase " +
                "duration-300 hover:text-cyan-400 cursor-pointer " +
                "flex flex-col gap-2 items-center justify-center " +
                (selected ? "text-cyan-400 border-b-2 border-cyan-400 pb-2" : "")}>
                {text}
                <span className={"bg-cyan-400 h-2 w-2 rounded-full " + (selected ? "block" : "hidden")}></span>
            </Link>
        </li>
    )
}