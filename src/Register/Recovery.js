import React, {useState} from "react"
import closeIcon from "../img/close-icon.png"
import recoveryPsw from "../img/recoveryPsw.svg"
import backIcon from "../img/arrow-left.svg"


export const Recovery = props => {
    const {closeHandler, getBack} = props
    const [mail, setMail] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const [psw, setPsw] = useState('')
    const [rePsw, setRePsw] = useState('')
    const [isHidePsw, setIsHidePsw] = useState(true)
    const [isHideRePsw, setIsHideRePsw] = useState(true)

    const changePassword = () => {

    }

    return (
        <div className="modal">
            <div className="recovery__container">
                <button className="back-icon btn-opacity" onClick={getBack}>
                    <img src={backIcon} />
                </button>
                <button className="close-icon btn-opacity" onClick={()=>closeHandler(false)}>
                    <img src={closeIcon} />
                </button>
                <img className="draw-image" src={recoveryPsw}/>
                <h2>Восстановление пароля</h2>
                {/*<p>Мы отправим ссылку для восстановления пароля*/}
                {/*    на вашу электронную почту</p>*/}
                <p>Введите новый пароль</p>
                <form className="recovery__form">
                    <div className="input__wrapper">
                        <input type="email" value={mail} placeholder="Электронная почта"
                              className="sign__form__input"
                              onChange={(e) => setMail(e.target.value)}/>
                    </div>
                    <div className="input__wrapper">
                        <input type={isHidePsw ? "password" : "text"} value={psw} placeholder="Пароль"
                               className="sign__form__input"
                               onChange={(e) => setPsw(e.target.value)}
                               onMouseOut={()=>{
                                   setIsHidePsw(true)
                               }}
                        />
                        <a onClick={()=>setIsHidePsw(!isHidePsw)}>{isHidePsw ? "Показать" : "Скрыть"}</a>
                    </div>
                    <div className="input__wrapper">
                        <input type={isHideRePsw ? "password" : "text"} value={rePsw} placeholder="Повторить пароль"
                               className="sign__form__input"
                               onChange={(e) => setRePsw(e.target.value)}
                               onMouseOut={()=>{
                                   setIsHideRePsw(true)
                               }}
                        />
                        <a onClick={()=>setIsHideRePsw(!isHideRePsw)}>{isHideRePsw ? "Показать" : "Скрыть"}</a>
                    </div>
                    <button className="recovery__form__button">
                        Отправить
                    </button>
                </form>
            </div>
        </div>
    )
}

