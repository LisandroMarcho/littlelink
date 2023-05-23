import Hero from "../components/Hero";
import Negocios from "../components/Negocios";
import SectionContainer from "../components/SectionContainer";

export default function Page() {
    return (
        <main>
            <Hero />
            <Negocios />
            <SectionContainer>
                <h2 className="text-4xl font-extrabold">
                    Conectamos{" "}
                    <span className="font-extrabold text-transparent text-4xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                        empleados
                    </span>
                </h2>
            </SectionContainer>
            <SectionContainer isWide={false}>
                <h2 className="text-4xl font-extrabold">
                    Bolsillo{" "}
                    <span className="font-extrabold text-transparent text-4xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                        friendly
                    </span>
                </h2>
            </SectionContainer>
            <SectionContainer>
                <h2 className="text-4xl font-extrabold">
                    Amigos del{" "}
                    <span className="font-extrabold text-transparent text-4xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                        OpenSource
                    </span>
                </h2>
            </SectionContainer>
            <SectionContainer isWide={false}>
                <h2 className="text-4xl font-extrabold">
                    Mejoramos{" "}
                    <span className="font-extrabold text-transparent text-4xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                        comunidades
                    </span>
                </h2>
            </SectionContainer>
            <SectionContainer>
                <h2 className="text-4xl font-extrabold">
                    Te asesoramos en{" "}
                    <span className="font-extrabold text-transparent text-4xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                        tu infraestructura
                    </span>
                </h2>
            </SectionContainer>
            <SectionContainer isWide={false}>
                <h2 className="text-4xl font-extrabold">
                    Formulario{" "}
                    <span className="font-extrabold text-transparent text-4xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                        contacto
                    </span>
                </h2>
            </SectionContainer>
        </main>
    );
}
