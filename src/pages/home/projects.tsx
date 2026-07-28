import {useInView} from "@/hooks/useInView.tsx";
import SectionTitle from "@/components/SectionTitle.tsx";
import ProjectCard, {type ProjectCardProps} from "@/components/ProjectCard.tsx";

import goepi from '@/assets/projects/goepi.png'
import phronesis from '@/assets/projects/phronesis.png'
import buscalog from '@/assets/projects/buscalog.png'

import {Link} from "react-router";

const projects: ProjectCardProps[] = [
    {
        title: "GoEPI",
        image: goepi,
        text: "Plataforma completa para controle de EPIs, colaboradores, entregas, estoque e vencimentos, com integrações a sistemas de SST e automação dos processos de segurança ocupacional.",
        animationTime: "1s",
        badges: ['Laravel', 'Vite', 'Postgres', 'SST', 'Automações'],
    },
    {
        title: "Phrónesis Blog",
        image: phronesis,
        text: "Blog de artigos e reflexões sobre tecnologia, economia, filosofia e a sociedade contemporânea, com uma experiência de leitura limpa e acessível.",
        animationTime: "3s",
        badges: ['Laravel', 'Livewire', 'Blog', 'Acadêmico'],
    },
    {
        title: "Buscalog",
        image: buscalog,
        text: "Plataforma para monitoramento de veículos e dispositivos de rastreamento, centralizando frotas, trajetos, eventos e dados de telemetria.",
        animationTime: "3s",
        badges: ['Laravel', 'React', 'TCP', 'Microserviços'],
    },
]

export default function Projects() {
    const { ref, isVisible } = useInView<HTMLElement>({
        threshold: 0.2,
        triggerOnce: true,
    });

    return (
        <main ref={ref}
              className={"mx-4 grid grid-cols-1 gap-10 rounded-lg bg-linear-to-b from-gray-950/40 to-transparent px-5 py-10 sm:mx-8 sm:px-8 lg:mx-auto lg:max-w-[1600px] lg:grid-cols-12 lg:px-12 lg:py-14 xl:px-16 " +
                  (isVisible ? "fade-in" : "opacity-0")}>
            <SectionTitle text={"// Principais Projetos"}/>
            <section className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:col-span-12 lg:grid-cols-3">
                {projects.map((project: ProjectCardProps) => (
                    <ProjectCard key={project.title} title={project.title} image={project.image} text={project.text} animationTime={project.animationTime}
                        badges={project.badges} colSize={project.colSize} />
                ))}
            </section>
            <div className="flex items-center justify-center lg:col-span-12">
                <Link to={"/projects"} onClick={() => window.scrollTo({top: 0, left: 0, behavior: "auto"})} className={"text-neutral-50 text-lg font-bold  py-2 px-6 w-fit rounded-lg " +
                    "bg-cyan-800/30 backdrop-blur-2xl bg-clip-padding border-2 border-cyan-400/60 " +
                    "hover:bg-cyan-800/60 hover:border-cyan-800/60 duration-300 animate-pulse"}>
                    {" > Mais Projetos"}
                </Link>
            </div>
        </main>
    )
}
