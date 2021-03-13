import {
    Switch,
    Route
} from "react-router-dom";
import React from "react"
import "../styles/App.css"
import "../styles/Normalize.css"
import Home from "../Home/Home";
import About from "../About/About";
import Header from "./Header";
import MobileMenu from "./MobileMenu";
import Footer from "./Footer";
import Faq from "../Faq/Faq";

function App() {

    return (
        <>
            <Header/>
            {/*<MobileMenu/>*/}
            <Switch>
                <Route path="/faq">
                    <Faq/>
                </Route>
                <Route path="/">
                    <About/>
                </Route>
            </Switch>
            <Footer/>
        </>
    )
}

export default App;
