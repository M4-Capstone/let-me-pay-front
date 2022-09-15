import { ButtonTransaction, DivIcon, StyledSection } from "./styles";
import { TbEdit } from "react-icons/tb";
import UserInfo from "./components/userInfo";
import UserAddress from "./components/addresInfo";
import { useContext } from "react";
import { UserContext } from "../../../context/userContext";
import { ModalEditContext } from "../../../context/modalEditContext";
import EditUser from "../modalEditUser";
interface IProps {
  showData: boolean;
}

const UserDetails = ({ showData }: IProps) => {
  const { setModalTransaction } = useContext(UserContext);

  const { showModalEdit, setShowModalEdit } = useContext(ModalEditContext)

  const showModal = () =>{
    setShowModalEdit(true)
  }

  return (
    <StyledSection>
      <DivIcon>
        <button onClick={()=> showModal()}><TbEdit size={30} /></button>
      </DivIcon>

      <UserInfo showData={showData} />

      <UserAddress showData={showData} />

      <ButtonTransaction onClick={() => setModalTransaction("flex")}>
        TRANSAÇÃO
      </ButtonTransaction>

      {showModalEdit && <EditUser />}
    </StyledSection>
  );
};

export default UserDetails;
