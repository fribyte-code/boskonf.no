import Styles from "./Schedule.module.css";
import ScheduleStack from "./ScheduleStack";

export default function Schedule() {
    const schedule = [
        {
            time: "kl 8:00",
            title: "Workshop registration and breakfast",
            duration: "60 min",
        },
        {
            time: "kl 9:00",
            title: "Jamstack Innovation Fund: TakeShape & OSS Collaboration",
            duration: "45 min",
            subtitle: "Lorem Ispum dolor sit amet tincidunt elit magnis nulla facilisis. Dolor sagittis maecenas. Sapien nunc amet ultrices, dolores sit ipsum velit purus aliquet, massa fringilla leo orci paragraph tost etonia summerios testiniaol",
            speakers: [
                {
                    name: "Robertson A.",
                    title: "Senior Programmer at IBM",
                    img: "schedule/schedpfp1.jpeg",
                },
                {
                    name: "Lex Luthor",
                    title: "Director of Jamstack",
                    img: "schedule/schedpfp2.jpeg",
                }
            ],
            legend: "conference",
        },
        {
            time: "kl 10:00",
            title: "Build A Headless WordPRess App WithNext.Js and GraphQL",
            duration: "180 min",
            subtitle: "Lorem Ispum dolor sit amet tincidunt elit magnis nulla facilisis. Dolor sagittis maecenas. Sapien nunc amet ultrices, dolores sit",
            speakers: [
                {
                    name: "Lex Luthor",
                    title: "Director of Jamstack",
                    img: "schedule/schedpfp2.jpeg",
                }
            ],
            legend: "workshop",
        },
        {
            time: "kl 13:00",
            title: "Lunch 🍕",
            duration: "60 min",
        },
        {
            time: "kl 14:00",
            title: "5 Years of Building React Table",
            duration: "30 min",
            subtitle: "Lorem Ispum dolor sit amet tincidunt elit magnis nulla facilisis.",
            speakers: [
                {
                    name: "Lex Luthor",
                    title: "Director of Jamstack",
                    img: "schedule/schedpfp2.jpeg",
                },
                {
                    name: "Lex Luthor",
                    title: "Director of Jamstack",
                    img: "schedule/schedpfp2.jpeg",
                },
                {
                    name: "Lex Luthor",
                    title: "Director of Jamstack",
                    img: "schedule/schedpfp2.jpeg",
                }
            ],
            legend: "conference",
        },
        {
            time: "kl 14:30",
            title: "Reaching for the sky with the Jamstack",
            duration: "120 min",
            subtitle: "Lorem Ispum dolor sit amet tincidunt elit magnis nulla facilisis. Dolor sagittis maecenas. Sapien nunc amet ultrices, dolores sit.",
            speakers: [
                {
                    name: "Lex Luthor",
                    title: "Director of Jamstack",
                    img: "schedule/schedpfp2.jpeg",
                },
            ],
            legend: "conference",
        },
    ];

    return (
        <div className={Styles.cont}>
            <div className={Styles.titleCont}>
                <h2>Timeplan</h2>
                <p>
                    Join 400 others in Manhattan, NY for a full day of inspiring keynotes and new connections at the premier conference for software Product Managers
                </p>
            </div>
            <div className={Styles.legend}>
                <div className={Styles.workshop}>
                    <div></div>
                    <span>WORKSHOP</span>
                </div>
                <div className={Styles.conference}>
                    <div></div>
                    <span>CONFERENCE</span>
                </div>
                <div className={Styles.break}>
                    <div></div>
                    <span>COFFEE BREAK</span>
                </div>
            </div>
            <div className={Styles.scheduleCont}>
            {
                schedule.map((item, index) => (
                    <ScheduleStack
                        key={index}
                        time={item.time}
                        title={item.title}
                        legend={item.legend}
                        subtitle={item.subtitle}
                        duration={item.duration}
                        speakers={item.speakers}
                    />
                ))
            }
            </div>
        </div>
    )
}