import "./navBar.scss";
import { Link } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import AppsIcon from "@mui/icons-material/Apps";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import PersonIcon from "@mui/icons-material/Person";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { DarkModeContext } from "../../context/DarkModeContextProvider";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContextProvider";
const NavBar = ({theme,changeTheme}) => {
  const {darkMode,toggle} = useContext(DarkModeContext);
  const {currentUser} = useContext(AuthContext);
  return (
    <div className="navBar">
      <div className="left">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span>Smedia</span>
        </Link>
        <HomeIcon />
        <div className="btn" onClick={toggle}>
         {darkMode ? <DarkModeIcon/> : <WbSunnyIcon/>}
        </div>
        <AppsIcon />
        <div className="search">
          <SearchOutlinedIcon />
          <input type="text" placeholder="Search.." />
        </div>
      </div>
      <div className="right">
        <PersonIcon/>
        <MailIcon/>
        <NotificationsIcon/>
        <div className="user">
          <img src={currentUser.profilePic} alt="IMG" />
          <span>{currentUser.name}</span>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
