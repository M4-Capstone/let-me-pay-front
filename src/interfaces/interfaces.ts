export interface ILogin {
  email: string;
  password: string;
}

export interface IRegister {
  cpf: string;
  nome: string;
  email: string;
  cep: number;
  rua: string;
  numero?: number;
  bairro: string;
  cidade: string;
  uf: string;
  password: string;
  confPassword?: string;
}

export interface IUser {
  documentId: string;
  name: string;
  email: string;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
  idOcult?: string;
  address: {
    id: string;
    neighbourhood: string;
    zipCode: string;
    street: string;
    number?: string;
    city: string;
    state: string;
  };
  wallet: {
    id: string;
    amount: string;
    createdAt: string;
    updatedAt: string;
  };
}

export interface IProps {
  onPress: any;
  src: any;
  width: string;
  height: string;
}
