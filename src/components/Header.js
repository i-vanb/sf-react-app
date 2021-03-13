import React, {useState} from "react"
import {Link} from "react-router-dom";
import "../styles/Header.css"
import logo from "../img/Logo.svg"
import burgerMenuIcon from "../img/burger-menu.svg"
import MobileMenu from "./MobileMenu";


function Header() {
    const [isMobileMenuShow, setIsMobileMenuShow] = useState(false)

    return (
        <div className="header">
            <a className="header__logo" href="/"><img src={logo} alt="logo" width="115px"/></a>
            <nav className="header__nav is-desktop">
                <Link className="header__nav__link is-animated" to="/">О Нас</Link>
                <Link className="header__nav__link is-animated" to="/">Условия</Link>
                <Link className="header__nav__link is-animated" to="/faq">Частые вопросы</Link>
            </nav>
            <button className="header__authBtn is-animated is-desktop">Войти</button>
            {!isMobileMenuShow
            &&
            <div id="burger-menu" className="header__menu-icon is-mobile is-active">
                <button className="btn-opacity" onClick={()=>setIsMobileMenuShow(true)}><img src={burgerMenuIcon} alt="logo"/></button>
            </div>
            }
            {isMobileMenuShow && <MobileMenu closeHandler={()=>setIsMobileMenuShow(false)}/>}
        </div>
    )
}

export default Header;
