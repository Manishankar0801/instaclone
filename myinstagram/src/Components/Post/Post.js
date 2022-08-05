import React, { Component } from 'react';
import "./Post.css"
import Avatar from '@mui/material/Avatar';
import love from '../../images/love.svg'
import share from '../../images/share.svg'
import comment from '../../images/comment.svg'

class Post extends Component {
    constructor(props) {
        super(props);
        this.state ={
            commentList:[]
        }
    }
    
    componentDidMount(){
        this.getComments();
    }

    getComments=()=>{
        let data=[
            {
                "username":"Mani",
                "commentId":"123",
                "timeStamp": "1234",
                "description": "Comment 1"
            },
            {
                "username":"Super",
                "commentId":"123",
                "timeStamp": "1234",
                "description": "Comment 2"
            },
            {
                "username":"Bumper",
                "commentId":"123",
                "timeStamp": "1234",
                "description": "Comment 7"
            }
        ];
        this.setState({commentList: data})
    }

    render() { 
        return ( 
            <div className="post_container">
                <div className="post_header">
                    <Avatar className="post_image" src=""/>
                    <div className="post_username">{this.props.userName}</div>
                </div>
                <div>
                    <img src={this.props.postImage} width="615px"/>
                </div>
                <div>
                    <div style={{"marginLeft":"10px"}}>
                        <img src={love} className="post_reactimage"/>
                        <img src={comment} className="post_reactimage"/>
                        <img src={share} className="post_reactimage"/>
                    </div>
                    <div style={{"fontWeight":"bold","marginLeft":"20px"}}>
                        {this.props.likes} likes
                    </div>
                </div>
                <div>
                    {
                        this.state.commentList.map((item,index)=>(
                            <div className="post_comment">{item.username}: {item.description}</div>
                        ))
                    }
                    <input tex="text" className="post_commentbox" placeholder="Add a Comment......"/>
                </div>
            </div>
         );
    }
}
 
export default Post;