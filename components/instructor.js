import Link from "next/link"
/* 
    Horiz > horizontal layout
*/
export const InstrucTwoHoriz=({title,list}) =>{
    
    const instructors = list.map((i,ind) =>{
        return(
            <div className="flex" key={ind}>
                <div className="avatar-l">
                    <img src={i.img} alt=""/>
                </div>
                <div className="bot">
                    <h4><a href="#">{i.name}
                    </a></h4>
                    <p>{i.speciality}</p>
                    <p>{i.students}</p>
                </div>
            </div>
        )
    })

    return(
        <section className="comp">
        <div className="sec-title flex">
            <h2>{title}</h2>
            <a href="#">view all</a>
        </div>
        <div className="instruc-h scroll grid-row instruc-grid">
            {instructors}
        </div>
        
    </section>
    )
}
export const InstructorOneHoriz = ({title,list}) =>{

    const instList = list.map((c,ind)=>{
        return(
            <div class="instruc-h-item" key={ind}>
                <div class="top">
                    <img src={c.img} alt=""/>
                </div>
                <div class="bot">
                    <h4>
                        <Link href={c.link}>
                            <a>{c.name}</a>
                        </Link>
                    </h4>
                    <p>{c.speciality}</p>
                </div>
            </div>
        )
    })

    return(
    <div class="instruc-h comp scroll">
            <div class="title t-grey2">
                <h2>{title}</h2>
            </div>
            <div class="instruc-h-wrapper">
                {instList}
            </div>
        </div>
)
}