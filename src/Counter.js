import { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);
    // state의 초기값 설정
    this.state = {
      number: 0,
      fixedNumber: 0,
    };
  }
  render() {
    const { number, fixedNumber } = this.state; // state를 조회할 때는 this.state를 사용
    return (
      <div>
        <h1>{number}</h1>
        <h2>바뀌지 않는 값 : {fixedNumber}</h2>
        <button
          // onClick을 통해 버튼이 클릭되었을 때 호출할 함수를 지정.
          onClick={() => {
            //this.setState를 사용하여 state에 값을 저장할 수 있다.
            this.setState(
              (prevState) => {
                return {
                  number: prevState.number + 1,
                };
              },
              () => {
                console.log('방금 setState가 호출됨');
                console.log(this.state);
              }
            );
          }}
        >
          +1
        </button>
      </div>
    );
  }
}

export default Counter;
