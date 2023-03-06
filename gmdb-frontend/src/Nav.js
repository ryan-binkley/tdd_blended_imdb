import React, {useState} from 'react';
import {Container,Row,Col, Button, Form, Nav} from 'react-bootstrap'
import {Link, useNavigate} from 'react-router-dom'

const Navbar = ({setSelectedMovie}) => {
  const [movieName,setMovieName] = useState(null);
  const [query, setQuery] = useState(null)

  const handleSubmit = (event) => {
    event.preventDefault();
  }

  
  return(
    <Nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link to='/' className="navbar-brand text-light">GMDB</Link>
          <Button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </Button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to='/' id='nav-home' className="nav-link active text-light" aria-current="page">Home</Link>
              </li>
            </ul>
            <Form onSubmit = {(event)=> handleSubmit(event) } className="d-flex" role="search">
              <input onChange = {(event)=>setQuery(event.target.value)} className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <Button className="btn btn-outline-warning" type="submit">Search</Button>
            </Form>
          </div>
        </div>
      </Nav>
  )


}

export default Navbar