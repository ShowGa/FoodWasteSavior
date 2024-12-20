import React, { useState } from "react";
// image
import { img2 } from "../assets";
// icon
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
import { IoArrowBackCircle } from "react-icons/io5";
// service
import OrderService from "../service/OrderService";
// toast
import toast from "react-hot-toast";
// zustand
import useAuthUserStore from "../zustand/useAuthUser";

const OrderModal = ({ setShowModal, packageDetail }) => {
  const { authUser } = useAuthUserStore();

  const [orderData, setOrderData] = useState({
    userId: authUser.userId,
    packageId: packageDetail.packageId,
    quantity: 1,
  });

  const handleCreateOrder = () => {
    OrderService.createOrder(orderData)
      .then((res) => {
        toast.success("訂單已成功建立");
        // timeout
        setTimeout(() => {
          window.location.reload();
        }, 1000);
      })
      .catch((err) => {
        const message =
          err.response?.data.message ||
          "糟糕!伺服器似乎出現了問題，請聯絡客服。";
        toast.error(message);
        console.log(err);
      });
  };

  const handleInputChange = (e) => {
    setOrderData({ ...orderData, [e.target.name]: e.target.value });
  };

  const handleIncreaseOrDecrease = (type) => {
    const currentQuantity = orderData.quantity;
    const maxQuantity = packageDetail.quantityRemaining;

    if (type === "increase" && currentQuantity < maxQuantity) {
      setOrderData({ ...orderData, quantity: currentQuantity + 1 });
    } else if (type === "decrease" && currentQuantity > 1) {
      setOrderData({ ...orderData, quantity: currentQuantity - 1 });
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center">
      <div className="bg-white px-4 py-6 rounded-lg shadow-md w-full max-w-[30rem]">
        <div className="mb-6 text-right">
          <button onClick={() => setShowModal(false)}>
            <IoArrowBackCircle className="text-4xl hover:text-red-700" />
          </button>
        </div>

        <div>
          <div>
            <p className="text-lg">訂單資訊</p>
          </div>
          <div className="p-3 bg-gray-100 w-full flex items-center gap-2 mt-2">
            <div className="w-[4rem] h-[4rem] rounded-full overflow-hidden">
              <img
                src={packageDetail.packageCoverImageUrl}
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <p className="text-lg font-bold">{packageDetail.packageName}</p>
              <p className="text-sm text-gray-500">
                今日 : {packageDetail.packageStartTime} ~{" "}
                {packageDetail.packageEndTime}
              </p>
            </div>
          </div>

          <div className="flex items-center justify-between gap-6 mt-6 ">
            <div className="flex border border-gray-300 rounded-full px-3">
              <button
                className="text-2xl p-2"
                onClick={() => handleIncreaseOrDecrease("decrease")}
              >
                <FaMinus />
              </button>
              <input
                className="text-center max-w-[4rem] outline-none ml-3 bg-white"
                type="number"
                name="quantity"
                disabled
                value={orderData.quantity}
                onChange={handleInputChange}
              />
              <button
                className="text-2xl p-2"
                onClick={() => handleIncreaseOrDecrease("increase")}
              >
                <FaPlus />
              </button>
            </div>

            <button
              className="flex-1 bg-secondaryTheme px-4 py-2 rounded-full text-white hover:bg-secondaryThemeHover"
              onClick={handleCreateOrder}
            >
              <p className="text-lg font-bold">預定</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderModal;
