import {useInView} from "@/hooks/useInView.tsx";
import SectionTitle from "@/components/SectionTitle.tsx";

const impactStats = [
    {value: "4+", label: "Anos de experiência"},
    {value: "10+", label: "Projetos desenvolvidos"},
    {value: "3", label: "Mercados atingidos"},
    {value: "3", label: "Formações acadêmicas"},
];

const economyTopics = ["Dados", "Análise", "Estratégia", "Decisões"];
const technologyTopics = ["Código", "Sistemas", "Automação", "Escalabilidade"];

function AreaList({title, topics, align = "left"}: {
    title: string;
    topics: string[];
    align?: "left" | "right";
}) {
    return (
        <article className={`z-10 ${align === "right" ? "md:pl-50" : "md:pr-28"}`}>
            <h3 className={`mb-3 font-code text-lg font-bold uppercase text-cyan-400 ${
                align === "right" ? "text-violet-400" : ""
            }`}>
                {title}
            </h3>
            <ul className="space-y-1.5 font-code text-base text-slate-200">
                {topics.map((topic) => (
                    <li key={topic} className="flex items-center gap-3">
                        <span className={`h-1.5 w-1.5 rounded-full ${
                            align === "right" ? "bg-violet-400" : "bg-cyan-400"
                        }`}/>
                        {topic}
                    </li>
                ))}
            </ul>
        </article>
    );
}

export default function JourneyImpact() {
    const {ref, isVisible} = useInView<HTMLElement>({
        threshold: 0.2,
        triggerOnce: true,
    });

    return (
        <main ref={ref} id="jornada"
              className={`mx-4 grid grid-cols-1 gap-8 rounded-lg bg-linear-to-b from-gray-950/40 to-transparent px-5 py-10 sm:mx-8 sm:px-8 lg:mx-auto lg:max-w-[1600px] lg:grid-cols-12 lg:px-12 lg:py-14 xl:px-16 ${
                  isVisible ? "fade-in" : "opacity-0"
              }`}>
            <SectionTitle text={"// Jornada & Impacto"}/>
            <section className="lg:col-span-12">
                <h3 className="mb-3 font-code text-lg font-bold text-cyan-100">Resumo de impacto</h3>
                <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
                    {impactStats.map((stat) => (
                        <article key={stat.label}
                                 className="rounded-xl border border-cyan-950 bg-slate-950/65 px-5 py-4 text-center shadow-[inset_0_0_20px_rgba(8,47,73,0.16)] backdrop-blur-sm">
                            <strong className="block font-code text-3xl font-medium text-white">{stat.value}</strong>
                            <span className="mt-1 block font-code text-sm leading-6 text-slate-300">{stat.label}</span>
                        </article>
                    ))}
                </div>
            </section>

            <section className="lg:col-span-12">
                <h3 className="mb-3 font-code text-lg font-bold text-cyan-100">Áreas que conecto</h3>
                <div className="relative grid min-h-44 grid-cols-1 gap-8 overflow-hidden rounded-xl border border-cyan-950 bg-slate-950/65 p-7 md:grid-cols-2 md:items-center md:gap-0">
                    <div className="pointer-events-none absolute left-1/2 top-1/2 hidden h-32 w-32 -translate-x-[70%] -translate-y-1/2 rounded-full border-2 border-cyan-500/45 bg-cyan-500/5 shadow-[0_0_28px_rgba(6,182,212,0.18)] md:block"/>
                    <div className="pointer-events-none absolute left-1/2 top-1/2 hidden h-32 w-32 -translate-x-[30%] -translate-y-1/2 rounded-full border-2 border-violet-500/50 bg-violet-500/5 shadow-[0_0_28px_rgba(139,92,246,0.18)] md:block"/>
                    <div className="absolute left-1/2 top-1/2 z-10 hidden w-28 -translate-x-1/2 -translate-y-1/2 text-center font-code text-sm font-bold uppercase leading-5 text-white md:block">
                        Soluções<br/>inteligentes
                    </div>
                    <AreaList title="Economia" topics={economyTopics}/>
                    <AreaList title="Tecnologia" topics={technologyTopics} align="right"/>
                    <div className="font-code text-center text-sm font-bold uppercase leading-5 text-white md:hidden">
                        Soluções inteligentes
                    </div>
                </div>
            </section>
        </main>
    );
}
