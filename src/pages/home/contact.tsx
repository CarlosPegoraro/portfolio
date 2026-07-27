import {useInView} from "@/hooks/useInView.tsx";
import SectionTitle from "@/components/SectionTitle.tsx";

const contactDetails = [
    {icon: "bi-envelope", label: "E-mail", value: "carlospegorarolopes@gmail.com", href: "mailto:carlospegorarolopes@gmail.com", color: "text-cyan-400"},
    {icon: "bi-geo-alt", label: "Localização", value: "Sorocaba, SP - Brasil", color: "text-violet-400"},
    {icon: "bi-alarm", label: "Disponibilidade", value: "Projetos & Consultorias", color: "text-cyan-400"},
    {icon: "bi-briefcase", label: "Redes", value: "GitHub | LinkedIn", href: "https://www.linkedin.com/in/carlos-eduardo-pegoraro-lopes-426a7637b/", color: "text-violet-400"},
];

export default function Contact() {
    const {ref, isVisible} = useInView<HTMLElement>({
        threshold: 0.15,
        triggerOnce: true,
    });

    return (
        <main ref={ref} id="contato"
              className={`mx-4 grid grid-cols-1 gap-5 rounded-lg bg-linear-to-b from-gray-950/40 to-transparent px-5 py-10 sm:mx-8 sm:px-8 lg:mx-auto lg:max-w-[1600px] lg:grid-cols-12 lg:px-12 lg:py-14 xl:px-16 ${
                  isVisible ? "fade-in" : "opacity-0"
              }`}>
            <section className="lg:col-span-12">
               <SectionTitle text={"// Vamos Conversar?"}/>
                <p className="mt-2 font-code text-base text-slate-200">Tem um projeto ou oportunidade? Vamos criar algo incrível juntos.</p>
            </section>

            <section className="grid rounded-xl border border-cyan-950 bg-slate-950/65 px-5 py-5 shadow-[inset_0_0_20px_rgba(8,47,73,0.16)] backdrop-blur-sm sm:grid-cols-2 lg:col-span-12 xl:grid-cols-4">
                {contactDetails.map((detail, index) => {
                    const content = <>
                        <i className={`bi ${detail.icon} text-3xl ${detail.color}`}/>
                        <span>
                            <strong className="block font-code text-sm font-bold text-white">{detail.label}</strong>
                            <small className="mt-1 block font-code text-xs text-slate-300">{detail.value}</small>
                        </span>
                    </>;

                    return detail.href ? (
                        <a key={detail.label} href={detail.href} target={detail.href.startsWith("http") ? "_blank" : undefined}
                           rel={detail.href.startsWith("http") ? "noreferrer" : undefined}
                           className={`flex items-center gap-4 py-3 transition-colors hover:text-cyan-200 xl:px-5 ${
                               index > 0 ? "xl:border-l xl:border-cyan-950" : ""
                           }`}>
                            {content}
                        </a>
                    ) : (
                        <article key={detail.label} className={`flex items-center gap-4 py-3 xl:px-5 ${
                            index > 0 ? "xl:border-l xl:border-cyan-950" : ""
                        }`}>
                            {content}
                        </article>
                    );
                })}
            </section>

            <form className="grid gap-5 rounded-xl border border-cyan-950 bg-slate-950/65 p-5 shadow-[inset_0_0_20px_rgba(8,47,73,0.16)] backdrop-blur-sm md:grid-cols-12 lg:col-span-12"
                  action="mailto:carlos.pegoraro@gmail.com" method="post" encType="text/plain">
                <label className="flex flex-col gap-2 md:col-span-3">
                    <span className="font-code text-sm font-bold text-slate-200">Nome</span>
                    <input name="nome" required placeholder="Seu nome"
                           className="rounded-md border border-slate-800 bg-slate-900/80 px-3 py-3 font-code text-sm text-white outline-none placeholder:text-slate-500 focus:border-cyan-500"/>
                </label>
                <label className="flex flex-col gap-2 md:col-span-3">
                    <span className="font-code text-sm font-bold text-slate-200">E-mail</span>
                    <input name="email" type="email" required placeholder="seu@email.com"
                           className="rounded-md border border-slate-800 bg-slate-900/80 px-3 py-3 font-code text-sm text-white outline-none placeholder:text-slate-500 focus:border-cyan-500"/>
                </label>
                <label className="flex flex-col gap-2 md:col-span-4">
                    <span className="font-code text-sm font-bold text-slate-200">Mensagem</span>
                    <textarea name="mensagem" required rows={1} placeholder="Como posso te ajudar?"
                              className="min-h-11 resize-y rounded-md border border-slate-800 bg-slate-900/80 px-3 py-3 font-code text-sm text-white outline-none placeholder:text-slate-500 focus:border-cyan-500"/>
                </label>
                <div className="flex items-end md:col-span-2">
                    <button type="submit" className="h-11 w-full rounded-md border border-violet-400/50 bg-linear-to-r from-blue-800 to-violet-700 px-5 font-code text-sm font-bold text-white transition hover:from-blue-700 hover:to-violet-600">
                        enviar mensagem <i className="bi bi-arrow-right ml-2"/>
                    </button>
                </div>
            </form>
        </main>
    );
}
