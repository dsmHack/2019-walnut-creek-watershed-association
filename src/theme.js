import { createMuiTheme } from "@material-ui/core/styles";
import blue from "@material-ui/core/colors/blue";

const AppTheme = createMuiTheme({
    palette: {
        primary: blue,
        secondary: {
            main: "#84ffff"
        }
    },
    typography: {
        useNextVariants: true
    }
});

export default AppTheme;