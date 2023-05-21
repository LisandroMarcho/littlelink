import ContactForm from "../components/ContactForm";
import Hero from "../components/Hero";

export default function Page() {
    return (
        <main className="w-full mx-auto max-w-7xl">
            <Hero />
            <ContactForm />
        </main>
    );
}
