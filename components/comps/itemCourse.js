import Link from "next/link"
const ItemCourse = ({item})=>{
    return(
        <div className="popular-course-item">
            <div className="img">
                <img src={item.img} alt=""/>
            </div>
            <div className="des">
                <div className="top flex j-sb">
                    <h4>
                        <Link href={item.url}>
                            <a>
                                {item.course}
                            </a>
                        </Link>
                    </h4>
                    <div className="icon flex j-c a-c">
                        <img src="/icons/bookmark.svg" alt=""/>
                    </div>
                </div>
                <div className="mid">
                    <h2>{item.type}</h2>
                </div>
                <div className="bot">
                    <span>{item.time}</span>
                </div>
            </div>
        </div>
    )
}
export default ItemCourse