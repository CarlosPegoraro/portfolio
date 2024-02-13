import React from 'react';
import logo from '../../assets/logo.svg';

export default function Footer() {
    return (
        <footer id='contact' className="bg-neutral-800 p-8 sm:p-10">
            <div className="flex flex-col sm:flex-row gap-10 justify-between sm:justify-around">
                <img src={logo} alt="Carlos Pegoraro" className='sm:w-1/4'/>

                <div className='flex sm:flex-col sm:gap-10 justify-between'>
                    <nav className="flex flex-col sm:flex-row gap-5">
                        <h1 className='text-lg text-teal-500'>Paginas</h1>
                        <a className="text-lg hover:text-teal-300 transition duration-300" href="#aboutMe">Sobre Mim</a>
                        <a className="text-lg hover:text-teal-300 transition duration-300" href="#projects">Projetos</a>
                        <a className="text-lg hover:text-teal-300 transition duration-300" href="#contact">Contato</a>
                    </nav>

                    <nav className="flex flex-col sm:flex-row gap-5">
                        <h1 className='text-lg text-teal-500'>Contatos</h1>
                        <a className="text-lg text-teal-200 hover:text-teal-500 transition duration-300" href="https://github.com/CarlosPegoraro">
                            <i className="bi bi-github"></i> Gitbub
                        </a>
                        <a className="text-lg text-teal-200 hover:text-teal-500 transition duration-300" href="https://github.com/CarlosPegoraro">
                            <i className="bi bi-linkedin"></i> Linkdin
                        </a>
                        <a className="text-lg text-teal-200 hover:text-teal-500 transition duration-300" href="https://github.com/CarlosPegoraro">
                            <i className="bi bi-instagram"></i> Instagram
                        </a>
                    </nav>
                </div>

            </div>
        </footer>
    );
}
