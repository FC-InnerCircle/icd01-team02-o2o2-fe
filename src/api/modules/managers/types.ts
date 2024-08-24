export type CreateManagerRequest = {
  accountId: string;
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
  createdAt: string;
}
