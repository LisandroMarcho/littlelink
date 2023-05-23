import { useId } from "react";
import type { HTMLInputTypeAttribute } from "react";
import SectionContainer from "./SectionContainer";

const Label = ({ text, htmlFor }: { text: string; htmlFor: string }) => (
    <label
        className="block mb-1 uppercase font-bold text-slate-400"
        htmlFor={htmlFor}
    >
        {text}
    </label>
);

const Input = ({
    type,
    id,
    placeholder,
}: {
    type: HTMLInputTypeAttribute;
    id: string;
    placeholder?: string;
}) => (
    <input
        type={type}
        id={id}
        className="w-full p-2 pb-1 text-white bg-slate-700 border-b-4 outline-none border-b-slate-600 focus:border-b-white valid:border-b-primary-500 invalid:border-b-red-500"
        placeholder={placeholder}
        required
    />
);

export default function ContactForm() {
    const id = useId();

    return (
        <SectionContainer isWide={false} id="contact">
            <h2 className="w-full mb-5 text-4xl font-bold">Aún tenés dudas?</h2>
            <div className="flex flex-col md:flex-row justify-between">
                <form className="flex flex-col gap-5 text-white w-full md:w-[500px]">
                    <section>
                        <Label text={"Nombre"} htmlFor={`${id}-name`} />
                        <Input type="text" id={`${id}-name`} />
                    </section>
                    <section>
                        <Label text={"Email"} htmlFor={`${id}-email`} />
                        <Input
                            type="email"
                            id={`${id}-email`}
                            placeholder="Ej: tu@correo.com"
                        />
                    </section>
                    <section>
                        <Label text={"Mensaje"} htmlFor={`${id}-message`} />
                        <Input type="text" id={`${id}-message`} />
                    </section>
                    <button
                        type="submit"
                        className="uppercase font-bold text-xl py-4 px-10 mt-5 bg-primary-800 text-gray-200 w-full hover:bg-primary-700 active:bg-primary-900 transition-colors"
                    >
                        Consultar
                    </button>
                </form>
                <div className="order-first md:order-last"></div>
            </div>
        </SectionContainer>
    );
}
