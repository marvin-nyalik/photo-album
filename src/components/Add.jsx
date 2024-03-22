import { Avatar, Box, Button, ButtonGroup, Fab, Modal, Stack, TextField, Tooltip, Typography, styled } from '@mui/material'
import React from 'react'
import { Add as AddIcon, DateRange, EmojiEmotions, Image, PersonAdd, VideoCameraBack } from '@mui/icons-material'
import { useState } from 'react';

const StyledModal = styled(Modal)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
})

const UserBox = styled(Box)({
  display: 'flex',
  justifyContent: 'start',
  padding: 10,
  gap:"10px"
})

const Add = () => {
  const [open, setOpen] = useState(false)
  return (
    <>
      <Tooltip onClick={e=>setOpen(true)}
      title="Add Post" sx={{ position:"fixed", bottom:20, left: {xs:'calc(50% - 25px)', md:30}}}>
        <Fab color='primary' aria-label='add'>
          <AddIcon />
        </Fab>
      </Tooltip>

      <StyledModal
        open={open}
        onClose={e=>setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        >
        <Box width={400} height={280} borderRadius={5} bgcolor={"background.default"} color="text.primary" p={4}>
            <Typography variant="h6" component="h2" color="gray" textAlign="center">
              Add Post
            </Typography>
            <UserBox>
              <Avatar alt="Remy Sharp" src="https://images.pexels.com/photos/1310522/pexels-photo-1310522.jpeg?auto=compress&cs=tinysrgb&w=600" />
              <Typography variant="h6" component="span" fontWeight={100}>
                Marvin Otieno
              </Typography>
            </UserBox>
            <TextField
                sx={{ width: '90%', margin: '0 4%'}}
                id="standard-multiline-static"
                label="Add Post Text"
                multiline
                rows={2}
                placeholder="What's on your mind..."
                variant="standard"
            />
            <Stack direction="row" gap={1} mt={2} mb={3} p={2}>
              <EmojiEmotions color='primary'/>
              <Image color='secondary'/>
              <VideoCameraBack color='success'/>
              <PersonAdd color='error'/>
            </Stack>

            <ButtonGroup 
              fullWidth 
              variant='contained' 
              mb={2} 
              aria-label='outlined primary button group'
            >
              <Button>Post</Button>
              <Button sx={{ width: "100px"}}><DateRange/></Button>
            </ButtonGroup>
        </Box>
      </StyledModal>
    </>
  )
}

export default Add
