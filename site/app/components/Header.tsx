import Image from "next/image"
import logo from '../../assets/logo.svg'

export default function Header() {
    return (
        <div className="flex items-center justify-between p-8 px-20 bg-neutral-800 shadow-lg">
            <Image src={logo} alt="Carlos Pegoraro" width={250} height={100} />
            <div className="flex gap-5">
                <a className="text-lg font-semibold hover:text-teal-300 duration-500" href="#about">About Me</a>
                <a className="text-lg font-semibold hover:text-teal-300 duration-500" href="#about">My Skills</a>
                <a className="text-lg font-semibold hover:text-teal-300 duration-500" href="#projects">Projects</a>
                <a className="text-lg font-semibold hover:text-teal-300 duration-500" href="#contact">Contact</a>
            </div>
        </div>
    );
}