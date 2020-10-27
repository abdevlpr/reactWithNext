import {Nav} from "components/nav"
import {LoginSubmitBtn} from "components/login"

const qlist = [
    {quest:"Hypothesis, observation, analysis, conclusion",
     truethy:true},
    {quest:"Observation, experimentation, hypothesis, conclusion",
     truethy:false},
    {quest:"Observation, hypothesis, experimentation, conclusion",
     truethy:false},
]
const question = "A student using the scientific method would proceed through the steps in which of the following orders?"

const Questions = ({question,qlist}) =>{
    const questList = qlist.map((l,ind)=>(
        <div className={`answer ${l.truethy && "curr-answer"}`}>
            <h3>{l.quest}</h3>
            <span className="circle"></span>
        </div>
    ))
    return(
        <div className="quest ">
                <h2 className="quest-top comp">
                    {question}
                </h2>
                <div className="quest-bot comp">
                    {questList}
                </div>
                <LoginSubmitBtn btnTxt="CONTINUE"/>
            </div>
    )
}

const Test = () =>{
    return(
        <div className="dashboard">
            <div className="dash-left">
                    <Questions qlist={qlist} question={question}/>
                <div>
                    <Nav userPoints="55"/>
                </div>
            </div>
        </div>
    )
}

export default Test 