import React from "react";

import Toast from "../Toast";
import styles from "./ToastShelf.module.css";
import { useToast } from "../ToastProvider/ToastProvider";

function ToastShelf() {
  const { toasts, removeToast } = useToast();
  return (
    <ol
      className={styles.wrapper}
      role="region"
      aria-live="polite"
      aria-label="Notification"
    >
      {toasts.map(({ id, message, variant }) => (
        <li key={id} className={styles.toastWrapper}>
          <Toast variant={variant} handleClose={() => removeToast(id)}>
            {message}
          </Toast>
        </li>
      ))}
    </ol>
  );
}

export default ToastShelf;
