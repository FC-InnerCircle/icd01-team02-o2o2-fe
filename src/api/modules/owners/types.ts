export type CreateOwnerRequest = {
  accountId: string;
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
  createdAt: string;
}
