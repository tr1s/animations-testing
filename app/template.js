import PageTransitionWrapper from "./pageTransitionWrapper";
import Footer from "../components/footer";

export default function Template({ children }) {
  return (
    <div className="template template-home">
      <PageTransitionWrapper>
        {children}
        {/* <Footer /> */}
      </PageTransitionWrapper>
    </div>
  );
}
