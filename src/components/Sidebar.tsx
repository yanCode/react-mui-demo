import {Dispatch, FC, SetStateAction} from "react";
import {Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Switch} from "@mui/material";
import {AccountBox, Article, DarkMode, Group, Home, Person, Settings, Storefront} from "@mui/icons-material";

const Sidebar: FC<{setMode: Dispatch<SetStateAction<boolean>>, mode:boolean}> = ({setMode, mode}) => {
    return (<Box
        flex={'0 0 15%'}
        p={2}
        sx={{display: {xs: "none", sm: 'block'}}}
    >
        <Box position='fixed'>
            <List>
                <ListItem disablePadding>
                    <ListItemButton component="a" href="#home">
                        <ListItemIcon>
                            <Home/>
                        </ListItemIcon>
                        <ListItemText primary="Homepage"/>
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton component="a" href="#simple-list">
                        <ListItemIcon>
                            <Article/>
                        </ListItemIcon>
                        <ListItemText primary="Pages"/>
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton component="a" href="#simple-list">
                        <ListItemIcon>
                            <Group/>
                        </ListItemIcon>
                        <ListItemText primary="Groups"/>
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton component="a" href="#simple-list">
                        <ListItemIcon>
                            <Storefront/>
                        </ListItemIcon>
                        <ListItemText primary="Marketplace"/>
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton component="a" href="#simple-list">
                        <ListItemIcon>
                            <Person/>
                        </ListItemIcon>
                        <ListItemText primary="Friends"/>
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton component="a" href="#simple-list">
                        <ListItemIcon>
                            <Settings/>
                        </ListItemIcon>
                        <ListItemText primary="Settings"/>
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton component="a" href="#simple-list">
                        <ListItemIcon>
                            <AccountBox/>
                        </ListItemIcon>
                        <ListItemText primary="Profile"/>
                    </ListItemButton>
                </ListItem>
                {/*dark mode switch*/}
                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemIcon>
                            <DarkMode/>
                        </ListItemIcon>
                        <Switch onChange={()=>setMode(!mode)}/>
                    </ListItemButton>
                </ListItem>
            </List>
        </Box>
    </Box>)
}
export default Sidebar