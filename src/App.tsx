import React from 'react';
import './App.css';
import {Feed, Navbar, RightBar, Sidebar} from "./components";
import {Box, Stack} from "@mui/material";
import AddFeed from "./components/AddFeed";


function App() {
    return (
        <Box>
            {/*navbar*/}
            <Navbar/>
            <Stack direction='row' spacing={2} justifyContent='space-between'>
                <Sidebar/>
                <Feed/>
                <RightBar/>
            </Stack>
            <AddFeed/>
        </Box>
    )
}

export default App;
