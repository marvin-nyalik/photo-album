import { CameraAlt } from '@mui/icons-material'
import { AppBar, Toolbar, Typography, styled, Badge, InputBase, Avatar } from '@mui/material'
import React from 'react'
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
    alignItems: "center",
    [theme.breakpoints.up("sm")]: {
      display: "none"
    }
}))

const Navbar = () => {
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
        <Icons>
          <Badge badgeContent={4} color="error">
            <MailIcon/>
          </Badge>
          <Badge badgeContent={2} color="error">
            <NotificationsIcon/>
          </Badge>

          <Avatar sx={{ width:30, height: 30}}
            src="https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=600"
          />
        </Icons>
        <UserBox>
        <Avatar sx={{ width:30, height: 30}}
            src="https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=600"
          />
        <Typography variant='span'>Marvin</Typography>
        </UserBox>
      </StyledToolbar>
    </AppBar>
  )
}

export default Navbar
