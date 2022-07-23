export default function Answer({ info }) {
    return (
        <div className="questions">
       <div className="back-question">
        <span>{info.answer}</span>
        <div className="selection">
        <div className="redAnswer">
           Não lembrei
        </div>
        <div className="orangeAnswer">
            Quase não lembrei
        </div>
        <div className="greenAnswer">
            Zap!
        </div>
       </div>
       </div>
       </div>
       )
       }