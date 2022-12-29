import React from "react";
import DashboardRoundedIcon from "@mui/icons-material/DashboardRounded";
import "../components/ItemSidebar.css";

const ItemSidebar = () => {
  return (
    <div className="item">
      <div className="icon">
        <DashboardRoundedIcon />
      </div>
      <span>Dashbord</span>
    </div>
  );
};

export default ItemSidebar;
