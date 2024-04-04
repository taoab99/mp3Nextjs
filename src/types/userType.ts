export type UserInfo = {
  id: string;
  userName: string;
  age: number;
  phoneNumber: string;
  email: string;
  url: string;
  gender: string | number;
};

export type DataLogined = {
  user: UserInfo;
  accessToken: string;
  refreshToken: string;
};
