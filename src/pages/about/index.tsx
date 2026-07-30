import {Link} from "react-router";
import Layout from "@/pages/Layout.tsx";
import profile from "@/assets/profile.jpeg";

type JourneyItem = {
    period: string;
    title: string;
    description: string;
};

const journey: JourneyItem[] = [
    {
        period: "Aos 13 anos",
        title: "Os primeiros passos em tecnologia",
        description: "Iniciei meus estudos em Tecnologia da Informação quando tive meu primeiro contato com PHP e HTML. Desde então, desenvolvi grande interesse pelo desenvolvimento de software e passei a aprofundar continuamente meus conhecimentos técnicos.",
    },
    {
        period: "2023 · 17 anos",
        title: "Formação técnica em Informática",
        description: "Concluí o ensino médio integrado ao curso técnico em Informática. Durante essa formação, ampliei meus conhecimentos em programação, conheci novas linguagens e conceitos relacionados a modelos de negócio, além de desenvolver competências em comunicação, trabalho em equipe e resolução de problemas.",
    },
    {
        period: "2024 — atual",
        title: "Uma formação multidisciplinar",
        description: "Em 2024, iniciei a graduação em Engenharia da Computação, onde tive contato com gestão de projetos e consolidei uma base matemática relevante. Após dois semestres, precisei interromper temporariamente o curso. Em 2026, iniciei Ciências Econômicas, ampliando minha compreensão sobre mercado, gestão de pessoas, tomada de decisões e gerenciamento de custos.",
    },
    {
        period: "Aos 14 e 16 anos",
        title: "As primeiras experiências profissionais",
        description: "Minha trajetória profissional começou auxiliando nas atividades cotidianas da empresa recém-fundada pelo meu pai. Mais tarde, trabalhei como jovem aprendiz na pizzaria da família e, por um breve período, assumi responsabilidades relacionadas à gestão da operação.",
    },
    {
        period: "2023",
        title: "Desenvolvimento de soluções para negócios",
        description: "Após a conclusão do curso técnico, retornei à empresa do meu pai para desenvolver soluções web voltadas à automação de processos e à otimização de tarefas rotineiras.",
    },
    {
        period: "2025",
        title: "Sócio e principal desenvolvedor",
        description: "Tornei-me sócio de uma nova empresa cujo principal produto era uma plataforma de gestão de frotas veiculares. Atuei como principal desenvolvedor, responsável pela arquitetura, implementação e evolução técnica do sistema, além de participar da gestão da equipe e da organização do desenvolvimento do produto.",
    },
    {
        period: "2026 · atual",
        title: "Responsável técnico do GOEPI",
        description: "Recebi o convite para colaborar com o projeto GOEPI, no qual atuo como principal responsável técnico. Minhas atribuições incluem a gestão da infraestrutura, a manutenção e evolução do código, a definição de soluções técnicas e o acompanhamento geral do desenvolvimento do projeto.",
    },
];

export default function AboutPage() {
    return (
        <Layout>
            <main className="overflow-x-clip px-5 pb-20 pt-32 sm:px-8 sm:pt-36 lg:px-12">
                <header className="mx-auto max-w-7xl">
                    <Link to="/#sobre" className="font-code text-sm text-slate-400 transition hover:text-cyan-300">
                        <i className="bi bi-arrow-left mr-2"/>voltar para início
                    </Link>
                    <div className="mt-10 grid items-center gap-10 rounded-3xl border border-cyan-400/20 bg-slate-950/65 p-6 shadow-[0_24px_80px_rgba(0,0,0,0.32)] backdrop-blur-md sm:p-10 lg:grid-cols-[auto_1fr] lg:gap-12 lg:p-14">
                        <img src={profile} alt="Carlos Eduardo" className="mx-auto h-40 w-40 rounded-full border-3 border-cyan-700 object-cover sm:h-52 sm:w-52 lg:mx-0"/>
                        <div>
                            <p className="font-code text-sm font-bold uppercase tracking-[0.25em] text-cyan-300">// sobre mim</p>
                            <h1 className="mt-4 font-header text-4xl font-semibold text-white sm:text-5xl md:text-6xl">Tecnologia com visão de negócio.</h1>
                            <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-300 sm:text-xl">Minha trajetória une desenvolvimento de software, gestão e economia para transformar desafios operacionais em soluções consistentes.</p>
                        </div>
                    </div>
                </header>

                <section className="mx-auto mt-16 max-w-5xl" aria-labelledby="journey-title">
                    <div className="mb-10">
                        <p className="font-code text-sm font-bold uppercase tracking-[0.25em] text-cyan-300">// trajetória</p>
                        <h2 id="journey-title" className="mt-3 font-header text-3xl font-semibold text-white sm:text-4xl">Aprendizado contínuo, impacto prático.</h2>
                    </div>
                    <ol className="relative space-y-7 border-l border-cyan-700/50 pl-7 sm:pl-10">
                        {journey.map((item) => (
                            <li key={item.title} className="relative">
                                <span className="absolute -left-[35px] top-7 h-4 w-4 rounded-full border-4 border-slate-950 bg-cyan-400 shadow-[0_0_18px_rgba(34,211,238,0.8)] sm:-left-[47px]"/>
                                <article className="rounded-2xl border border-cyan-800/60 bg-cyan-950/15 p-6 backdrop-blur-sm transition duration-300 hover:border-cyan-400/45 hover:bg-cyan-950/30 sm:p-8">
                                    <p className="font-code text-sm font-bold uppercase tracking-[0.16em] text-cyan-300">{item.period}</p>
                                    <h3 className="mt-3 font-header text-2xl font-semibold text-white sm:text-3xl">{item.title}</h3>
                                    <p className="mt-4 text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">{item.description}</p>
                                </article>
                            </li>
                        ))}
                    </ol>
                </section>
            </main>
        </Layout>
    );
}
