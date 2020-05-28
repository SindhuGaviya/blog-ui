import React from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'

class PostsShow extends React.Component{
    constructor(){
        super()
        this.state={
           
            users:{},
            post:[],
            comments:[]

        }
    }
    componentDidMount(){
        console.log('component did mount')
         const id=this.props.match.params.id
        
         
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        
       .then((response)=>{
           const post=response.data
           axios.get(`https://jsonplaceholder.typicode.com/users/${post.userId}`)
        
                .then((response)=>{
                    
                    const users=response.data
                    this.setState({users})
                })
           this.setState({post})
       })
       .catch((err)=>{
           console.log(err)
       })

       axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
       .then((response)=>{
           
        const comments=response.data
        this.setState({comments})
    })
    .catch((err)=>{
        console.log(err)
    })
    }
    render(){
        return(
            <div>
               <h2>User Name-{this.state.users.name}</h2>
               <h3>Title:{this.state.post.title}</h3>
               <h3>Body:</h3>
               <p>{this.state.post.body}</p>
               <h3>Comments</h3>
               <ul>
              {this.state.comments.map(comment=>{
                  return <li key={comment.id}>{comment.body}</li>
              })}
              </ul>
              <h2><Link to={`/users/${this.state.users.id}`}>More posts about {this.state.users.name}</Link></h2>
            </div>
        )
    }
}
export default PostsShow