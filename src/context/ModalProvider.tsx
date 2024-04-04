"use client";
import React, { ReactNode, createContext, useState } from "react";
import Modal from "./Modal";
import { createPortal } from "react-dom";

type Props = {
  children: ReactNode;
};

type contextProps = {
  showModal: boolean;
  closeModal: () => void;
  setModal: (element: JSX.Element) => void;
};

export const ModalContext = createContext<contextProps>({
  showModal: false,
  closeModal: () => {},
  setModal: (element: JSX.Element) => {},
});
const ModalProvider = ({ children }: Props) => {
  const [showModal, setShowModal] = useState(false);
  const [contentModal, setContentModal] = useState<JSX.Element>(<></>);
  const id = typeof window === "object" && document.body;
  const setModal = (element: JSX.Element) => {
    setShowModal(true);
    setContentModal(element);
  };
  const closeModal = () => {
    setShowModal(false);
    setContentModal(<></>);
  };
  return (
    <ModalContext.Provider
      value={{
        showModal,
        setModal,
        closeModal,
      }}
    >
      {children}
      {showModal &&
        id &&
        createPortal(<Modal onClose={closeModal}>{contentModal}</Modal>, id)}
    </ModalContext.Provider>
  );
};

export default ModalProvider;
