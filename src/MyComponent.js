// =>는  ES6문법
// 
const MyComponent = props => {
  return (
    <>
      <div>
        <h1>나의 새로운 컴포넌트!</h1>
        <h2>안녕, 난 {props.name}이야!</h2>
        </div>
    </>
  );
};

export default MyComponent;
