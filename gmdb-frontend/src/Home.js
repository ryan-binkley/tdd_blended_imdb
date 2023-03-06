import React, { useState,useEffect } from 'react';
import { Container,Row,Col } from 'react-bootstrap';
import {Link} from 'react-router-dom'
import { createContext } from 'react';

export const MovieContext = createContext(null)

const Home = ({setSelectedMovie}) => {


  const [movies,setMovies] = useState(null);
  const [loading,setLoading] = useState(true);

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

  const handleClick = (movie) => {
    setSelectedMovie(movie)
  }

  if(movies && !loading){

    return(
      <Container className='home-container'>
        <h1>Home</h1>
        <Row>
          {movies.map((movie)=>{
                return(
                  <Col className='movie-container py-2 px-2'>
                    <Link to= {`/detail/${movie.movieId}`}>
                      <img 
                      onClick = {()=>handleClick(movie)}
                      src={movie.poster} 
                      alt={movie.title}
                      height='445px'
                      width='300px'></img>
                    </Link>  
                  </Col>
                )
          })}
        </Row>
      </Container>
    )
  }
}

export default Home