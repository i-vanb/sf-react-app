import React from "react"
import {Link} from "react-router-dom"

// import "../styles/MobileMenu.css"
// import "../styles/Header.css"
import logo from "../img/Logo.svg"
import closeIcon from "../img/close.svg"


function MobileMenu(props) {
    const {closeHandler} = props

    return (
        <div id="mobile-menu" className="menu__mobile is-mobile is-animated">
            <div className="menu__mobile__header">
                <img src={logo} alt="logo" width="115px"/>
                <button className="btn-opacity" onClick={closeHandler}>
                    <img id="close-menu" src={closeIcon} alt="logo"/>
                </button>
            </div>
            <nav className="menu__mobile__nav" onClick={closeHandler}>
                <Link className="menu__mobile__nav_link" to="/">О Нас</Link>
                <Link className="menu__mobile__nav_link" to="/">Условия</Link>
                <Link className="menu__mobile__nav_link" to="/faq">Частые вопросы</Link>
            </nav>
            <button className="menu__mobile__button is-mobile">Войти</button>
        </div>
    )
}


export default MobileMenu;
