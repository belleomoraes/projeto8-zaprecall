export default function TheQuestion({ info, setStart, start }) {
    return (
        <>
        <span>{info.question}</span>
        <img src="images/setinha.png" onClick={() => setStart(!start)}/>
        </>
       )
       }