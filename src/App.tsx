import { ThemeProvider } from "styled-components";
import { Button } from "./components/Button.js";
import { GlobalStyle } from "./styles/global.js";
import { defaultTheme } from "./styles/themes/default.js";

export function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
    <Button variant="success"/>
    <Button variant="danger"/>
    <Button variant="primary"/>

    <GlobalStyle/>
    </ThemeProvider>
  )
}

