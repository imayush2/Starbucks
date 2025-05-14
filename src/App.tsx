import Navbar from "./components/Navbar";
import Reward from "./components/Reward";
import Carousel from "./components/Carousel";
import Products from "./components/Products";
import Recommand from "./components/Recommand";
import LearnMore from "./components/LearnMore";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="pt-[66px]">
      <Navbar />
      <Reward />
      <Carousel />
      <Products />
      <Recommand />x
      <LearnMore />
      <Footer />
    </div>
  );
};

export default App;
