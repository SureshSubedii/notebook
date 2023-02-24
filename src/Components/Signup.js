import React,{useState}  from 'react'
import {useNavigate} from 'react-router-dom'


const Signup = () => {
  const [credentials, setcredentials] = useState({name:"",password:"",email:""})
  const {name,email,password}=credentials;
  let navigate=useNavigate();
  const handleChange=(e)=>{
      setcredentials({...credentials,[e.target.name]:e.target.value})
    }
  const handleSubmit= async (e)=>{
      e.preventDefault()
      const url='http://localhost:5000/api/auth/createuser'
      const response = await fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
           
          },
          body:JSON.stringify({name,password,email})
      
        });
        const json= await  response.json();
        console.log(json);
        localStorage.setItem('token',json.AuthToken);
            navigate("/");
        
      

  }
  return (
    <div className="container"><form onSubmit={handleSubmit}>
      <div className="mb-3">
      <label htmlFor="name" className="form-label">Name</label>
      <input type="text" className="form-control" onChange={handleChange} name="name" id="name"/>
    </div>
    <div className="mb-3">
      <label htmlFor="email" className="form-label">Email address</label>
      <input type="email" className="form-control" onChange={handleChange}  name="email" id="email" aria-describedby="emailHelp"/>
      <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
    </div>
    <div className="mb-3">
      <label htmlFor="password" className="form-label">Password</label>
      <input type="password" className="form-control" name="password" onChange={handleChange} minLength={4} id="password" required/>
    </div>
    <div className="mb-3">
      <label htmlFor="cpassword" className="form-label">Confirm Password</label>
      <input type="password" className="form-control" name="cpassword"  onChange={handleChange}  id="cpassword"/>
    </div>

    <button type="submit" className="btn btn-primary">Submit</button>
  </form></div>
  )
}

export default Signup