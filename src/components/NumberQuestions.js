import React from "react";

export default function NumberQuestions({info, setOpen, open}) {
    return (
      <>
      <div className="questions">
        <div className="question">
        <span>{info.number}</span>
        <ion-icon name="play-outline" onClick={() => setOpen(!open)}></ion-icon>
      </div>
      </div>
      
      </>
    )
    }


 