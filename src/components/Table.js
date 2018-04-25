import TableRow from "./TableRow";
import React from 'react';
import _ from 'underscore';

function Table(props) {
    return (
        <div>
            <table>
                <tr>
                    <th>
                        Id
                    </th>
                    <th>
                        Description
                    </th>
                    <th>
                        Status
                    </th>
                    <th>
                        Date
                    </th>
                    <th>
                        Phone number
                    </th>
                    <th>
                        Actions
                    </th>
                </tr>
                <tbody>
                {_.map(props.tasks,
                    function (task) {
                        return <TableRow task={task} onEditHandler={props.onEditHandler}
                                         onSaveHandler={props.onSaveHandler} onDeleteHandler={props.onDeleteHandler}
                                         onDescriptionChange={props.onDescriptionChange}
                                         onStatusChange={props.onStatusChange}
                                         onPhoneNumberChange={props.onPhoneNumberChange}
                                         onDateChange={props.onDateChange}/>
                    })
                }
                </tbody>
            </table>
        </div>
    );
}

export default Table;