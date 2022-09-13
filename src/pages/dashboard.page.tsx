import Header from "../components/dashboard/header";
import { Toaster,toast } from "react-hot-toast"
import { useContext, useEffect, useState } from "react";
import { StyledMain } from "./dashboard.styles";
import UserDetails from "../components/dashboard/userDetails";
import api from "../services/api";
import { UserContext } from "../context/userContext";


const Dashboard = () => {

  const token = localStorage.getItem("@tokenLMP")
  const {user, setUser} = useContext(UserContext)
  const [showInfo, setShowInfo] = useState(false)

  useEffect(()=>{
    api.get("/profile", {
      headers: {
        Authorization: `Bearer ${token}`,
      }})
      .then((res) => {
        setUser(res.data)
        setShowInfo(true)
      })
  }, [])

  useEffect(()=>{
    toast.remove()
  }, [])



  return (
    <>
    
      <Toaster
        position="top-center"
        reverseOrder={false}
      />

      <Header/>

      <StyledMain>
        {showInfo && <UserDetails/>}
       

      </StyledMain>
    </>
  );
};

export default Dashboard;
