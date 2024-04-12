import PropTypes from 'prop-types';
// =>는  ES6문법

const MyComponent = ({name, children, nick}) => {
  return (
    <>
      <div>
        <h1>나의 새로운 컴포넌트!</h1>
        <h2>안녕, 난 {name}이야!</h2>
        <h2>그리고 지정하지 않은 기본 닉네임은 {nick}이야!</h2>
        <h2>컴포넌트 태그 안 children 값은 {children}이야</h2>
      </div>
    </>
  );
};
//defaultProps 지정
MyComponent.defaultProps = {
  name: "기본이름",
  nick :"리액트"
};
//PropTypes 검증 지정타입이 아닌값에대해 console에 경고가 표시됨
// eslint-disable-next-line react/no-typos
MyComponent.PropTypes = {
    name: PropTypes.string
}

export default MyComponent;
