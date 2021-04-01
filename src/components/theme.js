import {createMuiTheme} from '@material-ui/core';
import { grey } from '@material-ui/core/colors';

export const theme = createMuiTheme({
    palette: {
        primary: grey
    },
    typography: {
        fontFamily: 'Nunito Sans'
    },
    overrides: {
        MuiIconButton: {
            root: {
                color: "#FFFFFF"
            }
        }
    }
})