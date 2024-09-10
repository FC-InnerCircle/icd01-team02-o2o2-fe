export type LoginRequest = {
  accountId: string;
  password: string;
}

export type LoginResponse = {
  accessToken: string | null;
  refreshToken: string | null;
}

export type RefreshRequest = {
  refreshToken: string;
}

export type RefreshResponse = {
  accessToken: string;
  refreshToken: string;
}

export type LogoutRequest = {
  refreshToken: string;
}
