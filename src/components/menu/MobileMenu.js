import { IconButton, Menu, MenuItem } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import PersonIcon from "@mui/icons-material/Person";
import NotificationImportantIcon from "@mui/icons-material/NotificationImportant";
import LocalPostOfficeIcon from "@mui/icons-material/LocalPostOffice";
export const MobileMenu = ({ anchorEl, open, handleClose, handleClick }) => {
  return (
    <div>
      <Menu
        anchorEl={anchorEl}
        id="long-menu"
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
        <MenuItem>
          <Link to="" className=" d-flex nav-link gap-2">
            <IconButton>
              <LocalPostOfficeIcon color="primary" />
            </IconButton>
            <p>Messages</p>
          </Link>
        </MenuItem>
        <MenuItem>
          <Link to="" className=" d-flex nav-link gap-2">
            <IconButton>
              <NotificationImportantIcon color="primary" />
            </IconButton>{" "}
            <p>Notfication</p>
          </Link>
        </MenuItem>
        <MenuItem>
          {" "}
          <Link className=" d-flex nav-link gap-2">
            <IconButton
              onClick={handleClick}
              aria-controls={open ? "account-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
            >
              <PersonIcon color="primary" />
            </IconButton>
            <p>Profile</p>
          </Link>
        </MenuItem>
      </Menu>
    </div>
  );
};
