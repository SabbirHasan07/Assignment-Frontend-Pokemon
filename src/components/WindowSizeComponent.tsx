import { useEffect, useState } from "react";

export const WindowSizeComponent = () => {
  const [width, setWidth] = useState<number>(0);

  useEffect(() => {
    const checkWidth = () => {
      setWidth(window.innerWidth);
    };
    checkWidth();
    window.addEventListener("resize", checkWidth);
    return () => {
      window.removeEventListener("resize", checkWidth);
    };
  }, []); 

  return <div>Window width: {width}</div>;
};
