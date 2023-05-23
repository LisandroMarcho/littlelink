import Footer from "../components/Footer";
import Header from "../components/Header";
import "./global.css";

export const metadata = {
    title: "Lisandro Marchionni",
    description: "DevOps student and IT enthusiast",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="es">
            <body className="bg-white min-h-screen">
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    );
}
