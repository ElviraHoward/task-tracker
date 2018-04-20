import TableRow from "./TableRow";
import React from 'react';
import _ from 'underscore';

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
                {_.map(props.tasks,
                    function (task) {
                        return <TableRow task={task} onEditHandler={props.onEditHandler}
                                         onSaveHandler={props.onSaveHandler} onDeleteHandler={props.onDeleteHandler}
                                         onDescriptionChange={props.onDescriptionChange}
                                         onStatusChange={props.onStatusChange}/>
                    })
                }
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

export default Table;