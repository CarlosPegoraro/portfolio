type ProjectProps = {
    title: string;
    img: string;
    description: string;
    stacks: string;
}

export default function Project(props: ProjectProps) {
    // const cardStyle = {
    //     backgroundImage: `url(${props.img})`,
    //     backgroundSize: "cover",
    //     backgroundPosition: "center",
    //     width: "800px"
    // };

    return (
        <div className="flex flex-col sm:flex-row justify-between rounded-lg shadow-xl">
            <div className="flex flex-col p-10 gap-10 sm:gap-0 justify-between 
                border-2 border-transparent dark:border-teal-600 border-b-0 sm:border-b-2 sm:border-r-0 
                rounded-t-lg sm:rounded-t-none sm:rounded-ss-lg sm:rounded-l-lg">
                <div className="flex flex-col gap-10">
                    <h1 className="text-teal-500 text-2xl sm:text-3xl font-bold">{props.title}</h1>
                    <p className="text-neutral-800 dark:text-neutral-300 text-lg">{props.description}</p>
                </div>
                <p className="text-teal-600 text-md">{props.stacks}</p>
            </div>
            <img src={props.img} alt={props.title} style={{ maxHeight: "600px" }} className="w-full sm:w-1/2 opacity-75" />
        </div>
    );
}
