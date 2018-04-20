import React, {Component} from 'react';

class Picture extends Component {
    render() {
        return (
            <div> <img src={require('./Tom-Hardy.jpeg')} /> </div>
        );
    }
}
export default Picture;