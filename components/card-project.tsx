import Link from "next/link";
import { Button } from "./ui/button";

interface CardProjectProps {
    src: string;
    title: string;
    subtitle: string;
    href: string;
}


export default function CardProject(props: CardProjectProps) {
    const { src, title, subtitle, href } = props;
    return (
        <div className="relative">
            <img src={src} alt="" />
            <div className="relative -top-20 bg-white p-4 rounded-lg shadow-md w-64 mx-auto text-center">
                <p className="text-orange-500 font-semibold mt-4">{subtitle}</p>
                <h3 className="text-2xl font-semibold text-zinc-900 mt-1">
                    {title}
                </h3>
                <Button asChild variant={"outline"} className="mt-4 hover:bg-orange-500 hover:text-white">
                    <Link href={href}>Ver más</Link>
                </Button>

            </div>
        </div>
    )
}
