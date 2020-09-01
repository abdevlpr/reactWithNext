import {Tabs} from "./lesson"

const Physics = () =>{

    const tabs = [
        {href:"#",name:"Chapter",stat:true},
        {href:"#",name:"Test",stat:false}
    ]

    const chapterList=[
        {img:"/bg/bg_opt1.jpg",title:"The sound theories",des:"Contrary to popular belief,",videos:20,books:10,percent:80},
        {img:"/bg/bg_opt1.jpg",title:"The sound theories",des:"Contrary to popular belief,",videos:20,books:10,percent:70},
        {img:"/bg/bg_opt1.jpg",title:"The sound theories",des:"Contrary to popular belief,",videos:20,books:10,percent:60},
        {img:"/bg/bg_opt1.jpg",title:"The sound theories",des:"Contrary to popular belief,",videos:20,books:10,percent:0},
    ]

    const chapterList2=[
        {img:"/icons/physics/icons1.svg",title:"Light Reflection and Refraction",paper:1,question:10},
        {img:"/icons/physics/icons2.svg",title:"Light Reflection and Refraction",paper:1,question:10},
        {img:"/icons/physics/icons3.svg",title:"Light Reflection and Refraction",paper:1,question:10},
        {img:"/icons/physics/icons4.svg",title:"Light Reflection and Refraction",paper:1,question:10},
        {img:"/icons/physics/icons5.svg",title:"Light Reflection and Refraction",paper:1,question:10}
    ]
    const chapterList3=[
        {img:"/bg/bg_opt2.jpg",title:"Electro Dynamics",des:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",stars:4,time:"4:30"},
        {img:"/bg/bg_opt2.jpg",title:"Electro Dynamics",des:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",stars:1,time:"4:30"},
        {img:"/bg/bg_opt2.jpg",title:"Electro Dynamics",des:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",stars:3,time:"4:30"},
        {img:"/bg/bg_opt2.jpg",title:"Electro Dynamics",des:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",stars:4,time:"4:30"}
    ]

    const pdfList = [
        {title:"Quantum Physics",fileSize:"4.3 MB",pages:40,download:true,link:"//www.google.com"},
        {title:"Quantum Physics",fileSize:"4.3 MB",pages:40,download:true,link:"//google.com"},
        {title:"Quantum Physics",fileSize:"4.3 MB",pages:40,download:false}
    ]

    return(
        <div>
            <Tabs pages={tabs} />
            <ChapterWrapper chapterList={chapterList} />
            <ChapterWrapper2 chapterList={chapterList2} />
            <ChapterWrapper3 chapterList={chapterList3} />
            <PdfWrapper pdfList={pdfList} />
        </div>
    )

}

const ChapterWrapper = ({chapterList})=>{

    const chapItems = chapterList.map((c,ind)=>{
        return(
            <div class="chapter-item" key={ind}>
                <img src={c.img} alt=""/>
                <div class="des">
                    <div class="top">
                        <h4>{c.title}</h4>
                        <p>{c.des}</p>
                    </div>
                    <div class="bot">
                        <span>{c.videos} Videos </span>
                        <span class="devid">|</span>
                        <span>{c.books} eBook</span>
                    </div>
                </div>
                <div class="percentage-circle">
                    <div class="single-chart">
                    <svg viewBox="0 0 36 36" class="circular-chart">
                        <path class="circle"
                        stroke-dasharray={`${c.percent}, 100`}
                        d="M18 2.0845
                            a 15.9155 15.9155 0 0 1 0 31.831
                            a 15.9155 15.9155 0 0 1 0 -31.831"/>
                        <text x="18" y="21" class="percentage">{c.percent}%</text>
                    </svg>
                    </div>
                </div>
            </div>
        )
    })

    return(
        <div class="chapter-wrapper comp">
            {chapItems}        
        </div>
    )
}
const ChapterWrapper2 = ({chapterList}) =>{
    const chapterItems = chapterList.map((c,ind)=>{
        return(
            <div class="chapter-item" key={ind}>
                <div class="icon">
                    <img src={c.img} alt=""/>
                </div>
                <div class="des">
                    <h4>{c.title}</h4>
                    <p>{c.paper} Paper | {c.question} Question</p>
                </div>
            </div>
        )
    })
    return(
        <div class="chapter-wrapper comp">
            {chapterItems}
        </div>
    )

}
const ChapterWrapper3 =({chapterList}) =>{

    const chapterItems = chapterList.map(c=>{
        const stars = []
        const starY=c.stars<=5 && c.stars>=0 ? c.stars : 5
        const starG=5-starY 
        for(var inc = 0;inc < starY;inc++){
            stars.push(<img src="/icons/star.svg" key={inc+21}/>)
        }
        for(var inc = 0;inc < starG;inc++){
            stars.push(<img src="/icons/star-grey.svg" key={inc}/>)
        }
        return(
            <div class="chapter-item videos">
                <img src={c.img} />
                <div class="des">
                    <h4>{c.title}</h4>
                    <p>{c.des}</p>
                    <div class="bot">
                        <div class="stars flex">
                            {stars}
                        </div>
                        <span class="split">|</span><span class="time">{c.time} min</span>
                    </div>
                </div>
            </div>
        )
    })

    return(
        <div class="chapter-wrapper comp">
            {chapterItems}
        </div>
    )

}
const PdfWrapper = ({pdfList}) =>{
    
    const pdfItems = pdfList.map((p,ind)=>{
        const pdfColor = p.download ? "red":""
        const pdfLink = p.download ? <a href={p.link}><h4>{p.title}</h4></a> : <h4>{p.title}</h4>
        return(
            <div class={`chapter-item ${pdfColor}`} key={ind}>
                <div class="icon">
                    <img src="/icons/pdf.svg"/>
                </div>                
                <div class="des">
                    {pdfLink}
                    <p>{p.pages} Pages | {p.fileSize}</p>
                </div>
                <div class="transparent-icon">
                    <img src="/icons/download_red.svg"/>
                </div>
            </div>
        )
    })
    return(
        <div class="chapter-wrapper comp">
            {pdfItems}
        </div>
    )
}

export default Physics