import React from "react"
import { SignIn } from "../../Components/SignIn/SignIn"
import { SignUp } from "../../Components/SignUp/SignUp"
import "./SignInpage.css"


export function SignInPage()
{
    return (
        <main className="auth-main">
            <SignIn/>
            <SignUp/>


        </main>
    )
}