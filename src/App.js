import MyComponent from "./MyComponent";
import Counter from "./Counter";
import Say from "./Say";
import EventPractice from "./EventPractice"
const App = () => {
  return (
    <>
    <MyComponent name ={3}>태그내용</MyComponent><br/>
    <Counter /><br/>
    <Say /><br/>
    <EventPractice />
    </>
)

};

export default App;
