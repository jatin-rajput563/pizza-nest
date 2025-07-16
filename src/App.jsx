import "./App.css";
import Lenis from "lenis";
import Bestseller from "./components/Bestseller";
import Delicious from "./components/Delicious";
import Delivery from "./components/Delivery";
import Header from "./components/Header";
import Hero from "./components/Hero";
import LargePizza from "./components/LargePizza";
import Footer from "./components/Footer";
import Craving from "./components/Craving";
import Gallery from "./components/Gallery";
import PerfectPizza from "./components/PerfectPizza";
import Testimonial from "./components/Testimonial";
import OurMenu from "./components/OurMenu";

const lenis = new Lenis();
lenis.on("scroll", (e) => {
  console.log(e);
});
function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Delicious />
      <Bestseller />
      <OurMenu />
      <LargePizza />
      <Delivery />
      <PerfectPizza />
      <Testimonial />
      <Gallery />
      <Craving />
      <Footer />
    </>
  );
}

export default App;
