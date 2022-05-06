import { CloseButton } from "./CloseButton";
import bugImageURL from "../assets/bug.svg";
import ideaImageUrl from "../assets/idea.svg";
import otherImageUrl from "../assets/other.svg";

const feedbackTypes = {
    BUG: {
        title: "Problema",
        image: {
            source: bugImageURL,
            alt: 'Imagem de um inseto'
        },
    },
    IDEA: {
        title: "Ideia",
        image: {
            source: ideaImageUrl,
            alt: 'Imagem de uma lâmpada'
        },
    },

    OTHER: {
        title: "Outro",
        image: {
            source: otherImageUrl,
            alt: 'Imagem de um balão de pensamento'
        },
    }
};

//Object.keys(feedbackTypes) RETORNA:
// [
//     [BUG, {...}]
//     [IDEA, {...}]
//     [OTHER, {...}]
// ]


export function WidgetForm() {
    return (
        <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
            <header>
                <span className="text-xl leading-6">Deixe seu feedback</span>
                <CloseButton />
            </header>

            <div className="flex py-8 gap-2 w-full-width">
                {Object.entries(feedbackTypes).map(([key, value]) => {
                    return (
                    <button>
                        <img src={value.image.source} alt={value.image.alt} />
                        <span>{value.title}</span>
                    </button>
                )
                })}


            </div>

            <footer className="text-xs text-neutral-400">
                Feito com ♥ por <a className="underline underline-offset-2" target="_blank" href="https://github.com/FernandoBade">Fernando Bade</a>
            </footer>

        </div>
    );
}