import ItemCourse from "./itemCourse"

export const CourseOneVert =({courses}) =>{
    
    const coursesItems = courses.map((item,ind) =>{
        return(
            <ItemCourse item={item} key={ind}/>
        )
    })

    return(
        <div className="popular-course flex scroll comp">
            {coursesItems}
        </div>
    )
}
export const CourseTwoVert = ({courses}) =>{

    const courseList = courses.map((c,ind)=>{
        return(
            <div className="featured-item" key={ind}>
                <div className="img">
                    <img src={c.img} alt=""/>
                </div>
                <div className="des">
                    <div className="top">
                        <h2>{c.course}</h2>
                        <div className="info flex j-sb">
                            <div className="views flex">
                                <img src="/icons/view.svg" alt=""/>
                                <span>{c.views} views</span>
                            </div>
                            <div className="time flex">
                                <img src="/icons/watch.svg" alt=""/>
                                <span>{c.time}</span>
                            </div>
                        </div>
                    </div>
                    <div className="auth flex">
                        <div className="avatar">
                            <img src={c.avatar} alt=""/>
                        </div>
                        <h4 className="name">{c.avaTitle}</h4>
                    </div>
                    <div className="bot">
                        <span className="curr-price"> {c.newPrice} $ </span>
                        <span className="prev-price"> {c.oldPrice} $ </span>
                    </div>
                </div>
            </div>
        )
    })

    return(
        <div className="featured-courses flex scroll">
            {courseList}
        </div>
    )
}
export const CourseOneHoriz =({courses}) =>{
    const chapterItems = courses.map((c,ind)=>{
        /* generating stars based on the rating */
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
            <div className="chapter-item videos" key={ind}>
                <img src={c.img} />
                <div className="des">
                    <h4>{c.title}</h4>
                    <p>{c.des}</p>
                    <div className="bot">
                        <div className="stars flex">
                            {stars}
                        </div>
                        <span className="split">|</span><span className="time">{c.time} min</span>
                    </div>
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
/* 
    Horiz > horizontal layout 
    Vert > vertical layout
    #title:accept string
    #courses:accept array of objects
        courses = [
            {}
        ]
    USAGE:
     EXAMPLE 
        <CourseOneVert title="PUT HERE A STRING" courses={PUT HERE ARRAY OF COURSES} />
*/