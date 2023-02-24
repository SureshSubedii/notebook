import React,{useState}  from 'react'
import {useNavigate} from 'react-router-dom'


const Signup = (props) => {
  const [credentials, setcredentials] = useState({name:"",password:"",email:""})
  const {name,email,password}=credentials;
  const navigate=useNavigate();
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
        if(json.success){
        localStorage.setItem('token',json.AuthToken);
        props.showAlert("Account Created","success");
            navigate("/login");
          }
            else{
              props.showAlert("Invalid Credentials","danger");
            }

        
      

  }
  return (
    <div className="container">
      <h1>Register your account on CNotes.</h1><form onSubmit={handleSubmit}>
      <div className="mb-3">
      <label htmlFor="name" className="form-label">Name</label>
      <input type="text" className="form-control" onChange={handleChange} name="name" id="name"/>
    </div>
    <div className="mb-3">
      <label htmlFor="email" className="form-label">Email address</label>
      <input type="email" className="form-control" onChange={handleChange}  name="email" id="email" aria-describedby="emailHelp"/>
      <div id="emailHelp" className="form-text">Your email is secured with us.</div>
    </div>
    <div className="mb-3">
      <label htmlFor="password" className="form-label">Password</label>
      <input type="password" className="form-control" name="password" onChange={handleChange} minLength={4} id="password" required/>
    </div>
    <div className="mb-3">
      <label htmlFor="cpassword" className="form-label">Confirm Password</label>
      <input type="password" className="form-control" name="cpassword"  onChange={handleChange}  id="cpassword"/>
    </div>

    <button type="submit" className="btn btn-primary">Sign Up</button>
  </form>
  </div>
  )
}

export default Signup