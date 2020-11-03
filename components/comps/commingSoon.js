
const CommingSoon = ({clicked})=>{
    const show = clicked && "commingShow"
    const wrapper = clicked && "commingWrapper"
    return(
        <div className={`commingSoon-wrapper ${wrapper}`}>
           <div className={`commingSoon ${show}`}>
                comming soon
           </div>
        </div>
    )
}
export default CommingSoon