import profile from '@/assets/profile.jpeg'
import SectionTitle from "@/components/SectionTitle.tsx";
import {useInView} from "@/hooks/useInView.tsx";

export default function AboutMe() {
    const { ref, isVisible } = useInView<HTMLElement>({
        threshold: 0.2,
        triggerOnce: true,
    });

    return (
        <main ref={ref} id="sobre"
            className={"mx-4 grid grid-cols-1 rounded-lg bg-linear-to-b from-gray-950/40 to-transparent px-5 py-10 sm:mx-8 sm:px-8 lg:mx-auto lg:max-w-[1600px] lg:grid-cols-12 lg:px-12 lg:py-14 xl:px-16 " +
                (isVisible ? "fade-in" : "opacity-0")}>
            <SectionTitle text={"// Sobre Mim"}/>
            <section className="mt-8 flex flex-col gap-5 font-code text-base sm:text-lg lg:col-span-4 lg:mt-12 lg:pr-10 lg:text-xl">
                <img src={profile} alt={"Carlos Eduardo"}
                     className="mx-auto h-44 w-44 rounded-full border-3 border-cyan-800 bg-white object-cover sm:h-60 sm:w-60"/>
                <article>
                    <i className="bi bi-compass"></i> {"Sorocaba, Brasil"}
                </article>
                <article>
                    <i className="bi bi-person-circle"></i> {"5 anos de experiência no mercado"}
                </article>
                <article>
                    <i className="bi bi-bank"></i> {"Ciências Econômicas — Uniso"}
                </article>
                <article>
                    <i className="bi bi-code-square"></i> {"Análise e Desenvolvimento de Sistemas — FAC-SP"}
                </article>
            </section>
            <section className="mt-10 flex flex-col gap-6 text-lg/8 font-semibold sm:text-xl/9 lg:col-span-8 lg:mt-12 lg:text-2xl/10">
                <article className={"text-neutral-50"}>
                    Sou movido pelo propósito de desenvolver não apenas sistemas, mas soluções completas capazes de gerar valor real para as operações e para o negócio. Minha formação multidisciplinar permite analisar cada projeto para além do código, considerando também o produto, o mercado e o contexto econômico no qual ele está inserido. Essa visão integrada contribui para decisões mais eficientes, estratégicas e orientadas a resultados.
                </article>
                <article className={"text-neutral-50"}>
                    Meu portfólio reúne soluções voltadas ao mercado financeiro, à gestão de Equipamentos de Proteção Individual (EPIs) e ao gerenciamento de frotas. Essas experiências proporcionaram uma compreensão prática sobre diferentes segmentos, seus processos, desafios e necessidades específicas.
                </article>
                <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                    <div
                        className={"p-5 border-2 border-cyan-800 rounded-xl bg-cyan-800/10 backdrop-blur-2xl bg-clip-padding"}>
                        <h1 className={"text-cyan-600 text-2xl font-bold font-header"}>
                            <i className="bi bi-bank me-4"></i> Economista
                        </h1>
                        <ul className={"list-disc p-4 list-inside leading-10 font-medium"}>
                            <li>Análise de Mercados</li>
                            <li>Modelagem Econômica</li>
                            <li>Estratégia & Negócios</li>
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
