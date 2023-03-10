import { Link } from "react-router-dom";
import axios from "axios";
import { errorMessage, sweetAlert } from "./alert";
import { config } from "./getToken";

// view user
const viewUser = async (_id) => {
  localStorage.removeItem("userId");
  localStorage.removeItem("carId");
  localStorage.removeItem("compteId");
  localStorage.setItem("userId", _id);
};
const viewCompte = async (_id) => {
  localStorage.removeItem("userId");
  localStorage.removeItem("carId");
  localStorage.removeItem("compteId");
  localStorage.setItem("compteId", _id);
};

// delete car from table
const deleteCar = async (_id) => {
  try {
    // axios with header
    const res = await axios.delete(`/admin/deleteCar/${_id}`, config);
    window.location.reload();
  } catch (error) {
    errorMessage(error.response.data.message);
  }
};

// show sweet alert
const showAlert = () => {
  sweetAlert({
    title: "Are you sure?",
    acceptMessage: "Once deleted, you will not be able to recover this car!",
    cancelMessage: "Your car is safe!",
    deleteCar: () => deleteCar(),
  });
};

export const userAction = [
  {
    field: "action",
    headerName: "Action",
    width: 200,
    renderCell: (params) => {
      return (
        <div className="cellAction">
          <Link to="/users/single" style={{ textDecoration: "none" }}>
            <div
              className="viewButton"
              onClick={() => viewUser(params.row._id)}
            >
              View
            </div>
          </Link>
        </div>
      );
    },
  },
];

// car action table
export const carAction = [
  {
    field: "action",
    headerName: "Action",
    width: 200,
    renderCell: (params) => {
      return (
        <div className="cellAction">
          <Link to="/users/id" style={{ textDecoration: "none" }}>
            <div className="updateButton">Update</div>
          </Link>
          <div
            className="deleteButton"
            onClick={showAlert}
          >
            Delete
          </div>
        </div>
      );
    },
  },
];

// compte action table
export const compteAction = [
  {
    field: "action",
    headerName: "Action",
    width: 210,
    renderCell: (params) => {
      return (
        <div className="cellAction">
          <Link to="/comptes/single" style={{ textDecoration: "none" }}>
            <div
              className="viewButton"
              onClick={() => viewCompte(params.row._id)}
            >
              View
            </div>
          </Link>
        </div>
      );
    },
  },
];
