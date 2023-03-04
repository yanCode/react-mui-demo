import {FC} from "react";
import {IconButton, Tooltip} from "@mui/material";
import {AddBoxRounded} from "@mui/icons-material";

const AddFeed: FC = () => {
    return (
        <Tooltip title="add Feed">
            <IconButton>
                <AddBoxRounded/>
            </IconButton>
        </Tooltip>
    )
}

export default AddFeed