import React from 'react'
import Post from './Posts';
import { Avatar, Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography, styled } from '@mui/material';
import { Dashboard, Home, LocationCity, Phone } from '@mui/icons-material';

const FooterBox = styled(Box)({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  gap: "10px"
})

const Feed = () => {
  return (
    <Box flex={4}>
      <Post/>
      <Post/>
      <Post/>
      <Post/>
      <Post/>
      <Post/>
      <FooterBox>
        <Box flex={1} mt={5} mb={5}>
          <Typography variant='p' fontWeight={200}>
            <Avatar 
            src="https://images.pexels.com/photos/3225517/pexels-photo-3225517.jpeg?auto=compress&cs=tinysrgb&w=600"></Avatar>
            Alleagy Vegas Marvin
          </Typography>
          <Typography variant='h6' fontWeight={200}>
            P.O Box 1335, Kisumu
          </Typography>
          <Typography variant='p' fontWeight={100}>
            ceo@alleagy.co.kr
          </Typography>
        </Box>
        <Box flex={1}>
        <List>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#">
              <ListItemIcon>
                <Phone />
              </ListItemIcon>
              <ListItemText primary="0743904791" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton component="a" href="#">
              <ListItemIcon>
                <LocationCity />
              </ListItemIcon>
              <ListItemText primary="Location" />
            </ListItemButton>
          </ListItem>
          </List>
        </Box>
        <Box flex={1}>
          Real Madrid
        </Box>
      </FooterBox>
    </Box>
  )
}

export default Feed
