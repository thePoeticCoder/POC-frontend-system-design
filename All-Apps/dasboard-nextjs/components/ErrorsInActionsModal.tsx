import styles from "../styles/errorInActionModal.module.css";
import { useState } from "react";
import Warning from "../public/Warning.png";
import CrossIcon from "./icons/CrossIcon";
import Image, { StaticImageData } from "next/image";

const ErrorInActionsModal = ({}) => {
  const [isModalVisible, setIsModalVisible] = useState(true);
  const handleClose = () => setIsModalVisible(false);
  return (
    <>
      {isModalVisible && (
        <div className="modal-bg">
          <div className={styles.container}>
            <div className={styles.closeIcon} onClick={handleClose}>
              <CrossIcon height={16} width={16} color="#F36F59" />
            </div>

            <div className={styles.imageStyles}>
              <Image alt="Image" src={Warning} />
            </div>
            <p className={styles.textContent}>Error occurred! try again</p>
          </div>
        </div>
      )}
    </>
  );
};

export default ErrorInActionsModal;
