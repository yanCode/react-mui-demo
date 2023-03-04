import {FC} from "react";
import {
    Avatar,
    AvatarGroup,
    Box,
    Divider,
    ImageList,
    ImageListItem,
    List,
    ListItem,
    ListItemAvatar,
    ListItemText,
    Typography
} from "@mui/material";

const RightBar: FC = () => {
    return (<Box
        flex={2}
        p={2}

        sx={{display: {xs: "none", sm: 'block'}}}>
        <Box sx={{position: 'fixed'}}>
            <Typography variant='h6' fontWeight={100}>
                Online Friends
            </Typography>
            <AvatarGroup max={4}>
                <Avatar alt="Remy Sharp" src="https://mui.com/static/images/avatar/3.jpg"/>
                <Avatar alt="Travis Howard" src="https://mui.com/static/images/avatar/2.jpg"/>
                <Avatar alt="Cindy Baker" src="https://mui.com/static/images/avatar/1.jpg"/>
                <Avatar alt="Agnes Walker" src="https://mui.com/static/images/avatar/5.jpg"/>
                <Avatar alt="Trevor Henderson" src="https://mui.com/static/images/avatar/4.jpg"/>
            </AvatarGroup>
            <Typography variant='h6' fontWeight={100}>
                Latest Photos
            </Typography>
            <ImageList cols={3} rowHeight={100} gap={5}>
                <ImageListItem>
                    <img
                        src="https://material-ui.com/static/images/image-list/breakfast.jpg"
                        alt=""
                    />
                </ImageListItem>
                <ImageListItem>
                    <img
                        src="https://material-ui.com/static/images/image-list/burgers.jpg"
                        alt=""
                    />
                </ImageListItem>
                <ImageListItem>
                    <img
                        src="https://material-ui.com/static/images/image-list/camera.jpg"
                        alt=""
                    />
                </ImageListItem>
            </ImageList>
            <Typography variant='h6' fontWeight={100}>
                Recent Conversations
            </Typography>
            <List>
                <ListItem alignItems='flex-start'>
                    <ListItemAvatar>
                        <Avatar src='https://mui.com/static/images/avatar/1.jpg'/>
                    </ListItemAvatar>
                    <ListItemText
                        primary='Brunch this weekend?'
                        secondary={<>
                            <Typography
                                sx={{display: 'inline'}}
                                component='span'
                                variant='body2'
                                color='text.primary'
                            >
                                Ali Connors
                            </Typography>
                            — I'll be in your neighborhood doing errands this…
                        </>}
                    />
                </ListItem>
                <Divider variant='inset' component='li'/>
                <Divider variant="inset" component="li"/>
                <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                        <Avatar alt="Travis Howard" src="https://mui.com/static/images/avatar/2.jpg"/>
                    </ListItemAvatar>
                    <ListItemText
                        primary="Summer BBQ"
                        secondary={
                            <>
                                <Typography
                                    sx={{display: 'inline'}}
                                    component="span"
                                    variant="body2"
                                    color="text.primary"
                                >
                                    to Scott, Alex, Jennifer
                                </Typography>
                                {" — Wish I could come, but I'm out of town this…"}
                            </>
                        }
                    />
                </ListItem>
                <Divider variant="inset" component="li"/>
                <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                        <Avatar alt="Cindy Baker" src="https://mui.com/static/images/avatar/3.jpg"/>
                    </ListItemAvatar>
                    <ListItemText
                        primary="Oui Oui"
                        secondary={
                            <>
                                <Typography
                                    sx={{display: 'inline'}}
                                    component="span"
                                    variant="body2"
                                    color="text.primary"
                                >
                                    Sandra Adams
                                </Typography>
                                {' — Do you have Paris recommendations? Have you ever…'}
                            </>
                        }
                    />
                </ListItem>
            </List>
        </Box>
    </Box>)
}
export default RightBar