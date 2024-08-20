import Styles from "./Speakers.module.css";

export default function Speakers() {
    return (
        <div className={Styles.cont}>
            <div className={Styles.titleCont}>
                <div className={Styles.details}>
                    <h2>Våre speakere</h2>
                    <p>
                        Join 400 others in Manhattan, NY for a full day of inspiring keynotes and new connections at the premier conference for software Product Managers
                    </p>
                </div>
                <div className={Styles.cta}>
                    <a href="/">SE ALLE SPEAKERE
                        <img src="arrow-up-right-white.svg" alt="arrow up right" />
                    </a>
                </div>
            </div>
            <div className={Styles.speakersCont}>
                <div className={Styles.cardCont}>
                    <img className={Styles.pfp} src="speakers/speaker1.png" alt="speaker 1" />
                    <span className={Styles.name}>Rahat Chowhury</span>
                    <span className={Styles.title}>Programme Engineer, Tesla</span>
                </div>
                <div className={Styles.cardCont}>
                    <img className={Styles.pfp} src="speakers/speaker2.png" alt="speaker 2" />
                    <span className={Styles.name}>Nik Gak</span>
                    <span className={Styles.title}>Data Security, Metalab</span>
                </div>
                <div className={Styles.cardCont}>
                    <img className={Styles.pfp} src="speakers/speaker3.png" alt="speaker 3" />
                    <span className={Styles.name}>Thomas Finlay</span>
                    <span className={Styles.title}>Web Tech Leader, Octopus Energy</span>
                </div>
            </div>
        </div>
    )
}