import React from 'react'
import Post from './Posts';
import { Box } from '@mui/material';

const Feed = () => {
  return (
    <Box flex={4}>
      <Post/>
      <Post/>
      <Post/>
      <Post/>
      <Post/>
      <Post/>
    </Box>
  )
}

export default Feed
