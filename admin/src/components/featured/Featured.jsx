import "./featured.scss";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";

const Featured = ({ solde }) => {
  return (
    <div className="featured">
      <div className="top">
        <h1 className="title">Total Revenue Of Farms</h1>
        <MoreVertIcon fontSize="small" />
      </div>
      <div className="bottom">
        <div className="featuredChart">
          <CircularProgressbar value={70} text={"70%"} strokeWidth={5} />
        </div>
        <p className="title">Total Milk Production</p>
        <p className="amount">$420</p>
        <p className="desc">
          <KeyboardArrowUpOutlinedIcon className="up" />  
          10% than last month

        </p>
       
      </div>
    </div>
  );
};

export default Featured;
