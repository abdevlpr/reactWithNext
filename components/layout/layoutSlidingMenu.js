import {UserInfo} from "components/comps/avatarUser"

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
const SlidingMenuLayout = ({children,open,hideCenter}) =>{
    const show = open ? "dash-rightShow" : ""
    return(
        <div className={`dash-right flex-v ${show}`}>
                <DashboardRightTop />
                {!hideCenter && <DashboardRightCenter />}
                {children}
        </div>
    )
}

export default SlidingMenuLayout