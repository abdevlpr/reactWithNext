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

    return(
        <div>
            <Tabs pages={tabs} />
            <ChapterWrapper chapterList={chapterList} />
        </div>
    )

}

const ChapterWrapper = ({chapterList})=>{

    const chapItems = chapterList.map(c=>{
        return(
            <div class="chapter-item">
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

export default Physics