import { useState } from 'react';
import { CloseButton } from "../CloseButton";
import bugImageURL from "../../assets/bug.svg";
import ideaImageUrl from "../../assets/idea.svg";
import otherImageUrl from "../../assets/other.svg";
import { FeedbackTypeStep } from './Steps/FeedbackTypeStep';
import { FeedbackContentStep } from './Steps/FeedbackContentStep';
import { FeedbackSuccessStep } from './Steps/FeedbackSuccessStep';

export const feedbackTypes = {
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


export type FeedbackType = keyof typeof feedbackTypes;


export function WidgetForm() {

    const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null);
    const [feedbackSent, setFeedbackSent] = useState(false);


    function handleRestartFeedback() {
        setFeedbackSent(false);
        setFeedbackType(null);
    }

    return (

        <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">

            {feedbackSent ? (
                <FeedbackSuccessStep onFeedbackRestartRequested = {handleRestartFeedback} />

            ) : (

                <>
                    {!feedbackType ? (

                        <FeedbackTypeStep onFeedbackTypeChange={setFeedbackType} />

                    ) : (
                        <FeedbackContentStep
                            feedbackType={feedbackType}
                            onFeedbackRestartRequested={handleRestartFeedback}
                            onFeedbackSent={() => setFeedbackSent(true)}
                        />
                    )}
                </>
            )}



            <footer className="text-xs text-neutral-400">
                Feito com ♥ por <a className="underline underline-offset-2" target="_blank" href="https://github.com/FernandoBade">Fernando Bade</a>
            </footer>

        </div>
    );
}