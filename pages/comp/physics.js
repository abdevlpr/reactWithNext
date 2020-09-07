import {Tabs} from "components/nav"
import {CourseOneHoriz} from "components/courses"
import {CurrWithPercent,CurrWithIcon,CurrWithPdf} from "components/curriculum.js"


const Physics = () =>{

    const tabs = [
        {href:"#",name:"Chapter",inNow:true},
        {href:"#",name:"Test",inNow:false}
    ]

    const currListPercent=[
        {img:"/bg/bg_opt1.jpg",title:"The sound theories",des:"Contrary to popular belief,",videos:20,books:10,percent:80},
        {img:"/bg/bg_opt1.jpg",title:"The sound theories",des:"Contrary to popular belief,",videos:20,books:10,percent:70},
        {img:"/bg/bg_opt1.jpg",title:"The sound theories",des:"Contrary to popular belief,",videos:20,books:10,percent:60},
        {img:"/bg/bg_opt1.jpg",title:"The sound theories",des:"Contrary to popular belief,",videos:20,books:10,percent:0},
    ]

    const currListIcon=[
        {img:"/icons/physics/icons1.svg",title:"Light Reflection and Refraction",paper:1,question:10},
        {img:"/icons/physics/icons2.svg",title:"Light Reflection and Refraction",paper:1,question:10},
        {img:"/icons/physics/icons3.svg",title:"Light Reflection and Refraction",paper:1,question:10},
        {img:"/icons/physics/icons4.svg",title:"Light Reflection and Refraction",paper:1,question:10},
        {img:"/icons/physics/icons5.svg",title:"Light Reflection and Refraction",paper:1,question:10}
    ]
    const courselist=[
        {img:"/bg/bg_opt2.jpg",title:"Electro Dynamics",des:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",stars:4,time:"4:30"},
        {img:"/bg/bg_opt2.jpg",title:"Electro Dynamics",des:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",stars:1,time:"4:30"},
        {img:"/bg/bg_opt2.jpg",title:"Electro Dynamics",des:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",stars:3,time:"4:30"},
        {img:"/bg/bg_opt2.jpg",title:"Electro Dynamics",des:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",stars:4,time:"4:30"}
    ]

    const currListPdf = [
        {title:"Quantum Physics",fileSize:"4.3 MB",pages:40,download:true,link:"//www.google.com"},
        {title:"Quantum Physics",fileSize:"4.3 MB",pages:40,download:true,link:"//google.com"},
        {title:"Quantum Physics",fileSize:"4.3 MB",pages:40,download:false}
    ]

    return(
        <div>
            <Tabs pages={tabs} />
            <CurrWithPercent list={currListPercent} />
            <CurrWithIcon list={currListIcon} />
            <CourseOneHoriz courses={courselist} />
            <CurrWithPdf list={currListPdf} />
        </div>
    )
}

export default Physics