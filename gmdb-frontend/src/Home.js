import React, { useState,useEffect } from 'react';
import { Container,Row,Col } from 'react-bootstrap';

const Home = () => {
  const [movies,setMovies] = useState(null)
  const [loading,setLoading] = useState(true)
  const [selectedMovie, setSelectedMovie] = useState(null)

  useEffect(() => {
    setLoading(true)
    fetch('http://localhost:3001/movies')
    .then(res => res.json())
    .then(data => {
      console.log(data)
      setMovies(data)
    })
    .catch(err => console.log(err))
    .finally(setLoading(false))
  },[])

 // CHECK IF IMAGE EXISTS
function checkIfImageExists(url) {
  const img = new Image();
  img.src = url;
  
  if (img.complete) {
    return true;
  } else {
    img.onload = () => {
      return true;
    };
    
    img.onerror = () => {
      return false;
    };
  }
}

  if(movies && !loading){

    return(
      <Container>
        <h1>Home</h1>
        <Row>
          {movies.map((movie)=>{
            if(checkIfImageExists(movie.poster)){
              return(
                <Col>
                  <img src={movie.poster} alt='poster'></img>
                </Col>
              )
            }
          })}
        </Row>
      </Container>
    )
  }
}

export default Home