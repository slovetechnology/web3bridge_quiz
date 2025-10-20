import React from 'react'
import { useSelector } from 'react-redux'
import type { RootState } from '~/store/store'

export default function GameMode() {
    const { question } = useSelector((state: RootState) => state.data)

    return (
        <div className='min-h-screen bg-slate-100 flex items-center justify-center'>
            <div className="bg-white p-5 rounded-lg w-11/12 max-w-2xl">
                <div className="font-bold text-center text-2xl" dangerouslySetInnerHTML={{__html: (question?.question || '')}} />
                <div className="mt-10 grid grid-cols-2 gap-4">
                    {question.options?.map((item, index) => (
                        <div key={index} className="border border-gray-300 hover:bg-slate-100 cursor-pointer active:scale-95 transition-all rounded-md py-3 px-4 text-center">{item}</div>
                    ))}
                </div>
            </div>
        </div>
    )
}
