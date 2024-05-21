import { Route, Routes } from "react-router-dom";
import "./App.css";
import Category from "./components/Category";
import CategoryDescription from "./components/CategoryDescription";
import Home from "./components/Home";
import Layout from "./components/Layout";
import NoMatch from "./components/NoMatch";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="categories/:query" element={<Category />} />
        <Route
          path="categories/:query/description/:id"
          element={<CategoryDescription />}
        />
        <Route path="*" element={<NoMatch />} />
      </Route>
    </Routes>
  );
}

export default App;
