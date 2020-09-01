
import Link from "next/link"

const Test = () =>{

    const testList = [
        {icon:"/icons/curriculum/icon1.svg",title:"Heredity and Evolution",des:"The first step in the scientific method is stating a problem based on observation. In this stage",btnLinkable:true,btnLink:"google.com"},
        {icon:"/icons/curriculum/icon2.svg",title:"Our Environment",des:"The first step in the scientific method is stating a problem based on observation. In this stage",btnLinkable:false},
        {icon:"/icons/curriculum/icon3.svg",title:"Life Processes",des:"The first step in the scientific method is stating a problem based on observation. In this stage",btnLinkable:false}
    ]

    const tests = testList.map((t,ind)=>{
        return(
            <div class="card comp" key={ind}>
                <div class="head flex">
                    <div class="icon flex j-c bg-grad-blue-1">
                        <img class="icon-l" src={t.icon}/>
                    </div>
                    <div class="des">
                        <h5 class="t-grey0">Test {ind+1}</h5>
                        <h3 class="t-grey2">{t.title}</h3>
                    </div>
                </div>
                <p class="t-grey0">{t.des}</p>
                <NextBtn btnTxt="BEGIN" btnLinkable={t.btnLinkable} btnLink={t.btnLink}/>
            </div>
        )
    })

    return(
        <div class="test-card flex j-c flex-wrap">
            {tests}
        </div>
    )

}
export const NextBtn = (props) => {
    const btnTxt = props.btnTxt
    const btnLinkable = props.btnLinkable? "btn-interact":""
    const btnLink = props.btnLink? props.btnLink:"#"
      return(
        <div>
        <Link href={btnLink}>
            <a className={`btn-next ${btnLinkable}`} >
                <span>{btnTxt}</span>
                <div className="icon flex j-c">
                    <img src="/icons/arrow-right.svg" alt=""/>
                </div>
            </a>
        </Link>
        </div>
      )
}

export default Test