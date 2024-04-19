import { Component } from "react";
class EventPractice extends Component {
    state = {
        username: '',
        message: ''
    }

    handleChange = (e) => {
        this.setState({
            // 1개일땐 state의 밸류 이름을 직접 사용하지만 여러개일땐 target.nanme을 이용한다.
            [e.target.name]: e.target.value
        });
    }

    handleClick = (e) => {
        alert(this.state.username + ' : ' + this.state.message);
        this.setState({
            username: '',
            message: ''
        });
    }

    handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            this.handleClick();
        }
    }

    render() {
        return (
            <div>
                <h1>이벤트 연습</h1>
                <input
                    type="text"
                    name="username"
                    placeholder="사용자명"
                    value={this.state.username}
                    onChange={this.handleChange}
                />
                <input
                    type="text"
                    name="message"
                    placeholder="아무거나 입력해 보세요"
                    value={this.state.message}
                    onChange={this.handleChange}
                    onKeyPress={this.handleKeyPress}
                />
                <button
                    onClick={this.handleClick}
                >확인</button>
            </div>
        )
    }
}
export default EventPractice;