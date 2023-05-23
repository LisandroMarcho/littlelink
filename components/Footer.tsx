import Image from "next/image";
import Logo from "./logo.svg";
import Link from "next/link";
import { RxDoubleArrowUp } from "react-icons/rx";

const FooterLink = ({
    children,
    href,
    external = false,
}: {
    href: string;
    children: string;
    external?: boolean;
}) => (
    <a
        href={href}
        className="hover:text-slate-300"
        target={external ? "_blank" : "_self"}
    >
        {children}
    </a>
);

export default function Footer() {
    return (
        <footer className="bg-slate-950 text-slate-400">
            <section className="flex flex-col gap-10 md:gap-0 justify-between sm:flex-row p-10 page-content">
                <div className="flex-col flex gap-2 order-last sm:order-first">
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
                    <FooterLink href="https://github.com/lichodev" external>
                        GitHub
                    </FooterLink>
                    <FooterLink
                        href="https://www.linkedin.com/in/lisandromarcho/"
                        external
                    >
                        LinkedIn
                    </FooterLink>
                    <FooterLink
                        href="https://instagram.com/licha.marcho"
                        external
                    >
                        Instagram
                    </FooterLink>
                    <FooterLink href="https://www.youtube.com/@Licho_" external>
                        YouTube
                    </FooterLink>
                </div>
                <div className="flex-col flex">
                    <h4 className="font-medium text-lg mb-2">Proyectos</h4>
                    <FooterLink href="https://licho.tk">
                        licho.tk - url shortener
                    </FooterLink>
                </div>
                <div className="flex-col flex">
                    <h4 className="font-medium text-lg mb-2">Acceso interno</h4>
                    <FooterLink href="#">Portal Clientes</FooterLink>
                </div>
                <div className="order-last">
                    <a
                        href="#"
                        className="inline-block bg-primary-800 p-4 sm:aspect-square hover:-translate-y-1 transition-transform"
                    >
                        <RxDoubleArrowUp className="inline-block text-white mx-auto text-3xl font-bold" />
                        <span className="sm:hidden ms-2 text-white uppercase">
                            Inicio de página
                        </span>
                    </a>
                </div>
            </section>
        </footer>
    );
}
