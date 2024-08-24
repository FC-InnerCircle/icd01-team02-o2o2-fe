
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

export type CreateOwnerRequest = {
  accountId: string;
  password: string;
  name: string;
  contactNumber: string;
  email: string;
}

export type CreateOwnerResponse = {
  id: number;
  accountId: string;
  name: string;
  contactNumber: string;
  email: string;
}

export type CreateManagerRequest = {
  accountId: string;
  password: string;
  name: string;
  contactNumber: string;
  email: string;
}

export type CreateManagerResponse = {
  id: number;
  accountId: string;
  name: string;
  contactNumber: string;
  email: string;
  status: string;
}

