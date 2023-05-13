import React from "react";

import Button from "../Button";
// import Toast from "../Toast";
import ToastShelf from "../ToastShelf";

import styles from "./ToastPlayground.module.css";
import { useToast } from "../ToastProvider/ToastProvider";

const VARIANT_OPTIONS = ["notice", "warning", "success", "error"];

function ToastPlayground() {
  const { addToast } = useToast();
  const [message, setMessage] = React.useState("");
  const [selectedVariant, setSelectedVariant] = React.useState(
    VARIANT_OPTIONS[0]
  );

  const handleSumbmit = (event) => {
    event.preventDefault();
    addToast(message, selectedVariant);
    setMessage("");
    setSelectedVariant(VARIANT_OPTIONS[0]);
  };

  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>

      <ToastShelf />
      <form className={styles.controlsWrapper} onSubmit={handleSumbmit}>
        <div className={styles.row}>
          <label
            htmlFor="message"
            className={styles.label}
            style={{ alignSelf: "baseline" }}
          >
            Message
          </label>
          <div className={styles.inputWrapper}>
            <textarea
              id="message"
              className={styles.messageInput}
              value={message}
              onChange={(event) => setMessage(event.target.value)}
            />
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label}>Variant</div>
          <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
            {VARIANT_OPTIONS.map((variant) => (
              <label key={variant} htmlFor={variant}>
                <input
                  id={variant}
                  type="radio"
                  name="variant"
                  value={variant}
                  onChange={(event) => setSelectedVariant(event.target.value)}
                  checked={variant === selectedVariant}
                />
                {variant}
              </label>
            ))}
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label} />
          <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
            <Button type="submit">Pop Toast!</Button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ToastPlayground;
