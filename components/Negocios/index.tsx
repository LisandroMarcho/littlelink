import SectionContainer from "../SectionContainer";

export default function Negocios() {
    return (
        <SectionContainer isWide={false}>
            <h2 className="text-4xl font-extrabold">
                Digitalizamos{" "}
                <span className="font-extrabold text-transparent text-4xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                    negocios
                </span>
            </h2>
        </SectionContainer>
    );
}
