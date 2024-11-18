import { useState } from "react";
import "./App.css";
// react router
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layouts from "./layouts/Layouts";

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layouts />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
