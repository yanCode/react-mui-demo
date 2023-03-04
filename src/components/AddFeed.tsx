import React, { FC, useState } from "react";
import {
  Avatar,
  Box,
  Button,
  Fab,
  IconButton,
  Modal,
  Stack,
  styled,
  TextField,
  Tooltip,
  Typography
} from "@mui/material";
import { Add, DateRange, EmojiEmotions, Image, PersonAdd, VideoCameraBack } from "@mui/icons-material";
import { UserWrapper } from "./Navbar";

const StyledModal = styled(Modal)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
}));
const AddFeed: FC = () => {
  const [modalOPen, setModalOPen] = useState(false);
  return (
    <>
      <Tooltip title="add Feed">
        <Fab
          color="secondary"
          sx={{
            position: "fixed",
            bottom: "1.4rem",
            left: {
              xs: "calc(50% - 25px)",
              md: 30

            }
          }}
          onClick={() => {
            setModalOPen(true);
          }}
        >
          <Add />
        </Fab>
      </Tooltip>
      <StyledModal open={modalOPen} onClose={() => setModalOPen(false)}>
        <Box width={400} maxHeight={600} borderRadius={4} p={3} bgcolor="background.default"
             color={"text.primary"}>
          <Typography variant="h6" color="gray" textAlign="center">Create Post</Typography>
          <UserWrapper>
            <IconButton>

              <Avatar sx={{
                width: "1.8rem",
                height: "1.8rem"
              }} alt="Cindy Baker" src="https://mui.com/static/images/avatar/3.jpg" />

            </IconButton>
            <Typography>Jon</Typography>
          </UserWrapper>
          <TextField
            sx={{ mt: "1rem" }}
            rows={3}
            multiline
            fullWidth
            variant="standard"
            placeholder="what's on your mind?"
          />
          <Stack direction="row" marginY={".5rem"} gap={.1}>
            <IconButton><EmojiEmotions color="secondary" /></IconButton>
            <IconButton><Image color="error" /></IconButton>
            <IconButton><VideoCameraBack color="primary" /></IconButton>
            <IconButton> <PersonAdd color="success" /></IconButton>
          </Stack>
          <Button
            variant={"contained"}
            fullWidth
            endIcon={<DateRange />}
          >Post</Button>

        </Box>
      </StyledModal>
    </>

  );
};

export default AddFeed;