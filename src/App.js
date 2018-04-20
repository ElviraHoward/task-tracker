import React, {Component} from 'react';
import './App.css';
import Table from "./Table";
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
            <Table tasks={this.state.tasks} inputs={this.state.inputs} onEditHandler={this.onEditHandler.bind(this)}
                   onSaveHandler={this.onSaveHandler.bind(this)} onDeleteHandler={this.onDeleteHandler.bind(this)}
                   onDescriptionChange={this.onDescriptionChange.bind(this)}
                   onStatusChange={this.onStatusChange.bind(this)} onDescriptionAdd={this.onDescriptionAdd.bind(this)}
                   onStatusAdd={this.onStatusAdd.bind(this)} onAddHandler={this.onAddHandler.bind(this)}
                   onSaveInputHandler={this.onSaveInputHandler.bind(this)}/>
        );
    }
}

export default App;
