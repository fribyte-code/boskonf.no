import Styles from "./ScheduleStack.module.css";

export default function ScheduleStack({
    time,
    title,
    duration,
    legend = "",
    subtitle = "",
    speakers = []
}: ScheduleStackProps) {
    const legendCSS =
        legend === "workshop" ? Styles.workshop :
        legend === "conference" ? Styles.conference :
        Styles.clear;

    return (
        <div className={Styles.cont}>
            <div className={Styles.legendTimeCont}>
                <div className={`${Styles.legend} ${legendCSS}`}></div>
                <span className={Styles.time}>{time}</span>
            </div>
            <div className={Styles.detailsCont}>
                <span className={Styles.title}>{title}</span>
                {subtitle && <p className={Styles.subtitle}>{subtitle}</p>}
                <div className={Styles.speakersCont}>
                    {speakers.map((speaker, index) => (
                        <div key={index} className={Styles.speakerCont}>
                            <div className={Styles.imgCont}>
                                <img src={speaker.img} alt={`Speaker ${speaker.name}`} />
                            </div>
                            <div className={Styles.speakerDetailsCont}>
                                <span className={Styles.speakerName}>{speaker.name}</span>
                                <span className={Styles.speakerTitle}>{speaker.title}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <span className={Styles.duration}>{duration}</span>
        </div>
    );
}

interface Speaker {
    name: string;
    title: string;
    img: string;
}

interface ScheduleStackProps {
    time: string;
    title: string;
    duration: string;
    legend?: string;
    subtitle?: string;
    speakers?: Speaker[];
}