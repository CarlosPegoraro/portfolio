import type {CSSProperties} from "react";

export interface ProjectCardProps {
    title: string
    image: string
    text: string
    animationTime?: string
    badges?: string[] | null
    colSize?: string
}


export default function ProjectCard({title, image, text, animationTime = '1.2s', badges = null, colSize = 'col-span-1'} : ProjectCardProps) {
    return (
        <div className={"border-2 border-cyan-800 bg-clip-padding bg-cyan-800/10 rounded-lg fade-in " + colSize}
             style={{ "--fade-duration": animationTime } as CSSProperties}>
            <img src={image} alt={title} className="aspect-video w-full object-cover"/>
            <div className="flex flex-col gap-5 p-5 sm:p-7 lg:p-10">
                <h1 className={"text-cyan-400 font-code text-xl"}>{title}</h1>
                <p className={"text-lg font-light"}>{text}</p>
                <div className="grid grid-cols-1 gap-2 lg:grid-cols-2">
                    {badges?.map((badge: string) => (
                        <p key={badge} className={"px-2 py-2 border-2 rounded-lg border-cyan-800 bg-cyan-800/10 backdrop-blur-xl bg-clip-padding text-sm " +
                            "text-cyan-400 items-center justify-center flex"}>
                            {badge}
                        </p>
                    ))}
                </div>
            </div>
        </div>
    )
}
