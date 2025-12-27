import { useState } from "react";
import styles from "../styles/otpInput.module.css";

const OtpInput = () => {
  const [otp, setOtp] = useState(["", "", "", ""]);

  const handleChange = (element: any, index: number) => {
    if (isNaN(element.value)) return false;

    setOtp([...otp.map((data, idx) => (idx === index ? element.value : data))]);

    //Focus next input
    if (element.nextSibling) {
      element.nextSibling.focus();
    }
  };
  return (
    <div className={styles.container}>
      {otp.map((data,index) => {
        return (
          <input
            className={styles.inputBox}
            type="text"
            name="otp"
            maxLength={1}
            key={crypto.randomUUID()}
            value={data}
            onChange={(e) => handleChange(e.target, index)}
            onFocus={(e) => e.target.select()}
          />
        );
      })}
    </div>
  );
};

export default OtpInput;
