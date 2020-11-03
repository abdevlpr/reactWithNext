import Link from "next/link"
const CustomText = ({type,disabled,link='#',children})=>{
    const NotLink = type
    const linkClass = disabled? "disabled" : ""
    const ElementType = (type==="a"||type==="link")
    ?<Link href={link}><a className={linkClass}>{children}</a></Link>
    :<NotLink>{children}</NotLink>
    
    return(
        <>
            {ElementType}
        </>
    )
}
export default CustomText
/* usage
    props:{
        type
        link
        disabled
    }

    <CustomText type="tagname">
        inner elements either text or other tag elements
    </CustomText>

    ps:link and disabled work only with type="link" or type="a"
    <CustomText type="link" link="/home" disabled>
        text 
        <h1>tags</h1>
    </CustomText>

*/
