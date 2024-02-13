import { useState } from 'react';
import logo from '../../assets/logo.svg';
import logoSlim from '../../assets/logoSlim.svg';

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div className="flex items-center justify-between p-8 px-20 gb-neutral-200 dark:bg-neutral-800 shadow-lg">
            <img src={logo} alt="Carlos Pegoraro" width={250} height={100} className='hidden sm:block' />
            <img src={logoSlim} alt="Carlos Pegoraro" width={50} className='block sm:hidden' />

            <div className="hidden md:flex gap-5">
                <a className="text-lg font-semibold hover:text-teal-300 duration-500" href="/#aboutMe">Sobre Mim</a>
                <a className="text-lg font-semibold hover:text-teal-300 duration-500" href="/#projects">Projetos</a>
                <a className="text-lg font-semibold hover:text-teal-300 duration-500" href="/#contact">Contato</a>
            </div>

            <div className="md:hidden">
                <button onClick={toggleMenu} className="text-lg font-semibold hover:text-teal-300 duration-500">
                    ☰ Menu
                </button>
                {menuOpen && (
                    <div className="flex flex-col gap-3">
                        <a className="text-lg font-semibold hover:text-teal-300 duration-500" href="#about">About Me</a>
                        <a className="text-lg font-semibold hover:text-teal-300 duration-500" href="#skills">My Skills</a>
                        <a className="text-lg font-semibold hover:text-teal-300 duration-500" href="#projects">Projects</a>
                        <a className="text-lg font-semibold hover:text-teal-300 duration-500" href="#contact">Contact</a>
                    </div>
                )}
            </div>
        </div>
    );
}
