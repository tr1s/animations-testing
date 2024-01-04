import "./globals.scss";

import IntroSplashScreen from "../components/IntroSplashScreen/";
import Nav from "../components/nav";
import Footer from "../components/footer";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="wrapper app-router-wrapper">
          <IntroSplashScreen />
          <Nav />
          <main className="main app-router">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
