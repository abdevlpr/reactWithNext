import {useState} from "react"
import Link from "next/link"
/* components */
import {LoginMessage,LoginInput,LoginSubmitBtn} from "../components/login"

export default function Signin(){

    /* state object to store the email and password */
    const [userCred,setUserCred] = useState({email:"",password:""})

    /* handling change on the inputs */
    const handleChange = (event) => {
        const target = event.target
        const targetName = target.id.toString().toLowerCase()
        setUserCred({...userCred,[targetName]:target.value})
    }

    /* handling form submition */
    const handleSubmit= (event) =>{
        event.preventDefault()
        console.log("successfully submitted and the result is an object :",userCred)
        /* TODO: handle the submition to the server */
    }

    return (
        <div className="login flex j-c">
            <div className="login-inner">
            <div className="log-wrapper">
                <LoginMessage message="Welcome Back"/>
                <form action="" onSubmit={handleSubmit}>
                    <LoginInput label="Email" type="email" value={userCred.email} change={handleChange}/>
                    <LoginInput label="Password" type="password" value={userCred.password} change={handleChange}/>
                    <div className="des">
                        <Link href="/recover">
                            <a className="t-grey2">
                            Forgot Password?
                            </a>
                        </Link>
                    </div>
                    <LoginSubmitBtn btnTxt="SIGN IN"/>
                    <div className="des">
                        <span className="t-grey2">
                            Don’t have an account?
                        </span>
                            <Link href="/signup">
                                <a className="t-blue"> Sign Up</a>
                            </Link>
                        
                    </div>
                </form>
            </div>
            <div className="login-left flex j-c">
                <img src="/bg/svg/login.svg" />
            </div>
        </div>
        </div>
    )
}