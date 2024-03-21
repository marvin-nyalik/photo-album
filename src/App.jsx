import Feed from "./components/Feed";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Rightbar from "./components/Rightbar";
import { Box, Stack } from "@mui/material";

function App() {
  return (
    <Box>
      <Navbar/>
      <Stack direction="row">
        <Sidebar/>
        <Feed/>
        <Rightbar/>
      </Stack>
    </Box>
  )
}

export default App;
