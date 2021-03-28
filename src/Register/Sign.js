import React, {useState} from "react"
import sign_draw from "../img/sign_in_draw.svg"
import closeIcon from "../img/close-icon.png"

import Loader from "react-loader-spinner";
import DatePicker from "react-datepicker";
import calendarIcon from "../img/calendar-icon.svg";
import eyeHiddenIcon from "../img/eye-icon.svg";
import eyeIcon from "../img/eye-open-icon.svg";
import {Link} from "react-router-dom";


export const Sign = props => {
    const {showSignHandler} = props
    const [mail, setMail] = useState('')
    const [psw, setPsw] = useState('')

    return (
        <div className="modal">
            <div className="sign__container">
                <button className="close-icon btn-opacity" onClick={()=>showSignHandler(false)}>
                    <img src={closeIcon}/>
                </button>
                <img className="draw-image" src={sign_draw}/>
                <h2>Авторизация</h2>
                <form className="sign__form">
                    <input type="email" value={mail} placeholder="Электронная почта"
                           className="sign__form__input"
                           onChange={(e) => setMail(e.target.value)}/>
                    <input type="password" value={mail} placeholder="Пароль"
                           className="sign__form__input"
                           onChange={(e) => setMail(e.target.value)}/>
                    <button className="sign__form__button">
                        Войти
                    </button>
                </form>
                <div onClick={()=>showSignHandler(false)}
                     className="reg-link">
                    <Link className="reg-link" to="/register">Зарегистрироваться</Link>
                </div>
            </div>
        </div>
    )
}

