import "./App.css";
import TocRoundedIcon from "@mui/icons-material/TocRounded";
import ItemSidebar from "./components/ItemSidebar";

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
            <div className="group">
              <h3>ANALYTICS</h3>
              <ItemSidebar />
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
