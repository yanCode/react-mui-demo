import {FC} from "react";
import {Box} from "@mui/material";

const RightBar: FC = () => {
    return (<Box
        flex={2}
        p={2}
        bgcolor='gold'
        sx={{display: {xs: "none", sm: 'inline'}}}>Right bar</Box>)
}
export default RightBar