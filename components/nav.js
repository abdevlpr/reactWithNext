

function Nav(){
    return(
        <nav className="nav-dash-bottom flex j-c">
            <ul className="flex j-sb">
                <NavLi name="Home" img="/icons/nav/home.svg"/>
                <NavLi name="Chat" img="/icons/nav/chat.svg"/>
                <NavLi name="Courses" img="/icons/nav/courses.svg"/>
                <NavLi name="Notification" img="/icons/nav/notif.svg"/>
                <NavLi name="Profile" img="/icons/nav/profile.svg"/>
            </ul>
        </nav>
    )
}
/* custom li taking two props */
const NavLi = (props) =>{
    const name = props.name
    const img = props.img
    return(
        <li>
            <a href="#" className="flex-v a-c">
                <img src={img}/>
                <span className="t-grey2">{name}</span>
            </a>
        </li>
    )
} 

export default Nav