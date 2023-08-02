import React from 'react'
import {Link,useLocation} from 'react-router-dom'


const About = () => {
    const {search}=useLocation()
    let params=new URLSearchParams(search)
  return (
    <div>About
        <br/>
        <p>Name:{params.get('name')}</p>
        <p>id:{params.get('id')}</p>
        <Link to="/">home</Link>
    </div>
  )
}

export default About