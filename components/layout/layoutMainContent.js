import {Nav} from "components/comps/navMenu"

import NotifBtn from "components/comps/btnNotification"
import ResourcesBtn from "components/comps/btnAllresourses"


const MenuTop = () =>{
    return(
        <div className="dash-left-top ">
            <div className="dash-top-container flex j-sb">
                <ResourcesBtn />
                <NotifBtn />
            </div>
        </div>
    )
}
const MainContentLayout = ({children,handleClick}) =>{
    return(
        <div className="dash-left">
            <MenuTop />
            {children}
            <Nav userPoints="55" handleClick={handleClick}/>
        </div>
    )
}

export default MainContentLayout