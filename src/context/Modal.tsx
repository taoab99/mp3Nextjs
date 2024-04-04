import React, { ReactNode } from "react";
type Props = {
  children: ReactNode;
  onClose: () => void;
};
const Modal = ({ children, onClose }: Props) => {
  return (
    <div className="fixed w-full top-0 left-0 h-screen bg-modal z-max flex items-center justify-center">
      <div
        className="absolute top-0 bottom-0 w-screen h-screen"
        onClick={onClose}
      ></div>
      <div className="z-max">{children}</div>
    </div>
  );
};

export default Modal;
