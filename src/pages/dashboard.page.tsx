import Header from "../components/dashboard/header";
import { Toaster, toast } from "react-hot-toast";
import { useContext, useEffect, useState } from "react";
import { StyledMain, StyledSection } from "./dashboard.styles";
import UserDetails from "../components/dashboard/userDetails";
import api from "../services/api";
import { UserContext } from "../context/userContext";
import FilterTransaction from "../components/dashboard/filterTransaction";
import ModalTransaction from "../components/dashboard/modalTransaction/modal";

const Dashboard = () => {
  const token = localStorage.getItem("@tokenLMP");
  const { setUser } = useContext(UserContext);
  const [showData, setShowData] = useState(false);

  useEffect(() => {
    api
      .get("/profile", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        const indexToOcult = [3, 4, 5, 6, 7, 8];
        const idOcult = res.data.documentId?.split("");
        for (let i = 0; i < indexToOcult.length; i++) {
          idOcult[indexToOcult[i]] = "*";
        }

        res.data.idOcult = idOcult;
        setUser(res.data);

        setTimeout(() => {
          setShowData(true);
        }, 1000);
      });
  }, []);

  useEffect(() => {
    toast.remove();
  }, []);

  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />

      <ModalTransaction />

      <Header />

      <StyledMain>
        <UserDetails showData={showData} />

        <StyledSection>
          <FilterTransaction />
        </StyledSection>
      </StyledMain>
    </>
  );
};

export default Dashboard;
