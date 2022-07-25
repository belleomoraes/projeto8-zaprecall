
import React from "react";
import sad from "../assets/sad.png";
import party from "../assets/party.png"
export default function Counter({ counterControl, resultIcons }) {
  const found = resultIcons.some((icon) => icon.icon === "close-circle");
  console.log(found);

  return (
    <>
      <div className="counterControl">
        {counterControl !== 8 ? <></> : found ? 
        <div className="result">
         <span>
        <img src={sad}/>
        Putz!
        </span>
        <h1>Ainda faltam alguns...
        Mas não desanime!
        </h1>
        
        </div> : 
         <div className="result">
        <span>
        <img src={party}/>
        Parabéns!
        </span>
        <h1>Você não esqueceu de nenhum flashcard!!</h1>
        </div>}
        <span>{counterControl}/8 CONCLUÍDOS</span>
        <div className="ions">
          {resultIcons.map((info, index) => (
            <div key={index} className={info.color}>
              <ion-icon name={info.icon}></ion-icon>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
