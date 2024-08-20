import Styles from "./Header.module.css";

export default function Header() {
    return (
        <header className={Styles.cont}>
            <nav>
                <h1>BosKonf</h1>
                
                <ul>
                    <li className={Styles.active}>Hjem</li>
                    <li>Om Oss</li>
                    <li>Kontakt</li>
                </ul>

                <a href="/">
                    friByte
                    <img src="arrow-up-right.svg" alt="arrow right up" />
                </a>
            </nav>
        </header>
    )
}