import { useState } from "react";
import "./App.css";
// react router
import { BrowserRouter, Routes, Route } from "react-router-dom";
// layouts
import Layouts from "./layouts/Layouts";
import Layouts2 from "./layouts/Layouts2";

// react hot toast
import { Toaster } from "react-hot-toast";

// components
import PrivateRoute from "./components/PrivateRoute";

// pages
import Home from "./pages/Home";
import UserLogin from "./pages/UserLogin";
import UserSignUp from "./pages/UserSignUp";
import UserProfile from "./pages/UserProfile";
import Search from "./pages/Search";
import Favorite from "./pages/Favorite";
import Orders from "./pages/Orders";
import OrderDetail from "./pages/OrderDetail";
import OrdersHistory from "./pages/OrdersHistory";
import StoreDetail from "./pages/StoreDetail";
import PackageDetail from "./pages/PackageDetail";
import OrderHistoryDetail from "./pages/OrderHistoryDetail";

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Routes>
        {/* logout layout */}
        {/* <Route path="/" element={<Layouts />}>
          <Route index element={<Home />} />
        </Route> */}

        {/* login layout */}
        <Route element={<Layouts2 />}>
          <Route index element={<Search />} />
          <Route element={<PrivateRoute />}>
            <Route path="/profile" element={<UserProfile />} />
            <Route path="/favorite" element={<Favorite />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/orders-history" element={<OrdersHistory />} />
            <Route path="/order/:orderId" element={<OrderDetail />} />
            <Route
              path="/order-history/:orderId"
              element={<OrderHistoryDetail />}
            />
            <Route path="/store/:storeId" element={<StoreDetail />} />
            <Route path="/package/:packageId" element={<PackageDetail />} />
          </Route>
        </Route>

        {/* No Layout */}
        <Route path="/user-login" element={<UserLogin />} />
        {/* <Route path="/user-signup" element={<UserSignUp />} /> */}
      </Routes>

      {/* react hot toast */}
      <Toaster />
    </BrowserRouter>
  );
}

export default App;
