import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import {useRouter} from "next/router"
import { motion } from "framer-motion"

import Articles from "components/comps/postArticle"
import Test from "components/comps/listTests"
import {CurrWithPercent,CurrWithIconSec} from "components/comps/listCurriculum"
import {DiscussList} from "components/comps/postItems"

import MainContentLayout from "components/layout/layoutMainContent"
import SlidingMenuLayout from "components/layout/layoutSlidingMenu"

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
const testList = [
        {icon:"/icons/curriculum/icon1.svg",title:"Heredity and Evolution",des:"The first step in the scientific method is stating a problem based on observation. In this stage",btnLinkable:true,btnLink:"/courses/test/1"},
        {icon:"/icons/curriculum/icon2.svg",title:"Our Environment",des:"The first step in the scientific method is stating a problem based on observation. In this stage",btnLinkable:false},
        {icon:"/icons/curriculum/icon3.svg",title:"Life Processes",des:"The first step in the scientific method is stating a problem based on observation. In this stage",btnLinkable:false}
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
                <Test testList={testList}/>
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

const DashboardLeftCenter = () =>{
    const router = useRouter()
    const {coursenumber} = router.query
    return(
        <div className="dash-left-cont scroll axe-y">
            <h1 className="t-grey2 comp t-align-c">course number {coursenumber}</h1>
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
            <MainContentLayout>
                <DashboardLeftCenter />
            </MainContentLayout>
            <SlidingMenuLayout>
                <DashboardRightBottom />
            </SlidingMenuLayout>
        </div>
    )
}



export default Courses 