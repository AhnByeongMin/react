import './App.css';

function App() {
  const name = undefined;
  return (
    <div>
      {/*
      undefined 값을 리턴시 null 포인트 에러가 발생하니까 undefined를 리턴하여 랜더링 하는 일이 없도록 하자.
      JSX 내부에서는 괜찮다. 값이 undefined일경우에서는 java에서와 같이 널포인트 방지를 해주자.
      */}
      {name || '리액트'}
    </div>
  );
}

export default App;
