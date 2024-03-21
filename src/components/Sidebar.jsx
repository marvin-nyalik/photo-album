import React from 'react'
import { Box } from '@mui/material'

const Sidebar = () => {
  return (
    <Box 
      flex={1} 
      sx={{ display:{ xs: "none", md: "block"} }}>
      Sidebar
    </Box>
  )
}

export default Sidebar
