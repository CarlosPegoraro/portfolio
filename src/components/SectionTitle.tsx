interface SectionTitleProps {
    text: string
}

export default function SectionTitle({text} : SectionTitleProps) {
    return (
        <h1 className={"text-cyan-400 font-header uppercase text-4xl font-semibold col-span-12"}>
            {text}
        </h1>
    )
}