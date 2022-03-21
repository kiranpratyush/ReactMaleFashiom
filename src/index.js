import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import { ContextProvider } from "./Contexts/DataContext"
const div = document.querySelector("#root")

ReactDOM.render(<React.StrictMode><ContextProvider><App/></ContextProvider></React.StrictMode>,div)