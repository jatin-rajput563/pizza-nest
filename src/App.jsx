import "./App.css";
import Lenis from "lenis";
import Bestseller from "./components/Bestseller";
import Delicious from "./components/Delicious";
import Delivery from "./components/Delivery";
import Header from "./components/Header";
import Hero from "./components/Hero";
import LargePizza from "./components/LargePizza";
import Footer from "./components/Footer";
// import PerfectPizza from "./components/PerfectPizza";

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
      <LargePizza />
      <Delivery />
      {/* <PerfectPizza /> */}
      <Footer />
    </>
  );
}

export default App;
