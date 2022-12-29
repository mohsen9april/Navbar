import "./App.css";
import TocRoundedIcon from "@mui/icons-material/TocRounded";
import ItemSidebar from "./components/ItemSidebar";
import DashboardRoundedIcon from "@mui/icons-material/DashboardRounded";
import BarChartRoundedIcon from "@mui/icons-material/BarChartRounded";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import AssignmentTurnedInRoundedIcon from "@mui/icons-material/AssignmentTurnedInRounded";
import AttachMoneyRoundedIcon from "@mui/icons-material/AttachMoneyRounded";
import ColorLensRoundedIcon from "@mui/icons-material/ColorLensRounded";
import SettingsRemoteRoundedIcon from "@mui/icons-material/SettingsRemoteRounded";

function App() {
  return (
    <div className="App">
      <div className="sidebar_container">
        <div className="sidebar">
          {/* lines_icon */}
          <div className="lines_icon">
            <TocRoundedIcon />
          </div>
          {/* profile */}
          <div className="profile">
            <img
              src="https://img.freepik.com/free-vector/mysterious-mafia-man-smoking-cigarette_52683-34828.jpg?w=1380&t=st=1672326453~exp=1672327053~hmac=5bfb589c4e6c4d1bb9d9126679ee77e7e5c1067b67b96f3e402a3ed1345d017b"
              alt="profile_img"
            />
          </div>
          {/* Groups */}
          <div className="groups">
            {/* Group 1  */}
            <div className="group">
              <h3>ANALYTICS</h3>
              <ItemSidebar icon={<DashboardRoundedIcon />} name="Dashbord" />
              <ItemSidebar icon={<BarChartRoundedIcon />} name="Performance" />
            </div>

            {/* Group 2  */}
            <div className="group">
              <h3>CONTENT</h3>
              <ItemSidebar icon={<AttachMoneyRoundedIcon />} name="Sales" />
              <ItemSidebar icon={<AssignmentTurnedInRoundedIcon />} name="Checklist" />
              <ItemSidebar icon={<AccountCircleRoundedIcon />} name="Costumers" />
            </div>

            {/* Group 3  */}
            <div className="group">
              <h3>COSTOMIZATION</h3>
              <ItemSidebar icon={<SettingsRemoteRoundedIcon />} name="Segments" />
              <ItemSidebar icon={<ColorLensRoundedIcon />} name="Themes" />
            </div>
          </div>
        </div>
      </div>

      <div className="body_container">
        <h2>Body</h2>
        <hr />
        <h2>Body</h2>
        <hr />
        <h2>Body</h2>
        <hr />
        <h2>Body</h2>
        <hr />
        <h2>Body</h2>
        <hr />
        <h2>Body</h2>
        <hr />
      </div>
    </div>
  );
}

export default App;
