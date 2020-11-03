import {SettingList,EditProfileInputs,Privacy,AboutInfo} from "components/comps/settingsItems"

const Settings = () =>{
    
    const settingList = [
        {img:"/icons/icon1.svg",title:"Edit Profile",link:"#"},
        {img:"/icons/icon2.svg",title:"About Us",link:"#"},
        {img:"/icons/icon3.svg",title:"Change Password",link:"#"},
        {img:"/icons/icon4.svg",title:"Purchase Order",link:"#"},
        {img:"/icons/icon5.svg",title:"Privacy Settings",link:"#"},
        {img:"/icons/icon6.svg",title:"Help & Support",link:"#"},
        {img:"/icons/icon7.svg",title:"Log Out",link:"#"},
    ]

    const filedList1 = [
        {name:"firstname",label:"First Name",type:"text"},
        {name:"lastname",label:"Last Name",type:"text"},
        {name:"email",label:"Email",type:"email"},
        {name:"phone",label:"Phone",type:"text"},
    ]
    const filedList2 = [
        {name:"passwordone",label:"Old Password",type:"password"},
        {name:"passwordtwo",label:"New Password",type:"password"},
        {name:"passwordthree",label:"Confirm Password",type:"password"},
    ]

    const privacyList = [
        {title:"Make my profile private",type:"private"},
        {title:"Allow comment on my profile",type:"comment"},
        {title:"Show my recent activities",type:"recentAct"},
        {title:"Allow direct messages",type:"directMessages"},
    ]

    const infoList = [
        {title:"Frequently occur",
        content:"Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est,",
        open:true},
        {title:"Donec a ante sit",
        content:"",
        open:false},
        {title:"Suspendisse leo lorem",
        content:"",
        open:false},
        {title:"Variations of Passages",
        content:"",
        open:false},
        {title:"Varius felis finibus",
        content:"",
        open:false},
    ]

    return(
        <div>
            <header className="setting-header comp-x">
                <h1>Settings</h1>
            </header>
            <SettingList list={settingList}/>
            <EditProfileInputs img="/bg/phone-verif/img1.svg" list={filedList1} />
            <EditProfileInputs img="/bg/phone-verif/img2.svg" list={filedList2} />
            <Privacy img="/bg/phone-verif/img3.svg" list={privacyList} />
            <AboutInfo img="/bg/phone-verif/img4.svg" list={infoList} />
            
        </div>
    )
}

export default Settings