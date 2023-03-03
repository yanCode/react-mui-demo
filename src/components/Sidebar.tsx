import {FC} from "react";
import {Box} from "@mui/material";

const Sidebar: FC = () => {
    return (<Box
        flex={1}
        p={2}
        sx={{display: {xs: "none", sm: 'inline'}}}
        bgcolor='deepskyblue'>
        Sidebar
    </Box>)
}
export default Sidebar