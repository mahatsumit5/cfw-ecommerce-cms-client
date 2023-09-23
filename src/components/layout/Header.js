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
import { Box } from "@mui/material";
export const Header = () => {
  const { canvasShow } = useSelector((state) => state.system);

  const dispatch = useDispatch();
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
    <Navbar className="px-2 d-flex w-100 header shadow justify-content-between  ">
      <Box sx={{ display: { xs: "block", sm: "none" } }}>
        <Button
          variant=""
          onClick={() => dispatch(setCanvasShow(!canvasShow))}
          style={{ border: "none" }}
        >
          <FiMenu color="#111a49" />
        </Button>
      </Box>
      <Link to="/" className="navbar-brand">
        <h2> CFW</h2>
      </Link>
      <Box sx={{ display: "flex" }}>
        <SearchBar />
      </Box>

      {user?._id && (
        <>
          <Box sx={{ display: { xs: "block", sm: "none" } }}>
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
          </Box>
          <Box sx={{ display: { xs: "none", sm: "flex", md: "flex" } }}>
            <DesktopMenu />
          </Box>
        </>
      )}
    </Navbar>
  );
};
