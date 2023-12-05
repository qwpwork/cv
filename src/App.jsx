import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";
import HeaderLayout from "./components/HeaderLayout"

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

const App = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <HeaderLayout />
    </ThemeProvider>
  )
}

export default App;