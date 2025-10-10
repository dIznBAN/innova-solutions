import { createGlobalStyle } from "styled-components";
import { theme } from '../theme'

const MyGlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&family=Playfair+Display:wght@400;700&display=swap');
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: ${theme.fonts.primary};
    background-color: ${theme.colors.white};
    color: ${theme.colors.text};
    line-height: 1.6;
  }

  html {
    scroll-behavior: smooth;
  }
`;
export default MyGlobalStyles;
