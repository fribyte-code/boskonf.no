import Styles from "./Sponsors.module.css";

export default function Sponsors() {
    return (
        <div className={Styles.cont}>
            <h2>Våre <span className={Styles.greenTxt}>sponsors</span></h2>
            <div className={Styles.sponsorsCont}>
                <a href="/">
                    <img src="sponsors/fribyte.svg" alt="fribyte logo" />
                </a>
            </div>
            <a className={Styles.cta} href="/">
                Bli sponsor
                <img src="arrow-up-right.svg" alt="arrow up right" />
            </a>
        </div>
    )
}