import styles from "../styles/paymentModal.module.css";
import Button from "./Button";
import { voidFunctionType } from "../types";
import CheckIcon from "./icons/CheckIcon";

const PaymentModal = ({
  toggleModalDisplay,
}: {
  toggleModalDisplay: voidFunctionType;
}) => {
  return (
    <div className="modal-bg">
      <div className={"modal-container " + styles.container}>
        <CheckIcon height={60} width={60} />
        <p>Trx Forms and other details successfully downloaded</p>
        {/* Need to add later */}
        {/* <Button
          handleClick={toggleModalDisplay}
          color={"#053233"}
          backgroundColor={"#F9CD63"}
          content={"OK"}
          width={"100px"}
          height={"35px"}
        /> */}
      </div>
    </div>
  );
};

export default PaymentModal;
