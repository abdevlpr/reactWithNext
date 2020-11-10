import {useState} from "react"
import Link from "next/link"
const nav = [
    {title:"home",link:"/",current:true},
    {title:"dashboard",link:"/dashboard",current:false},
    {title:"Login/Register",link:"/signin",current:false},
]
const social = {
    facebook:"#",
    dribble:"#",
    behance:"#",
    twitter:"#",

}
const testemonials = [
    {
        avatar:"/landing/home/section7/img1.png",
        quote:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam esse modi debitis dolorum pariatur totam sit, voluptatem omnis ad, possimus laborum nobis nostrum voluptatibus a minus. Recusandae dolorem ab hic.",
        author:"Gail Forcewind",
        speciality:"Specialist in Mathematics"
    },
    {
        avatar:"/landing/home/section7/img3.png",
        quote:"Course materials were good, the mentoring approach was good, and working with other people via the Internet was good. The instructor did a good job of communicating and making it a more intimate arrangement. A lot of online courses fail because of the isolation. Kitty is very good and I think it’s a very solid course. I learned a lot.",
        author:"Gail Forcewind",
        speciality:"Specialist in Mathematics"
    },
    {
        avatar:"/landing/home/section7/img2.png",
        quote:"Course materials were good, the mentoring approach was good, and working with other people via the Internet was good. The instructor did a good job of communicating and making it a more intimate arrangement. A lot of online courses fail because of the isolation. Kitty is very good and I think it’s a very solid course. I learned a lot.",
        author:"Gail Forcewind",
        speciality:"Specialist in Mathematics"
    },
]

const Home =() =>{
    const [show,setShow] = useState(true)
    const m1 = show ? "show":""
    const m2 = !show ? "show":""
    const showM = !show? "showM":""
    const handleClick=()=>{
        setShow(!show)
    }
    return(
        <div className="landingPage">
        <header>
        <div className="container">
            <nav>
                <div className="logo">
                    <img src="/landing/logo.svg" alt="logo"/>
                </div>
                <div className="nav">
                    <Navigation showM={showM}/>
                </div>
                <div className="toggler"  onClick={handleClick}>
                    <svg height="24" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g id="m1" className={`m1 ${m1}`}>
                        <path id="Vector" d="M20 1.995C20 1.445 19.554 1 19.005 1H10.995C10.7311 1 10.478 1.10483 10.2914 1.29143C10.1048 1.47803 10 1.73111 10 1.995C10 2.25889 10.1048 2.51197 10.2914 2.69857C10.478 2.88517 10.7311 2.99 10.995 2.99H19.005C19.2689 2.99 19.522 2.88517 19.7086 2.69857C19.8952 2.51197 20 2.25889 20 1.995V1.995Z" fill="black"/>
                        <path id="Vector_2" d="M20 7.99988C20 7.44988 19.554 7.00488 19.005 7.00488H0.995001C0.73111 7.00488 0.478028 7.10971 0.29143 7.29631C0.104831 7.48291 0 7.73599 0 7.99988C0 8.26377 0.104831 8.51686 0.29143 8.70345C0.478028 8.89005 0.73111 8.99488 0.995001 8.99488H19.005C19.2689 8.99488 19.522 8.89005 19.7086 8.70345C19.8952 8.51686 20 8.26377 20 7.99988V7.99988Z" fill="black"/>
                        <path id="Vector_3" d="M19.005 13.01C19.2689 13.01 19.522 13.1148 19.7086 13.3014C19.8952 13.488 20 13.7411 20 14.005C20 14.2689 19.8952 14.522 19.7086 14.7086C19.522 14.8952 19.2689 15 19.005 15H6.995C6.73111 15 6.47803 14.8952 6.29143 14.7086C6.10483 14.522 6 14.2689 6 14.005C6 13.7411 6.10483 13.488 6.29143 13.3014C6.47803 13.1148 6.73111 13.01 6.995 13.01H19.005Z" fill="black"/>
                        </g>
                        <g id="m2" className={`m2 ${m2}`}>
                        <path id="x1" className='m2' d="M18.8457 14.8457C19.2347 14.4568 19.2339 13.8267 18.8457 13.4385L6.11075 0.703527C5.92415 0.516929 5.67107 0.412099 5.40718 0.412099C5.14329 0.412099 4.89021 0.516928 4.70361 0.703527C4.51701 0.890126 4.41218 1.14321 4.41218 1.4071C4.41218 1.67099 4.51701 1.92407 4.70361 2.11067L17.4386 14.8457C17.6252 15.0323 17.8783 15.1371 18.1422 15.1371C18.4061 15.1371 18.6591 15.0323 18.8457 14.8457V14.8457Z" fill="black"/>
                        <path id="x2" className='m2' d="M4.70366 14.8457C5.09256 15.2347 5.7226 15.2339 6.1108 14.8457L18.8458 2.11075C19.0324 1.92415 19.1372 1.67107 19.1372 1.40718C19.1372 1.14329 19.0324 0.890209 18.8458 0.70361C18.6592 0.517011 18.4061 0.412182 18.1422 0.412182C17.8783 0.412182 17.6252 0.517012 17.4386 0.703611L4.70366 13.4386C4.51706 13.6252 4.41223 13.8783 4.41223 14.1422C4.41223 14.4061 4.51706 14.6591 4.70366 14.8457V14.8457Z" fill="black"/>
                        </g>
                        </svg>
                </div>
            </nav>
        </div>
    </header>
    <main>
        <section className="hero">
            {/* background */}
            <div className="svg">
                <img src="/landing/home/section1_background.svg" alt=""/>
            </div>
            {/* background */}
            <div className="container hero-wrapper">
                <div className="hero-des">
                    <div className="herp-top">
                        <h1>Find the Best Courses &
                            Become Master</h1>
                        <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of
                            classical Latin literature</p>
                    </div>
                    <div className="bot">
                      <div className="btn btn-shadow">
                          <div className="img"><img src="/landing/icons/edge.svg" alt="btn-icon"/></div>
                          <div className="des"><span>Use the</span><span>Web Platform</span></div>
                      </div>
                      <div className="btn btn-shadow">
                            <div className="img"><img src="/landing/icons/apple_bk.svg" alt="btn-icon"/></div>
                            <div className="des"><span>Under Development</span><span>IOS App</span></div>
                        </div>
                        <div className="btn btn-shadow">
                            <div className="img">
                            <img src="/landing/icons/playstore.svg" alt="btn-icon"/></div>
                            <div className="des"><span>Under Development</span><span>Android App</span></div>
                        </div>
                    </div>
                </div>
                <div className="hero-img">
                    <img src="/landing/home/section1_hero.svg " alt="learning-img"/>
                </div>
            </div>
        </section>



        <section className="how-it">
            <div className="container">
                <div className="top">
                    <h2>Supported Curriculum</h2>
                </div>
                <div className="bottom">
                    <div className="card">
                        <img src="/landing/logos/ib.svg" alt="card-icon"/>
                        <h3>International Baccalaureate<br />Diploma Programme</h3>
                        <p>In Closed β</p>
                    </div>
                    <div className="card">
                        <img src="/landing/logos/caie.svg" alt="card-icon"/>
                        <h3>Cambridge International<br />IGCSE & A Levels</h3>
                        <p>Coming soon</p>
                    </div>
                    <div className="card">
                        <img src="/landing/logos/cb.svg" alt="card-icon"/>
                        <h3>Collegeboard<br />Advanced Placement</h3>
                        <p>Coming soon</p>
                    </div>

                    <br />

                    <div className="card">
                        <img src="/landing/logos/sat.svg" alt="card-icon"/>
                        <h3>SAT</h3>
                        <p>In Closed α</p>
                    </div>

                    <div className="card">
                        <img src="/landing/logos/act.svg" alt="card-icon"/>
                        <h3>ACT</h3>
                        <p>Coming soon</p>
                    </div>
                </div>
            </div>
        </section>
        <section className="top-instructor">
            <div className="deco">
              <img src="/landing/home/section6/decoration/deco1.svg" alt=""/>
              <img src="/landing/home/section6/decoration/deco2.svg" alt=""/>
              <img src="/landing/home/section6/decoration/deco3.svg" alt=""/>
            </div>
            <div className="container">
                <div className="top">
                    <h2>Our Team</h2>
                </div>
                <div className="bottom">
                    <div className="card">
                        <img src="/landing/home/section6/img1.png" alt="card-img"/>
                        <h3>Zack Lee</h3>
                        <span>Specialist in Mathematics</span>
                    </div>
                    <div className="card">
                        <img src="/landing/home/section6/img2.png" alt="card-img"/>
                        <h3>Otto Matic</h3>
                        <span>Specialist in Biology</span>
                    </div>
                    <div className="card">
                        <img src="/landing/home/section6/img3.png" alt="card-img"/>
                        <h3>Otto Matic</h3>
                        <span>Specialist in Biology</span>
                    </div>
                </div>
            </div>
        </section>
        {/* tesstemonial*/}
        <Testemonial />
        <section className="popular">
            {/* background */}
            <div className="deco">
                <img src="/landing/home/section4/decoration/deco1.svg" alt=""/>
                <img src="/landing/home/section4/decoration/deco2.svg" alt=""/>
                <img src="/landing/home/section4/decoration/deco3.svg" alt=""/>
            </div>
            {/* background */}
            <div className="container">
                <div className="top">
                    <h2>Popular Subjects</h2>
                </div>
                <div className="bottom">

                    <div className="card">
                        <img src="/landing/home/section4/maths.svg" alt="card-icon"/>
                        <h3>UX/UI Design</h3>
                    </div>
                    <div className="card">
                        <img src="/landing/home/section4/icon2.svg" alt="card-icon"/>
                        <h3>Physics</h3>
                    </div>
                    <div className="card">
                        <img src="/landing/home/section4/icon3.svg" alt="card-icon"/>
                        <h3>Chemistry</h3>
                    </div>
                    <div className="card">
                        <img src="/landing/home/section4/icon4.svg" alt="card-icon"/>
                        <h3>Biology</h3>
                    </div>
                    <div className="card">
                        <img src="/landing/home/section4/icon5.svg" alt="card-icon"/>
                        <h3>Personal
                            Development</h3>
                    </div>

                </div>
            </div>
        </section>

        <section className="get-in">
            {/* background */}
            <div className="deco">
              <img src="/landing/home/section8/decoration/deco1.svg" alt=""/>
              <img src="/landing/home/section8/decoration/deco2.svg" alt=""/>
              <img src="/landing/home/section8/decoration/deco3.svg" alt=""/>
              <img src="/landing/home/section8/decoration/deco4.svg" alt=""/>
              <img src="/landing/home/section8/decoration/deco5.svg" alt=""/>
            </div>
            {/* background */}
            <form>
                <div className="form">
                    <div className="des">
                        <h2>Get in Touch</h2>
                        <p>Subcribe our newsletter to receive latest news </p>
                    </div>
                    <div className="fields">
                        <div className="top-fields">
                            <div className="name stack">
                                <label for="name">Name</label><input type="text" name='name' id="name"/>
                            </div>
                            <div className="email stack">
                                <label for="email">Email</label>
                                <input type="email" name="email" id="email"/>
                            </div>
                        </div>
                        <div className="bot-fields">
                            <div className="message stack">
                                <label for="message">Message</label>
                                <input type="text" name="message" id='message'/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="submit">
                    <input type="submit" value="SUBCSRIBE"/>
                </div>
            </form>
        </section>

    </main>
    <footer>
        <div className="container">
            <div className="footer-wrapper">
                <div className="left">
                    <p>Copyright © 2020. All Rights Reserved</p>
                </div>
                <SocialMedia />
            </div>
        </div>
    </footer>
    </div>
    )
}

const Navigation=({showM})=>{
    const navItems = nav.map((l,ind)=>{
        const current = l.current ? "current" : ""
        return(
            <>
                <li key={ind}>
                    <Link href={l.link}>
                        <a className={current}>
                            {l.title}
                        </a>
                    </Link>
                </li>
            </>
        )
    })
    return(
        <ul id="menu" className={showM}>
            {navItems}
        </ul>
    )
}
const SocialMedia = ()=>{
    return(
        <div className="right">
                    {/*social media */}
                    <a href={social.facebook} className="facebook">
                        <svg width="9" height="17" viewBox="0 0 9 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M7.35689 2.82271H9V0.119708C8.71652 0.082875 7.74161 0 6.6062 0C4.23715 0 2.61428 1.40746 2.61428 3.99429V6.375H0V9.39675H2.61428V17H5.81952V9.39746H8.32806L8.72627 6.37571H5.81877V4.29392C5.81952 3.42054 6.06849 2.82271 7.35689 2.82271Z"
                                fill="#758FA4" />
                        </svg>
                    </a>
                    <a href={social.dribble} className="dribble">
                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M10.2313 14.4789C10.2438 14.4752 10.2557 14.4702 10.2682 14.4658C17.91 11.4332 15.7961 0 7.50734 0C3.34765 0 0 3.38696 0 7.4988C0 12.7023 5.27641 16.4155 10.2313 14.4789ZM3.30386 12.5349C3.83688 11.64 5.56169 9.11542 8.50582 8.24431C9.12142 9.81218 9.55309 11.6413 9.59563 13.7153C7.3647 14.4646 5.01178 13.9603 3.30386 12.5349ZM10.5184 13.3241C10.4365 11.3313 10.0292 9.5641 9.44861 8.03309C10.7511 7.83 12.2589 7.9656 13.9687 8.64987C13.6052 10.6877 12.3008 12.4005 10.5184 13.3241ZM14.0669 7.68065C12.1838 6.97389 10.524 6.88577 9.08764 7.15948C8.86554 6.65956 8.63219 6.17901 8.38507 5.73658C10.5891 4.85735 11.8916 3.78564 12.4747 3.21824C13.5038 4.40805 14.1151 5.94842 14.0669 7.68065ZM11.8084 2.55084C11.2779 3.05514 10.0286 4.07372 7.89209 4.90672C6.84482 3.25198 5.72497 2.08467 5.01553 1.43102C7.28525 0.49742 9.90281 0.896107 11.8084 2.55084ZM4.1184 1.88907C4.65393 2.35962 5.82945 3.48944 6.96368 5.23666C5.40591 5.73783 3.45275 6.1059 1.0773 6.15777C1.45517 4.3493 2.58378 2.81705 4.1184 1.88907ZM0.958437 7.09887C3.61729 7.05575 5.76939 6.63644 7.47043 6.06903C7.70566 6.48084 7.929 6.92952 8.14359 7.39569C5.18132 8.33804 3.33013 10.7708 2.62131 11.8694C1.47769 10.5946 0.847078 8.93107 0.958437 7.09887Z"
                                fill="#758FA4" />
                        </svg>
                    </a>
                    <a href={social.behance} className="behance">
                        <svg width="17" height="11" viewBox="0 0 17 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M8.75713 7.66113C8.75713 6.30593 8.1345 5.3042 6.84817 4.92873C7.78671 4.466 8.27617 3.76493 8.27617 2.67447C8.27617 0.524334 6.7235 0 4.93213 0H0V10.7954H5.07025C6.97142 10.7954 8.75713 9.85453 8.75713 7.66113ZM2.29925 1.84287H4.45683C5.28629 1.84287 6.03288 2.0834 6.03288 3.07633C6.03288 3.993 5.45204 4.36187 4.63038 4.36187H2.29925V1.84287ZM2.29854 8.96207V5.98913H4.80463C5.81683 5.98913 6.45717 6.42473 6.45717 7.5306C6.45717 8.62107 5.69288 8.96207 4.75717 8.96207H2.29854Z"
                                fill="#758FA4" />
                            <path
                                d="M13.3138 11C15.1229 11 16.2945 10.1589 16.8583 8.371H15.0223C14.8247 9.03833 14.0101 9.39107 13.3783 9.39107C12.1593 9.39107 11.5189 8.65407 11.5189 7.40153H16.9823C16.9915 7.27467 17 7.13753 17 7.0004C17 4.6882 15.6896 2.76027 13.3138 2.76027C11.0054 2.76027 9.43854 4.55107 9.43854 6.897C9.43783 9.3302 10.9225 11 13.3138 11ZM13.2487 4.38093C14.2935 4.38093 14.819 5.01453 14.9069 6.05073H11.5218C11.5905 5.02333 12.2513 4.38093 13.2487 4.38093Z"
                                fill="#758FA4" />
                            <path d="M11.0975 0.566867H15.339V1.6302H11.0975V0.566867Z" fill="#758FA4" />
                        </svg>
                    </a>
                    <a href={social.twitter} className="twitter">
                        <svg width="16" height="13" viewBox="0 0 16 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M5.03187 12.9999C11.0699 12.9999 14.3718 7.99887 14.3718 3.66234C14.3718 3.52031 14.3689 3.37886 14.3625 3.23819C15.0034 2.7749 15.5605 2.19678 16 1.53873C15.4118 1.80021 14.7788 1.976 14.1149 2.05553C14.7926 1.64908 15.3129 1.00639 15.5583 0.24025C14.9241 0.616178 14.2216 0.889296 13.4739 1.03681C12.8749 0.398916 12.0219 0 11.0776 0C9.26491 0 7.79477 1.46967 7.79477 3.28133C7.79477 3.53899 7.82363 3.78941 7.87989 4.02966C5.15163 3.89242 2.73227 2.5866 1.1134 0.60082C0.8316 1.08572 0.668978 1.64917 0.668978 2.25039C0.668978 3.38883 1.24852 4.39415 2.12973 4.98205C1.59118 4.96552 1.08532 4.81771 0.643049 4.57169C0.64256 4.58548 0.64256 4.59889 0.64256 4.61356C0.64256 6.20297 1.77406 7.53001 3.2763 7.83072C3.00037 7.90575 2.71006 7.94615 2.41065 7.94615C2.1995 7.94615 1.99363 7.92541 1.79363 7.88696C2.21153 9.19093 3.42346 10.1398 4.86024 10.1664C3.73667 11.0468 2.32132 11.5712 0.783068 11.5712C0.51849 11.5712 0.256946 11.5561 0 11.5257C1.45283 12.4567 3.17796 13 5.03197 13"
                                fill="#758FA4" />
                        </svg>
                    </a>
                </div>
            
    )
}
const Testemonial = ()=>{
    const [coordinate,setCoordinate] = useState(0)
    const testemonialItems = testemonials.map((t,ind)=>(
        <div className="quote-wrapper slide-item" key={ind}>
            <div className="photo">
                <img src={t.avatar} alt="quote-img"/>
            </div>
            <div className="quote">
                <div className="deco">
                    <img src="/landing/home/section7/decoration/deco1.svg" alt="quote-icon"/>
                </div>
                <blockquote>
                    {t.quote}
                </blockquote>
                <div className="footer">
                    <div className="author">
                        <h3>{t.author}</h3><span>{t.speciality}</span>
                    </div>
                </div>
            </div>
        </div>
    ))
    let slideNums = testemonials.length
    
    const handleClick=(dir)=>{
        if(dir=="left"){
            setCoordinate(coordinate+100)
            /* reset */
            if(coordinate>=0){
                setCoordinate(-100*slideNums+100)
            }
        }
        if(dir=="right"){
            setCoordinate(coordinate-100)
            /* rest */
            if(coordinate<=-100*slideNums+100){
                setCoordinate(0)
            }
        }
    }
    let sliderStyle = {
        transform:`translateX(${coordinate}%)`
    }
    return(
        <section className="testomonial">
            <div className="left" onClick={()=>{handleClick("left")}}>
                <img src="/landing/home/section7/decoration/left.svg" alt=""/>
            </div>
            <div className="slider-wrapper">
                <div className="slider" id="slider" style={sliderStyle}>
                    {testemonialItems}
                </div>
            </div>
            <div className="right" onClick={()=>{handleClick("right")}}>
                <img src="/landing/home/section7/decoration/right.svg" alt=""/>
            </div>
        </section>
    )
}

export default Home

