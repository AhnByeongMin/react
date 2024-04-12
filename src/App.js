import logo from './logo.svg';
import './App.css';

function App() {
  const name = '리웩트';
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        {name == '리엑트' ?(
            <h1>리엑트 입니다.</h1>
        ) : (
            <h1>리엑트가 아닙니다.</h1>
        )}
	  
      </header>
    </div>
  );
}

export default App;
