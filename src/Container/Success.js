import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Success() {
    const navigate = useNavigate();

  const [count, setCount] = useState(15);

  useEffect(() => {
    setInterval(() => setCount((count) => count - 1),1000);
    setTimeout(() => {
        navigate("/");
   }, 15000);
  }, [navigate]);
  return (
    <h4 className="mt-5">
      Your Order have been placed successfully. You will be redirected in{" "}
      {count} seconds
    </h4>
  );
}
