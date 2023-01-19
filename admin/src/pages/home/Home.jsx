import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import "./home.scss";
import Widget from "../../components/widget/Widget";
import Featured from "../../components/featured/Featured";
import Chart from "../../components/chart/Chart";
// import Table from "../../components/table/Table";
import { useEffect, useState } from "react";
import axios from "axios";
import { config } from "../../getToken";

const Home = () => {
  // const [car, setCar] = useState();
  const [compte, setCompte] = useState();
  const [client, setClient] = useState();
  const [solde, setSolde] = useState();
  
  useEffect(() => {

    const totalCompte = async () => {
      const res = await axios.get("admin/totalComptes", config);
      setCompte(res.data);
    };
    const totalClient = async () => {
      const res = await axios.get("admin/totalClients", config);
      setClient(res.data);
    };
     const totalSoldes = async () => {
       const res = await axios.get("admin/totalSoldes", config);
       setSolde(res.data);
     };
    totalCompte();
    totalClient();
    totalSoldes();
  }, []);


  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="widgets">
          <Widget type="user" amount={client} />
          <Widget type="compte" amount={compte} />
          <Widget type="solde" amount={solde} />
        </div>
        <div className="charts">
          <Featured />
          <Chart title="Last 6 Months (Revenue)" aspect={2 / 1} />
        </div>
        {/* <div className="listContainer">
          <div className="listTitle">Latest comptes</div>
          <Table />
        </div> */}
      </div>
    </div>
  );
};

export default Home;
