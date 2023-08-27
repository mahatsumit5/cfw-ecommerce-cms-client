import React, { useState } from "react";
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
import { Link, useNavigate } from "react-router-dom";
import { logoutUser } from "../../axiosHelper/userAxios";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../../redux/userSlice";
export const DesktopMenu = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.userInfo);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleOnSignOut = () => {
    logoutUser(user._id);
    localStorage.removeItem("refreshJWT");
    sessionStorage.removeItem("accessJWT");
    dispatch(setUser({}));
    navigate("/");
  };

  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      id="account-menu"
      open={open}
      onClose={handleClose}
      onClick={handleClose}
      PaperProps={{
        elevation: 0,
        sx: {
          overflow: "visible",
          filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
          mt: 1.5,
          "& .MuiAvatar-root": {
            width: 32,
            height: 32,
            ml: -0.5,
            mr: 1,
          },
          "&:before": {
            content: '""',
            display: "block",
            position: "absolute",
            top: 0,
            right: 14,
            width: 10,
            height: 10,
            bgcolor: "background.paper",
            transform: "translateY(-50%) rotate(45deg)",
            zIndex: 0,
          },
        },
      }}
      transformOrigin={{ horizontal: "right", vertical: "top" }}
      anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
    >
      <MenuItem onClick={handleClose}>
        <Link to="/profile" className="nav-link d-flex">
          <Avatar /> Profile
        </Link>
      </MenuItem>

      <MenuItem onClick={handleClose}>
        <Link className="nav-link d-flex" to="/new-admin">
          <ListItemIcon>
            <PersonAdd fontSize="small" />
          </ListItemIcon>
          Add another account
        </Link>
      </MenuItem>
      <MenuItem onClick={handleClose}>
        <ListItemIcon>
          <Settings fontSize="small" />
        </ListItemIcon>
        Settings
      </MenuItem>
      <MenuItem onClick={(handleClose, handleOnSignOut)}>
        <ListItemIcon>
          <Logout fontSize="small" />
        </ListItemIcon>
        Logout
      </MenuItem>
    </Menu>
  );

  return (
    <>
      <Link to="" className=" d-flex nav-link gap-2">
        <IconButton>
          <LocalPostOfficeIcon color="primary" />
        </IconButton>
      </Link>
      <Link to="" className=" d-flex nav-link gap-2">
        <IconButton>
          <NotificationImportantIcon color="primary" />
        </IconButton>
      </Link>
      <Link className=" d-flex nav-link gap-2">
        <IconButton
          onClick={handleClick}
          size="small"
          sx={{ ml: 2 }}
          aria-controls={open ? "account-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
        >
          <PersonIcon color="primary" />
        </IconButton>{" "}
      </Link>
      {renderMenu}
    </>
  );
};
