import React, {Component} from 'react';
import './App.css';
import Table from "../components/Table";
import _ from 'underscore';
import Modal from "./Modal";

class App extends Component {

    constructor(props) {
        super(props);
        let tasks = [
            {
                id: 1,
                description: 'Add new table',
                status: 'New',
                readOnly: true
            },
            {
                id: 2,
                description: 'Edit table',
                status: 'In progress',
                readOnly: true
            },
            {
                id: 3,
                description: 'Delete from table',
                status: 'Feedback',
                readOnly: true
            }
        ];

        let inputs =
            {
                id: '',
                description: '',
                status: '',
                readOnly: false
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
        console.log(task)
        let tasks = this.state.tasks;
        tasks = _.map(tasks, function (t) {
            if (t.id === task.id) {
                t.readOnly = false;
            }
            return t;
        });
        this.setState({tasks: tasks})
    }

    onSaveHandler(task) {
        console.log(task)
        let tasks = this.state.tasks;
        tasks = _.map(tasks, function (t) {
            if (t.id === task.id) {
                t.readOnly = true;
            }
            return t;
        });
        this.setState({tasks: tasks})
    }

    onDeleteHandler(task) {
        console.log(task)
        let tasks = this.state.tasks;
        tasks = _.filter(tasks, function (t) {
            return t.id !== task.id;
        });
        this.setState({tasks: tasks})
    }

    onDescriptionChange(e, task) {
        console.log(e)
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
        console.log(e)
        let tasks = this.state.tasks;
        tasks = _.map(tasks, function (t) {
            if (t.id === task.id) {
                t.status = e.target.value;
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
                readOnly: false
            }, tasks: tasks
        })
    }

    onDescriptionAdd(e) {
        console.log(e)
        let input = this.state.inputs;
        input.description = e.target.value;
        this.setState({inputs: input})
    }

    onStatusAdd(e) {
        console.log(e)
        let input = this.state.inputs;
        input.status = e.target.value;
        this.setState({inputs: input})
    }
    render() {
        return ( <div>
            <Table tasks={this.state.tasks} inputs={this.state.inputs} onEditHandler={this.onEditHandler.bind(this)}
                   onSaveHandler={this.onSaveHandler.bind(this)} onDeleteHandler={this.onDeleteHandler.bind(this)}
                   onDescriptionChange={this.onDescriptionChange.bind(this)}
                   onStatusChange={this.onStatusChange.bind(this)} onDescriptionAdd={this.onDescriptionAdd.bind(this)}
                   onStatusAdd={this.onStatusAdd.bind(this)} onAddHandler={this.onAddHandler.bind(this)}
                   onSaveInputHandler={this.onSaveInputHandler.bind(this)}/>
        {
            <div className="Inputs">
                <Modal show={this.state.isOpen}
                       onClose={() => this.toggleModal()}>
                    <input className="inputType" type="text" value={this.state.inputs.description} readOnly={this.state.inputs.readOnly}
                           onChange={(e) => this.onDescriptionAdd(e)} placeholder="description"/>
                    <select className="inputSelect" value={this.state.inputs.status} disabled={this.state.inputs.readOnly}
                            onChange={(e) => this.onStatusAdd(e)}>
                        <option value="New">New</option>
                        <option value="In progress">In progress</option>
                        <option value="Resolved">Resolved</option>
                        <option value="Closed">Closed</option>
                        <option value="Feedback">Feedback</option>
                    </select>
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
