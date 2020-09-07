import Overview from "components/overview"
import {InstructorOneHoriz} from "components/instructor"
import {CurrTags,CurrCategorie} from "components/curriculum"

const Search = () =>{
    const tagsList = [
        {link:"#",content:"JEE"},
        {link:"#",content:"Biology"},
        {link:"#",content:"physics"},
        {link:"#",content:"Biology"},
        {link:"#",content:"physics"},
        {link:"#",content:"Mathematics"},
        {link:"#",content:"physics"},
        {link:"#",content:"Mathematics"},
        {link:"#",content:"physics"},
        {link:"#",content:"Personal Development"},
        {link:"#",content:"physics"},
        {link:"#",content:"Personal Development"}
    ]

    const instructorList = [
        {img:"/user/user_opt3.jpg",name:"Zack Lee",speciality:"Specialist in math",link:""},
        {img:"/user/user_opt1.jpg",name:"Zack Lee",speciality:"Specialist in math",link:""},
        {img:"/user/user_opt2.jpg",name:"Zack Lee",speciality:"Specialist in math",link:""},
        {img:"/user/user_opt2.jpg",name:"Zack Lee",speciality:"Specialist in math",link:""},
        {img:"/user/user_opt2.jpg",name:"Zack Lee",speciality:"Specialist in math",link:""}
    ]

    const categList = [
        {title:"Information Technology.",link:"#"},
        {title:"Engineering and Related Technologies.",link:"#"},
        {title:"Architecture and Building.",link:"#"},
        {title:"Management and Commerce.",link:"#"},
        {title:"Creative Arts",link:"#"},
        {title:"Food, Hospitality and Personal Services",link:"#"},
    ]

    return(
        <div class="comp-wrapper">
            <CurrTags title="Top Searches" list={tagsList} />
            <InstructorOneHoriz title="Top Instructors" list={instructorList} />
            <CurrCategorie title="Browse Categories" list={categList} />
            <Overview />
        </div>
    )
}


export default Search