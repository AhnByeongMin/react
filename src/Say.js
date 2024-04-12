import { useState } from "react";

const Say = () => {
    // 배열 비구조화 , useState 사용
  const [ message, setMessage ] = useState("");
  const onClickEnter = () => setMessage("안녕");
  const onClickLeave = () => setMessage("잘가");

  return (
    <div>
      <button onClick={onClickEnter}>입장</button>
      <button onClick={onClickLeave}>퇴장</button>
      <h1>{message}</h1>
    </div>
  );
};
export default Say;
