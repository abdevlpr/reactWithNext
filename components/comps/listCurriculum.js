import Link from "next/link"
/*
    Horiz > horizontal layout
    Curr > curriculum
    #list accept (array of objects)
    #title accept (string)
 */
export const CurrWithPercent = ({list})=>{

    const chapItems = list.map((c,ind)=>{
        return(
            <div className="chapter-item" key={ind}>
                <div className="des">
                    <div className="top">
                        <h4>{c.title}</h4>
                        <p>{c.des}</p>
                    </div>
                    <div className="bot">
                        <span>{c.videos} Videos </span>
                        <span className="devid">|</span>
                        <span>{c.books} eBook</span>
                    </div>
                </div>
                <div className="percentage-circle">
                    <div className="single-chart">
                    <svg viewBox="0 0 36 36" className="circular-chart">
                        <path className="circle"
                        strokeDasharray={`${c.percent}, 100`}
                        d="M18 2.0845
                            a 15.9155 15.9155 0 0 1 0 31.831
                            a 15.9155 15.9155 0 0 1 0 -31.831"/>
                        <text x="18" y="21" className="percentage">{c.percent}%</text>
                    </svg>
                    </div>
                </div>
            </div>
        )
    })

    return(
        <div className="chapter-wrapper comp">
            {chapItems}        
        </div>
    )
}
export const CurrWithIcon = ({list}) =>{
    const chapterItems = list.map((c,ind)=>{
        return(
            <div className="chapter-item" key={ind}>
                <div className="icon">
                    <img src={c.img} alt=""/>
                </div>
                <div className="des">
                    <h4>{c.title}</h4>
                    <p>{c.paper} Paper | {c.question} Question</p>
                </div>
            </div>
        )
    })
    return(
        <div className="chapter-wrapper comp">
            {chapterItems}
        </div>
    )

}
export const CurrWithIconSec=({list})=>{
    const curr = list.map((c,ind)=>{
        
        return(
            <div className="item flex" key={ind}>
                <div className="curriculum-icon flex j-c bg-grad-blue-1">
                    <img className="icon-m" src={c.img} alt=""/>
                </div>
                <div className="curriculum-des">
                    <h5 className="t-grey0">Step {ind+1}</h5>
                    <h4 className="t-grey2">{c.title}</h4>
                </div>
            </div>
        )
    })
    return(
            <div className="curriculum card comp">
                {curr}
            </div>
    )
}
export const CurrWithPdf = ({list}) =>{
    
    const pdfItems = list.map((p,ind)=>{
        const pdfColor = p.download ? "red":""
        const pdfLink = p.download ? <a href={p.link}><h4>{p.title}</h4></a> : <h4>{p.title}</h4>
        return(
            <div className={`chapter-item ${pdfColor}`} key={ind}>
                <div className="icon">
                    <img src="/icons/pdf.svg"/>
                </div>                
                <div className="des">
                    {pdfLink}
                    <p>{p.pages} Pages | {p.fileSize}</p>
                </div>
                <div className="transparent-icon">
                    <img src="/icons/download_red.svg"/>
                </div>
            </div>
        )
    })
    return(
        <div className="chapter-wrapper comp">
            {pdfItems}
        </div>
    )
}
export const CurrHorizWithIcon = ({title,list})=>{
    const coursesItems = list.map( (c,ind) => {
        return(
            <a href="#" className="flex-v" key={ind}>
                <img src={c.img} alt=""/>
                <h4>{c.title}</h4>
             </a>
        )
    })
    return(
        <section className="comp">
        <div className="sec-title">
            <h2>{title}</h2>
        </div>
        <div className="type-courses flex scroll">
            {coursesItems}
        </div>
    </section>
    )
}
export const CurrTags = ({title,list}) =>{
    const tagsList = list.map((t,ind)=>{
        return(
            <Link href={t.link}> 
                <a key={ind}>{t.content}</a>
            </Link>
        )
    })

    return(
        <div className="tags comp">
            <div className="title t-grey2">
                <h2>{title}</h2>
            </div>
            <div className="tags-wrapper">
                {tagsList}
            </div>
        </div>
    )
}
export const CurrCategorie = ({title,list}) =>{
    
    const categList = list.map((c,ind)=>{
        return(
            <li>
                <h4>
                    <Link href={c.link}>
                        <a>{c.title}</a>
                    </Link>
                </h4>
            </li>
        )
    })

    return(
        <div className="categ comp">
            <div className="title t-grey2">
                <h2>Browse Categories</h2>
            </div>
                <ul className="categ-wrapper">
                    {categList}
                </ul>
        </div>
    )
}