import React from "react";

const useEscapeKey = (callBack) => {
  React.useEffect(() => {
    function handleEscape(event) {
      if (event.key === "Escape") {
        callBack();
      }
    }
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [callBack]);

  return <div>useEscapeKey</div>;
};

export default useEscapeKey;
