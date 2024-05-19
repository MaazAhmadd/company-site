import "./App.css";
import Categories from "./components/Categories";
import Footer from "./components/Footer";
import Hero from "./components/Hero";

function App() {
  return (
    <div className="mx-auto">
      <Hero />
      <Categories />
      <Footer />
    </div>
  );
}

export default App;
