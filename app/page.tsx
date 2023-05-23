import Hero from "../components/Hero";
import Negocios from "../components/Negocios";

export default function Page() {
    return (
        <main>
            <Hero />
            <Negocios />
            <section className="bg-slate-900 text-white my-10">
                <div className="p-10 page-content">
                    <h2 className="text-4xl font-extrabold">
                        Conectamos{" "}
                        <span className="font-extrabold text-transparent text-4xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                            empleados
                        </span>
                    </h2>
                </div>
            </section>
            <section className="bg-slate-900 text-white page-content my-10">
                <div className="p-10">
                    <h2 className="text-4xl font-extrabold">
                        Bolsillo{" "}
                        <span className="font-extrabold text-transparent text-4xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                            friendly
                        </span>
                    </h2>
                </div>
            </section>
            <section className="bg-slate-900 text-white my-10">
                <div className="p-10 page-content">
                    <h2 className="text-4xl font-extrabold">
                        Amigos del{" "}
                        <span className="font-extrabold text-transparent text-4xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                            OpenSource
                        </span>
                    </h2>
                </div>
            </section>
            <section className="bg-slate-900 text-white page-content my-10">
                <div className="p-10">
                    <h2 className="text-4xl font-extrabold">
                        Mejoramos{" "}
                        <span className="font-extrabold text-transparent text-4xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                            comunidades
                        </span>
                    </h2>
                </div>
            </section>
            <section className="bg-slate-900 text-white my-10">
                <div className="p-10 page-content">
                    <h2 className="text-4xl font-extrabold">
                        Te asesoramos en{" "}
                        <span className="font-extrabold text-transparent text-4xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                            tu infraestructura
                        </span>
                    </h2>
                </div>
            </section>
            <section className="bg-slate-900 text-white my-10  page-content">
                <div className="p-10">
                    <h2 className="text-4xl font-extrabold">
                        Formulario{" "}
                        <span className="font-extrabold text-transparent text-4xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                            contacto
                        </span>
                    </h2>
                </div>
            </section>
        </main>
    );
}
