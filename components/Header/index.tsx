import Image from "next/image";
import Logo from "./logo.svg";
import Link from "next/link";

export default function Header() {
    return (
        <header className="bg-primary-800">
            <section className="flex items-center uppercase text-white w-full mx-auto max-w-7xl py-5">
                <Link
                    href={"/"}
                    className="inline-block hover:[transform:scale(1.05)] transition-transform"
                >
                    <Image src={Logo} alt="Lichodev Logo" height={80} />
                </Link>

                <nav className="flex gap-4">
                    <Link href={"/nosotros"}>Nosotros</Link>
                    <Link href={"/servicios"}>Servicios</Link>
                    <Link href={"/contacto"}>Contacto</Link>
                </nav>
            </section>
        </header>
    );
}