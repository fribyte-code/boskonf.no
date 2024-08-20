import Styles from "./FAQ.module.css";

export default function FAQ() {
    return (
        <div className={Styles.cont}>
            <h2>Spørsmål?</h2>
            <span></span>
            <div className={Styles.questionsCont}>
                <div className={Styles.faqCardCont}>
                    <span className={Styles.question}>Hvem kan delta?</span>
                    <span className={Styles.answer}>Through the collaboration with customers in discussing needs and demand, we're able to attain mutual understanding, gain customer trust                    </span>
                </div>
                <div className={Styles.faqCardCont}>
                    <span className={Styles.question}>Gamer dere?</span>
                    <span className={Styles.answer}>Through the collaboration with customers in discussing needs and demand, we're able to attain mutual understanding, gain customer trust                    </span>
                </div>
                <div className={Styles.faqCardCont}>
                    <span className={Styles.question}>Er det gratis?</span>
                    <span className={Styles.answer}>Through the collaboration with customers in discussing needs and demand, we're able to attain mutual understanding, gain customer trust                    </span>
                </div>
            </div>
        </div>
    )
}