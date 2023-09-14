import { Routes, Route } from "react-router-dom";
import "./App.css";
import AllItems from "./components/AllItems";
import SingleItems from "./components/SingleItems";
import Nav from "./components/Nav";

function App() {
  return (
    <div className="App">
      <h1>Chairs.inc</h1>
      <Nav />
      <Routes>
        <Route path="/" element={<AllItems />} />
        <Route path="/:id" element={<SingleItems />} />
      </Routes>
    </div>
  );
}

export default App;
