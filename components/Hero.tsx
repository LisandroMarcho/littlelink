import Image from "next/image";
import ExternalLink from "./ExternalLink";

export default function Hero() {
    const imgSize = 230;
    return (
        <section className="my-10">
            <div className="flex gap-5">
                <Image
                    src={"/avatar.jpg"}
                    alt="Avatar picture"
                    width={imgSize}
                    height={imgSize}
                    className="rounded-full shadow-lg"
                />
                <div className="flex flex-col flex-wrap justify-center max-w-2xl">
                    <span className="text-4xl">Hola, me llamo</span>
                    <h1 className="text-5xl text-primary-500">
                        <span className="font-extrabold">Lisandro</span>{" "}
                        Marchionni
                    </h1>
                    <p className="mt-5">
                        Soy estudiante de la{" "}
                        <ExternalLink href={"https://exa.unicen.edu.ar"}>
                            Facultad de Ciencias Exactas, UNICEN.
                        </ExternalLink>
                    </p>
                    <p className="mt-2">
                        Me estoy especializando en el área de{" "}
                        <b>Infraestructura, DevOps y Networking</b> aunque
                        también he hecho desarrollos de sistemas escritos en PHP
                        y MySQL.
                    </p>
                </div>
            </div>
        </section>
    );
}
