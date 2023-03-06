import React from 'react';
import {Container,Row,Col, Button, Form, Nav} from 'react-bootstrap'

const Detail = ({selectedMovie}) => {
  
  return(
    <Container className='py-5'>
      <Row>
        <Col>
          <img 
            src={selectedMovie.poster} 
            alt='poster'
            height='445px'
            width='300px'>
          </img>        
        </Col>
        <Col>
          <Row>
            Title: {selectedMovie.title}
          </Row>
          <Row>
            Released: {selectedMovie.released}
          </Row>
          <Row>
            Genre: {selectedMovie.genre}
          </Row>
          <Row>
            Actors: {selectedMovie.actors}
          </Row>
          <Row>
            Plot: {selectedMovie.plot}
          </Row>
        </Col>
      </Row>
    </Container>

  )


}

export default Detail