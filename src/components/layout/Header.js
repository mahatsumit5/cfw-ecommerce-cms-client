import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Button, Form, Row } from "react-bootstrap";
import { FiMenu } from "react-icons/fi";
import { CgProfile } from "react-icons/cg";
import { BiSolidLogIn } from "react-icons/bi";
import { setCanvasShow } from "../../systemSlice";
import { SearchBar } from "../searchBar/SearchBar";
import PersonIcon from "@mui/icons-material/Person";
import NotificationImportantIcon from "@mui/icons-material/NotificationImportant";
import LocalPostOfficeIcon from "@mui/icons-material/LocalPostOffice";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";
import PersonAdd from "@mui/icons-material/PersonAdd";
import Settings from "@mui/icons-material/Settings";
import Logout from "@mui/icons-material/Logout";

export const Header = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.userInfo);
  return (
    <Navbar className="px-5 d-flex header shadow justify-content-between w-100 ">
      <div className="d-flex  ">
        <Button
          variant=""
          onClick={() => dispatch(setCanvasShow(true))}
          className="me-2  "
        >
          <FiMenu />
        </Button>
        <Link to="/" className="navbar-brand">
          <h2> CFW</h2>
        </Link>
        <div className=" flex-fill ms-5   rounded">
          <SearchBar />
        </div>
      </div>

      {user?._id && (
        <div className="d-flex gap-3  p-2  rounded">
          <Link to="" className=" d-flex nav-link gap-2">
            <IconButton>
              {" "}
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
            </IconButton>
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
                <Link to="/profile" className="nav-link">
                  <Avatar /> Profile
                </Link>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <Avatar /> My account
              </MenuItem>
              <Divider />
              <MenuItem onClick={handleClose}>
                <ListItemIcon>
                  <PersonAdd fontSize="small" />
                </ListItemIcon>
                Add another account
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <ListItemIcon>
                  <Settings fontSize="small" />
                </ListItemIcon>
                Settings
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <ListItemIcon>
                  <Logout fontSize="small" />
                </ListItemIcon>
                Logout
              </MenuItem>
            </Menu>{" "}
          </Link>
        </div>
      )}
    </Navbar>
  );
};
