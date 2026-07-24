import SectionTitle from "@/components/SectionTitle.tsx";
import {LaravelIcon} from "@/components/simpleIcons/LaravelIcon.tsx";
import {PhpIcon} from "@/components/simpleIcons/PhpIcon.tsx";
import {JsIcon} from "@/components/simpleIcons/JsIcon.tsx";
import {TypescriptIcon} from "@/components/simpleIcons/TypescriptIcon.tsx";
import {ReactIcon} from "@/components/simpleIcons/ReactIcon.tsx";
import {TailwindIcon} from "@/components/simpleIcons/TailwindIcon.tsx";
import {LivewireIcon} from "@/components/simpleIcons/LivewireIcon.tsx";
import {DockerIcon} from "@/components/simpleIcons/DockerIcon.tsx";
import {GitIcon} from "@/components/simpleIcons/GitIcon.tsx";
import {LinuxIcon} from "@/components/simpleIcons/LinuxIcon.tsx";

import {type ReactNode, type CSSProperties} from "react";
import {useInView} from "@/hooks/useInView.tsx";

type SkillItemProps = {
    label: string;
    icon?: ReactNode;
}

function SkillItem({label, icon}: SkillItemProps) {
    return (
        <div className={"flex flex-col justify-center items-center gap-4"}>
            {icon}
            <p className={"font-code text-xl"}>{label}</p>
        </div>
    );
}

export default function Skills() {
    const { ref, isVisible } = useInView<HTMLElement>({
        threshold: 0.2,
        triggerOnce: true,
    });

    return (
        <main ref={ref}
              className={`grid grid-cols-12 p-20 pt-10 gap-10 bg-linear-to-t from-gray-950/40 to-transparent mx-30 rounded-lg ${
                  isVisible ? "fade-in" : "opacity-0"
              }`}
              style={{ "--fade-duration": "0.8s" } as CSSProperties}>
            <SectionTitle text={"// Skills e Ferramentas"}/>
            <section className="skills-card col-span-6 fade-in" style={{ "--fade-duration": "1.8s" } as React.CSSProperties}>
                <span className="skills-title uppercase">{"Desenvolvimento"}</span>
                <article className="skills-grid">
                    <SkillItem label="Laravel" icon={<LaravelIcon/>}/>
                    <SkillItem label="PHP" icon={<PhpIcon/>}/>
                    <SkillItem label="JavaScript" icon={<JsIcon/>}/>
                    <SkillItem label="TypeScript" icon={<TypescriptIcon/>}/>
                    <SkillItem label="React" icon={<ReactIcon/>}/>
                    <SkillItem label="Tailwind" icon={<TailwindIcon/>}/>
                    <SkillItem label="Livewire" icon={<LivewireIcon/>}/>
                    <SkillItem label="Docker" icon={<DockerIcon/>}/>
                    <SkillItem label="Git" icon={<GitIcon/>}/>
                    <SkillItem label="Linux" icon={<LinuxIcon/>}/>
                </article>
            </section>
            <section className="skills-card col-span-6 fade-in" style={{ "--fade-duration": "2.1s" } as React.CSSProperties}>
                <span className="skills-title uppercase">{"Economia & Dados"}</span>
                <article className="skills-grid">
                    <SkillItem label="Excel Avançado" icon={<i className="bi bi-file-earmark-spreadsheet text-5xl text-white"></i>}/>
                    <SkillItem label="SQL" icon={<i className="bi bi-database text-5xl text-white"></i>}/>
                    <SkillItem label="Python" icon={<i className="bi bi-code-slash text-5xl text-white"></i>}/>
                    <SkillItem label="R" icon={<i className="bi bi-bar-chart text-5xl text-white"></i>}/>
                    <SkillItem label="Power BI" icon={<i className="bi bi-file-earmark-bar-graph text-5xl text-white"></i>}/>
                    <SkillItem label="Econometria" icon={<i className="bi bi-graph-up-arrow text-5xl text-white"></i>}/>
                    <SkillItem label="Estatística" icon={<i className="bi bi-pie-chart text-5xl text-white"></i>}/>
                    <SkillItem label="Forecast" icon={<i className="bi bi-clipboard-data text-5xl text-white"></i>}/>
                    <SkillItem label="Micro/Macro" icon={<i className="bi bi-activity text-5xl text-white"></i>}/>
                    <SkillItem label="Finanças" icon={<i className="bi bi-cash-coin text-5xl text-white"></i>}/>
                </article>
            </section>
        </main>
    )
}
