import {Link} from "react-router";
import brain from "@/assets/brain-neon.svg"
import cv from "@/assets/hero.png"

interface HeroSectionProps {
    isActive?: boolean;
}

export default function HeroSection({isActive = true}: HeroSectionProps) {
    return (
        <section className="mx-auto grid min-h-screen max-w-[1600px] grid-cols-1 items-center gap-10 px-5 pb-12 pt-28 sm:px-8 md:pt-32 lg:grid-cols-2 lg:px-12 xl:px-16">
            <article className={`flex flex-col gap-6 text-white lg:gap-8 ${isActive ? "fade-in" : ""}`}
                 style={{ "--fade-duration": "1.5s" } as React.CSSProperties}>
                <span className="font-bold uppercase text-cyan-400 text-2xl sm:text-3xl lg:text-4xl">
                    {"Olá, eu sou"}
                </span>
                <h1 className="font-bold uppercase text-neutral-50 text-4xl leading-tight sm:text-5xl lg:text-6xl xl:text-7xl">
                    {"Carlos Eduardo Pegoraro"}
                    <span className={"text-cyan-400 ms-4"}>{"Lopes"}</span>
                </h1>
                <span className="text-xl font-semibold text-cyan-400 sm:text-2xl">
                    {"Economista & Desenvolvedor Pleno"}
                </span>
                <span className="max-w-2xl text-base font-medium text-neutral-50 sm:text-lg lg:text-xl">
                    {"Transformo dados em decisões e código em soluções, unindo análise econômica, estratégia e tecnologia para desenvolver produtos digitais que geram impacto."}
                </span>
                <a href="#projects" className={"text-neutral-50 text-lg font-bold  py-2 px-6 w-fit rounded-lg " +
                    "bg-cyan-800/30 backdrop-blur-2xl bg-clip-padding border-2 border-cyan-400/60 " +
                    "hover:bg-cyan-800/60 hover:border-cyan-800/60 duration-300 animate-pulse"}>
                    {" > Explorar meu trabalho"}
                </a>
                <div className="grid w-full max-w-xs grid-cols-4">
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
            <div className={`mx-auto w-full max-w-md lg:max-w-none ${isActive ? "neo-pulse" : ""}`}>
                <img src={brain} alt={"Brain"} className="h-auto w-full"/>
            </div>
        </section>
    )
}
