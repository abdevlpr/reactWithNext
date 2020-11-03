import { motion } from "framer-motion"
import {useState} from "react"

import {CurrWithPercent} from "components/comps/listCurriculum"

import MainContentLayout from "components/layout/layoutMainContent"
import SlidingMenuLayout from "components/layout/layoutSlidingMenu"
import ItemCourse from "components/comps/itemCourse"




/* replaced by the api later */
const currListPercent=[
    {img:"/bg/bg_opt1.jpg",title:"The sound theories",des:"Contrary to popular belief,",videos:20,books:10,percent:80},
    {img:"/bg/bg_opt1.jpg",title:"The sound theories",des:"Contrary to popular belief,",videos:20,books:10,percent:70},
    {img:"/bg/bg_opt1.jpg",title:"The sound theories",des:"Contrary to popular belief,",videos:20,books:10,percent:60},
    {img:"/bg/bg_opt1.jpg",title:"The sound theories",des:"Contrary to popular belief,",videos:20,books:10,percent:0},
]
const courseOneVertList = [
    {course:"Biology Basic",
    img:"/bg/bg_opt1.jpg",
    type:"Biology & The Scientific Method",
    time:"2-4 hours a week",
    url:"/courses/course/1"
    },
    {course:"Biology Basic",
    img:"/bg/bg_opt2.jpg",
    type:"Biology & The Scientific Method",
    time:"2-4 hours a week",
    url:"/courses/course/2"
    },
    {course:"Biology Basic",
    img:"/bg/bg_opt3.jpg",
    type:"Biology & The Scientific Method",
    time:"2-4 hours a week",
    url:"/courses/course/3"
    },
    {course:"Biology Basic",
    img:"/bg/bg_opt4.jpg",
    type:"Biology & The Scientific Method",
    time:"2-4 hours a week",
    url:"/courses/course/3"
    },
    {course:"Biology Basic",
    img:"/bg/bg_opt4.jpg",
    type:"Biology & The Scientific Method",
    time:"2-4 hours a week",
    url:"/courses/course/3"
    },
    {course:"Biology Basic",
    img:"/bg/bg_opt2.jpg",
    type:"Biology & The Scientific Method",
    time:"2-4 hours a week",
    url:"/courses/course/2"
    },
    {course:"Biology Basic",
    img:"/bg/bg_opt3.jpg",
    type:"Biology & The Scientific Method",
    time:"2-4 hours a week",
    url:"/courses/course/3"
    },
    
]

const DashboardLeftCenter = () =>{
    return(
        <div className="flex j-sa flex-wrap comp-wrapper scroll axe-y">
            {courseOneVertList.map((c,ind) => {
                return(
                    <ItemCourse item={c} key={ind}/>
                )
            })}
        </div>
    )
}
const DashboardRightBottom = () =>{
    return(
        <div className="dash-right-bottom scroll axe-y">
            <CurrWithPercent list={currListPercent} />
        </div>
    )
}

const Dashborad = () =>{
    /* state of a closing and opening menu */
    const [openedMenu,setOpenedMenu] = useState(false)

    /* change the state of the opened menu */
    const handleClick = () =>{
        setOpenedMenu(!openedMenu)
        console.log("clicked")
    }
    return(
        <div className="dashboard">
            <MainContentLayout handleClick={handleClick}>
                <DashboardLeftCenter />
            </MainContentLayout>
            <SlidingMenuLayout open={openedMenu}>
                <DashboardRightBottom />
            </SlidingMenuLayout>
        </div>
    )
}



export default Dashborad 