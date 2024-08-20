import Styles from "./Hero.module.css";

export default function Hero() {
    return (
       <div className={Styles.cont}>
            <div className={Styles.dateCont}>
                <div className={Styles.date}>
                    <img src="calendar.svg" alt="calendar icon" />
                    <span>1. JANUAR</span>
                </div>
                <div className={Styles.location}>
                    <img src="location.svg" alt="location icon" />
                    <span>BERGEN, NO</span>
                </div>
            </div>
            <h2>
                Konferanse drevet av studenter
            </h2>
            <p>
                Bergen Open Source er en årlig teknologikonferanse i Bergen drevet av
                studenter og andre frivillige. Konferansen har fokus på åpen kildekode
                og åpne data.
            </p>
            <button>
                MELD MEG PÅ
                <img src="arrow-up-right.svg" alt="arrow up right icon" />
            </button>
       </div>
    )
}