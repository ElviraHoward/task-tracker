import React, {Component} from 'react';
import './Picture.css';

class Picture extends Component {
    render() {
        return (
            <div>
                <div class="gallery">
                    <img className="pic" src={require('../img/fjord1.jpg')} alt="Fjords"/>
                    <div class="desc">Add a description of the image here</div>
                </div>

                <div class="gallery">
                    <img className="pic" src={require('../img/fjord2.jpg')} alt="Forest"/>
                    <div class="desc">Add a description of the image here</div>
                </div>

                <div class="gallery">
                    <img className="pic" src={require('../img/fjord3.jpg')} alt="Northern Lights"/>
                    <div class="desc">Add a description of the image here</div>
                </div>

                {/*     <div> <img src={require('./Tom-Hardy.jpeg')} /> </div>*/}
            </div>
        );
    }
}

export default Picture;