import { useRouter } from "next/router";
import { useEffect } from "react";

const requireAuth = (handler: any) => (req: any, res: any) => {
  // Kiểm tra xác thực ở đây, ví dụ:
  req.cookies = "lkasdfsd"; // Giả sử token được lưu trong cookies
  console.log(req.cookies, "token");
  // if (!token) {
  // return res.redirect("/login"); // Chuyển hướng đến trang đăng nhập nếu không có token
  // }

  return handler(req, res);
};

export default requireAuth;
