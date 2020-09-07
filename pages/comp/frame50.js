import {HeaderWithImg} from "components/posts.js"
import {Nav} from "components/nav"
import {CourseOneVert,CourseTwoVert} from "components/courses"
import {CurrHorizWithIcon} from "components/curriculum.js"
import {InstrucTwoHoriz} from "components/instructor.js"
import {SearchLikeForm} from "components/submit.js"

const Frame50 = () =>{
    const currHorizWithIconList = [
        {title:"Physics",img:"/icons/curriculum/icon5.svg"},
        {title:"Math",img:"/icons/curriculum/icon6.svg"},
        {title:"Biology",img:"/icons/curriculum/icon7.svg"},
        {title:"Ingers",img:"/icons/curriculum/icon8.svg"}
    ]

    const courseOneVertList = [
        {course:"Biology Basic",img:"/bg/bg_opt1.jpg",type:"Biology & The Scientific Method",time:"2-4 hours a week"},
        {course:"Biology Basic",img:"/bg/bg_opt1.jpg",type:"Biology & The Scientific Method",time:"2-4 hours a week"},
        {course:"Biology Basic",img:"/bg/bg_opt1.jpg",type:"Biology & The Scientific Method",time:"2-4 hours a week"},
        {course:"Biology Basic",img:"/bg/bg_opt1.jpg",type:"Biology & The Scientific Method",time:"2-4 hours a week"}
    ]

    const courseTwoVertList = [
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

    const instructors = [
        {name:"Zack Lee",speciality:"Specialist in math",students:"1200 Students",img:"/user/user_opt1.jpg"},
        {name:"Zack Lee",speciality:"Specialist in math",students:"1200 Students",img:"/user/user_opt2.jpg"},
        {name:"Zack Lee",speciality:"Specialist in math",students:"1200 Students",img:"/user/user_opt3.jpg"},
        {name:"Zack Lee",speciality:"Specialist in math",students:"1200 Students",img:"/user/user_opt1.jpg"},
        {name:"Zack Lee",speciality:"Specialist in math",students:"1200 Students",img:"/user/user_opt3.jpg"}
    ]

    return(
        <div>
            <Nav />
            <HeaderWithImg img="/bg/bg_opt1.jpg" title="Online Education Platform" btnLink="start now" badge="/icons/free-trial.svg"/>
            <SearchLikeForm placeholder="Search"/>
            <CurrHorizWithIcon title="HI! What would you learn today?" list={currHorizWithIconList}/>
            <CourseOneVert title="Popular Courses in Education" courses={courseOneVertList} />
            <InstrucTwoHoriz title="Top Instructors" list={instructors} />
            <CourseTwoVert title="Featured Courses" courses={courseTwoVertList} />
        </div>
    )
}

export default Frame50