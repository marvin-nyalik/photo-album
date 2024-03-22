import { CameraAlt } from '@mui/icons-material'
import { AppBar, Toolbar, Typography, styled, Badge, InputBase, Avatar, Menu, MenuItem, Snackbar, Alert } from '@mui/material'
import React from 'react'
import { useState } from 'react';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
})

const Search = styled("div") (({ theme }) => ({
  background: "white",
  padding: "0 10px",
  borderRadius: theme.shape.borderRadius,
  width: "40%"
}))

const Icons = styled("div") (({ theme }) => ({
  display: "none", 
  gap: "20px",
  alignItems: "center",
  [theme.breakpoints.up("sm")]: {
    display: "flex"
  }
}))

const UserBox = styled("div") (({ theme }) => ({
  display: "flex", 
  gap: "10px",
  cursor: "pointer",
  alignItems: "center",
  [theme.breakpoints.up("sm")]: {
    display: "none"
  }
}))

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [openAlert, setOpenAlert] = useState(false);

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpenAlert(false);
  };

  return (
    <AppBar position='sticky'>
      <StyledToolbar>
        <Typography variant="h4" 
          sx={{ display: {xs:'none', md:'block'}}}
        >
          Photos
        </Typography>
        <CameraAlt  sx={{ display: {xs:'block', md:'none'}}}/>
        <Search> <InputBase placeholder='search...'/></Search>
        <Icons sx={{ cursor: "pointer"}}>
          <Badge badgeContent={4} color="error">
            <MailIcon/>
          </Badge>
          <Badge badgeContent={2} color="error">
            <NotificationsIcon onClick={e=>setOpenAlert(true)}/>
          </Badge>

          <Avatar sx={{ width:30, height: 30}}
            onClick={e=>setOpen(true)}
            src="https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=600"
          />
        </Icons>
        <UserBox onClick={e=>setOpen(true)}>
        <Avatar sx={{ width:30, height: 30}}
            src="https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=600"
          />
        <Typography variant='span'>Marvin</Typography>
        </UserBox>
      </StyledToolbar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={e => setOpen(false)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
      <Snackbar open={openAlert} anchorOrigin={{ vertical:"top", horizontal:"right"}} autoHideDuration={5000} onClose={handleClose}>
        <Alert
          onClose={handleClose}
          severity="success"
          variant="filled"
          sx={{ width: '100%' }}
        >
          You have 2 new Notifications
        </Alert>
      </Snackbar>
    </AppBar>
  )
}

export default Navbar
