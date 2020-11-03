import {useState} from "react"
import CommingSoon from "./commingSoon"
const PointsBtn = ({userPoints}) =>{

    const [clicked,setClicked] = useState(false)

    const handleClick = () =>{
        setClicked(true)
        console.log("clicked")
        const timeout = setTimeout(() => {
            setClicked(false)
            clearTimeout(timeout)
        }, 500);
    }
    return(
        <>
            <a className="points flex" onClick={handleClick}>
                <img src="/icons/nav/points.svg" alt=""/>
                <span className="points">{userPoints}</span>
            </a>
            <CommingSoon clicked={clicked} setClick={handleClick}/>
        </>
    )
}

export default PointsBtn