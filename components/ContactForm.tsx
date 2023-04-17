import { useId } from "react";
import type { HTMLInputTypeAttribute } from "react";

const Label = ({ text, htmlFor }: { text: string; htmlFor: string }) => (
    <label className="block mb-1" htmlFor={htmlFor}>
        {text}
    </label>
);

const Input = ({ type, id }: { type: HTMLInputTypeAttribute; id: string }) => (
    <input
        type={type}
        id={id}
        className="w-96 p-2 text-black font-bold rounded"
        required
    />
);

export default function ContactForm() {
    const id = useId();

    return (
        <form className="bg-slate-800 text-white p-6 w-fit rounded">
            <h2 className="w-full text-3xl mb-5">Contactame</h2>
            <div className="flex gap-16">
                <div className="flex-col flex justify-between">
                    <section>
                        <Label text={"Nombre"} htmlFor={`${id}-name`} />
                        <Input type="text" id={`${id}-name`} />
                    </section>
                    <section>
                        <Label text={"Email"} htmlFor={`${id}-email`} />
                        <Input type="email" id={`${id}-email`} />
                    </section>
                    <section>
                        <Label text={"Asunto"} htmlFor={`${id}-subject`} />
                        <Input type="text" id={`${id}-subject`} />
                    </section>
                </div>
                <div>
                    <Label text={"Mensaje"} htmlFor={`${id}-message`} />
                    <textarea
                        name="message"
                        id={`${id}-message`}
                        cols={40}
                        rows={8}
                        className="rounded text-black p-2"
                    ></textarea>
                </div>
            </div>
            <button
                type="submit"
                className="mt-5 rounded p-2 bg-slate-400 text-black"
            >
                Enviar
            </button>
        </form>
    );
}
