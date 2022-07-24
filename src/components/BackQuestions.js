import React from "react";
import TheQuestion from "./TheQuestion";
import Answer from "./Answer";
export default function BackQuestions({ info }) {
    const [start, setStart] = React.useState(true);
    return (
        <>
        {start ? 
        (
          <div className="back-question">
        <TheQuestion info = {info} setStart = {setStart} start = {start}/> 
        </div>)
        : <Answer info = {info}/>}
      </>
    )
       }

      