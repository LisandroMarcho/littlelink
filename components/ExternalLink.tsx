export default function ExternalLink({ href, children }) {
    return (
        <a
            className="font-bold border-b-4 border-b-primary-700 hover:border-b-primary-500"
            href={href}
        >
            {children}
        </a>
    );
}
