import { Component } from "react";
import PropTypes from "prop-types";
// =>는  ES6문법

class MyComponent extends Component {
  render() {
    const { name, children, nick, check } = this.props; // 비구조화 할당
    return (
      <>
        <div>
          <h1>나의 새로운 컴포넌트!</h1>
          <h2>안녕, 난 {name}이야!</h2>
          <h2>그리고 지정하지 않은 기본 닉네임은 {nick}이야!</h2>
          <h2>컴포넌트 태그 안 children 값은 {children}이야</h2>
          <h2>필수값 체크는 {check}야</h2>
        </div>
      </>
    );
  }
  static defaultProps = {
    name: "기본이름",
    nick: "리액트",
  };
}
//defaultProps 지정
// class 내부에서 static 선얼을 통해 지정하는 방법도 가능
// MyComponent.defaultProps = {
//   name: "기본이름",
//   nick: "리액트",
// };
//PropTypes 검증 지정타입이 아닌값에대해 console에 경고가 표시됨
//PropTypes 가 아닌 prototype
// eslint-disable-next-line react/no-typos
MyComponent.propTypes = {
  name: PropTypes.string,
  check: PropTypes.string.isRequired,
};

export default MyComponent;
