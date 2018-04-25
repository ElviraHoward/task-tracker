import React, {Component} from 'react';
import './App.css';
import Table from "../components/Table";
import _ from 'underscore';
import Modal from "./Modal";
import Date from "./Date";
import PhoneNumber from "../containers/PhoneInput";

class App extends Component {

    constructor(props) {
        super(props);
        let tasks = [
            {
                id: 1,
                description: 'Add new table',
                status: 'New',
                date: '04/25/2018',
                phoneNumber: '+44121832437523',
                readOnly: true,
                disabled: true
            },
            {
                id: 2,
                description: 'Edit table',
                status: 'In progress',
                date: '04/24/2018',
                phoneNumber: '+44121832437523',
                readOnly: true,
                disabled: true
            },
            {
                id: 3,
                description: 'Delete from table',
                status: 'Feedback',
                date: '04/26/2018',
                phoneNumber: '+44121832437523',
                readOnly: true,
                disabled: true
            }
        ];

        let inputs =
            {
                id: '',
                description: '',
                status: '',
                date: '',
                phoneNumber: '',
                readOnly: false,
                disabled: false
            };
        this.state = {
            tasks: tasks,
            inputs: inputs,
            isOpen: false
        }
    }

    toggleModal() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    onEditHandler(task) {
        console.log(task);
        let tasks = this.state.tasks;
        tasks = _.map(tasks, function (t) {
            if (t.id === task.id) {
                t.readOnly = false;
                t.disabled = false;
            }
            return t;
        });
        this.setState({tasks: tasks})
    }

    onSaveHandler(task) {
        console.log(task);
        let tasks = this.state.tasks;
        tasks = _.map(tasks, function (t) {
            if (t.id === task.id) {
                t.readOnly = true;
                t.disabled = true;
            }
            return t;
        });
        this.setState({tasks: tasks})
    }

    onDeleteHandler(task) {
        console.log(task);
        let tasks = this.state.tasks;
        tasks = _.filter(tasks, function (t) {
            return t.id !== task.id;
        });
        this.setState({tasks: tasks})
    }

    onDescriptionChange(e, task) {
        console.log(e);
        let tasks = this.state.tasks;
        tasks = _.map(tasks, function (t) {
            if (t.id === task.id) {
                t.description = e.target.value;
            }
            return t;
        });
        this.setState({tasks: tasks})
    }

    onStatusChange(e, task) {
        console.log(e);
        let tasks = this.state.tasks;
        tasks = _.map(tasks, function (t) {
            if (t.id === task.id) {
                t.status = e.target.value;
            }
            return t;
        });
        this.setState({tasks: tasks})
    }

    onPhoneNumberChange(newValue, taskId) {
        let tasks = this.state.tasks;
        tasks = _.map(tasks, function (t) {
            if (t.id === taskId) {
                t.phoneNumber = newValue;
            }
            return t;
        });
        this.setState({tasks: tasks})
    }

    onDateChange(e, task) {
        console.log(e);
        let tasks = this.state.tasks;
        tasks = _.map(tasks, function (t) {
            if (t.id === task.id) {
                t.date = e.target.value;
            }
            return t;
        });
        this.setState({tasks: tasks})
    }

    onAddHandler() {
        let input = this.state.inputs;
        input.readOnly = false;
        this.setState({inputs: input})
    }

    onSaveInputHandler() {
        let input = this.state.inputs;
        let tasks = this.state.tasks;
        input.readOnly = true;
        input.id = tasks[tasks.length - 1].id + 1;
        tasks.push(input);
        this.setState({
            inputs: {
                id: '',
                description: '',
                status: '',
                date: '',
                readOnly: false
            }, tasks: tasks
        })
    }

    onDescriptionAdd(e) {
        console.log(e);
        let input = this.state.inputs;
        input.description = e.target.value;
        this.setState({inputs: input})
    }

    onStatusAdd(e) {
        console.log(e);
        let input = this.state.inputs;
        input.status = e.target.value;
        this.setState({inputs: input})
    }

    onDateAdd(e) {
        console.log(e);
        let input = this.state.inputs;
        input.date = e.target.value;
        this.setState({inputs: input})
    }

    onPhoneNumberAdd(e) {
        console.log(e);
        let input = this.state.inputs;
        input.phoneNumber = e.target.value;
        this.setState({inputs: input})
    }

    render() {
        return ( <div>
            <Table tasks={this.state.tasks} inputs={this.state.inputs} onEditHandler={this.onEditHandler.bind(this)}
                   onSaveHandler={this.onSaveHandler.bind(this)} onDeleteHandler={this.onDeleteHandler.bind(this)}
                   onDescriptionChange={this.onDescriptionChange.bind(this)} onPhoneNumberChange={this.onPhoneNumberChange.bind(this)}
                   onDateChange={this.onDateChange.bind(this)}
                   onStatusChange={this.onStatusChange.bind(this)} onDescriptionAdd={this.onDescriptionAdd.bind(this)}
                   onStatusAdd={this.onStatusAdd.bind(this)} onPhoneNumberAdd={this.onPhoneNumberAdd.bind(this)} onDateAdd={this.onDateAdd.bind(this)}
                   onAddHandler={this.onAddHandler.bind(this)} onSaveInputHandler={this.onSaveInputHandler.bind(this)}/>
        {
            <div className="Inputs">
                <Modal show={this.state.isOpen}
                       onClose={() => this.toggleModal()}>
                    <input className="inputDesc" type="text" value={this.state.inputs.description} readOnly={this.state.inputs.readOnly}
                           onChange={(e) => this.onDescriptionAdd(e)} placeholder="description"/>
                    <select className="inputSelect" value={this.state.inputs.status} disabled={this.state.inputs.readOnly}
                            onChange={(e) => this.onStatusAdd(e)}>
                        <option value="New">New</option>
                        <option value="In progress">In progress</option>
                        <option value="Resolved">Resolved</option>
                        <option value="Closed">Closed</option>
                        <option value="Feedback">Feedback</option>
                    </select>
                    <Date className="inputDate" value={this.state.inputs.date} disabled={this.state.inputs.readOnly}
                          onChange={(e) => this.onDateAdd(e)}  placeholder="date" />
                    <PhoneNumber className="inputPhone" value={this.state.inputs.phoneNumber} disabled={this.state.inputs.readOnly}
                                 onChange={(e) => this.onPhoneNumberAdd(e)}  placeholder="phone" />
                    <button className="SaveInputBtn" onClick={() => this.onSaveInputHandler()}>Save</button>
                </Modal>
                <div>  <button className="AddInputBtn" onClick={() => this.toggleModal()}>Add</button> </div>
            </div>
        }
            </div>
        );
    }
}

export default App;
