import React from "react";
import TheQuestion from "./TheQuestion";
import Answer from "./Answer";

export default function BackQuestions({ info, counterControl, setCounterControl, setResultIcons,resultIcons }) {
  const [start, setStart] = React.useState(true);
  return (
    <>
      {start ? (
        <TheQuestion info={info} setStart={setStart} start={start} />
      ) : (
        <Answer
          info={info}
          counterControl={counterControl}
          setCounterControl={setCounterControl}
          resultIcons={resultIcons}
          setResultIcons={setResultIcons}

        />
      )}
    </>
  );
}
