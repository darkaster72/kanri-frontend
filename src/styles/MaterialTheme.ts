import { createTheme } from "@mui/material/styles";
import { colors } from "../styles/variables";

export const MaterialTheme = createTheme({
  shape: { borderRadius: 8 },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "capitalize",
          fontSize: "1rem",
        },
      },
    },
  },
  palette: {
    primary: {
      main: colors.primary.DEFAULT,
    },
    secondary: {
      light: colors.secondary.light,
      main: colors.secondary.DEFAULT,
      dark: colors.secondary.dark,
      contrastText: colors.secondary.contrast,
    },
    background: {
      default: colors.background,
    },
    error: {
      main: colors.error,
    },
    success: {
      main: colors.success,
    },
    info: {
      main: colors.info,
    },
    warning: {
      main: colors.warning,
    },
  },
});
