import Image from "next/image";
import Logo from "./logo.svg";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-slate-950 text-slate-400 min-h-20 py-6 px-2">
            <section className="w-full mx-auto max-w-7xl flex flex-col sm:flex-row gap-20">
                <div className="flex-col flex gap-2">
                    <Link
                        href={"/"}
                        className="inline-block hover:[transform:scale(1.05)] transition-transform"
                    >
                        <Image src={Logo} alt="Lichodev Logo" height={80} />
                    </Link>
                </div>
                <div className="flex-col flex">
                    <h4 className="font-medium text-lg mb-2">
                        Mis redes sociales
                    </h4>
                    <a href="https://github.com/lichodev">GitHub</a>
                    <a href="https://www.linkedin.com/in/lisandromarcho/">
                        LinkedIn
                    </a>
                    <a href="https://instagram.com/licha.marcho">Instagram</a>
                    <a href="https://www.youtube.com/@Licho_">YouTube</a>
                </div>
                <div className="flex-col flex">
                    <h4 className="font-medium text-lg mb-2">Proyectos</h4>
                    <a href="https://licho.tk">licho.tk - url shortener</a>
                </div>
            </section>
        </footer>
    );
}
