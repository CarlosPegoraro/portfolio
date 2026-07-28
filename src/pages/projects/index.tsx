import {Link} from "react-router";
import Layout from "@/pages/Layout.tsx";
import {useEffect, useRef, useState, type CSSProperties} from "react";

import goepiImage from "@/assets/projects/goepi.png";
import phronesisImage from "@/assets/projects/phronesis.png";
import buscalogImage from "@/assets/projects/buscalog.png";
import cursoDevImage from "@/assets/projects/cursodev.png";
import redeDorImage from "@/assets/projects/rededor.png";

type Project = {
    number: string;
    title: string;
    subtitle: string;
    description: string;
    stacks: string[];
    accent: "cyan" | "violet";
    image: string;
};

const projects: Project[] = [
    {
        number: "01",
        title: "GoEPI",
        subtitle: "Gestão inteligente de EPIs",
        description: "Plataforma para centralizar e automatizar a gestão de EPIs, controlando colaboradores, estoque, entregas, devoluções, vencimentos e histórico de utilização.\n" +
            "\n" +
            "Com integrações a sistemas de SST e CRMs, o GoEPI reduz processos manuais, aumenta a rastreabilidade e facilita o cumprimento das obrigações de segurança ocupacional.",
        stacks: ["Laravel", "Vite", "Postgres", "SST", "Automações"],
        accent: "cyan",
        image: goepiImage,
    },
    {
        number: "02",
        title: "Phrónesis Blog",
        subtitle: "Academia de estudos sociais",
        description: "Blog desenvolvido para reunir artigos e reflexões sobre tecnologia, economia, filosofia e temas relacionados à sociedade contemporânea. O projeto busca transformar assuntos complexos em conteúdos organizados, acessíveis e relevantes para diferentes públicos.\n" +
            "\n" +
            "A plataforma foi estruturada para facilitar a publicação e a descoberta de artigos, oferecendo uma experiência de leitura limpa, responsiva e direcionada à construção e ao compartilhamento de conhecimento.",
        stacks: ["Laravel", "Livewire", "Blog", "Acadêmico"],
        accent: "violet",
        image: phronesisImage,
    },
    {
        number: "03",
        title: "Buscalog",
        subtitle: "Gestão e Rastreamento de Frotas",
        description: "Plataforma desenvolvida para centralizar o monitoramento de veículos e dispositivos de rastreamento, oferecendo maior controle sobre frotas, trajetos, eventos e informações operacionais.\n" +
            "\n" +
            "O BuscaLog processa a comunicação simultânea de centenas de dispositivos via TCP/IP, permitindo acompanhar posições e ocorrências em uma interface centralizada. A solução também organiza históricos, relatórios e dados de telemetria, auxiliando empresas na tomada de decisões e na segurança de suas operações.",
        stacks: ["Laravel", "React", "TCP", "Microserviços"],
        accent: "cyan",
        image: buscalogImage,
    },
    {
        number: "04",
        title: "Clone TabNews",
        subtitle: "Curso do Filipe Deschamps",
        description: "Aplicação desenvolvida para reproduzir a estrutura do TabNews e aprofundar conhecimentos na construção de sistemas web completos. O projeto reúne interface, persistência de dados, testes automatizados e infraestrutura em containers.\n" +
            "\n" +
            "Com Next.js, React, PostgreSQL e Docker, o Clone TabNews foi utilizado para estudar arquitetura de software, integração com banco de dados, organização de ambientes e evolução incremental de uma aplicação real.",
        stacks: ["Next.js", "React", "PostgreSQL", "Docker"],
        accent: "violet",
        image: cursoDevImage,
    },
    {
        number: "05",
        title: "Análise de Mercado - Rede D’Or",
        subtitle: "Análise financeira e setorial",
        description: "Aplicação institucional desenvolvida para apresentar uma análise estruturada da Rede D’Or, reunindo informações sobre a empresa, o setor de saúde, crescimento da receita, concorrência e desempenho financeiro.\n" +
            "\n" +
            "O projeto organiza dados e indicadores em uma experiência visual moderna e interativa, facilitando a compreensão da companhia e de sua tese de investimento por meio de gráficos, animações e seções analíticas. A aplicação foi construída como site estático com React, TypeScript e Vite.",
        stacks: ["Microeconomia", "Análise de Mercado", "React", "Recharts"],
        accent: "cyan",
        image: redeDorImage,
    },
];

function ProjectImage({title, accent, image}: Pick<Project, "title" | "accent" | "image">) {
    const accentClasses = accent === "cyan"
        ? "border-cyan-400/40 from-cyan-500/20 via-slate-950 to-slate-950 text-cyan-300"
        : "border-violet-400/40 from-violet-500/20 via-slate-950 to-slate-950 text-violet-300";

    return (
        <div className={`relative overflow-hidden rounded-2xl border bg-slate-950 shadow-2xl ${accentClasses}`}>
            <img src={image} alt={`Screenshot do projeto ${title}`} className="aspect-video h-full min-h-80 w-full object-cover object-top"/>
        </div>
    );
}

function ProjectSlide({project, index}: {project: Project; index: number}) {
    const slideRef = useRef<HTMLElement>(null);
    const [style, setStyle] = useState<CSSProperties>({});
    const isViolet = project.accent === "violet";
    const accent = isViolet ? "violet" : "cyan";
    const titleColor = isViolet ? "text-violet-300" : "text-cyan-300";
    const borderColor = isViolet ? "border-violet-400/35" : "border-cyan-400/35";
    const glow = isViolet ? "bg-violet-500/15" : "bg-cyan-500/15";

    useEffect(() => {
        const updateParallax = () => {
            const slide = slideRef.current;
            if (!slide || window.innerWidth < 768) {
                setStyle({});
                return;
            }

            const bounds = slide.getBoundingClientRect();
            const viewportHeight = window.innerHeight;
            const clamp = (value: number) => Math.min(1, Math.max(0, value));

            // O próximo painel entra pela base enquanto o atual deixa a área visível pelo topo.
            const entering = clamp((bounds.top - viewportHeight * 0.58) / (viewportHeight * 0.42));
            const leaving = clamp((viewportHeight - bounds.bottom) / (viewportHeight * 0.55));
            const offset = entering * 72 - leaving * viewportHeight * 0.34;
            const opacity = Math.max(0, (1 - entering * 0.15) * (1 - leaving));

            setStyle({
                "--project-offset": `${offset}px`,
                "--project-opacity": opacity,
                "--project-scale": `${1 - leaving * 0.035}`,
            } as CSSProperties);
        };

        let frame = 0;
        const onScroll = () => {
            cancelAnimationFrame(frame);
            frame = requestAnimationFrame(updateParallax);
        };

        updateParallax();
        window.addEventListener("scroll", onScroll, {passive: true});
        window.addEventListener("resize", onScroll);
        return () => {
            cancelAnimationFrame(frame);
            window.removeEventListener("scroll", onScroll);
            window.removeEventListener("resize", onScroll);
        };
    }, []);

    return (
        <article ref={slideRef} className="relative min-h-[118vh] px-4 py-6 sm:px-5 sm:py-10 md:min-h-[125vh] md:px-10 lg:px-16 lg:py-16">
            <div className={`pointer-events-none absolute inset-x-0 top-[12%] mx-auto h-[65%] max-w-5xl rounded-full blur-[120px] ${glow}`}/>
            <div style={style} className="project-scroll-panel relative z-10 mx-auto grid min-h-[74vh] max-w-7xl items-center gap-8 rounded-2xl border border-slate-800/80 bg-slate-950/90 p-5 shadow-[0_24px_80px_rgba(0,0,0,0.38)] backdrop-blur-md sm:rounded-3xl sm:p-6 md:sticky md:top-24 md:p-10 lg:grid-cols-2 lg:gap-16 lg:p-14">
                <div className="absolute right-5 top-4 font-code text-5xl font-bold text-slate-800/70 md:right-7 md:top-5 md:text-8xl">{project.number}</div>
                <div className={index % 2 ? "lg:order-2" : ""}>
                    <ProjectImage title={project.title} accent={accent} image={project.image}/>
                </div>
                <div className={index % 2 ? "lg:order-1" : ""}>
                    <span className={`font-code text-sm font-bold uppercase tracking-[0.25em] ${titleColor}`}>Projeto selecionado</span>
                    <h2 className="mt-4 font-header text-4xl font-semibold text-white md:text-6xl">{project.title}</h2>
                    <h3 className={`mt-3 font-code text-xl ${titleColor}`}>{project.subtitle}</h3>
                    <p className="mt-7 max-w-xl whitespace-pre-line text-lg leading-8 text-slate-300">{project.description}</p>
                    <div className="mt-8 flex flex-wrap gap-3">
                        {project.stacks.map((stack) => (
                            <span key={stack} className={`rounded-full border ${borderColor} bg-slate-900/80 px-4 py-2 font-code text-sm ${titleColor}`}>{stack}</span>
                        ))}
                    </div>
                </div>
            </div>
        </article>
    );
}

export default function ProjectsGallery() {
    return (
        <Layout>
            <main className="overflow-x-clip pt-36">
                <header className="mx-auto max-w-7xl px-5 pb-10 sm:px-8 sm:pb-14 lg:px-14">
                    <Link to="/" className="font-code text-sm text-slate-400 transition hover:text-cyan-300">
                        <i className="bi bi-arrow-left mr-2"/>voltar para início
                    </Link>
                    <h1 className="mt-8 font-header text-3xl font-semibold uppercase text-cyan-400 sm:text-4xl md:text-6xl">// Galeria de projetos</h1>
                    <p className="mt-4 max-w-2xl font-code text-base leading-7 text-slate-300">Uma seleção de produtos e sistemas onde estratégia, dados e tecnologia se encontram.</p>
                </header>

                <section>
                    {projects.map((project, index) => <ProjectSlide key={project.title} project={project} index={index}/>)}
                </section>
            </main>
        </Layout>
    );
}
