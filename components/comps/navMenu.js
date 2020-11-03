import Link from "next/link"
import {useRouter} from "next/router"

import PointsBtn from "components/comps/btnPoints"
export const Nav = ({userPoints,handleClick}) =>{

    const router = useRouter()
    const navList = [
        {name:"Home",img:"/icons/nav/home.svg",link:"/dashboard"},
        {name:"Courses",img:"/icons/nav/courses.svg",link:"/courses"},
        {name:"Settings",img:"/icons/nav/settings.svg",link:"/settings"},
    ]

    const dashboardLink = "/dashboard"

    /* generate li from the list */
    const navLiMap = navList.map((e,ind)=>{
        const currentPosition = router.pathname.includes(e.link) ?
            <div className="currentNav"></div>:
            <img src={e.img}/>
        return(
            <li key={ind}>
                <Link href={e.link}>
                    <a className="flex-v a-c">
                        {currentPosition}
                        <span className="t-grey2">{e.name}</span>
                    </a>
                </Link>
            </li>
        )
    })

    return(
        <nav className="nav-dash-bottom flex j-c">
            <div className="menuHamburg" onClick={handleClick}>
                <img src="/icons/menu.svg" alt=""/>
            </div>
            <Link href={dashboardLink}>
                <a className="logo">
                    <img src="/icons/logo/logoNoTxt.svg" alt=""/>
                </a>
            </Link>
            <ul className="flex j-sa">
                {navLiMap}
            </ul>
            <PointsBtn userPoints={userPoints} />
        </nav>
    )
}