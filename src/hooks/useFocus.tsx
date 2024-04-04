"use client";
import React, { MouseEvent, ReactNode, useRef } from "react";

import { useEffect, useState } from "react";

interface Props {
  refInput: ReactNode;
}

const useFocus = () => {
  const [isFocus, setForcus] = useState(false);
  const ref = useRef<any>(null);

  const handleHover = (e: any) => {
    if (ref.current && ref.current.contains(e.target)) {
      setForcus(true);
    } else setForcus(false);
  };
  useEffect(() => {
    window.addEventListener("click", handleHover);
    return () => {
      window.removeEventListener("click", handleHover);
    };
  }, []);

  return {
    ref,
    isFocus,
    setForcus,
  };
};

export default useFocus;
