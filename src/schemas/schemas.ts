import * as yup from "yup";

const loginSchema = yup.object({
  email: yup
    .string()
    .email("Formato de email inválido")
    .required("este campo é obrigatório"),
  password: yup.string().required("Este campo é obrigatório"),
});

const registerSchema = yup.object({
  cpf: yup.string().required("* este campo é obrigatório"),
  nome: yup.string().required("* este campo é obrigatório"),
  email: yup
    .string()
    .email("* email invalido")
    .required("* este campo é obrigatório"),
  cep: yup.number().required("* este campo é obrigatório"),
  rua: yup.string().required("* este campo é obrigatório"),
  numero: yup.number(),
  bairro: yup.string().required("* este campo é obrigatório"),
  cidade: yup.string().required("* este campo é obrigatório"),
  uf: yup.string().required("* este campo é obrigatório"),
  password: yup
    .string()
    .min(8, "* a senha deve ter no mínimo 8 caracteres")
    .max(16, "* a senha deve ter no máximo 16 caracteres")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])/,
      "* deve conter letra maiúscula, minúscula, número e caractere especial"
    )
    .required("* este campo é obrigatório"),
  confPassword: yup
    .string()
    .oneOf([yup.ref("password")], "* as senhas devem corresponder")
    .required("* este campo é obrigatório"),
});

const editUserSchema = yup.object({
  email: yup.string().email("* email invalido"),
  cep: yup.string(),
  rua: yup.string(),
  numero: yup.string(),
  bairro: yup.string(),
  cidade: yup.string(),
  uf: yup.string(),
  password: yup.string().notRequired(),
  confPassword: yup.string().oneOf([yup.ref("password")], "* as senhas devem corresponder"),
});

export { loginSchema, registerSchema,editUserSchema };
