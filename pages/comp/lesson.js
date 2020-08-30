import Link from "next/link"

const Lesson = () =>{

    const tabs = [
        {href:"#",name:"Lesson",stat:true},
        {href:"#",name:"Test",stat:false},
        {href:"#",name:"Discuss",stat:false}
        
    ]
    const articles = [
        {title:"Introduction",content:'Biology is one of the major sciences. Scientists have acquired biological knowledge through a process known as the scientific method. The steps of the scientific method make up an orderly way of gaining information about the biological world.'},
        {title:"Observation",content:'The first step in the scientific method is stating a problem based on observation. In this stage, the scientist recognizes that something has happened and that it occurs repeatedly. Therefore, the scientist formulates a question or states a problem for investigation. The next step in the scientific method is to explore resources that may have information about that question or problem. Here, the scientist conducts a literature review and interacts with other scientists to develop knowledge about the question at hand.'},
        {title:"Conclusion",content:'After analyzing the data, the scientist draws a conclusion. A valid conclusion must be based on the facts observed in the experiments. If the data from repeated experiments support the hypothesis, the scientist publishes the hypothesis and experimental data for other scientists to review and discuss.'},
    ]

    const currList =[
        {img:"/icons/curriculum/icon1.svg",title:"How do Organisms Reproduce?"},
        {img:"/icons/curriculum/icon2.svg",title:"Heredity and Evolution"},
        {img:"/icons/curriculum/icon3.svg",title:"Our Environment"},
        {img:"/icons/curriculum/icon4.svg",title:"Life Processes"},
        {img:"/icons/curriculum/icon5.svg",title:"Control and Coordination"},
    ]

    return(
        <div class="lesson-wrapper">
            <Subheading title="Biology & The Scientific Method" des="2-4 hours a week" />
            <Tabs pages={tabs} />
            <PostHead img="/bg/bg_opt1.jpg"/>
            <Article title={articles[0].title} content={articles[0].content} />
            <Article title={articles[1].title} content={articles[1].content} />
            <Curriculum  currList={currList} />
            <Article title={articles[2].title} content={articles[2].content} />
        </div>
    )

}

const PostHead = ({img})=>{
    return(
        <div class="post-head-wrapper comp">
            <img src={img} alt="sience-pic" class="post-head"/>
        </div>
    )
}
export const Tabs = ({pages}) =>{
    
    

    const tabItems = pages.map((t)=>{
        const active = t.stat ? "current-tab" : ""
        return(
            <Link href={t.href}>
                <a className={active}>{t.name}</a>
            </Link>
        )
    })
    
    return(
        <div class="tabs-wrapper t-align-c comp">
            <div class="tabs card">
                {tabItems}
            </div>
        </div>
    )
}
export const Subheading= ({title,des}) =>{
    return(
        <div class="subHeading comp">
                <h3>{title}</h3>
                <p>{des}</p>
            </div>
    )
}
const Article=({title,content})=>{
    return(
        <article class="comp">
            <h3 class="t-grey2 heading-0">{title}</h3>
            <p class="t-grey0">{content}</p>
        </article>
    )
}
const Curriculum=({currList})=>{
    const curr = currList.map((c,ind)=>{
        
        return(
            <div class="item flex">
                <div class="curriculum-icon flex j-c bg-grad-blue-1">
                    <img class="icon-m" src={c.img} alt=""/>
                </div>
                <div class="curriculum-des">
                    <h5 class="t-grey0">Step {ind+1}</h5>
                    <h4 class="t-grey2">{c.title}</h4>
                </div>
            </div>
        )
    })
    return(
        <div class="curriculum card comp">
            {curr}
        </div>
    )
}

export default Lesson