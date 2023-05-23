"use client";

import Image from "next/image";
import Logo from "./logo.svg";
import Link from "next/link";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";

export default function Header() {
    return (
        <header className="bg-primary-800">
            <section className="flex items-center text-white page-content py-5 px-10">
                <Link
                    href={"/"}
                    className="inline-block hover:[transform:scale(1.05)] transition-transform"
                >
                    <Image src={Logo} alt="Lichodev Logo" height={80} />
                </Link>

                {/* <NavigationMenu.Root>
                    <NavigationMenu.List className="flex gap-2">
                        <NavigationMenu.Item>
                            <NavigationMenu.Link href="https://blog.lichodev.com.ar">
                                Publicaciones
                            </NavigationMenu.Link>
                        </NavigationMenu.Item>
                        <NavigationMenu.Item>
                            <NavigationMenu.Trigger>
                                Menu
                            </NavigationMenu.Trigger>
                            <NavigationMenu.Content>
                                Hola
                            </NavigationMenu.Content>
                        </NavigationMenu.Item>
                    </NavigationMenu.List>
                </NavigationMenu.Root> */}
            </section>
        </header>
    );
}
