import React from "react";
export default function Answer({ info }) {
  const [click, setClick] = React.useState(true);
  const [internCounter, setInternCounter] = React.useState(0); //para clicar
  const [counterControl, setCounterControl] = React.useState(0);
  const [choice, setChoice] = React.useState("controle");
  const [ion, setIon] = React.useState("ion");

  function ClickAnswerRed() {
    console.log("1: vc vai clicar");
    if (internCounter === 0) {
      console.log("2. entrou no contador 0");
      setCounterControl(counterControl + 1);
      setInternCounter(1);
      setClick(!click)
      setIon("close-circle")
      setChoice("question redChoice")
    }

    if (internCounter === 1) {
      console.log("3. tentou clicar de novo"); //para ter um contador controle
      console.log(internCounter);
      console.log(counterControl);
    }
  }
  
  function ClickAnswerOrange() {
    console.log("1: vc vai clicar");
    if (internCounter === 0) {
      console.log("2. entrou no contador 0");
      setCounterControl(counterControl + 1);
      setInternCounter(1);
      setClick(!click)
      setIon("help-circle")
      setChoice("question orangeChoice")
    }

    if (internCounter === 1) {
      console.log("3. tentou clicar de novo"); //para ter um contador controle
      console.log(internCounter);
      console.log(counterControl);
    }
  }

  function ClickAnswerGreen() {
    console.log("1: vc vai clicar");
    if (internCounter === 0) {
      console.log("2. entrou no contador 0");
      setCounterControl(counterControl + 1);
      setInternCounter(1);
      setClick(!click)
      setIon("checkmark-circle")
      setChoice("question greenChoice")
    }

    if (internCounter === 1) {
      console.log("3. tentou clicar de novo"); //para ter um contador controle
      console.log(internCounter);
      console.log(counterControl);
    }
  }

  return (
  <>
        {click ? (
          <div className="questions">
          <div className="back-question">
            <span>{info.answer}</span>
            <div className="selection">
              <div className="redAnswer" onClick={ClickAnswerRed}>
                Não lembrei
              </div>
              <div className="orangeAnswer" onClick={ClickAnswerOrange}>
                Quase não lembrei
              </div>
              <div className="greenAnswer" onClick={ClickAnswerGreen}>
                Zap!
              </div>
            </div>
            </div>
            </div>
        ) : (
          <div className="questions">
          <div className={choice}>
            <span>{info.number}</span>
            <ion-icon name={ion}></ion-icon>
            </div>
            </div>
        )}
      </>
    
  );
}


