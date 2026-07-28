import {Link} from "react-router";

export interface NavItemsProps {
    text: string;
    selected: boolean;
    link: string;
    onNavigate?: () => void;
}

export default function NavItem({text, selected, link, onNavigate} : NavItemsProps) {
    return (
        <li>
            <Link to={link} onClick={onNavigate} className={"w-full text-white text-base font-medium " +
                "duration-300 hover:text-cyan-400 cursor-pointer " +
                "flex flex-row gap-2 items-center justify-between rounded px-3 py-2 hover:bg-cyan-950/40 md:w-auto md:flex-col md:justify-center md:p-0 " +
                (selected ? "text-cyan-400 border-b-2 border-cyan-400 pb-2" : "")}>
                {text}
                <span className={"bg-cyan-400 h-2 w-2 rounded-full " + (selected ? "block" : "hidden")}></span>
            </Link>
        </li>
    )
}
