import api from "../services";
import { useHistory } from "react-router-dom";
import { createContext } from "react";
import { IRegister } from "../interfaces/interfaces";
import { object } from "yup";

const AuthContext = createContext({});

const userRegister = (data: IRegister) => {
  const { cpf, nome, email, cep, rua, numero, bairro, cidade, uf, password } =
    data;

  const address = {
    name: nome,
    email: email,
    password: password,
    documentId: cpf,
    address: {
      zipCode: cep,
      street: rua,
      number: numero,
      neighbourhood: bairro,
      city: cidade,
      state: uf,
    },
  };

  api
    .post("/users", address)
    .then((res: object) => {
      console.log(res);
    })
    .catch((err: any) => {
      console.log(err.data);
    });
};
