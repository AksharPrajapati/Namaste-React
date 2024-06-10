const { useState, useEffect } = require("react");

const useOnlineStatus = () => {
  const [status, setStatus] = useState(true);

  useEffect(() => {
    addEventListener("offline", () => {
      setStatus(false);
    });

    addEventListener("online", () => {
      setStatus(true);
    });
  }, []);

  return status;
};

export default useOnlineStatus;
