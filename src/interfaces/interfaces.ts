export interface ILogin {
  email: string;
  password: string;
}

export interface IUser{
  documentId: string
  name: string
  email: string
  isActive: boolean
  createdAt: string
  updatedAt: string
  address: {
    id: string
    neighbourhood: string
    zipCode: string
    street: string
    number?: string
    city: string
    state: string
  }
  wallet: {
    id: string
    amount: string
    createdAt: string
    updatedAt: string
  }
}