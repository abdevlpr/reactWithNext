const NotificationList = ({list=[]})=>{
    
    const notificationItems = list.map((l,c)=>{
        const connect = l.status ? "green" : "red"
        return(
            <div className="notif-wrapper" key={c}>
                <div className="notif-item comp">
                    <span className={`indicator ${connect}`}></span>
                    <div className="avatar">
                        <img src={l.img} alt=""/>
                    </div>
                    <div className="des">
                        <h4>{l.message}</h4>
                        <h5>{l.time}</h5>
                    </div>
                    <div className="notif-end">
                        {l.follow ? 
                        <a href="#" className="follow">follow</a> :
                        <a href="#" className="follow following">following</a>
                        }
                    </div>
                </div>
            </div>
        )
    })
    return(
        <div className="notifs-wrapper scroll axe-y">
            {list.length ? 
             notificationItems:
             <p>no notifications </p>
            }
        </div>
    )
 }
    

export default NotificationList