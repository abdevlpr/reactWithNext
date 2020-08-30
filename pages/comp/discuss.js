import {Subheading,Tabs} from "./lesson"

const Discuss = ()=>{
    const tabs = [
        {href:"#",name:"Lesson",stat:false},
        {href:"#",name:"Test",stat:false},
        {href:"#",name:"Discuss",stat:true}
        
    ]

    const discussList= [
        {avatarImg:"/user/user_opt1.jpg",title:"Tara Zona",time:"30 min",des:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Libero, nibh ipsum vestibulum ut arcu risus purus eu id. At eget magnis nulla.",like:true,likeNumber:24},
        {avatarImg:"/user/user_opt1.jpg",title:"Bridget Theriveaquai",time:"1 hour",des:"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis",like:false,likeNumber:24},
        {avatarImg:"/user/user_opt1.jpg",title:"Staum Clowd",time:"5 hours",des:"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making",like:true,likeNumber:24},
    ]

    return(
        <div>
            <Subheading title="Biology & The Scientific Method" des="2-4 hours a week" />
            <Tabs pages={tabs} />
            <DiscussList discussList={discussList} />
        </div>
    )
}

const DiscussList = ({discussList}) =>{

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

export default Discuss