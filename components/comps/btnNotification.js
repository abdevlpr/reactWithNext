import {useState} from "react"
import NotificationList from "./listNotifications"
const NotifBtn = () =>{

    const [menuOpen,setMenuOpen] = useState(false)

    const notifList = [
        {img:"/user/user_opt1.jpg",
        message:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
        time:"10 min",
        follow:false,
        status:true
        },
        {img:"/user/user_opt3.jpg",
        message:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
        time:"2 min",
        follow:true,
        status:false
        },
        {img:"/user/user_opt2.jpg",
        message:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
        time:"45 min",
        follow:false,
        status:false
        },
        {img:"/user/user_opt1.jpg",
        message:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
        time:"20 min",
        follow:true,
        status:true
        },
    ]

    const openMenu = ()=>{
        setMenuOpen(!menuOpen)
    }
    return(
        <>
        <div className="notification flex t-grey0" onClick={openMenu}>
            <span>Notification</span>
            <div className="icon flex j-c img-rc card">
                <div className="indicator right"></div>
                <img className="icon-s" src="/icons/notification.svg" alt=""/>
            </div>
        </div>
        {menuOpen && <NotificationList list={notifList}/>}
        </>
    )
}
export default NotifBtn