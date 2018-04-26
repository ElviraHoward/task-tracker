import React, {Component} from 'react';
import Phone from 'react-phone-number-input';
import 'react-phone-number-input/rrui.css';
import 'react-phone-number-input/style.css';

class PhoneInput extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: props.id,
            value: props.value,
            disabled: props.disabled
        };
        this.onChange = props.onChange;
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            id: nextProps.id,
            value: nextProps.value,
            disabled: nextProps.disabled
        });
    }
    render() {
        return <Phone
            country="GB"
            value={this.state.value}
            disabled={this.state.disabled}
            onChange={(newValue) => this.onChange(newValue, this.state.id)}/>;

    }
}

export default PhoneInput;