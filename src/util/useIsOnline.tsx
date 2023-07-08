import { useEffect, useState } from "react";

export const useIsOnline = () => {
  const [isOnline, setIsOnline] = useState<boolean>(navigator.onLine);
  useEffect(() => {
    const handleOnlineChange = () => {
      setIsOnline(navigator.onLine);
    };
    window.addEventListener("online", handleOnlineChange);
    window.addEventListener("offline", handleOnlineChange);

    return () => {
      window.removeEventListener("online", handleOnlineChange);
      window.removeEventListener("offline", handleOnlineChange);
    };
  }, []);
  return isOnline;
};
