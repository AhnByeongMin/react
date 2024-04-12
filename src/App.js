import './App.css';

function App() {
  const name = '리액트';
  // 기존에 html 테그 안에서 class 로 css를 적용했던것 대신 className을 통해 적용시킨다.
  return (
      <>
        {/*
        테그는 꼭 닫아주도록 한다. ex <input></input> 테그사이 내용이 없는경우 셀프클로징 <input />
        */}
        <div className='react'>
          {name || '리액트'}
        </div>
          <input/>
      </>
  );
}

export default App;
