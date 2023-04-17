import Bio from "../components/Bio";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";
import Hero from "../components/Hero";

export default function Page() {
    return (
        <>
            {/* <header className="bg-green-100 p-2">
                <section className="w-full mx-auto max-w-7xl bg-green-200 p-2"></section>
            </header> */}
            <main className="w-full mx-auto max-w-7xl">
                <Hero />
                <Bio />
                <ContactForm />
            </main>
            <Footer />
        </>
    );
}
