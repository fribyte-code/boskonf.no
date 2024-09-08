import { langs, useTranslation } from "../../../i18n/utils";
import type { Sponsor } from "../../../program/program";
import Styles from "./Sponsors.module.css";

interface Props {
  sponsors: Sponsor[];
  language: keyof typeof langs;
}

export default function Sponsors({ sponsors, language }: Props) {
  const t = useTranslation(undefined, language);
  return (
    <div className={Styles.cont}>
      <h2>{t("sponsors.title")}</h2>
      <div className={Styles.sponsorsCont}>
        {sponsors.map((sponsor) => (
          <a href={sponsor.url}>
            <img src={sponsor.logo} alt={sponsor.name + " logo"} />
          </a>
        ))}
      </div>
      <a className={Styles.cta} href="/">
        {t("sponsors.apply")}
        <img src="/arrow-up-right.svg" alt="arrow up right" />
      </a>
    </div>
  );
}
