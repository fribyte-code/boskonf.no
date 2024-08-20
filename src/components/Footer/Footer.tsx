import Styles from "./Footer.module.css";

export default function Footer() {
    return (
        <footer className={Styles.cont}>
            <nav>
                <div className={Styles.translateBtn}>
                    <img className={Styles.earthIcon} src="footer/earth.svg" alt="earth icon" />
                    <span>Norsk</span>
                    <img src="footer/arrow-down.svg" alt="arrow down" />
                </div>
                <ul>
                    <li>SPONSOR</li>
                    <li>FAQ</li>
                    <li>TERMS AND WHATNOT</li>
                </ul>
                <div className={Styles.backToTop}>
                    <img src="footer/arrow-down.svg" alt="arrow up" />
                </div>
            </nav>
            <span className={Styles.copyright}>© 2024 BosKonf. All Rights Reserved</span>
        </footer>
    )
}