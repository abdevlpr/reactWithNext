import {LoginSubmitBtn} from "./loginItems"

export const SettingList = ({list}) =>{
    const settinglist = list.map((c,ind)=>{
        return(
            <div className="item" key={ind}>
                <div className="icon">
                    <img src={c.img} alt=""/>
                </div>
                <div className="right">
                    <h3><a href={c.link}>{c.title}</a></h3>
                    <img src="/icons/arrow-right-2.svg" />
                </div>
            </div>
        )
    })

    return(
        <div className="comp-wrapper">
            <div className="setting-titles comp">
                {settinglist}
            </div>
         </div>
    )
}
export const EditProfileInputs = ({img,list}) =>{
    
    const EditFields = list.map((e,ind)=>{
        return(
            <div className="field" key={ind}>
                <label htmlFor={e.name}>{e.label}</label>
                <div className="input">
                    <input type={e.type} id={e.name} value="helo"/>
                    <div className="icon"></div>
                </div>
            </div>
        )
    })
    return(
        <div className="comp-wrapper">
        <img src={img} alt="" className="comp"/>
            <div className="fields comp">
                <form>
                    {EditFields}
                    <LoginSubmitBtn btnTxt="SAVE"/>
                </form>
            </div>
           
        </div>
    )
}
export const Privacy = ({img,list}) =>{
    const Togglelist = list.map((t,ind)=>{
        return(
            <div className="item" key={ind}>
                    <h3>{t.title}</h3>
                    <div className="toggle">
                        <input type="checkbox" name="" id={t.type}/>
                        <label htmlFor={t.type} className="in-toggle"></label>
                    </div>
            </div>
        )
    })
    return(
        <div>
            <img src={img} className="comp"/>
            <div className="switch-items comp">            
                {Togglelist}
            </div>
        </div>
    )
}
export const AboutInfo = ({img,list}) =>{

    const infoItem = list.map((i,ind)=>{
        const img = i.open ? "/icons/minus.svg":"/icons/plus.svg"
        const imgClass = i.open ? "open":""
        return(
            <div className="item" key={ind}>
                <div className="top">
                    <h3>{i.title}</h3>
                    <div className={`icon ${imgClass}`}><img src={img} alt=""/></div>
                </div>
                <p>{i.content}</p>
            </div>
        )
    })

    return(
        <div>
        <img src={img} className="comp"/>
            <div className="info-items comp">
                {infoItem}
            </div>
        </div>
    )
}
