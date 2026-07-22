import {Link} from "react-router";
import brain from "@/assets/brain-neon.svg"
import cv from "@/assets/hero.png"

export default function HeroSection() {
    return (
        <section className={"min-h-screen grid grid-cols-12 items-center px-56 pb-0"}>
            <article className={"col-span-6 flex flex-col text-white gap-8 fade-in"}
                 style={{ "--fade-duration": "1.5s" } as React.CSSProperties}>
                <span className={"text-cyan-400 text-4xl font-bold uppercase"}>
                    {"Olá, Eu sou"}
                </span>
                <span className={"text-neutral-50 text-7xl font-bold uppercase"}>
                    {"Carlos Eduardo Pegoraro"}
                    <span className={"text-cyan-400 ms-4"}>{"Lopes"}</span>
                </span>
                <span className={"text-cyan-400 text-2xl font-semibold"}>
                    {"Economista & Desenvolvedor Pleno"}
                </span>
                <span className={"text-neutral-50 text-xl font-medium"}>
                    {"Transformo dados em decisões e código em soluções. Unindo Análise econômica, estratégia e tecnologia para desenvolver produtos digitais que geram impacto"}
                </span>
                <Link to={"/"} className={"text-neutral-50 text-lg font-bold  py-2 px-6 w-fit rounded-lg " +
                    "bg-cyan-800/30 backdrop-blur-2xl bg-clip-padding border-2 border-cyan-400/60 " +
                    "hover:bg-cyan-800/60 hover:border-cyan-800/60 duration-300 animate-pulse"}>
                    {" > Explorar o meu Trabalho"}
                </Link>
                <div className={"grid grid-cols-4 w-1/2"}>
                    <Link to={"https://github.com/CarlosPegoraro"} target={"_blank"}
                          className={"text-white text-5xl hover:text-cyan-800 duration-300"}>
                        <i className="bi bi-github"></i>
                    </Link>
                    <Link to={"https://www.linkedin.com/in/carlos-eduardo-pegoraro-lopes-426a7637b/?skipRedirect=true"} target={"_blank"}
                          className={"text-white text-5xl hover:text-cyan-800 duration-300"}>
                        <i className="bi bi-linkedin"></i>
                    </Link>
                    <Link to={"mailto:carlospegorarolopes@gmail.com"} target={"_blank"}
                          className={"text-white text-5xl hover:text-cyan-800 duration-300"}>
                        <i className="bi bi-envelope"></i>
                    </Link>
                    <a href={cv} download={"Carlos_Pegoraro_CV.png"}
                          className={"text-white text-5xl hover:text-cyan-800 duration-300"}>
                        <i className="bi bi-file-earmark-person"></i>
                    </a>
                </div>
            </article>
            <div className={"col-span-6 neo-pulse"}>
                <img src={brain} alt={"Brain"}/>
            </div>
        </section>
    )
}