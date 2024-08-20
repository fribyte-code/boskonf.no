import Styles from "./Counter.module.css";

export default function Counter() {
    return (
        <div className={Styles.cont}>
            <div className={Styles.detailsCont}>
                <span className={Styles.counterNo}>20</span>
                <span className={Styles.counterTxt}>WORLD-CLASS SPEAKERS</span>
            </div>
            <div className={Styles.detailsCont}>
                <span className={Styles.counterNo}>20 hr</span>
                <span className={Styles.counterTxt}>WORKSHOP</span>
            </div>
            <div className={Styles.detailsCont}>
                <span className={Styles.counterNo}>35</span>
                <span className={Styles.counterTxt}>PARTNERE OG SPONSORS</span>
            </div>
        </div>
    )
}