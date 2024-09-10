import { useTranslation, type langs } from "../../../i18n/utils";
import type { Speaker } from "../../../program/program";
import Styles from "./Speakers.module.css";

interface Props {
  speakers: Speaker[];
  language: keyof typeof langs;
}

export default function Speakers({ speakers, language }: Props) {
  const t = useTranslation(undefined, language);
  return (
    <div className={Styles.cont}>
      <div className={Styles.titleCont}>
        <div className={Styles.details}>
          <h2>{t("speakers.title")}</h2>
        </div>
      </div>
      <div className={Styles.speakersCont}>
        {speakers.map((speaker) => (
          <div className={Styles.cardCont}>
            {speaker.imageUrl && (
              <img
                className={Styles.pfp}
                src={speaker.imageUrl}
                alt={speaker.name + " picture"}
              />
            )}
            <span className={Styles.speakerInfo}>
              <h3>{speaker.name}</h3>
              <p>{speaker.description}</p>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
