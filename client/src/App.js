import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Games from "./pages/Games";
import Create from "./pages/Create";
import Update from "./pages/Update";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Games />} />
          <Route path="/create" element={<Create />} />
          <Route path="/update" element={<Update />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
