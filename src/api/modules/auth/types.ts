export type LoginRequest = {
  accountId: string;
  password: string;
}

export type LoginResponse = {
  accessToken: string;
  refreshToken: string;
}

export type RefreshRequest = {
  refreshToken: string;
}

export type RefreshResponse = {
  accessToken: string;
  refreshToken: string;
}

export type LogoutResponse = {
  refreshToken: string;
}
