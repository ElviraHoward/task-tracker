import DatePicker from 'react-datepicker';
import React, {Component} from 'react';

import 'react-datepicker/dist/react-datepicker.css';
import moment from "moment";

class Date extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: props.id,
            value: props.value,
            disabled: props.disabled,
            startDate: moment()
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
        return <DatePicker
            className="input-date"
            value={this.state.value}
            selected={this.state.startDate}
            disabled={this.state.disabled}
            onChange={(newValue) => this.onChange(newValue, this.state.id)}/>;
    }
}

export default Date;