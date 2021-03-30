import React, {useState} from "react"
import {useHistory} from "react-router-dom"
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css";
import calendarIcon from "../img/calendar-icon.svg"
import eyeHiddenIcon from "../img/eye-icon.svg"
import eyeIcon from "../img/eye-open-icon.svg"

import Loader from "react-loader-spinner";


export const RegStep3 = () => {
    let history = useHistory()
    const [photoUrl, setPhotoUrl] = useState('')

    const [isLoading, setIsLoading] = useState(false)
    const [servererror, setServerError] = useState(false)


    const fetchHandler = () => {
        // history.push('/register/2')
        //
        // return null
        // // here is the place for validation
        //
        // setIsLoading(true)
        // applyInfo().then((data) => {
        //     setIsLoading(false)
        //
        //     console.log(data)
        // }).catch(()=> {
        //     setServerError(true)
        //     setIsLoading(false)
        //     setTimeout(()=>setServerError(false), 3000)
        // })
    }

    async function applyInfo() {
        // const response = fetch('http://localhost:8000/users', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify({
        //         name, mail, phone,
        //         birth_date: birthDate,
        //         passport_number: numPassport,
        //         passport_date: datePassport,
        //         passport_vendor: orgPassport,
        //         passport_code: codePassport,
        //         licence_number: numLicence,
        //         licence_date: dateLicence,
        //         password
        //     })
        // })
        return await response
    }

    return (
        <main className="register">
            <div className="register__header">
                <div className="register__header__pageNumber">Шаг 3 из 3</div>
                <h1 className="register__header__title">Загрузите документы</h1>
            </div>
            <form className="register__form">
                <h2 className="register__title">Разворот паспорта и страницу с пропиской, а также водительское удостоверение с двух сторон.</h2>


                <label className="register__blockInput">
                    <input type="file" value=""
                           // onChange={(e) => setName(e.target.value)}
                    />
                </label>



            </form>
            <div className="register__footer">
                <button
                    onClick={fetchHandler}
                //     disabled={
                //     birthDate === ''
                //     || datePassport === ''
                //     || dateLicence === ''
                //     || name === ''
                //     || mail === ''
                //     || phone === ''
                //     || numPassport === ''
                //     || orgPassport === ''
                //     || codePassport === ''
                //     || numLicence === ''
                //     || password === ''
                //     || repeatPassword === ''
                // }
                >
                    {isLoading
                        ? <Loader
                            type="TailSpin"
                            color="#fafafa"
                            height={30}
                            width={30}
                            // timeout={3000} //3 secs
                        />
                        : <span>Зарегистрироваться</span>

                    }
                </button>
            </div>
            {true &&
                <div className="server-error">
                    <span>Не удалось продолжить регистрацию. Попробуйте ещё раз</span>
                </div>}
        </main>
    )
}

