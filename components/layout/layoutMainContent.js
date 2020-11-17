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
const MainContentLayout = ({children,handleClick,hide}) =>{
    return(
        <div className="dash-left">
            {!hide && <MenuTop />}
            {children}
            {!hide && <Nav userPoints="55" handleClick={handleClick}/>}
        </div>
    )
}

export default MainContentLayout