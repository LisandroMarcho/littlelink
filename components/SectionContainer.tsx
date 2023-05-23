type Props = {
    children: any;
    isWide?: boolean;
    className?: string;
    id?: string;
};

export default function SectionContainer({
    children,
    isWide = true,
    className = "bg-slate-900 text-white",
    id,
}: Props) {
    return (
        <section
            className={`${className} ${
                !isWide && "page-content"
            } my-0 lg:my-10`}
            id={id}
        >
            <div className={`p-10 ${isWide && "page-content"}`}>{children}</div>
        </section>
    );
}
