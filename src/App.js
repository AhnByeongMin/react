import './App.css';

function App() {
  const name = '리액트';
  // 기존에 html 테그 안에서 class 로 css를 적용했던것 대신 className을 통해 적용시킨다.
  return (
    <div className='react'>
      {name || '리액트'}
    </div>
  );
}

export default App;
