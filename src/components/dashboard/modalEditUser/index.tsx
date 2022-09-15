import { RegisterContainer, RegisterFormStyle, ButtonClose, EditButton } from "./styles";
import api from "../../../services/api";
import { IEditUser } from "../../../interfaces/interfaces";
import { useForm } from "react-hook-form";
import { editUserSchema } from "../../../schemas/schemas";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-hot-toast";
import { useContext, useEffect } from "react";
import { ModalEditContext } from "../../../context/modalEditContext";
import { MdClose } from "react-icons/md"
import { UserContext } from "../../../context/userContext";

export const EditUser = () => {

  const token = localStorage.getItem("@tokenLMP")

  const { setShowModalEdit} = useContext(ModalEditContext)
  const { user, setUser } = useContext(UserContext)

  const { handleSubmit, register, formState: { errors } } = useForm<IEditUser>({
    resolver: yupResolver(editUserSchema)
  })

  useEffect(()=>{
    (document.getElementById("email") as HTMLInputElement).defaultValue = user.email;
    (document.getElementById("cep") as HTMLInputElement).defaultValue = user.address.zipCode;
    (document.getElementById("rua") as HTMLInputElement).defaultValue = user.address.street;
    (document.getElementById("numero") as HTMLInputElement).defaultValue = user.address.number!;
    (document.getElementById("bairro") as HTMLInputElement).defaultValue = user.address.neighbourhood;
    (document.getElementById("cidade") as HTMLInputElement).defaultValue = user.address.city;
    (document.getElementById("uf") as HTMLInputElement).defaultValue = user.address.state;
  }, [])

  const userEdit = (data: IEditUser) => {
    console.log(data)
    const { email, cep, rua, numero, bairro, cidade, uf, password } = data;

    const userEdited:any = {
      email: email ? email : user.email,
      address: {
        zipCode: cep ? cep : user.address.zipCode,
        street: rua ? rua: user.address.street,
        number: numero ? numero: user.address.number,
        neighbourhood: bairro ? bairro: user.address.neighbourhood,
        city: cidade ? cidade: user.address.city,
        state: uf ? uf: user.address.state,
      },
    };

    if(password){
      userEdited.password = password
    }

    api
      .patch("/users", userEdited, {
        headers: {
          Authorization: `Bearer ${token}`,
        }})
      .then(() => {
        setShowModalEdit(false)
        toast.success("Usuário editado com sucesso!");
        api.get("profile", {
          headers: {
            Authorization: `Bearer ${token}`,
          }})
          .then((res) => {
            const indexToOcult= [3,4,5,6,7,8]
            const idOcult = res.data.documentId?.split("")
            for(let i = 0; i < indexToOcult.length; i++){
                idOcult[indexToOcult[i]] = "*"
            }

              res.data.idOcult = idOcult
              setUser(res.data)
          })
      })
      .catch((err: {}) => {
        toast.error("Verifique os campos");
      });
  };

  return (
    <RegisterContainer>
      <RegisterFormStyle>

        <ButtonClose onClick={()=> setShowModalEdit(false)} ><MdClose/></ButtonClose>  

        <div>
          <label>Email</label>
          <input type="text" {...register("email")} id="email"/>
        </div>

        <div className="address">
          <div>
            <label>CEP</label>
            <input type="number" {...register("cep")} id="cep"/>
          </div>

          <div>
            <label>Rua</label>
            <input type="text" {...register("rua")} id="rua"/>
          </div>

          <div>
            <label>Numero</label>
            <input type="number" {...register("numero")} id="numero"/>
          </div>

          <div>
            <label>Bairro</label>
            <input type="text" {...register("bairro")} id="bairro"/>
          </div>

          <div>
            <label>Cidade</label>
            <input type="text" {...register("cidade")} id="cidade"/>
          </div>

          <div>
            <label>UF</label>
            <input type="text" {...register("uf")} id="uf"/>
          </div>
        </div>

        <div>
          <label>Senha</label>
          <input type="password" {...register("password")} />
          {errors.password?.message}
        </div>

        <div>
          <label>Confirmar Senha</label>
          <input type="password" {...register("confPassword")} />
          {errors.confPassword?.message}
        </div>
        <EditButton type="submit" onClick={handleSubmit(userEdit)}>Editar</EditButton> 
      </RegisterFormStyle>
    </RegisterContainer>
    
  );
}
export default EditUser
