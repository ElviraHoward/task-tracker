import React, { Component } from 'react';
import './App.css';

class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            head_names: ['id', 'description', 'status', 'actions'],
            rows: [
                [1, "blabla", <Status />, <button onClick={(e)=> this.fDelete(e)} className="DelBtn">Delete</button>, <button onClick={(e)=> this.fSubmit(e)} className="EditBtn">Edit</button>],
                [2, "blabla", <Status />, <button onClick={(e)=> this.fDelete(e)} className="DelBtn">Delete</button>, <button onClick={(e)=> this.fSubmit(e)} className="EditBtn">Edit</button>],
                [3, "blabla", <Status />, <button onClick={(e)=> this.fDelete(e)} className="DelBtn">Delete</button>, <button onClick={(e)=> this.fSubmit(e)} className="EditBtn">Edit</button>],
                [4, "blabla", <Status />, <button onClick={(e)=> this.fDelete(e)} className="DelBtn">Delete</button>, <button onClick={(e)=> this.fSubmit(e)} className="EditBtn">Edit</button>],
            ]
        }
    }

    AddRow() {
        let newRows = this.state.rows;
        newRows.push();
        this.setState({rows: newRows});
    }

    fSubmit = (e) => {
        e.preventDefault();

        let datas = this.state.datas;
        let description = this.state.description;
        let status = this.state.status;

        let data = {
            description, status
        }

        datas.push(data);

        this.setState({
            datas: datas
        });

        this.refs.myForm.reset();
    }

    fDelete = (i) => {
        let datas = this.state.datas;
        datas.splice(i,1);

        this.setState({
            datas: datas
        });

        this.refs.myForm.reset();
    }

  render() {
    return (
      <div className="App">
          <form ref="myForm" className="Inputs">
              <input name="id"  />
              <input type="text" name="description" placeholder="description"/>
              <input type="text" name="status" placeholder="status"/>
          </form>
          <button onClick={(e)=> this.fSubmit(e)} className="AddBtn">ADD</button>
          <h1 className="App-title">Task tracker</h1>
          <Table head={this.state.head_names} rows={this.state.rows} />
      </div>
    );
  }
}

class Table extends Component {
    render() {
        return (
            <table border="1">
                <thead>
                {this.genHead()}
                </thead>
                <tbody>
                {this.genRow()}
                </tbody>
            </table>
        );
    }

    genHead() {
        var head = this.props.head;

        return head.map(function(v, i) {
            return (
                <th key={'th' + i}>
                    {v}
                </th>
            );
        });
    }

    genRow() {
        var rows = this.props.rows;

        return rows.map(function(v, i) {
            var tmp = v.map(function(v2, j) {
                return (
                    <td key={'td' + i + '_' + j}>
                        {v2}
                    </td>
                );
            });

            return (
                <tr key={'tr' + i}>
                    {tmp}
                </tr>
            )
        });
    }
}
class Status extends Component {
    constructor(props) {
        super(props);
        this.state = {value: 'in progress'};

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    render() {
        return (
            <form>
                <label>
                    <select value={this.state.value} onChange={this.handleChange}>
                        <option value="in progress">In progress</option>
                        <option value="resolved">Resolved</option>
                        <option value="closed">Closed</option>
                        <option value="feedback">Feedback</option>
                    </select>
                </label>
            </form>
        );
    }
}

export default App;
