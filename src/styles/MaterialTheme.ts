import { createTheme } from "@mui/material/styles";
import TailwindConfig from "../../tailwind.config";

export const MaterialTheme = createTheme({
  shape: { borderRadius: 8 },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'capitalize',
          fontSize: '1rem'
        }
      }
    }
  },
  palette: {
    primary: {
      main: TailwindConfig.theme.extend.colors.secondary.DEFAULT,
    },
    background: {
      default: TailwindConfig.theme.extend.colors.background,
    },
    error: {
      main: TailwindConfig.theme.extend.colors.error,
    },
    success: {
      main: TailwindConfig.theme.extend.colors.success,
    },
    info: {
      main: TailwindConfig.theme.extend.colors.info,
    },
    warning: {
      main: TailwindConfig.theme.extend.colors.warning,
    },
  },
});
