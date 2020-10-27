import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { motion } from "framer-motion"

import Articles from "pages/comp/article"
import Test from "pages/comp/test"
import {Nav} from "components/nav"
import {UserInfo} from "components/dashboardComp"
import {CurrWithPercent,CurrWithIconSec} from "components/curriculum"
import {DiscussList} from "components/posts"


const currList =[
    {img:"/icons/curriculum/icon1.svg",title:"How do Organisms Reproduce?"},
    {img:"/icons/curriculum/icon2.svg",title:"Heredity and Evolution"},
    {img:"/icons/curriculum/icon3.svg",title:"Our Environment"},
    {img:"/icons/curriculum/icon4.svg",title:"Life Processes"},
    {img:"/icons/curriculum/icon5.svg",title:"Control and Coordination"},
]
const discussList= [
    {avatarImg:"/user/user_opt1.jpg",title:"Tara Zona",time:"30 min",des:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Libero, nibh ipsum vestibulum ut arcu risus purus eu id. At eget magnis nulla.",like:true,likeNumber:24},
    {avatarImg:"/user/user_opt1.jpg",title:"Bridget Theriveaquai",time:"1 hour",des:"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis",like:false,likeNumber:24},
    {avatarImg:"/user/user_opt1.jpg",title:"Staum Clowd",time:"5 hours",des:"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making",like:true,likeNumber:24},
]
const currListPercent=[
        {img:"/bg/bg_opt1.jpg",title:"The sound theories",des:"Contrary to popular belief,",videos:20,books:10,percent:80},
        {img:"/bg/bg_opt1.jpg",title:"The sound theories",des:"Contrary to popular belief,",videos:20,books:10,percent:70},
        {img:"/bg/bg_opt1.jpg",title:"The sound theories",des:"Contrary to popular belief,",videos:20,books:10,percent:60},
        {img:"/bg/bg_opt1.jpg",title:"The sound theories",des:"Contrary to popular belief,",videos:20,books:10,percent:0},
    ]

const TabbingSystem =() =>{
    return(
        <Tabs className='tabs-wrapper flex-v a-c comp'>
        <TabList>
          <Tab>Lesson</Tab>
          <Tab>Test</Tab>
          <Tab>Discuss</Tab>
        </TabList>

        <TabPanel>
            <div>
            <CurrWithIconSec list={currList} />
            </div>
        </TabPanel>
        <TabPanel>
            <div>
                <Test />
            </div>
        </TabPanel>
        <TabPanel>
            <div>
                <DiscussList discussList={discussList} />
            </div>
        </TabPanel>
      </Tabs>
    )
}

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
            <h1 className="t-grey2 comp t-align-c">Some Title</h1>
            <div className="colWrapper">
                <div className="col">
                    <Articles />
                </div>
                <div className="col">
                    <TabbingSystem />
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

const Courses = () =>{
    return(
        <div className="dashboard">
            <div className="dash-left">
                <DashboardLeftTop />
                <DashboardLeftCenter />
                <div>
                    <Nav userPoints="220"/>
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



export default Courses 