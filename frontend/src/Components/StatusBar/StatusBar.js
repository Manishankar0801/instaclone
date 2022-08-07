import { Avatar } from '@mui/material';
import React, { Component } from 'react';
import './StatusBar.css'
import statusimg from '../../images/pp1.png'
import uploadImage from '../../images/statusadd.png'

class StatusBar extends Component {
    constructor(props) {
        super(props);
        this.state={
            statusList: []
        }
    }

    componentDidMount(){
        this.getData()
    }
    getData=()=>{
        let data=[
            {
                "username":"manishankar_janumpalli",
                "imageURL":"../../images/pp1.png"  
            },
            {
                "username":"manishankar_janumpalli",
                "imageURL":"../../images/pp1.png"  
            },
            {
                "username":"manishankar_janumpalli",
                "imageURL":"../../images/pp1.png"  
            },
            {
                "username":"manishankar_janumpalli",
                "imageURL":"../../images/pp1.png"  
            },
            {
                "username":"manishankar_janumpalli",
                "imageURL":"../../images/pp1.png"  
            },
            {
                "username":"manishankar_janumpalli",
                "imageURL":"../../images/pp1.png"  
            },
            {
                "username":"manishankar_janumpalli",
                "imageURL":"../../images/pp1.png"  
            },
            {
                "username":"manishankar_janumpalli",
                "imageURL":"../../images/pp1.png"  
            },
            {
                "username":"jyjj",
                "imageURL":"../../images/pp1.png"  
            }
        ]
        this.setState({statusList:data})
    }

    render() { 
        return ( 
            <div>
                <div className="statusbar_container">
                        <img className="statusbar_upload" src={uploadImage} width="55px" height="55px"/>
                    {
                        this.state.statusList.map((item,index)=>(
                            <div className="status">
                                <Avatar className="statusbar_status" src={statusimg}/>
                                <div className="statusbar_text">{item.username}</div>
                            </div>
                        ))
                    }
                </div>
            </div>
         );
    }
}
 
export default StatusBar;