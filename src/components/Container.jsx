import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";

function Container() {
  return (
    <div className="container h-100">
      <div className="row justify-content-center">
        <Header />
        <Content />
        <Footer />
      </div>
    </div>
  );
}

export default Container;
