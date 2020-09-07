import {Tabs} from "components/nav"
import {Subheading,DiscussList} from "components/posts"

const Discuss = ()=>{
    const tabs = [
        {href:"#",name:"Lesson",inNow:false},
        {href:"#",name:"Test",inNow:false},
        {href:"#",name:"Discuss",inNow:true}
        
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


export default Discuss