import React from 'react'
import {BrowserRouter,Link,Route} from 'react-router-dom'
import Home from './Home'
import Users from './Users'
import Posts from './Posts'
import PostsShow  from './PostsShow'
import UserShow from './UserShow'

function Blog() {
  return (
    <BrowserRouter>
    <div>
      
      <Link to='/'>Home</Link>|
      <Link to='/users'>Users</Link>|
      <Link to='/posts'>Posts</Link>
      
      <Route path='/' component={Home} exact={true}/>
      <Route path='/users' component={Users} exact={true}/>
      <Route path='/users/:id' component={UserShow}/>
      
      <Route path='/posts' component={Posts} exact={true}/>
      <Route path='/posts/:id' component={PostsShow}/>
      
    </div> 
    </BrowserRouter>
  )
}

export default Blog;
