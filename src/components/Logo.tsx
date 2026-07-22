interface LogoProps {
    size?: string,
    variant?: string
}

export default function Logo({size = "text-2xl"} : LogoProps) {
    return (
        <div className={"font-bold " + size}>
            <span className={"text-emerald-400 font-bold me-2"}>{">"}</span>
            <span className={"text-white"}>{"C.EPL"}</span>
            <span className={"text-cyan-400 font-bold"}>{"_DEV"}</span>
        </div>
    )
}