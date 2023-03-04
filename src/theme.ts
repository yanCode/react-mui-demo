import {createTheme} from "@mui/material";
import {orange} from "@mui/material/colors";


export const theme = createTheme({
    palette: {
        primary: {
            main: orange[400],
            light: '#fff',
            dark: '#000'
        }
    }
})