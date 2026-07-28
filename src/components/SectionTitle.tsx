interface SectionTitleProps {
    text: string
}

export default function SectionTitle({text} : SectionTitleProps) {
    return (
        <h2 className="font-header text-3xl font-semibold uppercase text-cyan-400 sm:text-4xl lg:col-span-12">
            {text}
        </h2>
    )
}
