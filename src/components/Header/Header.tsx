import Styles from "./Header.module.css";

export default function Header() {
    return (
        <header>
            <nav>
                <h1>BosKonf</h1>
                
                <ul>
                    <li>Hjem</li>
                    <li>Om Oss</li>
                    <li>Kontakt</li>
                </ul>

                <a href="/">
                    friByte
                </a>
            </nav>
        </header>
    )
}