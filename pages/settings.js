import {Nav} from "components/nav"
import {UserInfo} from "components/dashboardComp"
import {SettingList} from "components/settings"

const settingList = [
    {img:"/icons/icon1.svg",title:"Edit Profile",link:"#"},
    {img:"/icons/icon2.svg",title:"About Us",link:"#"},
    {img:"/icons/icon3.svg",title:"Change Password",link:"#"},
    {img:"/icons/icon4.svg",title:"Purchase Order",link:"#"},
    {img:"/icons/icon5.svg",title:"Privacy Settings",link:"#"},
    {img:"/icons/icon6.svg",title:"Help & Support",link:"#"},
    {img:"/icons/icon7.svg",title:"Log Out",link:"#"},
]

const SettingsLeft = () =>{
    return(
        <UserInfo title="Petey Crusier" des="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque, quibusdam."/>
    )
}

const SettingsCenter = () =>{
    return(
        <div className="dash-left-cont scroll axe-y">
            <div className="colWrapper">
                <div className="col">
                    <SettingsLeft />
                </div>
                <div className="col">
                    <SettingList list={settingList}/>
                </div>
            </div>
        </div>
    )
}

const Settings = () =>{
    return(
        <div className="dashboard">
            <div className="dash-left">
                <SettingsCenter />
                <div>
                    <Nav userPoints="55"/>
                </div>
            </div>
        </div>
    )
}

export default Settings 