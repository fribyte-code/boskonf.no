import { useTranslation, type langs } from "../../../i18n/utils";
import Styles from "./FAQ.module.css";

const questionsNO: Question[] = [
  {
    question: "Hvem kan delta?",
    answer:
      "Vi inviterer både studenter og folk i arbeidslivet som er interessert i teknologi og åpen kildekode til å delta på konferansen.",
  },
  {
    question: "Blir det mat?",
    answer:
      "Vi serverer mat. Gi beskjed om allergier eller spesielle behov ved påmelding.",
  },
  {
    question: "Hvor finner konferansen sted?",
    answer:
      "Konferansen finner sted i Tivoli på det Akademiske Kvarter, Olav Kyrres Gate 49, Bergen.",
  },
  {
    question: "Blir det bar?",
    answer:
      "Ja, det blir bar under konferansen. Vi serverer alkoholfrie alternativer.",
  },
  {
    question: "Er det gratis?",
    answer:
      "Ja, konferansen er gratis of åpen for alle på grunn av våre snille sponsorer.",
  },
];

const questionsEN: Question[] = [
  {
    question: "Who can attend?",
    answer:
      "We invite both students and people in the workforce who are interested in technology and open source to attend the conference.",
  },
  {
    question: "Will there be food?",
    answer:
      "We will serve food. Please let us know about allergies or special needs when signing up.",
  },
  {
    question: "Where is the conference located?",
    answer:
      "The conference is located at Tivoli at the Academic Quarter, Olav Kyrres Gate 49, Bergen.",
  },
  {
    question: "Will there be a bar?",
    answer:
      "Yes, there will be a bar during the conference. We will serve non-alcoholic alternatives.",
  },
  {
    question: "Is it free?",
    answer:
      "Yes, the conference is free and open to everyone because of our generous sponsors.",
  },
];

type Question = {
  question: string;
  answer: string;
};

export default function FAQ({ language }: { language: keyof typeof langs }) {
  const t = useTranslation(undefined, language);
  return (
    <div className={Styles.cont}>
      <h2>{t("faq.title")}</h2>
      <span></span>
      <div className={Styles.questionsCont}>
        {(language == "no" ? questionsNO : questionsEN).map((q) => (
          <div className={Styles.faqCardCont}>
            <span className={Styles.question}>{q.question}</span>
            <span className={Styles.answer}>{q.answer}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
