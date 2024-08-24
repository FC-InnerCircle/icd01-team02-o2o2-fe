
export type ProfileResponse = {
  id: number;
  accountId: string;
  name: string;
  contactNumber: string;
  email: string;
  createdAt: string;
}

export type UpdateProfileRequest = {
  name: string;
  password: string;
  contactNumber: string;
  email: string;
}

export type UpdateProfileResponse = {
  id: number;
  accountId: string;
  name: string;
  contactNumber: string;
  email: string;
  createdAt: string;
  updatedAt: string;
}
