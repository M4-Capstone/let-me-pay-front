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
