import { forwardRef } from "react";
import styles from "./style.module.scss";

export const Select = forwardRef(({ children, error, label, ...rest }, ref) => {
  return (
    <div className={styles.selectBox}>
      <label className="text headline gray500">{label}</label>
      <select ref={ref} {...rest}>
        {children}
      </select>
      {error ? <p className="text helper gray400">{error.message}</p> : null}
    </div>
  );
});
