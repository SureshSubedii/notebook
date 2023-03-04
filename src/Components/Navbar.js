import React,{} from 'react'
  import { Link,useLocation,useNavigate} from 'react-router-dom';

const Navbar = () => {
  let location = useLocation();
  const navigate=useNavigate();
  const handleLogout=()=>{
    localStorage.removeItem('token');
    navigate("/")
  }
  if(location.pathname==="/"){
    document.body.style.backgroundColor='black'
  }
  else{
    document.body.style.backgroundColor='white'

  }

  // useEffect(() => {
  //  console.log(location.pathname)
  // }, [location]);
  return (
    <nav className="navbar navbar-expand-lg  navbar-info bg-info">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/" style={{fontFamily:'cursive'}}>CNotes!</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className={`nav-link ${location.pathname==="/home"?"active":""} ${!localStorage.getItem('token')?'disabled':''}`}  aria-current="page" to="/home">Home</Link>
        </li>
        <li className="nav-item">
          <Link className={`nav-link ${location.pathname==="/about"?"active":""}`} to="/about">About</Link>
        </li>
        <li className="nav-item">
          <Link className={`nav-link d-none`} to="/">Front</Link>
        </li>
       
      </ul>
      {!localStorage.getItem('token')?
      <form classname="d-flex"><Link className="btn btn-primary mx-2" to="/login" role="button">Log In </Link>
      <Link className="btn btn-primary mx-2" to="/signup" role="button">Sign Up </Link> </form>: <button onClick={handleLogout} className="btn btn-primary">LogOut</button>}
    </div>
  </div>
</nav>
  )
}

export default Navbar