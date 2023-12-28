import React, { useEffect, useState } from "react";

const useIsMobie = () => {
  const [state, setState] = useState("false");

  const handler = () => {
    if (window.innerWidth < 600) {
      setState(true);
    } else {
      setState(false);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handler);
    return () => {
      window.removeEventListener("resize", handler);
    };
  }, []);

  return state;
};

export default useIsMobie;
