import { forwardRef } from "react";
import styles from "./style.module.scss";

export const Select = forwardRef(({ children, label, ...rest }, ref) => {
  return (
    <div className={styles.selectBox}>
      <label className="text headline gray500">{label}</label>
      <select ref={ref} {...rest}>
        {children}
      </select>
    </div>
  );
});
