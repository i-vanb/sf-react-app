import React from "react";
import "../styles/Faq.css";
import faqImg from "../img/faq-image.svg";
import QuestionCard from "../components/QuestionCard";


function Faq() {
    return (
        <>
            <section className="about">
                <div className="content-container">
                    <img src={faqImg} alt="image"/>
                        <h1>Частые вопросы</h1>
                        <p className="about__text">Отвечаем на вопросы, которые у вас могут возникнуть.</p>
                </div>
            </section>

            <section className="faq">
                <div className="content-container">
                    <QuestionCard
                        question="Могу ли я отменить бронь?"
                        answer="Да, конечно, скорее всего, если это не будет проблемой..."
                    />
                    <QuestionCard
                        question="Могу ли я вернуть деньги, если не подошёл автомобиль?"
                        answer="Да, если он не подошёл не более чем на два размера..."
                    />
                    <QuestionCard
                        question="Что делать, если случилось ДТП?"
                        answer="Надеяться, что автомобиль был застрахован..."
                    />
                    <QuestionCard
                        question="Могу ли я оставить автомобиль в удобном для меня месте?"
                        answer="Да, если это место - офис нашей компании..."
                    />
                    <QuestionCard
                        question="Что делать, если собственник просит заплатить ему напрямую?"
                        answer="Заплатить ему...и не говорить, откуда у вас его автомобиль..."
                    />
                    <QuestionCard
                        question="Должен ли я заправлять автомобиль?"
                        answer="Да, если не хотите катить его вручную..."
                    />
                </div>
            </section>
        </>
    )
}

export default Faq;
