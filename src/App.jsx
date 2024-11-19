import { useState } from "react";
import "./App.css";
// react router
import { BrowserRouter, Routes, Route } from "react-router-dom";
// layouts
import Layouts from "./layouts/Layouts";
// pages
import Home from "./pages/Home";
import UserLogin from "./pages/UserLogin";

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layouts />}>
          <Route index element={<Home />} />
        </Route>
        <Route path="/user-login" element={<UserLogin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
