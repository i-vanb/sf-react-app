import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import React from "react"
import "../styles/App.css"
import "../styles/Normalize.css"
import Home from "../Home/Home";
import About from "../About/About";
import Header from "./Header";
import MobileMenu from "./MobileMenu";
import Footer from "./Footer";

function App() {
    return (
        <>
            <Header />
            <MobileMenu />
            <About />
            <Footer />
        </>
    )
}

export default App;
