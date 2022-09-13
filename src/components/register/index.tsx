import React from "react";

import logo from "../../assets/img/logo.png";
import { RegisterContainer, RegisterFormStyle } from "./style";
import api from "../../services";
import { IRegister } from "../../interfaces/interfaces";
import { useForm } from "react-hook-form";
import { registerSchema } from "../../schemas/schemas";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-hot-toast";
import { useHistory } from "react-router-dom";

const RegisterForm = () => {
  const history = useHistory();

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<IRegister>({
    resolver: yupResolver(registerSchema),
  });

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
      .then((res: any) => {
        toast.success("Successfully registerd!");
        history.push("/login");
      })
      .catch((err: any) => {
        toast.error("This didn't work.");
      });
  };
  //123456@Ab
  return (
    <RegisterContainer>
      <RegisterFormStyle onSubmit={handleSubmit(userRegister)}>
        <img src={logo} alt="logo" />
        <div>
          <label>CPF</label>
          <input type="text" {...register("cpf")} />
          {errors.cpf && <span>{errors.cpf.message}</span>}
        </div>

        <div>
          <label>Nome</label>
          <input type="text" {...register("nome")} />
        </div>

        <div>
          <label>Email</label>
          <input type="text" {...register("email")} />
        </div>

        <div className="address">
          <div>
            <label>CEP</label>
            <input type="number" {...register("cep")} />
          </div>

          <div>
            <label>Rua</label>
            <input type="text" {...register("rua")} />
          </div>

          <div>
            <label>Numero</label>
            <input type="number" {...register("numero")} />
          </div>

          <div>
            <label>Bairro</label>
            <input type="text" {...register("bairro")} />
          </div>

          <div>
            <label>Cidade</label>
            <input type="text" {...register("cidade")} />
          </div>

          <div>
            <label>UF</label>
            <input type="text" {...register("uf")} />
          </div>
        </div>

        <div>
          <label>Senha</label>
          <input type="password" {...register("password")} />
        </div>

        <div>
          <label>Confirmar Senha</label>
          <input type="password" {...register("confPassword")} />
        </div>
        <button type="submit">Registre-se</button>
      </RegisterFormStyle>
    </RegisterContainer>
  );
};

export default RegisterForm;
