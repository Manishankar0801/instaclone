import { Avatar } from '@mui/material';
import React, { Component } from 'react';
import imageSrc from '../../images/pp1.png'
import './Suggestions.css'


class Suggestions extends Component {
    constructor(props) {
        super(props);
    }
    state = {  }
    render() { 
        return ( 
            <div>
                <div className="suggestions_container">
                    <div className="suggestions_header">
                        <div>Suggestions For You</div>
                    </div>

                    <div className="suggestions_body">
                        <div className="suggestions_friends">
                            <Avatar src={imageSrc} className="suggestions_images"/>
                            <div className="suggestions_username">test</div>
                        </div>
                        <div className="suggestions_friends">
                            <Avatar src={imageSrc} className="suggestions_images"/>
                            <div className="suggestions_username">dummy</div>
                        </div>
                        <div className="suggestions_friends">
                            <Avatar src={imageSrc} className="suggestions_images"/>
                            <div className="suggestions_username">water</div>
                        </div>
                        <div className="suggestions_friends">
                            <Avatar src={imageSrc} className="suggestions_images"/>
                            <div className="suggestions_username">super</div>
                        </div>
                        <div className="suggestions_friends">
                            <Avatar src={imageSrc} className="suggestions_images"/>
                            <div className="suggestions_username">alter</div>
                        </div>
                        <div className="suggestions_friends">
                            <Avatar src={imageSrc} className="suggestions_images"/>
                            <div className="suggestions_username">mupher</div>
                        </div>
                    </div>
                </div>
            </div>
         );
    }
}
 
export default Suggestions;