import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Apply from "./pages/Apply";
import Scout from "./pages/Scout";
import Login from "./pages/Login";
import Guardian from "./pages/Guardian";
import Hunter from "./pages/Hunter";
import Dashboard from "./pages/Dashboard";
import Ethics from "./pages/Ethics";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/apply" element={<Apply />} />
        <Route path="/scout" element={<Scout />} />
        <Route path="/login" element={<Login />} />
        <Route path="/guardian" element={<Guardian />} />
        <Route path="/hunter" element={<Hunter />} />

        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/ethics" element={<Ethics />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;