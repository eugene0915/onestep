import { useEffect, useRef } from "react";

const Useclick = () => {
  const potato = useRef();

  //   setTimeout(() => console.log(potato.current, "hihi"), 3000);

  return (
    <>
      <div>hi</div>
      <input ref={potato} placeholder="dsds" />
    </>
  );
};

export default Useclick;
