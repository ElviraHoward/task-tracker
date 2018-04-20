import React from 'react';

function TableRow(props) {
    return <tr>
        <td>
            {props.task.id}
        </td>
        <td>
            <input type="text" value={props.task.description} readOnly={props.task.readOnly}
                   onChange={(e) => props.onDescriptionChange(e, props.task)}/>
        </td>
        <td>
            <select value={props.task.status} disabled={props.task.readOnly}
                    onChange={(e) => props.onStatusChange(e, props.task)}>
                <option value="New" selected={props.task.status === 'New'}>New</option>
                <option value="In progress" selected={props.task.status === 'In progress'}>In progress</option>
                <option value="Resolved" selected={props.task.status === "Resolved"}>Resolved</option>
                <option value="Closed" selected={props.task.status === "Closed"}>Closed</option>
                <option value="Feedback" selected={props.task.status === "Feedback"}>Feedback</option>
            </select>
        </td>
        <td>
            {props.task.readOnly ? <button onClick={() => props.onEditHandler(props.task)}>Edit</button> :
                <button onClick={() => props.onSaveHandler(props.task)}>Save</button>}
            <button onClick={() => props.onDeleteHandler(props.task)}>Delete</button>
        </td>
    </tr>
}

export default TableRow;