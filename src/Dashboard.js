import React from 'react'
import {Link,useParams,useNavigate} from 'react-router-dom'

const Dashboard = () => {
    const params=useParams()
    const n="djhdkh"
    const navigate=useNavigate()
  return (
    <div>Dashboard<br/>
    <p>name:{params.name}</p><br/>
    <Link to={`/about?name=${n}&id=${79}`}>about</Link><br/>
        <button onClick={()=>{
            navigate("/about")
        }}>About</button>
    </div>
  )
}

export default Dashboard