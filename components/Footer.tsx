export default function Footer() {
    return (
        <footer className="bg-slate-950 text-slate-400 min-h-20 py-6">
            <section className="w-full mx-auto max-w-7xl flex gap-40">
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
