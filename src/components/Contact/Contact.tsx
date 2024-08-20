import Styles from "./Contact.module.css";

export default function Contact() {
    return (
        <div className={Styles.cont}>
            <div className={Styles.contactCont}>
                <span className={Styles.title}>CONTACT</span>
                <span>email@boskonf.no</span>
            </div>
            <div className={Styles.socialsCont}>
                <span className={Styles.title}>SOCIAL</span>
                <div className={Styles.socialCont}>
                    <a href="/">
                        <img src="contact/instagram.svg" alt="instagram icon" />
                    </a>
                    <a href="/">
                        <img src="contact/linkedin.svg" alt="linkedin icon" />
                    </a>
                    <a href="/">
                        <img src="contact/facebook.svg" alt="facebook icon" />
                    </a>
                </div>
            </div>
        </div>
    )
}