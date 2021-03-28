import {
    Switch,
    Route
} from "react-router-dom";
import React, {useState} from "react";

import "../styles/MobileMenu.css"
import "../styles/Header.css"
import "../styles/App.css";
import "../styles/Normalize.css";
import "../styles/Footer.css"
import "../styles/Register.css"
import "../styles/Sign.css"
import "../styles/Header.css"
import "../styles/About.css";

import About from "../About/About";
import Header from "./Header";
import Faq from "../Faq/Faq";
import {Register} from "../Register/Register";
import {Sign} from "../Register/Sign";


function App() {
    const [isSignShow, setIsSignShow] = useState(false)

    return (
        <>
            <Header showSignHandler={setIsSignShow}/>
            {isSignShow && <Sign showSignHandler={setIsSignShow}/>}
            <Switch>
                <Route path="/faq">
                    <Faq/>
                </Route>
                <Route path="/register">
                    <Register/>
                </Route>
                <Route path="/">
                    <About/>
                </Route>
            </Switch>
        </>
    )
}

export default App;
