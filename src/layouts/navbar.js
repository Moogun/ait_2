import React from "react";
import { useNavigate } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";

const Navbar = ({ user, onHome, onLogin, onSignup }) => {

  const navigate = useNavigate();

  return (
    <AppBar position="static">
      <Toolbar>
        {/* App Title */}
        <Typography variant="h6" sx={{ flexGrow: 1 }}
         onClick={onHome}
        >
          Chat App
        </Typography>

        {/* Right Side - User or Auth Buttons */}
        <Box>
          {user ? (
            <Typography variant="body1" sx={{ marginRight: 2 }}>
              Welcome, {user.name}
            </Typography>
          ) : (
            <>
              <Button color="inherit" onClick={onLogin} >
                Login
              </Button>
              <Button color="inherit" onClick={onSignup}>
                Signup
              </Button>
            </>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
