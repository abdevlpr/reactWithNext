import Link from "next/link"

export const Nav = () =>{

    const navList = [
        {name:"Home",img:"/icons/nav/home.svg",link:"#"},
        {name:"Courses",img:"/icons/nav/courses.svg",link:"#"},
        {name:"Settings",img:"/icons/nav/settings.svg",link:"#"},
    ]

    /* generate li from the list */
    const navLiMap = navList.map((e,ind)=>{
        return(
            <li key={ind}>
                <a href={e.link} className="flex-v a-c">
                    <img src={e.img}/>
                    <span className="t-grey2">{e.name}</span>
                </a>
            </li>
        )
    })

    return(
        <nav className="nav-dash-bottom flex j-c">
            <a className="logo" href="#">
                <img src="/icons/logo/logoNoTxt.svg" alt=""/>
            </a>
            <ul className="flex j-sa">
                {navLiMap}
            </ul>
            <a href="#" className="points flex">
                <img src="/icons/nav/points.svg" alt=""/>
                <span>210</span>
            </a>
        </nav>
    )
}

export const Tabs = ({pages}) =>{
    
    const tabItems = pages.map((e,ind)=>{
        let active = e.inNow ? "current-tab" : ""
        return(
            <Link href={e.href} key={ind}>
                <a className={active}>{e.name}</a>
            </Link>
        )
    })
    
    return(
        <div className="tabs-wrapper t-align-c comp">
            <div className="tabs card">
                {tabItems}
            </div>
        </div>
    )
}

