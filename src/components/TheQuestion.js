import setinha from "../assets/setinha.png"
export default function TheQuestion({ info, setStart, start }) {
    return (
        <div className="questions">
        <div className="back-question">
        <span>{info.question}</span>
        <img src={setinha} onClick={() => setStart(!start)}/>
        </div>
        
        </div>
       )
       }