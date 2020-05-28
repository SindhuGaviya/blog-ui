import React from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
 
class UserShow extends React.Component{
    constructor(){
        super()
        this.state={
            user:[],
           posts:[]
        }
    }
    componentDidMount(){
        const id=this.props.match.params.id
        axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then(response=>{
            const user=response.data
            this.setState({user})
        })
        .catch(err=>{
            alert(err)
        })
   
      
        axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
        .then(response=>{
            const posts=response.data
            this.setState({posts})
        })
        .catch(err=>{
            alert(err)
        })
    }
    render(){
        return(
            <div>
                <h2>User Name-{this.state.user.name}</h2>
                <h3>Posts written by user</h3>
                <ul>
                    {this.state.posts.map(post=>{
                        return <li key={post.id}><Link to={`/posts/${post.id}`}>{post.title}</Link></li>
                    })}
                </ul>
               
                <Link to="/users">back</Link>
                </div>
        )
    }
}
export default UserShow