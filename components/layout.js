import Nav from "./nav";
import PageTransitionWrapper from "../app/pageTransitionWrapper";
import Footer from "./footer";

export default function Layout({ children }) {
  return (
    <>
      <Nav />
      <PageTransitionWrapper>
        <main className="main pages-router">{children}</main>
        <Footer />
      </PageTransitionWrapper>
    </>
  );
}
