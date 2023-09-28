import { Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import "./App.css";
import AllItems from "./components/ItemListAll";
import SingleItems from "./components/SingleItem";
import Nav from "./components/Nav";
import LoginForm from "./components/LoginForm";
import CategoriesLister from "./components/Categories";
import CartList from "./components/Cart";
import ListCartButton from "./components/ListCartButton";

function App() {
  return (
    <div className="App">
      <LoginForm />
      <Nav />
      <ListCartButton/>
      <Routes>
        <Route path="/" element={<AllItems />} />
        <Route path="/:id" element={<SingleItems />} />
        <Route path="/cart" element={<CartList />} />
      </Routes>
    </div>
  );
}

export default App;
