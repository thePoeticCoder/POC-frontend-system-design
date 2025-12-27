import styles from "../styles/timelineDetailcard.module.css";
import { timelineDetailcardType } from "../types";

const TimelineDetailcard = ({
  //TODO: typo
  title,
  date,
  time,
  isPending,
  noBorder,
}: timelineDetailcardType) => {
  return (
    <div
      className={`${styles.container} ${
        isPending ? styles.pending : styles.completed
      } ${noBorder ? styles.noBorder : ""}`}
    >
      <div className={styles.timeContainer}>
        <span className={styles.date}>{date}</span>
        <span>{time}</span>
      </div>
      <p className={styles.title}>{title}</p>
    </div>
  );
};

export default TimelineDetailcard;
