import "@fontsource/playfair-display/900.css"
import "@fontsource/poppins/400.css"
import "@fontsource/poppins/700.css"
import "@fontsource/poppins/900.css"
import { appWithTranslation } from "next-i18next"
import "../styles/globals.css"

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default appWithTranslation(MyApp)
