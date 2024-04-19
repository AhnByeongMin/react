import MyComponent from "./MyComponent";
import Counter from "./Counter";
import Say from "./Say";
import EventPractice from "./EventPractice"
import ValidationSample from "./ValidationSample"
import ScrollBox from "./ScrollBox";
const App = () => {
  return (
    <>
      <MyComponent name="리액트" check="필수">태그내용</MyComponent><br />
      <Counter /><br />
      <Say /><br />
      <EventPractice /><br />
      <ValidationSample /><br/>
      <ScrollBox />
    </>
  )

};

export default App;
