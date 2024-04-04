"use client";

import { handleLogin } from "@/src/services/login";
import { ChangeEvent, useContext, useState } from "react";
import { Button } from "../components/Button";
import InputElement from "../components/InputElement";
import { ModalContext } from "./ModalProvider";
import { useAppDispatch } from "../lib/hooks";
import { updateUser } from "../lib/reducers/userSlice";

const LoginModal = () => {
  const { closeModal } = useContext(ModalContext);
  const dispatch = useAppDispatch();

  const [message, setMessage] = useState<string>();
  const [dataLogin, setDataLogin] = useState<{
    email: string;
    password: string;
  }>({ email: "khactao99@gmail.com", password: "123456789" });
  const login = async () => {
    const handleSetUser = (data?: any) => {
      dispatch(updateUser(data));
      closeModal();
    };
    await handleLogin(dataLogin, handleSetUser, setMessage);
  };

  const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name;
    const value = e.target.value;
    setDataLogin({ ...dataLogin, [name]: value });
  };
  const handleFocus = () => {
    setMessage(undefined);
  };
  return (
    <div className="flex flex-col items-center justify-center gap-5 bg-white rounded-2xl p-10 w-[30vw]">
      <InputElement
        placeholder="nhập email"
        type="email"
        name="email"
        value={dataLogin.email}
        className="p-3 outline-none border purple-color rounded-md w-full"
        onChange={handleChangeInput}
        onFocus={handleFocus}
      />
      <InputElement
        placeholder="nhập password"
        name="password"
        value={dataLogin.password}
        type="password"
        className="p-3 outline-none border purple-color rounded-md w-full"
        onChange={handleChangeInput}
        onFocus={handleFocus}
      />
      <p className="w-full text-red-600 text-xs font-normal">{message}</p>

      <Button
        className="w-fit border rounded-md bg-purple-primary px-6 py-2"
        onBtn={login}
        text="Đăng nhập"
      />
    </div>
  );
};

export default LoginModal;
