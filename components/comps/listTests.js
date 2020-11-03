import Link from "next/link"

const Test = ({testList}) =>{

    const tests = testList.map((t,ind)=>{
        return(
            <div className="card comp" key={ind}>
                <div className="head flex">
                    <div className="icon flex j-c bg-grad-blue-1">
                        <img className="icon-l" src={t.icon}/>
                    </div>
                    <div className="des">
                        <h5 className="t-grey0">Test {ind+1}</h5>
                        <h3 className="t-grey2">{t.title}</h3>
                    </div>
                </div>
                <p className="t-grey0">{t.des}</p>
                <NextBtn btnTxt="BEGIN" btnLinkable={t.btnLinkable} btnLink={t.btnLink}/>
            </div>
        )
    })

    return(
        <div className="test-card flex j-c flex-wrap">
            {tests}
        </div>
    )
}

export const NextBtn = ({btnTxt,btnLinkable,btnLink}) => {
    const BtnLinkable = btnLinkable? "btn-interact":""
    const BtnLink = btnLink? btnLink : "#"
      return(
        <div>
        <Link href={BtnLink}>
            <a className={`btn-next ${BtnLinkable}`} >
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