import {useInView} from "@/hooks/useInView.tsx";
import SectionTitle from "@/components/SectionTitle.tsx";
import ProjectCard, {type ProjectCardProps} from "@/components/ProjectCard.tsx";

import image from '@/assets/profile.jpeg'

const projects: ProjectCardProps[] = [
    {
        title: "GoEPI - Gestão de EPIs",
        image: image,
        text: "Sistema de gestão de EPIs com integrações a CRMs e serviços SST",
        animationTime: "1s",
        badges: ['Laravel', 'Vite', 'SST'],
    },
    {
        title: "ReAI - CRM de Leads",
        image: image,
        text: "CRM de leads com atendimento automatizado via Meta com MCP para incorporadoras",
        animationTime: "3s",
        badges: ['Laravel', 'MCP', 'Meta'],
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
              className={"grid grid-cols-12 p-20 pt-10 bg-linear-to-b from-gray-950/40 to-transparent mx-30 rounded-lg gap-15 " +
                  (isVisible ? "fade-in" : "opacity-0")}>
            <SectionTitle text={"// Projetos"}/>
            <section className={"grid grid-cols-4 col-span-12 gap-5"}>
                {projects.map((project: ProjectCardProps) => (
                    <ProjectCard title={project.title} image={project.image} text={project.text} animationTime={project.animationTime}
                        badges={project.badges} colSize={project.colSize} />
                ))}
            </section>
        </main>
    )
}