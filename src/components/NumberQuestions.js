import React from "react";

export default function NumberQuestions({info, setOpen, open}) {
    return (
      <>
      <div className="questions">
        <div className="question" onClick={() => setOpen(!open)}>
        <span>{info.number}</span>
        <ion-icon name="play-outline" ></ion-icon>
      </div>
      </div>
      
      </>
    )
    }


 