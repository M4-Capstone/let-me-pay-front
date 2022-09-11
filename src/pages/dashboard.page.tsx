import Header from "../components/dashboard/header";
import { Toaster,toast } from "react-hot-toast"
import { useEffect } from "react";


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
    </>
  );
};

export default Dashboard;
