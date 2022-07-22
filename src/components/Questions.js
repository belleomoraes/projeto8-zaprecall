import React from "react";
const eachQuestion = [
    {
        number: "Pergunta 1",
        question: "O que é JSX?" ,
        answer: "Uma extensão de linguagem do JavaScript"
    },
    {
        number: "Pergunta 2",
        question: "O React é __ " ,
        answer: "uma biblioteca JavaScript para construção de interfaces"
    },
    {
        number: "Pergunta 3",
        question: "Componentes devem iniciar com __ " ,
        answer: "letra maiúscula"
    },
    {
        number: "Pergunta 4",
        question: "Podemos colocar __ dentro do JSX" ,
        answer: "expressões"
    },
    {
        number: "Pergunta 5",
        question: "O ReactDOM nos ajuda __ " ,
        answer: "interagindo com a DOM para colocar componentes React na mesma"
    },
    {
        number: "Pergunta 6",
        question: "Usamos o npm para __" ,
        answer: "gerenciar os pacotes necessários e suas dependências"
    },
    {
        number: "Pergunta 7",
        question: "Usamos props para __ " ,
        answer: "passar diferentes informações para componentes "
    },
    {
        number: "Pergunta 8",
        question: "Usamos estado (state) para __ " ,
        answer: "dizer para o React quais informações quando atualizadas devem renderizar a tela novamente"
    }

]
function Question(props) {
    const [open, setOpen] = React.useState(true);

    return (
        <div className="questions">
       {open ? (<div className="question">
        <span>{props.question.number}</span>
        <ion-icon name="play-outline" onClick={() => setOpen(!open)}></ion-icon>
       </div>) : (
         <div className="back-question">
         <span>{props.question.question}</span>
         <img src="images/setinha.png" />
        </div>
       )
}
       </div>
    )
}
export default function Questions() {
    return (
       eachQuestion.map(question =>
       <Question question = {question}/>
    )
    )
    }


