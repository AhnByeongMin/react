import { useState } from "react";

const Say = () => {
  // 배열 비구조화 , useState 사용
  const [message, setMessage] = useState("");
  const onClickEnter = () => setMessage("안녕");
  const onClickLeave = () => setMessage("잘가");

  const [color, setColor] = useState("black");

  // 객체 다루기
  const object = { a: 1, b: 2, c: 3 };
  const nextObjcet = { ...object, b: 4 };
  console.log({ object });
  console.log({ nextObjcet });

  // 배열 다루기
  const array = [
    { id: 1, value: true },
    { id: 2, value: true },
    { id: 3, value: false },
  ];
  console.log({ array });
  let nextArray = array.concat({ id: 1, value: 4 }); // 새항목 추가
  console.log({ nextArray });
  nextArray.filter(item => (item.id !== 2)); // id가 2인값 제거
  console.log(nextArray.filter(item => (item.id !== 2)));
  nextArray.map(item => (item.id === 1 ? {...item, value : false} : item)); //id가 1항목의  values fasle로 변경
  console.log(nextArray.map(item => (item.id === 1 ? {...item, value : false} : item)));
  return (
    <div>
      <button onClick={onClickEnter}>입장</button>
      <button onClick={onClickLeave}>퇴장</button>
      <h1 style={{ color }}>{message}</h1>
      {/* 리엑트에서는 HTML의 onclick 입력시 카멜표기법으로 onClick으로 입력해야한다. */}
      <button style={{ color: "red" }} onClick={() => setColor("red")}>
        빨간색
      </button>
      <button style={{ color: "green" }} onClick={() => setColor("green")}>
        초록색
      </button>
      <button style={{ color: "blue" }} onClick={() => setColor("blue")}>
        파란색
      </button>
    </div>
  );
};
export default Say;
