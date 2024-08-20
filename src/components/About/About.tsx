import Styles from "./About.module.css";

export default function About() {
    return (
        <div className={Styles.cont}>
            <div className={Styles.imgTxtCont}>
                <div className={Styles.imgCont}>
                    <img src="about.jpeg" alt="people talking" />
                </div>
                <div className={Styles.txtCont}>
                    <p>
                        <span className={Styles.heroTxt}>Konferansen ble startet av frivillige i friByte</span> med mål om å skape
                        en møteplass for studenter og næringsliv i Bergen. Vi ønsker å skape
                        en konferanse som er tilgjengelig for alle, og som kan være en arena
                        for å lære bort og inspirere til åpen kildekode og åpne data.
                    </p>
                    <a href="/">
                        MER OM FRIBYTE
                        <img src="arrow-right-circle.svg" alt="arrow right circle" />
                    </a>
                </div>
            </div>
            <div className={Styles.brandingCont}>
                <span>friByte</span>
                <span>BosKonf</span>
                <span>friByte</span>
            </div>
        </div>
    )
}