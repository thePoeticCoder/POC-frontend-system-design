import styles from "../styles/editUserCard.module.css";

import { editUserCard } from "../types";
import EditIcon from "./icons/EditIcon";
import DeleteIcon from "./icons/DeleteIcon";
import { useRouter } from "next/router";

const EditUserCard = ({
  isEditAccess,
  userDetails,
  toggleModalDisplay,
}: editUserCard) => {
  const router = useRouter();
  const currentName = userDetails.name;
  const name = userDetails["name"];
  const email = userDetails.email;
  const isAdmin = userDetails.role === "ADMIN";
  const currentRole = userDetails.role;
  const currentPhone = userDetails.phone;
  const currentDesignation = userDetails.Designation;

  const handleEdit = () => {
    router.push({
      pathname: "/edit-existing-user",
      query: {
        currentName,
        email,
        currentRole,
        currentPhone,
        currentDesignation,
      },
    });
  };
  return (
    <div className={styles.container}>
      <p className={styles.userName}>{userDetails.name}</p>
      <p>{userDetails.role}</p>
      {isEditAccess && (
        <div className={styles.actionIcons}>
          <div onClick={() => handleEdit()}>
            <EditIcon className="pointer" height={16} width={16} />
          </div>

          {!isAdmin && (
            <div onClick={() => toggleModalDisplay({ email, name })}>
              <DeleteIcon
                className="pointer"
                height={18}
                width={18}
                color="#F36F59"
              />
            </div>
          )}
        </div>
      )}
    </div>
  )
}

export default EditUserCard
