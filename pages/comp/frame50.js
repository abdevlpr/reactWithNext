import Nav from "../../components/nav"

const Frame50 = () =>{
    const courseTypes = [
        {course:"Physics",img:"/icons/curriculum/icon5.svg"},
        {course:"Math",img:"/icons/curriculum/icon6.svg"},
        {course:"Biology",img:"/icons/curriculum/icon7.svg"},
        {course:"Ingers",img:"/icons/curriculum/icon8.svg"}
    ]

    const courseList = [
        {course:"Biology Basic",img:"/bg/bg_opt1.jpg",type:"Biology & The Scientific Method",time:"2-4 hours a week"},
        {course:"Biology Basic",img:"/bg/bg_opt1.jpg",type:"Biology & The Scientific Method",time:"2-4 hours a week"},
        {course:"Biology Basic",img:"/bg/bg_opt1.jpg",type:"Biology & The Scientific Method",time:"2-4 hours a week"},
        {course:"Biology Basic",img:"/bg/bg_opt1.jpg",type:"Biology & The Scientific Method",time:"2-4 hours a week"}
    ]

    const instructors = [
        {name:"Zack Lee",speciality:"Specialist in math",students:"1200 Students",img:"/user/user_opt1.jpg"},
        {name:"Zack Lee",speciality:"Specialist in math",students:"1200 Students",img:"/user/user_opt2.jpg"},
        {name:"Zack Lee",speciality:"Specialist in math",students:"1200 Students",img:"/user/user_opt3.jpg"},
        {name:"Zack Lee",speciality:"Specialist in math",students:"1200 Students",img:"/user/user_opt1.jpg"},
        {name:"Zack Lee",speciality:"Specialist in math",students:"1200 Students",img:"/user/user_opt3.jpg"}
    ]

    const courseListPrice = [
        {course:"Introduction to Trigonometry",
        views:28000,
        time:"1hours 40 min",
        img:"/bg/bg_opt1.jpg",
        avatar:"/user/user_opt1.jpg",
        avaTitle:"Teri Dactyl",
        oldPrice:99.00,
        newPrice:49.00},
        {course:"Introduction to Trigonometry",
        views:28000,
        time:"1hours 40 min",
        img:"/bg/bg_opt1.jpg",
        avatar:"/user/user_opt1.jpg",
        avaTitle:"Teri Dactyl",
        oldPrice:99.00,
        newPrice:49.00},
        {course:"Introduction to Trigonometry",
        views:28000,
        time:"1hours 40 min",
        img:"/bg/bg_opt1.jpg",
        avatar:"/user/user_opt1.jpg",
        avaTitle:"Teri Dactyl",
        oldPrice:99.00,
        newPrice:49.00}
    ]

    return(
        <div>
            <Nav />
            <Header img="/bg/bg_opt1.jpg" title="Online Education Platform" btnLink="start now" badge="/icons/free-trial.svg"/>
            <SubmitForm placeholder="Search"/>
            <Curriculum title="HI! What would you learn today?" courses={courseTypes}/>
            <PopularCourses title="Popular Courses in Education" courses={courseList} />
            <TopInstructor title="Top Instructors" instructor={instructors} />
            <FeaturedCourses title="Featured Courses" courses={courseListPrice} />
        </div>
    )
}

const Header = ({title,btnLink,img,badge}) =>{
    return(
        <div className="header-wrapper comp-x">
        <div className="header-img">
            <img src={img} alt=""/>    
        </div>
        
        <div className="header-cont">
            <div className="badge">
                <img src={badge} alt=""/>
            </div>
            <h1>{title}</h1>
            <a href="#" className="btn bg-blue1">
                {btnLink}
            </a>
        </div>
    </div>
    )
}
const SubmitForm = ({placeholder}) =>{
    return(
        <form className="search card comp-s flex j-sb">
        <input type="text" placeholder={placeholder}/>
        <label htmlFor="submit">
            <img src="/icons/search.svg" alt=""/>
        </label>
        <input id="submit" type="submit" value=""/>
    </form>
    )
}
const Curriculum = ({title,courses})=>{
    const coursesItems = courses.map( (c,ind) => {
        return(
            <a href="#" className="flex-v" key={ind}>
                <img src={c.img} alt=""/>
                <h4>{c.course}</h4>
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
const PopularCourses =({title,courses}) =>{
    
    const coursesItems = courses.map((c,ind) =>{
        return(
            <div className="popular-course-item" key={ind}>
                <div className="img">
                    <img src={c.img} alt=""/>
                </div>
                <div className="des">
                    <div className="top flex j-sb">
                        <h4>{c.course}</h4>
                        <div className="icon flex j-c a-c">
                            <img src="/icons/bookmark.svg" alt=""/>
                        </div>
                    </div>
                    <div className="mid">
                        <h2>{c.type}</h2>
                    </div>
                    <div className="bot">
                        <span>{c.time}</span>
                    </div>
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
        <div className="popular-course flex scroll">
            {coursesItems}
        </div>
    </section>
    )
}
const TopInstructor=({title,instructor}) =>{
    
    const instructors = instructor.map((i,ind) =>{
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
const FeaturedCourses = ({title,courses}) =>{

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
        <section className="comp">
        <div className="sec-title flex">
            <h2>{title}</h2>
            <a href="#">view all</a>
        </div>
        <div className="featured-courses flex scroll">
            {courseList}
        </div>
    </section>
    )
}

export default Frame50