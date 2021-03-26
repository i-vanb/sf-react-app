import React, {useState, useEffect} from "react"
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css";
import calendarIcon from "../img/calendar-icon.svg"
import eyeHiddenIcon from "../img/eye-icon.svg"
import eyeIcon from "../img/eye-open-icon.svg"


export const Register = () => {
    const [birthDate, setBirthDate] = useState('');
    const [datePassport, setDatePassport] = useState('');
    const [dateLicence, setDateLicence] = useState('')

    const [name, setName] = useState('')
    const [date, setDate] = useState('')
    const [mail, setMail] = useState('')
    const [phone, setPhone] = useState('')
    const [numPassport, setNumPassport] = useState('')
    // const [datePassport, setDatePassport] = useState('')
    const [orgPassport, setOrgPassport] = useState('')
    const [codePassport, setCodePassport] = useState('')
    const [numLicence, setNumLicence] = useState('')
    // const [dateLicence, setDateLicence] = useState('')
    const [password, setPassword] = useState('')
    const [repeatPassword, setRepeatPassword] = useState('')
    const [isHiddenPsw, setIsHiddenPsw] = useState(true)
    const [isHiddenRePsw, setIsHiddenRePsw] = useState(true)
    const [isRepeatPasswordError, setIsRepeatPasswordError] = useState(false)
    const [isPasswordError, setIsPasswordError] = useState(false)


    const checkPasswordRepeat = () => {
        setIsHiddenRePsw(true)
        if (password !== repeatPassword) {
            setIsRepeatPasswordError(true)
        }
    }

    const checkPassword = () => {
        setIsHiddenPsw(true)
    }

    const passwordHandler = () => {}
    const repeatPasswordHandler = () => {

    }

    return (
        <main className="register">
            <div className="register__header">
                <div className="register__header__pageNumber">Шаг 1 из 3</div>
                <h1 className="register__header__title">Расскажите о себе</h1>
            </div>
            <form className="register__form">
                <h2 className="register__title">Информация о вас</h2>
                <label className="register__blockInput">
                    <span>ФИО</span>
                    <input type="text" value={name} className="w100" placeholder="ФИО полностью"
                           onChange={(e) => setName(e.target.value)}/>
                </label>
                <label className="register__blockInput">
                    <span>Дата рождения</span>
                    <DatePicker className="datePicker" selected={birthDate} onChange={date => setBirthDate(date)} />
                    {/*<input type="text" value={date}*/}
                    {/*       onChange={(e) => setDate(e.target.value)}/>*/}
                </label>
                <label className="register__blockInput">
                    <span>Электронная почта</span>
                    <input type="email" value={mail} className="w100" placeholder="mail@example.com"
                           onChange={(e) => setMail(e.target.value)}/>
                </label>
                <label className="register__blockInput">
                    <span>Телефон</span>
                    <input type="number" value={phone} placeholder="+7 900 000-00-00"
                           onChange={(e) => setPhone(e.target.value)}

                    />
                </label>
                <h2 className="register__title">Паспорт</h2>
                <label className="register__blockInput">
                    <span>Серия и номер</span>
                    <input type="number" value={numPassport} placeholder="0000 000000"
                           onChange={(e) => setNumPassport(e.target.value)}/>
                </label>
                <label className="register__blockInput">
                    <span>Дата выдачи</span>
                    {/*<input type="text" value={datePassport}*/}
                    {/*       onChange={(e) => setDatePassport(e.target.value)}/>*/}
                    <DatePicker className="datePicker" selected={datePassport} onChange={date => setDatePassport(date)} />
                </label>
                <label className="register__blockInput">
                    <span>Кем выдан</span>
                    <input type="text" value={orgPassport} className="w100"
                           placeholder="Название органа выдавшего паспорт"
                           onChange={(e) => setOrgPassport(e.target.value)}/>
                </label>
                <label className="register__blockInput">
                    <span>Код подразделения</span>
                    <input type="text" value={codePassport} placeholder="000-000"
                           onChange={(e) => setCodePassport(e.target.value)}/>
                </label>
                <h2 className="register__title">Водительское удостоверение</h2>
                <label className="register__blockInput">
                    <span>Серия и номер</span>
                    <input type="number" value={numLicence} placeholder="0000 000000"
                           onChange={(e) => setNumLicence(e.target.value)}/>
                </label>
                <label className="register__blockInput">
                    <span>Дата выдачи</span>
                    {/*<input type="text" value={dateLicence} placeholder="00.00.0000"*/}
                    {/*       onChange={(e) => setDateLicence(e.target.value)}/>*/}
                    <DatePicker className="datePicker" selected={dateLicence} onChange={date => setDateLicence(date)} />

                </label>
                <h2 className="register__title">Пароль</h2>
                <label className="register__blockInput">
                    <span>Придумайте пароль</span>
                    <input type={isHiddenPsw?"password":"text"} value={password} className="w100 password"
                           onChange={(e) => setPassword(e.target.value)}
                           onMouseOut={checkPassword} onMouseEnter={()=>setIsPasswordError(false)}
                    />
                    <img src={isHiddenPsw ? eyeHiddenIcon : eyeIcon} className="isPSWHidden"
                         onClick={()=>setIsHiddenPsw(!isHiddenPsw)}/>
                </label>
                <label className="register__blockInput">
                    <span>Повторите пароль</span>
                    {/*<div className="inputWrapper">*/}
                        <input type={isHiddenRePsw ? "password" : "text"} value={repeatPassword}
                              className={isRepeatPasswordError ? "w100 password isError" : "w100 password"}
                              onChange={(e) => setRepeatPassword(e.target.value)}
                              onMouseOut={checkPasswordRepeat} onMouseEnter={() => setIsRepeatPasswordError(false)}
                    />
                    {/*</div>*/}
                    <img src={isHiddenRePsw ? eyeHiddenIcon : eyeIcon} className="isPSWHidden"
                         onClick={()=>setIsHiddenRePsw(!isHiddenRePsw)}/>
                    {isRepeatPasswordError && <span className="error">пароль не совпадает</span>}
                </label>

            </form>
            <div className="register__footer">
                <button disabled={!name}>Продолжить</button>
            </div>
        </main>
    )
}

