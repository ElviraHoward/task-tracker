import DatePicker from 'react-datepicker';
import React, {Component} from 'react';

import 'react-datepicker/dist/react-datepicker.css';

class Date extends Component {
    constructor (props) {
        super(props);
        this.state = {
            value: props.value,
            disabled: props.disabled,
            onChange: props.onChange,
            onEditHandler: props.onEditHandler,
            onSaveHandler: props.onSaveHandler,
            onDeleteHandler: props.onDeleteHandler
        };
        //this.handleChange = this.handleChange.bind(this);
    }
/*
    handleChange(date) {
        this.setState({
            startDate: date,
        });
    }*/

    render() {
        return <DatePicker
            className="inputDate"
            value={this.state.value}
            disabled={this.state.disabled}
            selected={this.state.startDate}
            onChange={this.state.onChange}
            onEditHandler={this.state.onEditHandler}
            onSaveHandler={this.state.onSaveHandler} onDeleteHandler={this.state.onDeleteHandler} />;
    }
}

export default Date;