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
const NavBar = () => {
  return (
    <div className="navBar">
      <div className="left">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span>Smedia</span>
        </Link>
        <HomeIcon />
        <DarkModeIcon />
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
          <img src="https://images.pexels.com/photos/13865998/pexels-photo-13865998.jpeg?cs=srgb&dl=pexels-c%C3%A9line-13865998.jpg&fm=jpg&_gl=1*8i3zrl*_ga*MjkzMDgzMzIzLjE2NjczMTcxOTE.*_ga_8JE65Q40S6*MTY2NzQ3NzQ5MC4zLjEuMTY2NzQ3NzQ5NC4wLjAuMA.." alt="IMG" />
          <span>Ashu</span>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
