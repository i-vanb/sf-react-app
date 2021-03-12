import React from "react"
import "../styles/MobileMenu.css"
import logo from "../img/Logo.svg"
import closeIcon from "../img/close.svg"


function MobileMenu() {
    return (
        <div id="mobile-menu" className="menu__mobile is-mobile is-animated">
            <div className="menu__mobile__header">
                <img src={logo} alt="logo" width="115px"/>
                <img id="close-menu" src={closeIcon} alt="logo"/>
            </div>
            <nav className="menu__mobile__nav">
                <a className="menu__mobile__nav_link is-active" href="#">О Нас</a>
                <a className="menu__mobile__nav_link" href="#">Условия</a>
                <a className="menu__mobile__nav_link" href="#">Частые вопросы</a>
            </nav>
            <button className="menu__mobile__button is-mobile">Войти</button>
        </div>
    )
}


export default MobileMenu;
