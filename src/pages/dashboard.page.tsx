import Header from "../components/dashboard/header";
import { Toaster, toast } from "react-hot-toast";
import { useContext, useEffect, useState } from "react";
import { StyledMain, StyledSection } from "./dashboard.styles";
import UserDetails from "../components/dashboard/userDetails";
import api from "../services/api";
import { UserContext } from "../context/userContext";
import FilterTransaction from "../components/dashboard/filterTransaction";
import ModalTransaction from "../components/dashboard/modalTransaction/modal";
import CardsTransaction from "../components/dashboard/cardsTransaction";

import ModalTransactionAction from "../components/dashboard/modalTransactionAction";

import { ModalEditContext } from "../context/modalEditContext";


const Dashboard = () => {

  const token = localStorage.getItem("@tokenLMP")
  const { setUser, modalTRActionOpen, modalTransaction } = useContext(UserContext)
  const [showData, setShowData] = useState(false)
  const [transactions, setTransactions] = useState<[]>([])
  const [filteredTransactions, setFilteredTransactions] = useState<[]>([...transactions])
  const [willReload, setWillReload] = useState(0);

  useEffect(()=>{
    api.get("/history", {
      headers: {
        Authorization: `Bearer ${token}`,
      }})
      .then((res) => {
        setTransactions(res.data)
        setFilteredTransactions(res.data)

        setTimeout(()=>{
          setShowData(true)
        }, 1000)
      })

  }, [willReload]);

  function reloadHistory() {
    setWillReload(willReload + 1);
  }

  useEffect(()=>{
    api.get("/profile", {
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

        setTimeout(()=>{
          setShowData(true)
        }, 1000)

      })

      .then((res: any) => {
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

  }, [willReload]);

  useEffect(() => {
    toast.remove();
  }, []);

  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />

      {modalTransaction !== "none" && <ModalTransaction />}
      {modalTRActionOpen && <ModalTransactionAction reloadHistory={reloadHistory} />}

      <Header />

      <StyledMain>
        <UserDetails showData={showData} />

        <StyledSection>


          <FilterTransaction transactions={transactions} setFilteredTransactions={setFilteredTransactions}/>


          <CardsTransaction filteredTransactions={filteredTransactions} showData={showData}/>
          
        </StyledSection>
      </StyledMain>
    </>
  );
};

export default Dashboard;
