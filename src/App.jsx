import "./App.css";
import Bestseller from "./components/Bestseller";
import Delicious from "./components/Delicious";
import Header from "./components/Header";
import Hero from "./components/Hero";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Delicious />
      <Bestseller />
    </>
  );
}

export default App;
