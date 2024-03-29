import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { carColumns, userColumns, compteColumns } from "../../datatablesource";
import { carAction, compteAction, userAction } from "../../actionTable";
import { Link } from "react-router-dom";

const Datatable = ({ data, title }) =>
{
  const path = window.location.pathname.split("/")[1];


  // add switch statement to handle different paths
  const switchFunction = () =>
  {
    switch (path)
    {
      case "users":
        return userColumns.concat(userAction);
      case "cars":
        return carColumns.concat(carAction);
      case "comptes":
        return compteColumns.concat(compteAction);
      default:
    }
  };

  return (
    <div className="datatable">
      <div className="title">
        <div className="datatableTitle">{title}</div>
        {path === "cars" ? (
          <Link to="/cars/new">
            <button className="addButton">Add New Car</button>
          </Link>
        ) : null}
      </div>
      <DataGrid
        className="datagrid"
        getRowId={(row) => row._id}
        rows={data}
        columns={switchFunction()}
        screensize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
    </div>
  );
};

export default Datatable;
