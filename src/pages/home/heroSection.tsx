import {Link} from "react-router";

export default function HeroSection() {
    return (
        <div className={"min-h-screen grid grid-cols-12 items-center px-56"}>
            <div className={"col-span-6 flex flex-col text-white gap-4"}>
                <span className={"text-cyan-400 text-3xl font-bold uppercase"}>
                    {"Olá, Eu sou"}
                </span>
                <span className={"text-neutral-50 text-5xl font-bold uppercase"}>
                    {"Carlos Eduardo Pegoraro"}
                    <span className={"text-cyan-400 ms-4"}>{"Lopes"}</span>
                </span>
                <span className={"text-cyan-400 text-xl font-semibold"}>
                    {"Economista & Desenvolvedor Pleno"}
                </span>
                <span className={"text-neutral-50 text-lg font-medium"}>
                    {"Transformo dados em decisões e código em soluções. Unindo Análise econômica, estratégia e tecnológia para desenvolver produtos digitais que geram impacto"}
                </span>
                <Link to={"/"} className={"text-neutral-50 text-lg font-bold  py-2 px-6 w-fit rounded-lg " +
                    "bg-cyan-800/30 backdrop-blur-2xl bg-clip-padding border-2 border-cyan-400/60"}>
                    {" > Explorar o meu Trabalho"}
                </Link>
            </div>
            <div className={"col-span-6"}>
                Imagem
            </div>
        </div>
    )
}