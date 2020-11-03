import {SettingList} from "components/comps/settingsItems"
import {CurrWithPercent} from "components/comps/listCurriculum"

import MainContentLayout from "components/layout/layoutMainContent"
import SlidingMenuLayout from "components/layout/layoutSlidingMenu"

const currListPercent=[
    {img:"/bg/bg_opt1.jpg",title:"The sound theories",des:"Contrary to popular belief,",videos:20,books:10,percent:80},
    {img:"/bg/bg_opt1.jpg",title:"The sound theories",des:"Contrary to popular belief,",videos:20,books:10,percent:70},
    {img:"/bg/bg_opt1.jpg",title:"The sound theories",des:"Contrary to popular belief,",videos:20,books:10,percent:60},
    {img:"/bg/bg_opt1.jpg",title:"The sound theories",des:"Contrary to popular belief,",videos:20,books:10,percent:0},
]
const settingList = [
    {img:"/icons/icon1.svg",title:"Edit Profile",link:"#"},
    {img:"/icons/icon2.svg",title:"About Us",link:"#"},
    {img:"/icons/icon3.svg",title:"Change Password",link:"#"},
    {img:"/icons/icon4.svg",title:"Purchase Order",link:"#"},
    {img:"/icons/icon5.svg",title:"Privacy Settings",link:"#"},
    {img:"/icons/icon6.svg",title:"Help & Support",link:"#"},
    {img:"/icons/icon7.svg",title:"Log Out",link:"#"},
]

const DashboardLeftCenter = () =>{
    return(
            <SettingList list={settingList}/>
    )
}
const DashboardRightBottom = () =>{
    return(
        <div className="dash-right-bottom scroll axe-y">
            <CurrWithPercent list={currListPercent} />
        </div>
    )
}
const Settings = () =>{
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

export default Settings 