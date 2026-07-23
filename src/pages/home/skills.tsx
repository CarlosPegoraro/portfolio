import SectionTitle from "@/components/SectionTitle.tsx";

export default function Skills() {
    return (
        <main className={"grid grid-cols-12 p-20 pt-10 bg-linear-to-t from-gray-950/40 to-transparent mx-30 rounded-lg"}>
            <SectionTitle text={"// Skills e Ferramentas"}/>
            <section className="skills-card col-span-6">
                <span className="skills-title">DESENVOLVIMENTO</span>
                <article className="skills-grid">
                    <div>Laravel</div>
                    <div>PHP</div>
                    <div>JavaScript</div>
                    <div>TypeScript</div>
                    <div>React</div>
                    <div>Tailwind</div>
                    <div>Livewire</div>
                    <div>Docker</div>
                    <div>Git</div>
                    <div>Linux</div>
                </article>
            </section>
        </main>
    )
}