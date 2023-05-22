export default function Hero() {
    const imgSize = 230;
    return (
        <section className="my-10 px-2">
            <div className="flex gap-5">
                <div className="flex flex-col flex-wrap justify-center max-w-2xl">
                    <span className="text-4xl">Nos dedicamos a</span>
                    <h1 className="text-5xl text-primary-500 font-extrabold">
                        Soluciones IT en el Cloud
                    </h1>
                    <ul className="text-2xl mt-4 list-inside list-disc">
                        <li>Despliegue de sistemas informáticos</li>
                        <li>Diseño de redes de datos</li>
                        <li>Conexiones remotas con VPN</li>
                        <li>Proveedores como AWS y DigitalOcean</li>
                    </ul>
                </div>
                <div></div>
            </div>
        </section>
    );
}
