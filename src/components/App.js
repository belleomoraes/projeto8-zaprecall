import React from "react"
import Screen1 from "./Screen1"
import Screen2 from "./Screen2"
import "./style.css";

export default function App() {
   const [screen, setScreen] = React.useState(true)
 
     return (
        <>
        {screen ? (
          <div className="screen1">
            <Screen1 />
            <div className="play" onClick={() => setScreen(!screen)}>Iniciar Recall!!</div>
          </div>
        ) : (
          <Screen2 />
        )}
     
       </>
    )
     }

