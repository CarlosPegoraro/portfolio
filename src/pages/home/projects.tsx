import {useInView} from "@/hooks/useInView.tsx";
import SectionTitle from "@/components/SectionTitle.tsx";
import ProjectCard, {type ProjectCardProps} from "@/components/ProjectCard.tsx";

import image from '@/assets/profile.jpeg'
import {Link} from "react-router";

const projects: ProjectCardProps[] = [
    {
        title: "GoEPI — Gestão Inteligente de EPIs",
        image: image,
        text: "Plataforma completa para controle de EPIs, colaboradores, entregas, estoque e vencimentos, com integrações a sistemas de SST e automação dos processos de segurança ocupacional.",
        animationTime: "1s",
        badges: ['Laravel', 'Livewire', 'Gestão de EPIs', 'SST'],
    },
    {
        title: "WAA - Investimentos",
        image: image,
        text: "Sistema de analise de ativos para investidores",
        animationTime: "3s",
        badges: ['Laravel', 'Livewire', 'Webcralwing'],
    },
    {
        title: "Buscalog - Gestão de Frotas",
        image: image,
        text: "Plataforma de rastreamento e gestão de frotas com microserviços",
        animationTime: "3s",
        badges: ['Laravel', 'React', 'TCP'],
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
                <Link to={"/projects"} className={"text-neutral-50 text-lg font-bold  py-2 px-6 w-fit rounded-lg " +
                    "bg-cyan-800/30 backdrop-blur-2xl bg-clip-padding border-2 border-cyan-400/60 " +
                    "hover:bg-cyan-800/60 hover:border-cyan-800/60 duration-300 animate-pulse"}>
                    {" > Mais Projetos"}
                </Link>
            </div>
        </main>
    )
}
