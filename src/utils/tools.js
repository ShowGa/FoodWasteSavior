export const countdownTimer = (endTime, stateMethod, setIsTimeUp) => {
  const [hours, minutes, seconds] = endTime.split(":");
  const endDateTime = new Date();
  endDateTime.setHours(hours, minutes, seconds, 0);

  const interval = setInterval(() => {
    const now = new Date().getTime();
    const distance = endDateTime - now;

    const remainingHours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const remainingMinutes = Math.floor(
      (distance % (1000 * 60 * 60)) / (1000 * 60)
    );
    const remainingSeconds = Math.floor((distance % (1000 * 60)) / 1000);

    const formatTime = (num) => (num < 10 ? `0${num}` : num);

    // 如果倒计时结束
    if (distance < 0) {
      stateMethod("點擊領取");
      setIsTimeUp(true);
      clearInterval(interval);
      return;
    } else {
      stateMethod(
        `${formatTime(remainingHours)}:${formatTime(
          remainingMinutes
        )}:${formatTime(remainingSeconds)}`
      );
    }
  }, 1000);
};
