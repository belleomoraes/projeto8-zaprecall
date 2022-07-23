import React from "react";
import TheQuestion from "./TheQuestion";
import Answer from "./Answer";
export default function BackQuestions({ start, setStart, info }) {
    return (
        <>
        <div className="back-question">{start ? <TheQuestion info = {info} setStart = {setStart} start = {start}/> : <Answer info = {info}/>}</div>
      </>
    )
       }

      