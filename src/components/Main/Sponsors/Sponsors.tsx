import type { Sponsor } from "../../../program/program";
import Styles from "./Sponsors.module.css";

interface Props {
  sponsors: Sponsor[];
}

export default function Sponsors({ sponsors }: Props) {
  return (
    <div className={Styles.cont}>
      <h2>
        Våre <span className={Styles.greenTxt}>sponsors</span>
      </h2>
      <div className={Styles.sponsorsCont}>
        {sponsors.map((sponsor) => (
          <a href={sponsor.url}>
            <img src={sponsor.logo} alt={sponsor.name + " logo"} />
          </a>
        ))}
      </div>
      <a className={Styles.cta} href="/">
        Bli sponsor
        <img src="/arrow-up-right.svg" alt="arrow up right" />
      </a>
    </div>
  );
}
