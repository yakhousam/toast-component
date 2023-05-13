import React from "react";
import useEscapeKey from "../../hooks/useEscapeKey";

const ToastContext = React.createContext();

function ToastProvider({ children }) {
  const [toasts, setToasts] = React.useState([]);

  const dismissAllToasts = React.useCallback(() => {
    setToasts([]);
  }, []);

  useEscapeKey(dismissAllToasts);

  const addToast = (message, variant) => {
    const id = crypto.randomUUID();
    setToasts((toasts) => [...toasts, { id, message, variant }]);
  };

  const removeToast = (id) => {
    setToasts((toasts) => toasts.filter((toast) => toast.id !== id));
  };

  const value = {
    toasts,
    addToast,
    removeToast,
  };

  return (
    <ToastContext.Provider value={value}>{children}</ToastContext.Provider>
  );
}

export default ToastProvider;

export const useToast = () => {
  const context = React.useContext(ToastContext);
  if (context === undefined) {
    throw new Error("useToast must be used within a ToastProvider");
  }
  return context;
};
