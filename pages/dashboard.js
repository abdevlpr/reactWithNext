import { motion } from "framer-motion"

import {Nav} from "components/nav"
import {UserInfo} from "components/dashboardComp"
import {CurrWithPercent} from "components/curriculum"
import {CourseOneVert} from "components/courses"
import Overview from "components/overview"




/* replaced by the api later */
const currListPercent=[
    {img:"/bg/bg_opt1.jpg",title:"The sound theories",des:"Contrary to popular belief,",videos:20,books:10,percent:80},
    {img:"/bg/bg_opt1.jpg",title:"The sound theories",des:"Contrary to popular belief,",videos:20,books:10,percent:70},
    {img:"/bg/bg_opt1.jpg",title:"The sound theories",des:"Contrary to popular belief,",videos:20,books:10,percent:60},
    {img:"/bg/bg_opt1.jpg",title:"The sound theories",des:"Contrary to popular belief,",videos:20,books:10,percent:0},
]

const courseOneVertList = [
    {course:"Biology Basic",img:"/bg/bg_opt1.jpg",type:"Biology & The Scientific Method",time:"2-4 hours a week"},
    {course:"Biology Basic",img:"/bg/bg_opt1.jpg",type:"Biology & The Scientific Method",time:"2-4 hours a week"},
    {course:"Biology Basic",img:"/bg/bg_opt1.jpg",type:"Biology & The Scientific Method",time:"2-4 hours a week"},
    {course:"Biology Basic",img:"/bg/bg_opt1.jpg",type:"Biology & The Scientific Method",time:"2-4 hours a week"}
]


const DashboardLeftTop = () =>{
    return(
        <div className="dash-left-top ">
            <div className="dash-top-container flex j-sb">
                <a href="#" className="drop-btn flex j-sa t-grey2 card">
                    <img className="icon-s0" src="/icons/drop-down.svg" alt=""/>
                    <span>All resources</span>
                </a>
                <div className="notification flex t-grey0">
                    <span>Notification</span>
                    <div className="icon flex j-c img-rc card">
                        <div className="indicator right"></div>
                        <img className="icon-s" src="/icons/notification.svg" alt=""/>
                    </div>
                </div>
            </div>
        </div>
    )
}
const DashboardLeftCenter = () =>{
    return(
        <div className="dash-left-cont scroll axe-y">
            <div className="colWrapper">
                <div className="col">
                    <Overview />
                </div>
                <div className="col">
                    <CourseOneVert title="Popular Courses in Education" courses={courseOneVertList} />
                </div>
            </div>
        </div>
    )
}
const DashboardRightTop = ()=>{
    return(
        <div className="dash-right-top flex j-sb t-grey2">
            <span>Logout</span>
            <a href="#">
                <img className="icon-x" src="/icons/logout.svg" alt=""/>
            </a>
        </div>
    )
}
const DashboardRightCenter = () =>{
    return(
        <UserInfo title="Petey Crusier" des="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque, quibusdam."/>
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
    return(
        <div className="dashboard">
            <div className="dash-left">
                <DashboardLeftTop />
                <DashboardLeftCenter />
                <div>
                    <Nav userPoints="55"/>
                </div>
            </div>
            <div className="dash-right flex-v">
                <DashboardRightTop />
                <DashboardRightCenter />
                <DashboardRightBottom />
            </div>
        </div>
    )
}



export default Dashborad 