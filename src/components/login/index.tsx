import React, { useCallback } from "react";
import { Link, useHistory } from "react-router-dom";
import { Container, StyledForm } from "./style";
import { ILogin } from "../../interfaces/interfaces";
import { loginSchema } from "../../schemas/schemas";
import logo from "../../assets/img/logo.png";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import api from "../../services";
import toast from "react-hot-toast";

const LoginForm = () => {
  const history = useHistory();

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<ILogin>({
    resolver: yupResolver(loginSchema),
  });

  const submitFunction = (data: ILogin) => {
    api
      .post("/login", data)
      .then((res) => {
        localStorage.setItem("@tokenLMP", res.data.token);
        history.push("/dashboard");
      })
      .catch((err) => toast.error("Algo deu Errado!!!!"));
  };

  return (
    <Container>
      <div className="container">
        <img src={logo} alt="Logo" />
        <StyledForm>
          <form>
            <div className="container-login">
              <label htmlFor="email">Email</label>
              <input type="text" {...register("email")} />
            </div>
            <div>
              <label htmlFor="password">Password</label>
              <input type="password" {...register("password")} />
            </div>
            <button onClick={handleSubmit(submitFunction)}>Entre</button>
          </form>
        </StyledForm>
      </div>
    </Container>
  );
};

export default LoginForm;
