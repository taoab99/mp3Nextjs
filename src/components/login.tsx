"use client";

// import LoginModal from "@/context/LoginModal";
// import { ModalContext } from "@/context/ModalProvider";
import { useContext } from "react";
import { ModalContext } from "../context/ModalProvider";
import LoginModal from "../context/LoginModal";
import { Button } from "./Button";
import { useAppSelector } from "../lib/hooks";

export default function Login() {
  const { setModal } = useContext(ModalContext);
  const { user } = useAppSelector((state) => state.user);

  const textOfBox = {
    noUser: "Đăng nhập để khám phá playlist dành riêng cho bạn",
    userExit: "Nâng cấp tài khoản để trải nghiệm ứng dụng tốt hơn",
  };
  const handleLogin = () => {
    !user && setModal(<LoginModal />);
  };
  return (
    <div className="px-6">
      <div className="login-box">
        <p>{user ? textOfBox.userExit : textOfBox.noUser}</p>
        <Button text={user ? "Nâng cấp" : "Đăng nhập"} onBtn={handleLogin} />
      </div>
    </div>
  );
}
