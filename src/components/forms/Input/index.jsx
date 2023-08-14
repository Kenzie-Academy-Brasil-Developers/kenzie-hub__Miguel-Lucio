import { forwardRef } from "react";
import styles from "./style.module.scss";

export const Input = forwardRef(({ error, label, ...rest }, ref) => {
  return (
    <div className={styles.inputBox}>
      <label className="text headline gray500">{label}</label>
      <input ref={ref} {...rest} />
      {error ? <p className="text helper gray400">{error.message}</p> : null}
    </div>
  );
});
