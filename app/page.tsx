import ContactForm from "../components/ContactForm";
import Hero from "../components/Hero";
import Negocios from "../components/Negocios";
import SectionContainer from "../components/SectionContainer";

export default function Page() {
    return (
        <main>
            <Hero />
            <Negocios />
            <SectionContainer className="bg-white shad">
                <h2 className="text-4xl font-extrabold">
                    Conectamos{" "}
                    <span className="font-extrabold text-transparent text-4xl bg-clip-text bg-gradient-to-bl from-green-300 via-blue-500 to-purple-600">
                        empleados
                    </span>
                </h2>
            </SectionContainer>
            <SectionContainer>
                <h2 className="text-4xl font-extrabold">
                    Bolsillo{" "}
                    <span className="font-extrabold text-transparent text-4xl bg-clip-text bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] from-yellow-100 via-yellow-300 to-yellow-500">
                        friendly
                    </span>
                </h2>
            </SectionContainer>
            <SectionContainer isWide={false}>
                <h2 className="text-4xl font-extrabold">
                    Amigos del{" "}
                    <span className="font-extrabold text-transparent text-4xl bg-clip-text bg-gradient-to-bl from-green-200 via-green-400 to-green-500">
                        OpenSource
                    </span>
                </h2>
            </SectionContainer>
            <SectionContainer>
                <h2 className="text-4xl font-extrabold">
                    Mejoramos{" "}
                    <span className="font-extrabold text-transparent text-4xl bg-clip-text bg-gradient-to-tr from-pink-500 via-red-500 to-yellow-500">
                        comunidades
                    </span>
                </h2>
            </SectionContainer>
            <SectionContainer isWide={false}>
                <h2 className="text-4xl font-extrabold">
                    Te asesoramos en{" "}
                    <span className="font-extrabold text-transparent text-4xl bg-clip-text bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400">
                        tu infraestructura
                    </span>
                </h2>
            </SectionContainer>
            <ContactForm />
        </main>
    );
}
