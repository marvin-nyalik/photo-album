import Feed from "./components/Feed";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Rightbar from "./components/Rightbar";
import { Box, Stack, ThemeProvider, createTheme } from "@mui/material";
import Add from "./components/Add";
import { useState } from "react";
import Footer from "./components/Footer";

function App() {
  const [mode, setMode] = useState("light")
  const theme = createTheme({
    palette: {
      mode: mode
    }
  })
  return (
    <ThemeProvider theme={theme}>
    <Box bgcolor={"background.default"} color="text.primary">
      <Navbar/>
      <Stack direction="row">
        <Sidebar mode={mode} setMode={setMode}/>
        <Feed/>
        <Rightbar/>
      </Stack>
      <Add />
    </Box>
    </ThemeProvider>
  )
}

export default App;
