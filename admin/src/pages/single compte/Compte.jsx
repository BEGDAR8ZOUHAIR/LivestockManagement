import "./order.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import { useEffect, useState } from "react";
import axios from "axios";
import { successMessage, sweetAlert } from "../../alert";
import { config } from "../../getToken";
import TimeToLeaveIcon from "@mui/icons-material/TimeToLeave";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import CreditCardIcon from "@mui/icons-material/CreditCard";

const Compte = ({ title }) => {
  const [data, setData] = useState();
  const id = localStorage.getItem("compteId");

  useEffect(() => {
    const getCompte = async () => {
      try {
        const res = await axios.get(`/admin/singleCompte/${id}`, config);
        setData(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getCompte();
  }, []);

  const acceptCompte = async () => {
    try {
      const res = await axios.put(
        `/admin/acceptCompte/${id}`,
        {
          status: "Accepted",
        },
        config
      );
      successMessage("Compte Accepted");
      setTimeout(() => {
        window.location.replace("/comptes");
      }, 2000);
    } catch (err) {
      console.log(err);
    }
  };

  const cancelCompte = async () => {
    try {
      const res = await axios.put(
        `/admin/cancelCompte/${id}`,
        {
          status: "Canceled",
        },
        config
      );
      successMessage("Compte Canceled");
      setTimeout(() => {
        window.location.replace("/comptes");
      }, 2000);
    } catch (err) {
      console.log(err);
    }
  };

  const cancel = () => {
    sweetAlert({
      title: "Are you sure you want to cancel this compte?",
      acceptMessage: "It's okay you can accept it later",
      cancelMessage: " No, I want to keep it",
      theFunction: cancelCompte,
    });
  };

  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>{title}</h1>
        </div>
        <div className="bottom">
          {/* <div className="container">
            <h2>
              <TimeToLeaveIcon
                className="icon"
                style={{
                  color: "purple",
                }}
              />
              Car Details
            </h2>
            <div className="details">
              <div className="detail">
                <h3>Name</h3>
                <span>{data?.idCar.name}</span>
              </div>
              <div className="detail">
                <h3>Edition</h3>
                <span>{data?.idCar.edition}</span>
              </div>
              <div className="detail">
                <h3> Horse Power </h3>
                <span> {data?.idCar.horsepower} HP </span>
              </div>
              <div className="detail">
                <h3>Acceleration</h3>
                <span> {data?.idCar.acceleration} s </span>
              </div>
              <div className="detail">
                <h3>Autonomy</h3>
                <span>{data?.idCar.autonomy} km</span>
              </div>
              <div className="detail">
                <h3>Max Speed</h3>
                <span>{data?.idCar.maxSpeed} Km/h </span>
              </div>
            </div>
          </div> */}
          {/* <hr /> */}
          <div className="container">
            <h2>
              <PersonOutlinedIcon
                className="icon"
                style={{
                  color: "purple",
                }}
              />
              Client Details
            </h2>
            <div className="details">
              <div className="detail">
                <h3>Full Name</h3>
                <span>{data?.idClient.fullName}</span>
              </div>
              <div className="detail">
                <h3>Email</h3>
                <span>{data?.idClient.email}</span>
              </div>
              <div className="detail">
                <h3>birthDate</h3>
                <span>{data?.idClient.birthDate}</span>
              </div>
              <div className="detail">
                <h3>cin</h3>
                <span>{data?.idClient.cin}</span>
              </div>
              <div className="detail">
                <h3>agence</h3>
                <span>{data?.idClient.agence}</span>
              </div>
              <div className="detail">
                <h3>Phone Number</h3>
                <span>{data?.idClient.phoneNumber}</span>
              </div>
            </div>
          </div>
          {/* <hr /> */}
          {/* <div className="container">
            <h2>
              <CreditCardIcon
                className="icon"
                style={{
                  color: "purple",
                }}
              />
              Compte Details
            </h2>
            <div className="details">
              <div className="detail">
                <h3>Quantity</h3>
                <span>{data?.quantity}</span>
              </div>
            </div>
          </div> */}
          <hr />
          <div className="buttons">
            <div className="acceptButton" onClick={acceptCompte}>
              Accept
            </div>
            <div className="cancelButton" onClick={cancel}>
              Cancel
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Compte;
