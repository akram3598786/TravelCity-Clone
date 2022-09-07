import * as React from 'react';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import "./drawer.scss";

import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logOut } from "../../Store/Action";
import { useAuth0 } from "@auth0/auth0-react";


export default function PopoverSignOut() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const { user, isAuthenticated, loginWithRedirect, logout } = useAuth0();
  
  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  const userName = useSelector((state) => state.userName);
  const dispatch = useDispatch();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  


  // console.log(userName);

  const handleSignOut = () => {
    dispatch(logOut());
  }


  return (
    <div>
      <div className="userNameDiv" id="popoverid1" aria-describedby={id} variant="contained" onClick={handleClick}>
      <h3 style={{ "color": "orange" }}>{user.name} </h3><i className="fa fa-angle-down" style={{ "font-size": "24px" }}></i>
      </div>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}

      >
        <div id="signinPopover">
          <div id="userProfile">
            <h2>{user.name}</h2>
            <p style={{"color":"blue"}}>Account</p>
            <p>List of favorites</p>
            <p>Feedback</p>
            <hr />
            <br />
          <h4 onClick={() => logout({ returnTo: window.location.origin })}>
          Log Out
        </h4>
        <br/>
          </div>
        </div>
      </Popover>
    </div>
  );

}

