import "./widget.scss";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import TimeToLeaveIcon from '@mui/icons-material/TimeToLeave';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import AgricultureIcon from '@mui/icons-material/Agriculture';


const Widget = ({ type,amount }) => {
  let data;

  //temporary
  
  const diff = 20;

  switch (type) {
    case "user":
      data = {
        title: "CLIENTS",
        isMoney: false,
        link: "See all users",
        icon: (
          <PersonOutlinedIcon
            className="icon"
            style={{
              color: "crimson",
              backgroundColor: "rgba(255, 0, 0, 0.2)",
              width: "100%",
              
            }}
          />
        ),
      };
      break;
    case "compte":
      data = {
        title: "FARMS",
        isMoney: false,
        link: "View all comptes",
        icon: (
          <HomeOutlinedIcon
            className="icon"
            style={{
              backgroundColor: "rgba(218, 165, 32, 0.2)",
              color: "goldenrod",
              width: "100%",
            }}
          />
        ),
      };
      break;

    case "solde":
      data = {
      title: "CATTLE",
        isMoney: true,
        link: "See details",
        icon: (
          <AgricultureIcon
            className="icon"
            style={{
              backgroundColor: "rgba(128, 0, 128, 0.2)",
              color: "purple",
              width: "100%",
            }}
          />
        ),
      };
      break;
    default:
      break;
  }

  return (
    <div className="widget">
      <div className="left">
        <span className="title">
          {data.title}
        </span>
        <span className="counter">
          {data.isMoney} {amount}
        </span>
        <span className="link">{data.link}</span>
      </div>
      <div className="right">
        {data.icon}
      </div>
    </div>
  );
};

export default Widget;
