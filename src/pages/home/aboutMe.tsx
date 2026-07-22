import profile from '@/assets/profile.jpeg'

export default function AboutMe() {
    return (
        <section className={"grid grid-cols-12 p-56"}>
            <h1 className={"text-cyan-400 uppercase text-4xl font-semibold col-span-12"}>
                {"// Sobre Mim"}
            </h1>
            <section className={"flex flex-col p-20"}>
                <article className={"bg-white w-50 h-50 rounded-full"}>
                    <img src={profile} alt={"Carlos Eduardo"}/>
                </article>
                <article>
                    teste
                </article>
                <article>
                    teste
                </article>
                <article>
                    teste
                </article>
                <article>
                    teste
                </article>
                <article>
                    teste
                </article>
            </section>
        </section>
    )
}