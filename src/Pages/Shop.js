import React from "react"
import { Header } from "../Components/Header/Header"
import { Aside } from "../Components/Aside/Aside"
import { ContentContainer } from "../Components/ContentContainer/ContentContainer"
import { MainContainer } from "../Components/MainContainer/MainContainer"
import { Footer } from "../Components/Footer/Footer"
export default function Shop()
{
    return(
        <>
        <Header/>
        <main style ={{marginBottom: "50px"}}>
        <MainContainer>
            <Aside/>
            <ContentContainer/>
        </MainContainer>
        </main>
        <Footer/>
        </>
    )
}