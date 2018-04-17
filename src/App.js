import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const TABLE_COLUMNS = [
    {
        label: 'ID',
    },{
        label: 'Description',
    },{
        label: 'Status',
    }, {
        label: 'Action',
    }
];

const tableData = [
    [1, "blabla", "in progress", <button onClick={(e)=> this.fDelete(e)} className="DelBtn">Delete</button>, <button onClick={(e)=> this.fSubmit(e)} className="EditBtn">Edit</button>],
    [2, "blabla", "resolved", <button onClick={(e)=> this.fDelete(e)} className="DelBtn">Delete</button>, <button onClick={(e)=> this.fSubmit(e)} className="EditBtn">Edit</button>],
    [3, "blabla", "feedback", <button onClick={(e)=> this.fDelete(e)} className="DelBtn">Delete</button>, <button onClick={(e)=> this.fSubmit(e)} className="EditBtn">Edit</button>],
    [4, "blabla", "closed", <button onClick={(e)=> this.fDelete(e)} className="DelBtn">Delete</button>, <button onClick={(e)=> this.fSubmit(e)} className="EditBtn">Edit</button>],
];

const TableHeader = (props) => {
    return(
        <thead>
        <tr>
            {TABLE_COLUMNS.map((element, index) =>
                <th key={index}>{element.label}</th>
            )}
        </tr>
        </thead>
    )
};

class TableBody extends Component {
    render () {
        return (
            <tbody>
            {tableData.map((element, index) =>
                <tr key={index+1}>
                    {element.map((item, i) =>
                        <td>{item}</td>
                    )}
                </tr>
            )}
            </tbody>
        )
    }
}
class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            datas: [],
            column: TABLE_COLUMNS,
        }
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
        <table  border="1">
            <TableHeader columns={this.state.column} />
            <TableBody data={this.state.data} />
        </table>
      </div>
    );
  }
}

export default App;
