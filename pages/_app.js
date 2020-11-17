import 'styles/comp-mobile.css'
import 'styles/comp-desktop.css'
import 'styles/landing.css'
import PageHead from "components/pageStandards/head"

function MyApp({ Component, pageProps }) {
  return (
    <>
      <PageHead />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
