import Navbar from "./components/Navbar/Navbar";
import Landing from "./components/Landing/Landing";
import About from "./components/About/About";
import Portfolio from "./components/Portfolio/Portfolio";
import { ThemeProvider, createTheme } from "@material-ui/core/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#EDEDED",
    },
    secondary: {
      main: "#DA0037",
    },
    tertiary: {
      main: "#444444",
    },
    dark: {
      main: "#171717",
    },
  },
});

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Navbar />
        <Landing />
        <About />
        <Portfolio />
      </ThemeProvider>
    </>
  );
}

export default App;
