import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
  ${reset};

  * {
    box-sizing: border-box;
  }
  body {
    font-family: 'system-ui', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

.h1, h1 {
  font-size: 2rem;
}

.h2, h2 {
  font-size: 1.8rem;
}

.h3, h3 {
  font-size: 1.6rem;
}

.h4, h4 {
  font-size: 1.4rem;
}

.h5, h5 {
  font-size: 1.2rem;
}

.h6, h6 {
  font-size: 1rem;
}

hr {
   display:block;
   height:1px;
   border:0;  
   border-top:1px solid #cccccc;
   margin:1em 0;
   padding:0;
}

// #E8E9EC #D9D9D9 #ABABAB #848484 #747474 #5D5D5D #444444 #1D1D1D
input, button{
  height: 40px;
  padding: 0 8px;
  border: 1px solid #ABABAB;
  border-radius: 4px;
}
button{
  cursor: pointer;
  &:disabled {
    background-color: #cccccc;
    border: 1px solid #cccccc;
    color: gray;
    font-style: italic;
  }
}


`;

export default GlobalStyles;
