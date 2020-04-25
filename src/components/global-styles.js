import { createGlobalStyle } from 'styled-components'
import 'normalize.css'

const globalStyles = createGlobalStyle`

  @font-face {
    font-family: "Brandon Grotesque Bold";
    src: url("/fonts/BrandonGrotesque-Bold.woff2") format("woff2"),
    url("/fonts/BrandonGrotesque-Bold.woff") format("woff");
    font-display: fallback;
  }

  @font-face {
    font-family: "Brandon Grotesque Medium";
    src: url("/fonts/BrandonGrotesqueMedium.woff2") format("woff2"),
    url("/fonts/BrandonGrotesqueMedium.woff") format("woff");
    font-display: fallback;
  }

  @font-face {
    font-family: "Brandon Grotesque Regular";
    src: url("/fonts/BrandonGrotesqueRegular.woff2") format("woff2"),
    url("/fonts/BrandonGrotesqueRegular.woff") format("woff");
    font-display: fallback;
  }

  @font-face {
    font-family: "Cervo Neue";
    src: url("/fonts/CervoNeue-BoldNeue.woff2") format("woff2"),
        url("/fonts/CervoNeue-BoldNeue.woff") format("woff");
        font-display: fallback;
  }

  @font-face {
    font-family: "Handelson";
    src: url("/fonts/Handelson-Three.woff2") format("woff2"),
        url("/fonts/Handelson-Three.woff") format("woff");
        font-display: fallback;
  }

  `

export default globalStyles