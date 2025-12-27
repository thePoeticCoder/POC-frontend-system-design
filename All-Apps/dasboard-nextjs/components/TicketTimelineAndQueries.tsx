import styles from "../styles/ticketTimelineAndQueries.module.css";
import { ticketTimelineType } from "../types/ticketTimeline.type";
import QueryCard from "./QueryCard";
import TimelineDetailcard from "./TimelineDetailcard";

const TicketTimeline = ({
  admissionDate,
  firstPaymentDate,
  pendingPaymentDate,
  finalVerificationDate,
}: ticketTimelineType) => {
  return (
    <div className={styles.container}>
      <div className={styles.customerTimeline}>
        <h2 className={styles.heading}>Customer Timeline</h2>
        <div className={styles.detailCardsContainer}>
          <TimelineDetailcard
            date="6 March 2022"
            time="12:00PM"
            title="Admission initiated"
            isPending={false}
          />
          <TimelineDetailcard
            date="8 March 2022"
            time="12:00PM"
            title="First payment initiated"
            isPending={false}
          />
          <TimelineDetailcard
            date="10 March 2022"
            title="Payment pending"
            isPending={true}
          />
          <TimelineDetailcard
            date="14 March 2022"
            title="Final Verification"
            isPending={true}
            noBorder={true}
          />
        </div>
      </div>
      <div className={styles.queries}>
        <h2 className={styles.heading}>Queries</h2>
        {/* <div>
          <QueryCard
            title={"Lorem ipsum lorem"}
            time={"12:05 AM"}
            content={
              "Lorem ipsum lorem Lorem ipsum lorem Lorem ipsum lorem Lorem ipsum lorem Lorem ipsum lorem"
            }
          />

          <QueryCard
            title={"Lorem ipsum lorem"}
            time={"12:05 AM"}
            content={
              "Lorem ipsum lorem Lorem ipsum lorem Lorem ipsum lorem Lorem ipsum lorem Lorem ipsum lorem"
            }
          />

          <QueryCard
            title={"Lorem ipsum lorem"}
            time={"12:05 AM"}
            content={
              "Lorem ipsum lorem Lorem ipsum lorem Lorem ipsum lorem Lorem ipsum lorem Lorem ipsum lorem"
            }
          />
        </div> */}
      </div>
    </div>
  );
};

export default TicketTimeline;
