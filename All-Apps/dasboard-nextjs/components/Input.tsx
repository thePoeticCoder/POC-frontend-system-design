import { Placeholder } from "reactstrap";
import { inputType } from "../types";
import styles from "../styles/input.module.css";
import { validateEmailId, ValidateName, validatePhoneNumbers } from "../services/userAccess.service";

const Input = ({
  setChangeHandler,
  type,
  isError,
  contentType,
  width,
  backgroundColor,
  color,
  isDisabled,
  autoComplete,
  ...rest
}: inputType) => {
  return (
    <input
      onChange={(e) => {setChangeHandler(e.target.value) 
       if(contentType==="email"){
         let res=validateEmailId(e.target.value);
          isError(!res);
        }
        else if(contentType==="phone"){
          let res=validatePhoneNumbers(e.target.value);
          isError(!res);
        }
        else if(contentType==="name"){
          let res=ValidateName(e.target.value);
          isError(!res);
        }
      }
      }
      style={{
        width: `${width}`,
        color: color,
        backgroundColor,
      }}
      disabled={isDisabled}
      className={styles.customInput}
      type={type}
      autoComplete={autoComplete}
      {...rest}
    />
  );
};
Input.defaultProps = {
  width: 600,
  height: 15,
  color: "black",
};

export default Input;
