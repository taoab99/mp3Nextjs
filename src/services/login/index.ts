import api from "../../config/api";
import handleCookie from "./handleCookie";
import { handleToken } from "../../config/handleStorage";

async function handleLogin(
  data: { email: string; password: string },
  handleSuccess?: (data?: any) => void,
  handleError?: (data?: string) => void
) {
  try {
    const res = await api("http://localhost:3001/login", data, "POST");
    if (res.message) {
      return handleError?.(res.message);
    }
    handleToken({
      accessToken: res?.accessToken,
      refreshToken: res?.refreshToken,
      user: res?.data,
    });
    handleCookie(false, res.accessToken);
    handleSuccess?.(res?.data);
  } catch (error) {}
}

async function handleLogout() {
  localStorage.clear();
  handleCookie(true);
}
export { handleLogin, handleLogout };
