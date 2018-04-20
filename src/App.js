import React, {Component} from 'react';
import './App.css';
import _ from 'underscore';

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
                readOnly: true
            };
        this.state = {
            tasks: tasks,
            inputs: inputs
        }
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
                readOnly: true
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
        return (
            <Table tasks={this.state.tasks} inputs={this.state.inputs} onDescriptionAdd={this.onDescriptionAdd.bind(this)}
                   onStatusAdd={this.onStatusAdd.bind(this)} onAddHandler={this.onAddHandler.bind(this)} onSaveInputHandler={this.onSaveInputHandler.bind(this)}/>
        );
    }
}

function Table(props) {
    return (
        <div>
            <table>
                <tr>
                    <td>
                        Id
                    </td>
                    <td>
                        Description
                    </td>
                    <td>
                        Status
                    </td>
                    <td>
                        Actions
                    </td>
                </tr>
                <tbody>
                <TableRow tasks={props.tasks} inputs={props.inputs} onEditHandler={props.onEditHandler} onSaveHandler={props.onSaveHandler} onDeleteHandler={props.onDeleteHandler}
                          onDescriptionChange={props.onDescriptionChange} onStatusChange={props.onStatusChange} />
                </tbody>
            </table>
            {
                <div className="Inputs">
                    <input type="text" value={props.description} readOnly={props.inputs.readOnly}
                           onChange={(e) => props.onDescriptionAdd(e)} placeholder="description"/>
                    <select value={props.status} disabled={props.inputs.readOnly}
                            onChange={(e) => props.onStatusAdd(e)}>
                        <option value="New">New</option>
                        <option value="In progress">In progress</option>
                        <option value="Resolved">Resolved</option>
                        <option value="Closed">Closed</option>
                        <option value="Feedback">Feedback</option>
                    </select>
                    {props.inputs.readOnly ? <button onClick={() => props.onAddHandler()}>Add</button> :
                        <button onClick={() => props.onSaveInputHandler()}>Save</button>}
                </div>
            }
        </div>
    );
}

function TableRow(props) {
    return (
            _.map(props.tasks,
            function (task) {
                return <tr>
                    <td>
                        {task.id}
                    </td>
                    <td>
                        <input type="text" value={task.description} readOnly={task.readOnly}
                               onChange={(e) => props.onDescriptionChange(e, task)}/>
                    </td>
                    <td>
                        <select value={task.status} disabled={task.readOnly} onChange={(e) => props.onStatusChange(e, task)}>
                            <option value="New" selected={task.status === 'New'}>New</option>
                            <option value="In progress" selected={task.status === 'In progress'}>In progress</option>
                            <option value="Resolved" selected={task.status === "Resolved"}>Resolved</option>
                            <option value="Closed" selected={task.status === "Closed"}>Closed</option>
                            <option value="Feedback" selected={task.status === "Feedback"}>Feedback</option>
                        </select>
                    </td>
                    <td>
                        {task.readOnly ?
                            <button onClick={props.onEditHandler}>Edit</button> : <button onClick={props.onSaveHandler}>Save</button>}
                        <button onClick={props.onDeleteHandler}>Delete</button>
                    </td>
                </tr>
            })
    );
}

export default App;
