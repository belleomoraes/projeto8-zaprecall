const eachQuestion = ["Pergunta 1", "Pergunta 2", "Pergunta 3", "Pergunta 4", "Pergunta 5", "Pergunta 6", "Pergunta 7", "Pergunta 8"]

export default function Questions() {
    return (
        eachQuestion.map(question => 
        <div className="questions">
       <div className="question">
        <span>{question}</span>
        <ion-icon name="play-outline"></ion-icon>
       </div>
       </div>
        )
    )
    }