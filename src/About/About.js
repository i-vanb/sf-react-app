import React from "react"
import "../styles/About.css";
import teamImg from "../img/about_team.svg"
import teamMate1 from "../img/team/1.png"
import teamMate2 from "../img/team/2.png"
import teamMate3 from "../img/team/3.png"
import teamMate4 from "../img/team/4.png"
import teamMate5 from "../img/team/5.png"
import teamMate6 from "../img/team/6.png"
import ProfileCard from "../components/ProfileCard";
import ContactCard from "../components/ContactCard";


function About() {
    return (
        <>
            <section className="about">
                <div className="content-container">
                    <img src={teamImg} alt="drawn team" />
                        <h1>О нас</h1>
                        <p className="about__text">Это учебный проект, созданный с целью получения боевого опыта в
                            разработке
                            настоящего живого веб-приложения. Этот сервис имитирует работу каршеринга,
                            в котором можно не только арендовать автомобили, но и сдавать их в аренду.</p>
                </div>
            </section>
            <section className="contacts">
                <div className="content-container">
                    <h2>Контакты</h2>
                    <div className="contacts__data">
                        <ContactCard name="Электронная почта" data="drive@skillfactory.com" />
                        <ContactCard name="Телефон" data="+7 912 123-45-67" />
                    </div>
                </div>
            </section>
            <section className="team">
                <div className="content-container">
                    <h2>Команда</h2>
                    <div className="team__cards">
                        <ProfileCard name="Иван Иванов" pro="CEO" img={teamMate1} />
                        <ProfileCard name="Алексей Смирнов" pro="Frontend-разработчик" img={teamMate2} />
                        <ProfileCard name="Денис Ярцев" pro="Backend-разработчик" img={teamMate3} />
                        <ProfileCard name="Николай Морозов" pro="Дизайнер" img={teamMate4} />
                        <ProfileCard name="Ирина Деева" pro="Копирайтер" img={teamMate5} />
                        <ProfileCard name="Мария Стрелкова" pro="SMM" img={teamMate6} />
                    </div>
                </div>
            </section>
        </>
    )
}

export default About;
