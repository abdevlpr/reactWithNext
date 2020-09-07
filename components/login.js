
/* custom component for the title */
export const LoginMessage = ({message})=>{
        return (
            <h1 className="log-heading t-align-c t-grey2">
                {message}
            </h1>
        )
}
/* custom component for input */
export const LoginInput = ({label,type,value,change}) =>{
        return(
            <div className="log-input card">
                <label htmlFor={label}>
                    {label}
                </label>
                <input type={type} id={label} value={value} onChange={change} required/>
            </div>
        )
}
/* custom component for submit btn */
export const LoginSubmitBtn = ({btnTxt}) => {
        return(
            <div>
            {/* TODO: changing the log-submit for name as it cause problem when multiple forms are present */}
            <label htmlFor="log-submit" className="btn-next btn-interact">
                        <span>{btnTxt}</span>
                        <div className="icon flex j-c">
                            <img src="/icons/arrow-right.svg" alt=""/>
                        </div>
                    </label>
                    <input type="submit" id="log-submit" />
            </div>
        )
}