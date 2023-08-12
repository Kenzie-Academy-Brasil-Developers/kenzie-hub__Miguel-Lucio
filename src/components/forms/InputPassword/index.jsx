import { FaEye, FaEyeSlash } from "react-icons/fa";
import { forwardRef, useState } from "react";
import styles from "./style.module.scss";

export const InputPassword = forwardRef(({ label, ...rest }, ref) => {
  const [isHidden, setIsHidden] = useState(true);
  return (
    <div className={styles.inputBox}>
      <label className="text headline gray500">{label}</label>
      <div>
        <input type={isHidden ? "password" : "text"} ref={ref} {...rest} />
        <button type="button" onClick={() => setIsHidden(!isHidden)}>
          {isHidden ? (
            <FaEye color="#868e96" size={20} />
          ) : (
            <FaEyeSlash color="#868e96" size={20} />
          )}
        </button>
      </div>
    </div>
  );
});
