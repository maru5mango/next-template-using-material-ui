import { createGlobalStyle, css } from 'styled-components';

const globalStyle = css`
  @font-face {
    font-family: Airbnb Cereal;
    font-weight: 400;
    font-display: swap;
    src: url('/fonts/AirbnbCerealBook.woff2') format('woff2'),
      url('/fonts/AirbnbCerealBook.woff') format('woff2');
  }

  @font-face {
    font-family: Airbnb Cereal;
    font-weight: 600;
    font-display: swap;
    src: url('/fonts/AirbnbCerealMedium.woff2') format('woff2'),
      url('/fonts/AirbnbCerealMedium.woff') format('woff');
  }
  @font-face {
    font-family: Airbnb Cereal;
    font-weight: 700;
    font-display: swap;
    src: url('/fonts/AirbnbCerealBold.woff2') format('woff2'),
      url('/fonts/AirbnbCerealBold.woff') format('woff');
  }
  @font-face {
    font-family: Airbnb Cereal;
    font-weight: 800;
    font-display: swap;
    src: url('/fonts/AirbnbCerealExtraBold.woff2') format('woff2'),
      url('/fonts/AirbnbCerealExtraBold.woff') format('woff');
  }
  * {
    box-sizing: border-box;
  }
  body {
    line-height: 1.2;
    font-family: Airbnb Cereal, sans-serif;
  }
  a {
    text-decoration: none;
  }
`;

const GlobalStyle = createGlobalStyle`
    ${globalStyle};
`;

export default GlobalStyle;
