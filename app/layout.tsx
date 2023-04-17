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
            <body className="bg-slate-300">{children}</body>
        </html>
    );
}
