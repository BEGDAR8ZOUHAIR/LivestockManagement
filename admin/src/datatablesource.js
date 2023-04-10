export const userColumns = [
  { field: "_id", headerName: "ID", width: 150 },
  {
    field: "user",
    headerName: "Client",
    width: 230,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" alt="avatar" />
         {params.row.fullName.toUpperCase()}
        </div>
      );
    },
  },
  {
    field: "email",
    headerName: "Email",
    width: 210,
  },
  // {
  //   field: "status",
  //   headerName: "Status",
  //   width: 200,
  //   renderCell: (params) => {
  //     return (
  //       <div className={`cellWithStatus ${params.row.status}`}>
  //         {params.row.status}
  //       </div>
  //     );
  //   },
  // },
  {
    field: "phoneNumber",
    headerName: "Phone Number",
    width: 210,
  },
  {
    field: "cin",
    headerName: "Cin",
    width: 210,
  },
  
];

export const carColumns = [
  { field: "_id", headerName: "ID", width: 130 },
  {
    field: "name",
    headerName: "Name",
    width: 120,
  },
  {
    field: "edition",
    headerName: "Edition",
    width: 120,
  },
  {
    field: "horsepower",
    headerName: "Horse Power",
    width: 135,
    renderCell: (params) => {
      return <div className="cellWithImg">{params.row.horsepower} hp</div>;
    },
  },
  {
    field: "maxSpeed",
    headerName: "Max Speed",
    width: 135,
    renderCell: (params) => {
      return <div className="cellWithImg">{params.row.maxSpeed} km/h</div>;
    },
  },
  {
    field: "acceleration",
    headerName: "Acceleration",
    width: 135,
    renderCell: (params) => {
      return <div className="cellWithImg">{params.row.acceleration} s</div>;
    },
  },
];

// name,
//   category,
//   cattlebreed,
//   cattlegroup,
//   note,
//   image,
export const compteColumns = [
  {
    field: "image",
    headerName: "Farm",
    renderCell: (params) =>
    {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.image} alt="avatar" />
          {params.row.name.toUpperCase()}
        </div>
      );
    },
    width: 200,
  },
 
  { field: "name", headerName: "Name", width: 220 },
  {
    field: "category",
    headerName: "Category",
    width: 170,
  },
  {
    field: "cattlebreed",
    headerName: "Cattle Breed",
    width: 170,
  },
  {
    field: "cattlegroup",
    headerName: "Cattle Group",
    width: 170,
  },
  // {
  //   field: "status",
  //   headerName: "Status",
  //   width: 170,
  //   renderCell: (params) => {
  //     return (
  //       <div className={`cellWithStatus ${params.row.status}`}>
  //         {params.row.status}
  //       </div>
  //     );
  //   },
  // },
  // {
  //   // get the name of the client from the object id
  //   field: "idClient",
  //   headerName: "Client",
  //   width: 170,
  //   renderCell: (params) => {
  //     return <div className="cellWithImg">{params.row.idClient.fullName}</div>;
  //   },
  // },
  // {
  //   // get the name of the client from the object id
  //   field: "solde",
  //   headerName: "Solde",
  //   width: 170,
  //   renderCell: (params) =>
  //   {
  //     return <div className="cellWithImg">{params.row.idClient.solde}</div>;
  //   },
  // },
  // {
  //   // get the name of the client from the object id
  //   field: "type",
  //   headerName: "Type",
  //   width: 230,
  //   renderCell: (params) =>
  //   {
  //     return <div className="cellWithImg">{params.row.idClient.type}</div>;
  //   },
  // },
  // {
  //   field: "idCar",
  //   headerName: "Car",
  //   width: 170,
  //   renderCell: (params) => {
  //     return <div className="cellWithImg">{params.row.idCar.name} {params.row.idCar.edition} </div>;
  //   },
  // },
];
