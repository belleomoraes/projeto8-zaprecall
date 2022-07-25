import React from "react";

export default function Answer({
  info,
  counterControl,
  setCounterControl,
  setResultIcons,
  resultIcons,
}) {
  const [click, setClick] = React.useState(true);
  const [choice, setChoice] = React.useState("controle");
  const [ion, setIon] = React.useState("ion");

  function ClickAnswerRed() {
    setClick(!click);
    setIon("close-circle");
    setChoice("question redChoice");
    setCounterControl(counterControl + 1);
    setResultIcons([...resultIcons, { icon: "close-circle", color: "redChoice" }]);
  }

  function ClickAnswerOrange() {
    setClick(!click);
    setIon("help-circle");
    setChoice("question orangeChoice");
    setCounterControl(counterControl + 1);
    setResultIcons([...resultIcons, { icon: "help-circle", color: "orangeChoice" }]);
  }

  function ClickAnswerGreen() {
    setClick(!click);
    setIon("checkmark-circle");
    setChoice("question greenChoice");
    setCounterControl(counterControl + 1);
    setResultIcons([...resultIcons, { icon: "checkmark-circle", color: "greenChoice" }]);
  }

  return (
    <>
      <div className="questions">
        {click ? (
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
        ) : (
          <div className={choice}>
            <span>{info.number}</span>
            <ion-icon name={ion}></ion-icon>
          </div>
        )}
      </div>
    </>
  );
}
