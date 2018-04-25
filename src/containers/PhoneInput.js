import React, {Component} from 'react';
import Phone from 'react-phone-number-input';
import 'react-phone-number-input/rrui.css';
import 'react-phone-number-input/style.css';

class PhoneInput extends Component {

    constructor(props) {
        super(props);
        this.state = {
            value: props.value,
            disabled: props.disabled,
            onChange: props.onChange,
            onEditHandler: props.onEditHandler,
            onSaveHandler: props.onSaveHandler,
            onDeleteHandler: props.onDeleteHandler
        };
    }

    render() {
        return <Phone
            country="GB"
            value={this.state.value}
            disabled={this.state.disabled}
            onChange={this.state.onChange}
            onEditHandler={this.state.onEditHandler}
            onSaveHandler={this.state.onSaveHandler} onDeleteHandler={this.state.onDeleteHandler}
        />;

    }
}

export default PhoneInput;