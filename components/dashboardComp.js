
export const UserInfo = ({title,des}) =>{
    return(
        
        <div className="user">
            <div className="user-img-wrapper comp">
                <img className='user-img img-rc' src="/user/user_opt1.jpg" alt=""/>
                <span className="icon bg-blue1 flex j-c img-rc">
                    <img className='icon-s' src="/icons/plus-white.svg" alt=""/>
                </span>
            </div>
            <h2 className="t-grey2 t-align-c">{title}</h2>
            <p className="t-grey2 comp">{des}</p>
        </div>
    )
}