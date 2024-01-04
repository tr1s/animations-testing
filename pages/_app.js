import "../app/globals.scss";

import IntroSplashScreen from "../components/IntroSplashScreen/";

export default function App({ Component, pageProps }) {
  return (
    <>
      <div className="wrapper pages-router-wrapper">
        <IntroSplashScreen />
        <Component {...pageProps} />
      </div>
    </>
  );
}
