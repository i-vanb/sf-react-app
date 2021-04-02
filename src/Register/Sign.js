import React, {useState} from "react"
import sign_draw from "../img/sign_in_draw.svg"
import closeIcon from "../img/close-icon.png"

import {Link} from "react-router-dom";
import {Recovery} from "./Recovery";


export const Sign = props => {
    const {showSignHandler} = props;
    const [mail, setMail] = useState('');
    const [psw, setPsw] = useState('');
    const [isPswForgotten, setIsPswForgotten] = useState(false);
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(false)


    const fetchHandler = async () => {
        setIsLoading(true)
        const response = await fetch('http://localhost:8000/users/signin', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                mail, password: psw
            })
        })
        if (response.ok) {
            setIsLoading(false)
            const data = await response.json()
            console.log(data)
            localStorage.setItem("accessToken", data.accessToken)
            localStorage.setItem("refreshToken", data.refreshToken)
            localStorage.setItem("payload", JSON.stringify(data.payload))
            //history.push('/register/2') // в случае успеха
            history.push('/') // в случае успеха временно без страниц 2 и 3
        } else {
            setError(true)
            setIsLoading(false)
        }
    }


    if (isPswForgotten)
        return <Recovery
            closeHandler={showSignHandler}
            getBack={() => setIsPswForgotten(false)}
        />

    return (
        <div className="modal">
            <div className="sign__container">
                <button className="close-icon btn-opacity" onClick={() => showSignHandler(false)}>
                    <img src={closeIcon}/>
                </button>
                <img className="draw-image" src={sign_draw}/>
                <h2>Авторизация</h2>
                <form className="sign__form">
                    {error &&
                    <div className="errorSign">Не верное имя пользователя или пароль</div>
                    }
                    <div className="input__wrapper">
                        <input type="email" value={mail} placeholder="Электронная почта"
                               className="sign__form__input"
                               onChange={(e) => setMail(e.target.value)}/>
                    </div>
                    <div className="input__wrapper">
                        <input type="password" value={psw} placeholder="Пароль"
                               className="sign__form__input"
                               onChange={(e) => setPsw(e.target.value)}/>
                        <a onClick={() => setIsPswForgotten(true)}>Забыли?</a>
                    </div>
                    <button className="sign__form__button">
                        Войти
                    </button>
                </form>
                <div onClick={() => showSignHandler(false)}
                     className="reg-link">
                    <Link className="reg-link" to="/register">Зарегистрироваться</Link>
                </div>
            </div>
        </div>
    )
}

