import logo from './logo.svg';
import './App.css';

function App() {
  const name = '리액트';
  return (
    <div className="App">
      {/*
      && 연산자로 인해 name이 '리액트'로 true이기에 뒤의 h1테그가 랜더링
      반대로 AND조건이기때문에 name이 false일경우 AND조건에 맞지않아 뒷내용 랜더링되지않음
      */}
      {name === '리액트' && <h1>리액트 입니다.</h1>}
    </div>
  );
}

export default App;
