import coding from '../../assets/coding.png'

export default function About() {
    return (
        <div id='aboutMe' className="flex flex-col sm:flex-row gap-10 sm:gap-0 justify-around p-5 sm:p-10 my-10">
            <div className="flex flex-col gap-10 items-center sm:items-start text-center sm:text-start sm:w-1/2">
                <h1 className="text-4xl font-bold text-teal-500">Sobre Mim</h1>
                <p className="text-2xl text-neutral-800 dark:text-neutral-200 w-4/6">
                Com um diploma em Informática pelo Colégio Pentágono, aos 18 anos, sou um entusiasta desenvolvedor apaixonado pela arte de criar códigos. Com aproximadamente três anos de experiência prática em desenvolvimento e um ano de experiência profissional, dediquei-me diariamente ao estudo das tecnologias mais recentes do mercado. Atualmente, meu foco está em aprimorar habilidades em PHP, Laravel, Postgres e React. Estou constantemente buscando desafios e oportunidades para expandir meu conhecimento, contribuindo assim para projetos inovadores e de alta qualidade.
                </p>
            </div>
            <img src={coding} alt="Coding" className="rounded-full hidden sm:block" style={{
                boxShadow: '0px 0px 15px 0px #2EC1CB80',
                userSelect: 'none'
             }}/>
        </div>
    );
}