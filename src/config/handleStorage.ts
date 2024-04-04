export function handleToken(data: {
  accessToken: string;
  refreshToken: string;
  user?: any;
}) {
  data.accessToken &&
    localStorage.setItem("accessToken", JSON.stringify(data.accessToken));
  data.refreshToken &&
    localStorage.setItem("refreshToken", JSON.stringify(data.refreshToken));
  data.user && localStorage.setItem("user", JSON.stringify(data.user));
}

export function clearStorage() {
  localStorage.clear();
}
export const ACCESS_TOKEN = "accessToken";
export const REFRESH_TOKEN = "refreshToken";
type StorageKey = "accessToken" | "refreshToken";
export const storage = {
  getStorage: (key: StorageKey) => {
    const result = localStorage.getItem(key);
    return result;
  },
};
