import { createTheme } from "@mui/material/styles";
import TailwindConfig from '../../tailwind.config'

export const MaterialTheme = createTheme({
  palette: {
    primary: {
      main: TailwindConfig.theme.extend.colors.secondary.DEFAULT
    },
  },
});
