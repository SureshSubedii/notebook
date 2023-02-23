import React,{useState} from 'react'
import {useNavigate} from 'react-router-dom' //useHistory replaced by useNavigate

const Login = () => {
    const [credentials, setcredentials] = useState({email:"",password:""})
    let navigate=useNavigate()
    const handleChange=(e)=>{
        setcredentials({...credentials,[e.target.name]:e.target.value})
      }
    const handleSubmit= async (e)=>{
        e.preventDefault()
        const url='http://localhost:5000/api/auth/login'
        const response = await fetch(url, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
             
            },
            body:JSON.stringify({email:credentials.email,password:credentials.password})
        
          });
          const json= await  response.json();
          console.log(json);
          if(json.success){
            //save the auth token and redirect
            localStorage.setItem('token',json.AuthToken);
            navigate("/");

          }
          else{
            alert("Invalid credentials");
          }
        

    }
  return (
    <form onSubmit={handleSubmit}>
    <div className="mb-3">
      <label htmlFor="email" className="form-label">Email address</label>
      <input type="email" className="form-control" onChange={handleChange}  value={credentials.email} id="email" name="email" aria-describedby="emailHelp"/>
      <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
    </div>
    <div className="mb-3">
      <label htmlFor="password" className="form-label">Password</label>
      <input type="password" className="form-control"  onChange={handleChange} value={credentials.password}  id="password" name="password"/>
    </div>
    <button type="submit" className="btn btn-primary" >Submit</button>
  </form>
  )
}

export default Login