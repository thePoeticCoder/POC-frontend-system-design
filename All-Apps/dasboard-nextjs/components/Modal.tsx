import { cloneElement, ReactElement } from "react";
import CrossIcon from "./icons/CrossIcon";
import styles from "../styles/modal.module.css";

type ModalProps = {
  children: ReactElement;

  handleClose: () => void;
};

export const Modal = ({ children, handleClose }: ModalProps) => {
  return (
    <section className={styles.container} onClick={handleClose}>
      <div
        className={styles.containerModal}
        onClick={(e) => e.stopPropagation()}
      >
        <div>
          <div className={styles.closeIcon} onClick={handleClose}>
            <CrossIcon
              height={16}
              width={16}
              className={styles.closeIcon}
              color="#9D9D9D"
            />
          </div>
        </div>

        <div>{cloneElement(children, { handleClose })}</div>
      </div>
    </section>
  );
};
