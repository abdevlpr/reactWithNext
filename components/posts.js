export const HeaderWithImg = ({title,btnLink,img,badge}) =>{
    return(
        <div className="header-wrapper comp-x">
        <div className="header-img">
            <img src={img} alt=""/>    
        </div>
        
        <div className="header-cont">
            <div className="badge">
                <img src={badge} alt=""/>
            </div>
            <h1>{title}</h1>
            <a href="#" className="btn bg-blue1">
                {btnLink}
            </a>
        </div>
    </div>
    )
}
export const Subheading= ({title,des}) =>{
    return(
        <div className="subHeading comp">
                <h3>{title}</h3>
                <p>{des}</p>
        </div>
    )
}
export const PostHead = ({img})=>{
    return(
        <div className="post-head-wrapper comp">
            <img src={img} alt="sience-pic" className="post-head"/>
        </div>
    )
}
export const Article=({title,content})=>{
    return(
        <article className="comp">
            <h3 className="t-grey2 heading-0">{title}</h3>
            <p className="t-grey0">{content}</p>
        </article>
    )
}
export const DiscussList = ({discussList}) =>{

    const discussItems = discussList.map(d=>{
        const likeImg = d.like?"/icons/like-fill.svg":"/icons/like.svg"
        return(
            <div class="discuss-item">
                <div class="avatar">
                    <img src={d.avatarImg}/>
                </div>
                <div class="des">
                    <div class="top flex j-sb">
                        <h3>{d.title}</h3>
                        <h5>{d.time}</h5>
                    </div>
                    <p>{d.des}</p>
                    <div class="bot flex">
                        <div class="like">
                            <img src={likeImg}/>
                            <span>{d.likeNumber}</span>
                        </div>
                        <div class="reply">
                            <img src="/icons/reply.svg"/>
                            <span> Reply</span>
                        </div>
                    </div>
                </div>
            </div>
            
        )
    })

    return(
        <div class="discuss-wrapper comp">
            {discussItems}
        </div>
    )

}