import React, { Component } from 'react';
import Post from '../Post/Post';
import './MainPage.css'

class MainPage extends Component {
    constructor(props) {
        super(props);
        this.state={
            postArray:[]
        }
    }
    
    componentDidMount(){
        this.getPost();
    }

    getPost=()=>{
        let data=[
            {
                "postId":"12345",
                "userName":"Mani Shankar",
                "postImageURL":"https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
                "timestamp": "1234",
                "likes": "12343"
            },
            {
                "postId":"12345",
                "userName":"Mani Shankar",
                "postImageURL":"https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
                "timestamp": "1234",
                "likes": "12343"
            },
            {
                "postId":"12345",
                "userName":"Mani Shankar",
                "postImageURL":"https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
                "timestamp": "1234",
                "likes": "12343"
            },
            {
                "postId":"12345",
                "userName":"Mani Shankar",
                "postImageURL":"https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
                "timestamp": "1234",
                "likes": "12343"
            }
        ];
        this.setState({postArray: data})
    }

    render() { 
        return ( 
            <div>
                {
                    this.state.postArray.map((item,index)=>(
                        <Post id={item.postId} userName={item.userName} postImage={item.postImageURL} likes={item.likes}/>
                    ))
                }
            </div>
         );
    }
}

export default MainPage;