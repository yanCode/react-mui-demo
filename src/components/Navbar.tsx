import {
    AppBar,
    Avatar,
    Badge,
    Box,
    IconButton,
    InputBase,
    Menu,
    MenuItem,
    styled,
    Toolbar,
    Tooltip,
    Typography
} from "@mui/material";
import React, {FC, useState} from "react";
import {Attractions, MailOutline, NotificationsOutlined,  SearchRounded} from "@mui/icons-material";

const StyledToobar = styled(Toolbar)({
    display: 'flex',
    justifyContent: 'space-between'
})

const SearchWrapper = styled('div')(({theme}) => ({
    display: 'flex',
    backgroundColor: theme.palette.background.paper,
    // padding: '0 .5rem',
    text: theme.palette.text.secondary,
    paddingLeft: '1rem',
    borderRadius: theme.shape.borderRadius,
    width: '40%',

}))

const IconWrapper = styled(Box)(({theme}) => ({
    display: 'none',
    alignItems: 'center',
    gap: 20,
    [theme.breakpoints.up('sm')]: {display: 'flex'}
}))

export const UserWrapper = styled(Box)(({theme}) => ({
    display: 'flex',
    alignItems: 'center',
    gap: '.1rem'
}))
const Navbar: FC = () => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const dropdownOpen = !!anchorEl
    const handleClick = (e: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(e.currentTarget)
    }
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (<AppBar position='sticky'>
        <StyledToobar>
            <Typography
                variant='h6'
                sx={{
                    display: {xs: 'none', sm: 'block'},
                    fontSize: {xl: '1.5rem'}
                }}
            >
                Navbar
            </Typography>
            <Attractions
                sx={{
                    display: {xs: 'block', sm: 'none'}
                }}/>
            <SearchWrapper>
                <InputBase placeholder="Search.." sx={{flex: 1}}/>
                <IconButton>
                    <SearchRounded/>
                </IconButton>
            </SearchWrapper>
            <IconWrapper>
                <Badge badgeContent={2} color="error">
                    <NotificationsOutlined color="action"/>
                </Badge>
                <Badge badgeContent={4} color="error">
                    <MailOutline color="action"/>
                </Badge>

            </IconWrapper>

            <UserWrapper>
                <IconButton onClick={handleClick}>
                    <Tooltip title='Account Settings'>
                        <Avatar sx={{
                            width: '1.8rem',
                            height: '1.8rem'
                        }} alt="Cindy Baker" src="https://mui.com/static/images/avatar/3.jpg"/>
                    </Tooltip>
                </IconButton>
                <Typography>Jon</Typography>
            </UserWrapper>

        </StyledToobar>
        <Menu
            id="demo-positioned-menu"
            aria-labelledby="demo-positioned-button"
            anchorEl={anchorEl}
            open={dropdownOpen}
            onClose={handleClose}
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'center',
            }}
            transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
            }}
        >
            <MenuItem onClick={handleClose}>Profile</MenuItem>
            <MenuItem onClick={handleClose}>My account</MenuItem>
            <MenuItem onClick={handleClose}>Logout</MenuItem>
        </Menu>

    </AppBar>)
}
export default Navbar