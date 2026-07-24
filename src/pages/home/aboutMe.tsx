import profile from '@/assets/profile.jpeg'
import SectionTitle from "@/components/SectionTitle.tsx";
import {useInView} from "@/hooks/useInView.tsx";

export default function AboutMe() {
    const { ref, isVisible } = useInView<HTMLElement>({
        threshold: 0.2,
        triggerOnce: true,
    });

    return (
        <main ref={ref}
            className={"grid grid-cols-12 p-20 pt-10 bg-linear-to-b from-gray-950/40 to-transparent mx-30 rounded-lg " +
                (isVisible ? "fade-in" : "opacity-0")}>
            <SectionTitle text={"// Sobre Mim"}/>
            <section className={"flex flex-col p-20 col-span-4 gap-8 font-code text-xl mt-15"}>
                <img src={profile} alt={"Carlos Eduardo"}
                     className={"bg-white w-60 h-60 rounded-full mx-auto border-3 border-cyan-800"}/>
                <article>
                    <i className="bi bi-compass"></i> {"Sorocaba, Brasil"}
                </article>
                <article>
                    <i className="bi bi-person-circle"></i> {"5 de Experiencia no Mercado"}
                </article>
                <article>
                    <i className="bi bi-bank"></i> {"Ciencias Economicas - Uniso"}
                </article>
                <article>
                    <i className="bi bi-code-square"></i> {"Analise e Desenvolvimento de Sistemas - FAC-SP"}
                </article>
            </section>
            <section className={"flex flex-col p-20 col-span-8 gap-6 text-2xl/10 font-semibold"}>
                <article className={"text-neutral-50"}>Sou movido pela vontade de desenvolver não apenas sistemas, mas sim soluções completas que possam agregar valor real pra operações. Minhas formações me fizeram não só pensar no codigo mas tambem no produto e no mercado ao qual ele está inserindo, possibilitando assim tomar decisões mais eficiente se com maior impacto</article>
                <article className={"text-neutral-50"}>Meu portifolio conta com soluções no mercado financeiro, de gestão de epis e tambem sistemas de gestão de frotas, o que me permitiu adquirir diversos conhecimentos de cada mercado</article>
                <div className={"grid grid-cols-2 gap-5"}>
                    <div
                        className={"p-5 border-2 border-cyan-800 rounded-xl bg-cyan-800/10 backdrop-blur-2xl bg-clip-padding"}>
                        <h1 className={"text-cyan-600 text-2xl font-bold font-header"}>
                            <i className="bi bi-bank me-4"></i> Economista
                        </h1>
                        <ul className={"list-disc p-4 list-inside leading-10 font-medium"}>
                            <li>Análise de Mercados</li>
                            <li>Modelagem Economia</li>
                            <li>Estrategia & Negocios</li>
                            <li>Indicadores e Forecast</li>
                        </ul>
                    </div>
                    <div
                        className={"p-5 border-2 border-cyan-800 rounded-xl bg-cyan-800/10 backdrop-blur-2xl bg-clip-padding"}>
                        <h1 className={"text-cyan-600 text-2xl font-bold font-header"}>
                            <i className="bi bi-code-square me-4"></i> Desenvolvedor
                        </h1>
                        <ul className={"list-disc p-4 list-inside leading-10 font-medium"}>
                            <li>Sistemas Web</li>
                            <li>Modelagem de APIs</li>
                            <li>Automação e DevOps</li>
                            <li>Banco de Dados</li>
                        </ul>
                    </div>
                </div>
            </section>
        </main>
    )
}