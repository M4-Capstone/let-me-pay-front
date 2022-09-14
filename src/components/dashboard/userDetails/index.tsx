import { ButtonTransaction, DivIcon, StyledSection } from "./styles";
import { TbEdit } from "react-icons/tb";
import UserInfo from "./components/userInfo";
import UserAddress from "./components/addresInfo";
import { useContext } from "react";
import { UserContext } from "../../../context/userContext";

interface IProps {
  showData: boolean;
}

const UserDetails = ({ showData }: IProps) => {
  const { setModalTransaction } = useContext(UserContext);

  return (
    <StyledSection>
      <DivIcon>
        <TbEdit size={30} />
      </DivIcon>

      <UserInfo showData={showData} />

      <UserAddress showData={showData} />

      <ButtonTransaction onClick={() => setModalTransaction("flex")}>
        TRANSAÇÃO
      </ButtonTransaction>
    </StyledSection>
  );
};

export default UserDetails;
