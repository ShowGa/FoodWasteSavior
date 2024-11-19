import { useState } from "react";
import "./App.css";
// react router
import { BrowserRouter, Routes, Route } from "react-router-dom";
// layouts
import Layouts from "./layouts/Layouts";
// pages
import Home from "./pages/Home";
import UserLogin from "./pages/UserLogin";
import UserSignUp from "./pages/UserSignUp";
import BusinessSignUp from "./pages/BusinessSignUp";
import BusinessLogin from "./pages/BusinessLogin";

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layouts />}>
          <Route index element={<Home />} />
        </Route>
        <Route path="/user-login" element={<UserLogin />} />
        <Route path="/user-signup" element={<UserSignUp />} />
        <Route path="/business-signup" element={<BusinessSignUp />} />
        <Route path="/business-login" element={<BusinessLogin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
