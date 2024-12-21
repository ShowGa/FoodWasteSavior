export const formatTime = (time) => {
  // convert string 18:00:00 to 18:00
  const timeArray = time.split(":");
  return timeArray[0] + ":" + timeArray[1];
};

export const categoryName = (category) => {
  switch (category) {
    case "BAKERY":
      return "烘焙商品";
    case "MEALS":
      return "正餐";
    case "GROCERY":
      return "生鮮雜貨";
    case "OTHERS":
      return "其他";
    default:
      return "其他";
  }
};

export const orderStatus = (status) => {
  switch (status) {
    case "WAITFORCONFIRM":
      return "等待商家確認接單";
    case "PENDING":
      return "等待至取餐時間";
    case "READY":
      return "點擊完成領取";
    case "COMPLETED":
      return "已領取";
    case "CANCELLED":
      return "已取消";
  }
};
