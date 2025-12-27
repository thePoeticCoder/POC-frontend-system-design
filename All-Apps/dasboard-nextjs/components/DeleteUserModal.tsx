import styles from "../styles/deleteUserModal.module.css";
import Button from "./Button";
import { voidFunctionType } from "../types";
import { deleteUser } from "../services/userAccess.service";
import { deleteUserType } from "../types/userAccess.type";
import { useQueryClient } from "@tanstack/react-query";

const DeleteUserModal = ({
  toggleModalDisplay,
  user,
  setIsDeleted,
  setIsErrorInDelete,
}: {
  user: deleteUserType;
  toggleModalDisplay: voidFunctionType;
  setIsDeleted: React.Dispatch<React.SetStateAction<boolean>>;
  setIsErrorInDelete: React.Dispatch<React.SetStateAction<boolean>>;
}) => {

  const deleteUserHandler = () => {
    setIsDeleted(false);
    const hospitalId = localStorage.getItem("hospitalId") || "";

    deleteUser(user,hospitalId)
      .then((result) => {
        setIsDeleted(true);
        setIsDeleted(true);
        setIsErrorInDelete(false);
        toggleModalDisplay();
      })
      .catch((error) => {
        setIsErrorInDelete(true);
        setIsDeleted(false);
        toggleModalDisplay();
      });
  };
  return (
    <div className={styles.modalBg}>
      <div className={styles.container}>
        <div className={styles.subContainer}>
          <div className={styles.confirmationText}>
            <p>Are you sure you want to delete this user?</p>
          </div>
          <div className={styles.actions}>
            <Button
              content="Yes"
              className={styles.deleteYesButton}
              handleClick={deleteUserHandler}
            />
            <Button
              content="Cancel"
              className={styles.deleteCancelButton}
              handleClick={toggleModalDisplay}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteUserModal;
