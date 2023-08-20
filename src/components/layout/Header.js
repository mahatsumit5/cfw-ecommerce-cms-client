import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Button, Form, Row } from "react-bootstrap";
import { FiMenu } from "react-icons/fi";
import { setCanvasShow } from "../../systemSlice";
import { SearchBar } from "../searchBar/SearchBar";
import PersonIcon from "@mui/icons-material/Person";
import NotificationImportantIcon from "@mui/icons-material/NotificationImportant";
import LocalPostOfficeIcon from "@mui/icons-material/LocalPostOffice";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import PersonAdd from "@mui/icons-material/PersonAdd";
import Settings from "@mui/icons-material/Settings";
import Logout from "@mui/icons-material/Logout";
import { logoutUser } from "../../axiosHelper/userAxios";
import { setUser } from "../../redux/userSlice";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { DesktopMenu } from "../menu/DesktopMenu";
import { MobileMenu } from "../menu/MobileMenu";
export const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const { user } = useSelector((state) => state.userInfo);
  return (
    <Navbar className="px-5 mt-2 d-flex header shadow justify-content-between  ">
      <div className="d-flex w-100 flex-fill  px-5 ">
        <Link to="/" className="navbar-brand">
          <h2> CFW</h2>
        </Link>
        <div className=" ms-5 w-50  ">
          <SearchBar />
        </div>
      </div>

      {user?._id && (
        <>
          <div className="d-sm-none d-block">
            <IconButton
              aria-label="more"
              id="long-button"
              aria-controls={open ? "long-menu" : undefined}
              aria-expanded={open ? "true" : undefined}
              aria-haspopup="true"
              onClick={handleClick}
            >
              <MoreVertIcon />
            </IconButton>
            <MobileMenu
              anchorEl={anchorEl}
              handleClose={handleClose}
              open={open}
              handleClick={handleClick}
            />
          </div>
          <div className=" d-none d-sm-flex gap-3  p-2  rounded">
            <DesktopMenu />
          </div>
        </>
      )}
    </Navbar>
  );
};
