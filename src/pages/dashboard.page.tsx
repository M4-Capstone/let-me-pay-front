import Header from "../components/dashboard/header";
import { Toaster,toast } from "react-hot-toast"
import { useEffect } from "react";
import { StyledMain } from "./dashboard.styles";
import UserDetails from "../components/dashboard/userDetails";


const Dashboard = () => {

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
        
        <UserDetails/>

      </StyledMain>
    </>
  );
};

export default Dashboard;
