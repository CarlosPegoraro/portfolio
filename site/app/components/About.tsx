import Image from "next/image";
import coding from '../../assets/coding.png'

export default function About() {
    return (
        <div className="flex justify-around p-10 my-10">
            <div className="flex flex-col gap-10 w-1/2">
                <h1 className="text-4xl font-bold text-teal-500">About Me</h1>
                <p className="text-2xl text-neutral-800 dark:text-neutral-200 w-4/6">
                    I&apos;m a software engineer with 5 years of experience in web development. I&apos;m passionate about technology and I&apos;m always looking for new challenges.
                </p>
            </div>
            <Image src={coding} alt="Coding" className="rounded-full" style={{
                boxShadow: '0px 0px 15px 0px #2EC1CB80',
                userSelect: 'none'
             }}/>
        </div>
    );
}