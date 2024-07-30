import { SpeedInsights } from "@vercel/speed-insights/next"
import "@/global.css"

export default function App({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page)
  return getLayout(<Component {...pageProps}><SpeedInsights /></Component>)
}