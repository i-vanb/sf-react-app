import React, {useState} from "react"
import {useHistory} from "react-router-dom"
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css";
import calendarIcon from "../img/calendar-icon.svg"
import eyeHiddenIcon from "../img/eye-icon.svg"
import eyeIcon from "../img/eye-open-icon.svg"

import Loader from "react-loader-spinner";


export const Register = () => {
    let history = useHistory()

    const [birthDate, setBirthDate] = useState('');
    const [datePassport, setDatePassport] = useState('');
    const [dateLicence, setDateLicence] = useState('')
    const [name, setName] = useState('')
    const [mail, setMail] = useState('')
    const [phone, setPhone] = useState('')
    const [numPassport, setNumPassport] = useState('')
    const [orgPassport, setOrgPassport] = useState('')
    const [codePassport, setCodePassport] = useState('')
    const [numLicence, setNumLicence] = useState('')
    const [password, setPassword] = useState('')
    const [repeatPassword, setRepeatPassword] = useState('')
    const [isHiddenPsw, setIsHiddenPsw] = useState(true)
    const [isHiddenRePsw, setIsHiddenRePsw] = useState(true)
    const [isRepeatPasswordError, setIsRepeatPasswordError] = useState(false)
    const [error, setError] = useState({
        name: '', mail: '', phone: '', birthDate: '', datePassport: '', dateLicence: '',
        numLicence: '', numPassport: '', orgPassport: '', codePassport: '', password: '',
        repeatPassword: ''
    })
    const [isLoading, setIsLoading] = useState(false)
    const [servererror, setServerError] = useState(false)


    const checkPasswordRepeat = () => {
        setIsHiddenRePsw(true)
        if (password !== repeatPassword) {
            setIsRepeatPasswordError(true)
        }
    }

    const checkPassword = () => {
        setIsHiddenPsw(true)
    }

    const fetchHandler = async () => {
        setIsLoading(true)
        const response = await applyInfo()
        if (response.ok) {
            setIsLoading(false)
            const data = await response.json()
            console.log(data)
            localStorage.setItem("accessToken", data.accessToken)
            localStorage.setItem("refreshToken", data.refreshToken)
            localStorage.setItem("payload", JSON.stringify(data.payload))
            //history.push('/register/2') // ?? ???????????? ????????????
            history.push('/') // ?? ???????????? ???????????? ???????????????? ?????? ?????????????? 2 ?? 3
        } else {
            setServerError(true)
            setIsLoading(false)
            setTimeout(() => setServerError(false), 3000)
        }
    }

    async function applyInfo() {
        const response = await fetch('http://localhost:8000/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name, mail, phone,
                birth_date: birthDate,
                passport_number: numPassport,
                passport_date: datePassport,
                passport_vendor: orgPassport,
                passport_code: codePassport,
                licence_number: numLicence,
                licence_date: dateLicence,
                password
            })
        })
        return response
    }

    return (
        <main className="register">
            <div className="register__header">
                <div className="register__header__pageNumber">?????? 1 ???? 3</div>
                <h1 className="register__header__title">???????????????????? ?? ????????</h1>
            </div>
            <form className="register__form">
                <h2 className="register__title">???????????????????? ?? ??????</h2>
                <label className="register__blockInput">
                    <span className="register__blockInput__title">??????</span>
                    <input type="text" value={name} className="w100" placeholder="?????? ??????????????????"
                           onChange={(e) => setName(e.target.value)}/>
                    {/*<span className="error">???????????? ???? ??????????????????</span>*/}
                </label>
                <label className="register__blockInput">
                    <span className="register__blockInput__title">???????? ????????????????</span>
                    <DatePicker className="datePicker" selected={birthDate} onChange={date => setBirthDate(date)}/>
                    <img src={calendarIcon} className="calendarIcon"/>
                    {/*<span className="error">???????????? ???? ??????????????????</span>*/}
                    {/*<input type="text" value={date}*/}
                    {/*       onChange={(e) => setDate(e.target.value)}/>*/}
                </label>
                <label className="register__blockInput">
                    <span className="register__blockInput__title">?????????????????????? ??????????</span>
                    <input type="email" value={mail} className="w100" placeholder="mail@example.com"
                           onChange={(e) => setMail(e.target.value)}/>
                    {/*<span className="error">???????????? ???? ??????????????????</span>*/}
                </label>
                <label className="register__blockInput">
                    <span className="register__blockInput__title">??????????????</span>
                    <input type="number" value={phone} placeholder="+7 900 000-00-00"
                           onChange={(e) => setPhone(e.target.value)}
                    />
                    {/*<span className="error">???????????? ???? ??????????????????</span>*/}
                </label>
                <h2 className="register__title">??????????????</h2>
                <label className="register__blockInput">
                    <span className="register__blockInput__title">?????????? ?? ??????????</span>
                    <input type="number" value={numPassport} placeholder="0000 000000"
                           onChange={(e) => setNumPassport(e.target.value)}/>
                    {/*<span className="error">???????????? ???? ??????????????????</span>*/}
                </label>
                <label className="register__blockInput">
                    <span className="register__blockInput__title">???????? ????????????</span>
                    {/*<input type="text" value={datePassport}*/}
                    {/*       onChange={(e) => setDatePassport(e.target.value)}/>*/}
                    <DatePicker className="datePicker" selected={datePassport}
                                onChange={date => setDatePassport(date)}/>
                    <img src={calendarIcon} className="calendarIcon"/>
                    {/*<span className="error">???????????? ???? ??????????????????</span>*/}
                </label>
                <label className="register__blockInput">
                    <span className="register__blockInput__title">?????? ??????????</span>
                    <input type="text" value={orgPassport} className="w100"
                           placeholder="???????????????? ???????????? ?????????????????? ??????????????"
                           onChange={(e) => setOrgPassport(e.target.value)}/>
                    {/*<span className="error">???????????? ???? ??????????????????</span>*/}
                </label>
                <label className="register__blockInput">
                    <span className="register__blockInput__title">?????? ??????????????????????????</span>
                    <input type="text" value={codePassport} placeholder="000-000"
                           onChange={(e) => setCodePassport(e.target.value)}/>
                    {/*<span className="error">???????????? ???? ??????????????????</span>*/}
                </label>
                <h2 className="register__title">???????????????????????? ??????????????????????????</h2>
                <label className="register__blockInput">
                    <span className="register__blockInput__title">?????????? ?? ??????????</span>
                    <input type="number" value={numLicence} placeholder="0000 000000"
                           onChange={(e) => setNumLicence(e.target.value)}/>
                    {/*<span className="error">???????????? ???? ??????????????????</span>*/}
                </label>
                <label className="register__blockInput">
                    <span className="register__blockInput__title">???????? ????????????</span>
                    {/*<input type="text" value={dateLicence} placeholder="00.00.0000"*/}
                    {/*       onChange={(e) => setDateLicence(e.target.value)}/>*/}
                    <DatePicker className="datePicker" selected={dateLicence} onChange={date => setDateLicence(date)}/>
                    <img src={calendarIcon} className="calendarIcon"/>
                    {/*<span className="error">???????????? ???? ??????????????????</span>*/}
                </label>
                <h2 className="register__title">????????????</h2>
                <label className="register__blockInput">
                    <span className="register__blockInput__title">???????????????????? ????????????</span>
                    <input type={isHiddenPsw ? "password" : "text"} value={password} className="w100 password"
                           onChange={(e) => setPassword(e.target.value)}
                           onMouseOut={checkPassword}
                    />
                    <img src={isHiddenPsw ? eyeHiddenIcon : eyeIcon} className="isPSWHidden"
                         onClick={() => setIsHiddenPsw(!isHiddenPsw)}/>
                    {/*<span className="error">???????????? ???? ??????????????????</span>*/}
                </label>
                <label className="register__blockInput">
                    <span className="register__blockInput__title">?????????????????? ????????????</span>

                    <input type={isHiddenRePsw ? "password" : "text"} value={repeatPassword}
                           className={isRepeatPasswordError ? "w100 password isError" : "w100 password"}
                           onChange={(e) => setRepeatPassword(e.target.value)}
                           onMouseOut={checkPasswordRepeat} onMouseEnter={() => setIsRepeatPasswordError(false)}
                    />
                    <img src={isHiddenRePsw ? eyeHiddenIcon : eyeIcon} className="isPSWHidden"
                         onClick={() => setIsHiddenRePsw(!isHiddenRePsw)}/>
                    {isRepeatPasswordError &&
                    <span className="error">???????????? ???? ??????????????????</span>
                    }
                </label>

            </form>
            <div className="register__footer">
                <button
                    onClick={fetchHandler}
                    disabled={
                        birthDate === ''
                        || datePassport === ''
                        || dateLicence === ''
                        || name === ''
                        || mail === ''
                        || phone === ''
                        || numPassport === ''
                        || orgPassport === ''
                        || codePassport === ''
                        || numLicence === ''
                        || password === ''
                        || repeatPassword === ''
                    }
                >
                    {isLoading
                        ? <Loader
                            type="TailSpin"
                            color="#fafafa"
                            height={30}
                            width={30}
                            // timeout={3000} //3 secs
                        />
                        : <span>????????????????????</span>

                    }
                </button>
            </div>
            {servererror &&
            <div className="server-error">
                <span>???? ?????????????? ???????????????????? ??????????????????????. ???????????????????? ?????? ??????</span>
            </div>}
        </main>
    )
}

