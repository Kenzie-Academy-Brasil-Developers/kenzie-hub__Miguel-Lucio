import { forwardRef } from "react";
import styles from "./style.module.scss";

export const Input = forwardRef(({ label, ...rest }, ref) => {
  return (
    <div className={styles.inputBox}>
      <label className="text headline gray500">{label}</label>
      <input ref={ref} {...rest} />
    </div>
  );
});
