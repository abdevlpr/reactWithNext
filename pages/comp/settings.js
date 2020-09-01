import {LoginSubmitBtn} from "../../components/login"

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
        {name:"firstname",label:"Email",type:"text"},
        {name:"firstname",label:"Phone",type:"text"},
    ]
    const filedList2 = [
        {name:"firstname",label:"Old Password",type:"password"},
        {name:"firstname",label:"New Password",type:"password"},
        {name:"firstname",label:"Confirm Password",type:"password"},
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
            <EditProfile img="/bg/phone-verif/img1.svg" list={filedList1} />
            <EditProfile img="/bg/phone-verif/img2.svg" list={filedList2} />
            <Privacy img="/bg/phone-verif/img3.svg" list={privacyList} />
            <InfoItems img="/bg/phone-verif/img4.svg" list={infoList} />
            
        </div>
    )
}

const SettingList = ({list}) =>{
    const settinglist = list.map((c,ind)=>{
        return(
            <div className="item" key={ind}>
                <div className="icon">
                    <img src={c.img} alt=""/>
                </div>
                <div className="right">
                    <h3><a href={c.link}>{c.title}</a></h3>
                    <img src="/icons/arrow-right-2.svg" />
                </div>
            </div>
        )
    })

    return(
        <div className="comp-wrapper">
            <div className="setting-titles comp">
                <div className="edit">
                    <img src="/icons/pen.svg"/>
                </div>
                {settinglist}
            </div>
         </div>
    )
}
const EditProfile = ({img,list}) =>{
    
    const EditFields = list.map((e,ind)=>{
        return(
            <div className="field" key={ind}>
                <label htmlFor={e.name}>{e.label}</label>
                <div className="input">
                    <input type={e.type} id={e.name} value="this is a test value"/>
                    <div className="icon"></div>
                </div>
            </div>
        )
    })
    return(
        <div className="comp-wrapper">
        <img src={img} alt="" class="comp"/>
            <div className="fields comp">
                {EditFields}
                <LoginSubmitBtn btnTxt="SAVE"/>
            </div>
           
        </div>
    )
}
const Privacy = ({img,list}) =>{
    const Togglelist = list.map((t,ind)=>{
        return(
            <div className="item" key={ind}>
                    <h3>{t.title}</h3>
                    <div className="toggle">
                        <input type="checkbox" name="" id={t.type}/>
                        <label htmlFor={t.type} className="in-toggle"></label>
                    </div>
            </div>
        )
    })
    return(
        <div>
            <img src={img} className="comp"/>
            <div class="switch-items comp">            
                {Togglelist}
            </div>
        </div>
    )
}
const InfoItems = ({img,list}) =>{

    const infoItem = list.map((i,ind)=>{
        const img = i.open ? "/icons/minus.svg":"/icons/plus.svg"
        const imgClass = i.open ? "open":""
        return(
            <div className="item" key={ind}>
                <div class="top">
                    <h3>{i.title}</h3>
                    <div className={`icon ${imgClass}`}><img src={img} alt=""/></div>
                </div>
                <p>{i.content}</p>
            </div>
        )
    })

    return(
        <div>
        <img src={img} className="comp"/>
            <div className="info-items comp">
                {infoItem}
            </div>
        </div>
    )
}

export default Settings