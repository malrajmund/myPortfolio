import Navbar from "./components/Navbar/Navbar";
import Landing from "./components/Landing/Landing";
import About from "./components/About/About";
import Portfolio from "./components/Portfolio/Portfolio";
import Contact from "./components/Contact/Contact";
import { ThemeProvider, createTheme } from "@material-ui/core/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#ffffff",
    },
    secondary: {
      main: "#c471ed",
    },
    tertiary: {
      main: "#444444",
    },
    dark: {
      main: "#171717",
    },
    gradient: "linear-gradient(to right, #12c2e9, #c471ed, #f64f59)",
  },
});

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Navbar />
        <Landing />
        <About />
      </ThemeProvider>
    </>
  );
}

export default App;
