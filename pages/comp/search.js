import Link from "next/link"

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
            <Tags title="Top Searches" list={tagsList} />
            <Instructor title="Top Instructors" list={instructorList} />
            <Categorie title="Browse Categories" list={categList} />
        </div>
    )
}
const Tags = ({title,list}) =>{
    const tagsList = list.map((t,ind)=>{
        return(
            <Link href={t.link}> 
                <a key={ind}>{t.content}</a>
            </Link>
        )
    })

    return(
        <div class="tags comp">
            <div class="title t-grey2">
                <h2>{title}</h2>
            </div>
            <div class="tags-wrapper">
                {tagsList}
            </div>
        </div>
    )
}
const Instructor = ({title,list}) =>{

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
const Categorie = ({title,list}) =>{
    
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
        <div class="categ comp">
            <div class="title t-grey2">
                <h2>Browse Categories</h2>
            </div>
                <ul class="categ-wrapper">
                    {categList}
                </ul>
        </div>
    )
}

export default Search