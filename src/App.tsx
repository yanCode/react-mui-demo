import React, { useState } from "react";
import "./App.css";
import { Feed, Navbar, RightBar, Sidebar } from "./components";
import { Box, createTheme, Stack, ThemeProvider } from "@mui/material";
import AddFeed from "./components/AddFeed";


function App() {

  const [mode, setMode] = useState(true);
  const darkTheme = createTheme({
    palette: {
      mode: mode ? "dark" : "light"
    }
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <Box bgcolor="background.default" color={"text.primary"}>
        {/*navbar*/}
        <Navbar />
        <Stack direction="row" spacing={2} justifyContent="space-between">
          <Sidebar setMode={setMode} mode={mode} />
          <Feed />
          <RightBar />
        </Stack>
        <AddFeed />
      </Box>
    </ThemeProvider>

  );
}

export default App;
