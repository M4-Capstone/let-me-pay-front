import * as yup from "yup";

const loginSchema = yup.object({
  eamail: yup
    .string()
    .email("Formato de email inválido")
    .required("este campo é obrigatório"),
  password: yup.string().required("ste campo é obrigatório"),
});

export { loginSchema };
