import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Alert, ApiFetch, locals } from '~/components/ApiFetch'
import Formbutton from '~/components/Formbutton'
import { dispatchQuestion } from '~/store/reducer'
import type { RootState } from '~/store/store'

type localProps = {
    question: string
    answer: string
    selected: string
    result: string
}

export default function GameMode() {
    const { question } = useSelector((state: RootState) => state.data)
    const [selected, setSelected] = React.useState("")
    const [correct, setCorrect] = React.useState("")
    const [loading, setLoading] = React.useState(false)
    const dispatch = useDispatch()
    const localStore = JSON.parse(localStorage.getItem(locals) || "[]")


    function HandleSelection(item: string) {
        setSelected(item)
    }

    async function SaveAndContinue() {
        setLoading(true)
        const response = await ApiFetch({})
        dispatch(dispatchQuestion(response))
        setLoading(false)

        setCorrect("")
        setSelected("")
    }

    function CheckAnswer() {
        if (!selected) return Alert('Kindly select an answer to proceed to the next question', "info")

        let result = ""
        if (selected === question.correct_answer) {
            setCorrect("true")
            result = "true"
        } else {
            setCorrect("false")
            result = "false"
        }

        const data = {
            question: question.question,
            answer: question.correct_answer,
            selected: selected,
            result: result
        }
        // Get previous results or empty array
        const existing = JSON.parse(localStorage.getItem(locals) || '[]') || [];

        // Add new result
        const updated = [...existing, data];

        // Save back to localStorage
        localStorage.setItem(locals, JSON.stringify(updated));
    }
    return (
        <div className='min-h-screen bg-slate-100 flex items-center justify-center'>
            <div className="bg-white p-5 rounded-lg w-11/12 max-w-2xl">
                <div className="font-bold text-center text-2xl" dangerouslySetInnerHTML={{ __html: (question?.question || '') }} />
                <div className="mt-10 grid grid-cols-2 gap-4">
                    {question.options?.map((item, index) => {
                        let result = "hover:bg-slate-100 border-gray-300"
                        if (selected === item) result = 'bg-amber-100 hover:bg-amber-100 border-amber-300'
                        if (selected === item && correct === 'true') result = 'bg-green-100 hover:bg-green-100 border-green-300'
                        if (selected === item && correct === 'false') result = 'bg-red-100 hover:bg-red-100 border-red-300'
                        return (
                            <div
                                onClick={() => HandleSelection(item)}
                                key={index} className={`
                            ${result}
                            border cursor-pointer active:scale-95 transition-all rounded-md py-3 px-4 text-center
                            `}>{item}</div>
                        )
                    })}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 mt-10">
                    <div className=""></div>
                    {correct === "" && <div className=""> <Formbutton title={"Check"} onClick={CheckAnswer} /> </div>}
                    {correct !== "" && <div className=""> <Formbutton title={"Next"} loading={loading} onClick={SaveAndContinue} /> </div>}
                </div>
            </div>
        </div>
    )
}
