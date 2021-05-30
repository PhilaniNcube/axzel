import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

:root {
    --primary: #7099A6;
    --dark: #444;
    --accent: #1cc5dc;
    --mainHeading: clamp(2.8rem, 3.2vw, 6em);
    --watermark: clamp(6rem, 8vw, 15rem);
    --subHeading:  clamp(2rem, 2.5vw, 4.5em);
    --sectionHeading:  clamp(1.8rem, 2.2vw, 4em);
    --cardHeading:  clamp(1.6rem, 1.5vw, 3.5em);
    --verticalSpace: clamp(3rem, 7vh, 5rem);
   
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}


body, html {
max-width: 100vw;
width: 100%;
font-family: 'Lato', sans-serif;
line-height: 1.6;
color: var(--dark);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  user-select: none;
  background: #fff;
  overscroll-behavior: none;
  font-size: 62.5%;
}


h1, h2, h3, h4, h5, h6 {
   
    font-weight: 700;
    margin: 0;
    padding: 0;
    line-height: 1.1;
}



a {
    text-decoration: none;
    color: inherit;
}

ul {
    list-style-type: none;
}

img {
    display: block;
    width: 100%;
    
}

.container {
    max-width: 1200px;
    min-width: 300px;
    margin: 0 auto;
    width: 80%;
   @media only screen and (min-width: 1921px) {
       max-width: 1800px;
   }
}

`;

export default GlobalStyle;
