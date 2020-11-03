import {useState} from "react"
import CommingSoon from "./commingSoon"
const ResourcesBtn = () =>{
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
            <a href="#" className="drop-btn flex j-sa t-grey2 card" onClick={handleClick}>
                <img className="icon-s0" src="/icons/drop-down.svg" alt=""/>
                <span>All resources</span>
            </a>
            <CommingSoon clicked={clicked} setClick={handleClick}/>
        </>
    )
}
export default ResourcesBtn