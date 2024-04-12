// =>는  ES6문법
//defaultProps 지정
const MyComponent = (props) => {
  return (
    <>
      <div>
        <h1>나의 새로운 컴포넌트!</h1>
        <h2>안녕, 난 {props.name}이야!</h2>
        <h2>그리고 지정하지 않은 기본 닉네임은 {props.nick}이야!</h2>
        <h2>컴포넌트 태그 안 children 값은 {props.children}이야</h2>
      </div>
    </>
  );
};
MyComponent.defaultProps = {
  name: "기본이름",
  nick :"리액트"
};

export default MyComponent;
