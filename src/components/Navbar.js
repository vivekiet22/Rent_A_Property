import React from 'react'

const Navbar = () => {
  return (
    <nav style={{backgroundColor:"#fafafa"}}  className="navbar navbar-expand-lg ">
  <div  className="container-fluid">
    <a style={{color:"black",fontWeight:"700"}} className="navbar-brand" href="/">Rent a Property</a>
    <button  className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span  className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a style={{color:"black",fontWeight:"700"}} className="nav-link  mx-2" aria-current="page" href="/">Rent</a>
        </li>
        <li className="nav-item">
          <a style={{color:"black",fontWeight:"700"}} className="nav-link active mx-2" href="/">Buy</a>
        </li>
        <li className="nav-item">
          <a style={{color:"black",fontWeight:"700"}} className="nav-link mx-2" href="/">Sell</a>
        </li>
        <li className="nav-item dropdown">
          <a style={{color:"black",fontWeight:"700"}} className="nav-link mx-2 dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Manage Property
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="/">Action</a></li>
            <li><a className="dropdown-item" href="/">Another action</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="/">aur koi action</a></li>
          </ul>
        </li>
        <li className="nav-item dropdown">
          <a style={{color:"black",fontWeight:"700"}} className="nav-link mx-2 dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Resources
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="/">Vivek</a></li>
            <li><a className="dropdown-item" href="/">Another Vivek</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="/">aur koi Vivek</a></li>
          </ul>
        </li>
      </ul>
        <button className="btn btn-outline-success mx-1" type="submit">Login</button>
        <button className="btn btn-primary mx-4" type="submit">Sign up</button>
      
    </div>
  </div>
</nav>
  )
}

export default Navbar
