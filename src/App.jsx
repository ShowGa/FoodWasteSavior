import { useState } from "react";
import "./App.css";
// react router
import { BrowserRouter, Routes, Route } from "react-router-dom";
// layouts
import Layouts from "./layouts/Layouts";
import Layouts2 from "./layouts/Layouts2";
// components
import PrivateRoute from "./components/PrivateRoute";

// pages
import Home from "./pages/Home";
import UserLogin from "./pages/UserLogin";
import UserSignUp from "./pages/UserSignUp";
import BusinessSignUp from "./pages/BusinessSignUp";
import BusinessLogin from "./pages/BusinessLogin";
import UserProfile from "./pages/UserProfile";
import Search from "./pages/Search";
import Recommend from "./pages/Recommend";
import Favorite from "./pages/Favorite";
import Orders from "./pages/Orders";
import OrderDetail from "./pages/OrderDetail";
import OrdersHistory from "./pages/OrdersHistory";
import Discover from "./pages/Discover";

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Routes>
        {/* logout layout */}
        <Route path="/" element={<Layouts />}>
          <Route index element={<Home />} />
        </Route>

        {/* login layout */}
        <Route element={<Layouts2 />}>
          <Route element={<PrivateRoute />}>
            <Route path="/profile" element={<UserProfile />} />
            <Route path="/search" element={<Search />} />
            <Route path="/discover" element={<Discover />} />
            <Route path="/recommend" element={<Recommend />} />
            <Route path="/favorite" element={<Favorite />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/orders-history" element={<OrdersHistory />} />
            <Route path="/order/:id" element={<OrderDetail />} />
          </Route>
        </Route>

        {/* No Layout */}
        <Route path="/user-login" element={<UserLogin />} />
        <Route path="/user-signup" element={<UserSignUp />} />
        <Route path="/business-signup" element={<BusinessSignUp />} />
        <Route path="/business-login" element={<BusinessLogin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
