type Props = {
    children: any;
    isWide?: boolean;
    className?: string;
};

export default function SectionContainer({
    children,
    isWide = true,
    className = "bg-slate-900 text-white",
}: Props) {
    return (
        <section
            className={`${className} ${
                !isWide && "page-content"
            } my-0 md:my-10`}
        >
            <div className={`p-10 ${isWide && "page-content"}`}>{children}</div>
        </section>
    );
}
