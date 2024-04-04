import handleCookie from "../services/login/handleCookie";
import { handleToken } from "./handleStorage";

// import { cookies } from "next/headers";
type MethodsType = "GET" | "POST" | "PUT" | "DELETE";

async function api(url: string, dataPost?: any, method: MethodsType = "GET") {
  const token = localStorage.getItem("accessToken");
  const config: any = {
    method,
    mode: "cors", // no-cors, *cors, same-origin
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    credentials: "same-origin", // include, *same-origin, omit
    headers: {
      "Content-Type": "application/json",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: JSON.stringify(dataPost),
  };
  if (token) {
    config.headers["Authorization"] = `Bearer ${JSON.parse(token)}`;
  }
  const responsive = await fetch(url, config)
    .then(async (res) => {
      if (res.status === 200) return await res.json();
      if (res.status === 401) {
        const refreshToken = localStorage.getItem("refreshToken");
        return await fetch("http://localhost:3001/refreshToken", {
          ...config,
          method: "POST",
          body: JSON.stringify({ refreshToken: JSON.parse(refreshToken!) }),
        }).then(async (res) => {
          if (res.status === 200) {
            const data: any = await res.json();
            handleToken(data);
            handleCookie();
            config.headers["Authorization"] = `Bearer ${data.accessToken}`;
            return await fetch(url, config);
          } else {
            throw new Error();
          }
        });
      }
    })
    .catch(async (error) => {
      return null;
    });
  return responsive;
}

export default api;

class baseFetch {
  baseUrl: string = "http://localhost:3001";
  
}
