import React from "react"
import "../styles/Header.css"
import logo from "../img/Logo.svg"
import burgerMenuIcon from "../img/burger-menu.svg"


function Header() {
    return (
        <div className="header">
            <a className="header__logo" href="/"><img src={logo} alt="logo" width="115px"/></a>
            <nav className="header__nav is-desktop">
                <a className="header__nav__link is-animated is-active" href="#">О Нас</a>
                <a className="header__nav__link is-animated" href="#">Условия</a>
                <a className="header__nav__link is-animated" href="#">Частые вопросы</a>
            </nav>
            <button className="header__authBtn is-animated is-desktop">Войти</button>
            <div id="burger-menu" className="header__menu-icon is-mobile is-active">
                <img src={burgerMenuIcon} alt="logo"/>
            </div>
        </div>
    )
}

export default Header;
