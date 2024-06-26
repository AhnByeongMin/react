import { Component } from "react";
import './ValidationSample.css';

class ValidationSample extends Component {
    state = {
        password: '',
        clicked: false,
        vaildated: false
    }

    handleChange = (e) => {
        this.setState({
            password: e.target.value
        });
    }

    handleButtonClick = () => {
        this.setState({
            clicked: true,
            vaildated: this.state.password === '0000'
        });
        this.input.focus();
    }
    handleOnKeyDown = (e) => {
        if (e.key === 'Enter') {
            this.handleButtonClick();
        }
    }

    render() {
        return (
            <div>
                <input
                    ref={(ref) => this.input = ref}
                    type="password"
                    value={this.state.password}
                    onChange={this.handleChange}
                    onKeyDown={this.handleOnKeyDown}
                    className={this.state.clicked ? (this.state.vaildated ? 'success' : 'failure') : ''}
                />
                <button onClick={this.handleButtonClick}>검증하기</button>
            </div>
        );
    }
}
export default ValidationSample;