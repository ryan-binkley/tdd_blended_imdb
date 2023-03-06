import React from 'react';
import {Container,Row,Col, Button, Form, Nav} from 'react-bootstrap'

const Navbar = () => {
  

  return(
    <Nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand text-light" href="index.html">GMDB</a>
          <Button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </Button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active text-light" aria-current="page" href=" ">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-light" href=" ">Login</a>
              </li>
            </ul>
            <Form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <Button className="btn btn-outline-warning" type="submit">Search</Button>
            </Form>
          </div>
        </div>
      </Nav>
  )


}

export default Navbar