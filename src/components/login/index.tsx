import React from "react";
import { Link } from "react-router-dom";
import { Container, StyledForm } from "./style";
import { useForm } from "react-hook-form";
import { ILogin } from "../../interfaces/interfaces";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "../../schemas/schemas";

const LoginForm = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<ILogin>({
    resolver: yupResolver(loginSchema),
  });

  const login = (data: ILogin) => {
    console.log(data);
  };

  return (
    <Container>
      <div>
        <img src="" alt="Logo" />
        <StyledForm>
          <form onSubmit={handleSubmit(login)}>
            <div className="container-login">
              <label htmlFor="email">Email</label>
              <input type="text" {...register("email")} />
            </div>
            <div>
              <label htmlFor="password">Password</label>
              <input type="text" {...register("password")} />
            </div>
            <button type="submit">Entre</button>
          </form>
        </StyledForm>
      </div>
    </Container>
  );
};

export default LoginForm;
