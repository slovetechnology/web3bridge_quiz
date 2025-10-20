import React from "react";
import { useDispatch } from "react-redux";
import { ApiFetch, locals } from "~/components/ApiFetch";
import Formbutton from "~/components/Formbutton";
import GameMode from "~/components/GameMode";
import { dispatchQuestion } from "~/store/reducer";


export function meta() {
  return [
    { title: "Quiz App" },
    { name: "description", content: "Quiz App" },
  ];
}

export default function Home() {
  const [loading, setLoading] = React.useState(false)
  const [mode, setMode] = React.useState(false)
  const dispatch = useDispatch()
  const localStore = JSON.parse(localStorage.getItem(locals) || "[]")

  React.useEffect(() => {
    (() => {
      if (!locals) {
        localStorage.setItem(locals, JSON.stringify([]))
      }
    })()
  }, [])


  async function StartGame() {
    setLoading(true)
    const response = await ApiFetch({})
    dispatch(dispatchQuestion(response))
    setLoading(false)
    setMode(true)
  }

  if (!mode) return (
    <div className="flex items-center justify-center flex-col gap-10 h-screen">
      <div className="text-4xl md:text-5xl lg:text-6xl text-shadow-lg font-bold gap-2"> <span className="text-slate-500">Hi,</span> Ready to start your journey</div>
      <div className="size-fit mx-auto"> <Formbutton title="Get Started" onClick={StartGame} loading={loading} /> </div>
    </div>
  );

  if (mode) return <GameMode />
}
