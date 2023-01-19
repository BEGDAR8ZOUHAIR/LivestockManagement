import "./comptes.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Datatable from "../../components/datatable/Datatable";
import { useEffect, useState } from "react";
import axios from "axios";
import { config } from "../../getToken";

const Comptes = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get("admin/getComptes", config).then((res) => {
      console.log(res.data);
      setData(res.data);
    });
  }, []);

  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        <Datatable data={data} title="All Comptes" />
      </div>
    </div>
  );
};

export default Comptes;
