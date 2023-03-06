import { render, screen } from '@testing-library/react';
import App from './App';
import Detail from './Detail'
import { BrowserRouter as Router } from 'react-router-dom';

test('renders main app', () => {
  render(
    <Router>
      <App />
    </Router>
  );
});



test('renders detail component with movie data for ', () => {
  const movieJSON = {"movieId":1,"metascore":"67","boxOffice":"$389,804,217","website":"https://marvel.com/guardians","imdbRating":"7.7","imdbVotes":"449,175","runtime":"136 min","language":"English","rated":"PG-13","production":"Walt Disney Pictures","released":"05 May 2017","imdbid":"tt3896198","plot":"The Guardians struggle to keep together as a team while dealing with their personal family issues, notably Star-Lord's encounter with his father the ambitious celestial being Ego.","director":"James Gunn","title":"Goonies","actors":"Chris Pratt, Zoe Saldana, Dave Bautista, Vin Diesel","response":"True","type":"movie","awards":"Nominated for 1 Oscar. Another 12 wins & 42 nominations.","dvd":"22 Aug 2017","year":"2017","poster":"https://m.media-amazon.com/images/M/MV5BMTg2MzI1MTg3OF5BMl5BanBnXkFtZTgwNTU3NDA2MTI@._V1_SX300.jpg","country":"USA","genre":"Action, Adventure, Comedy, Sci-Fi","writer":"James Gunn, Dan Abnett (based on the Marvel comics by), Andy Lanning (based on the Marvel comics by), Steve Englehart (Star-Lord created by), Steve Gan (Star-Lord created by), Jim Starlin (Gamora and Drax created by), Stan Lee (Groot created by), Larry Lieber (Groot created by), Jack Kirby (Groot created by), Bill Mantlo (Rocket Raccoon created by), Keith Giffen (Rocket Raccoon created by), Steve Gerber (Howard the Duck created by), Val Mayerik (Howard the Duck created by)"}

  render(<Detail selectedMovie={movieJSON} />);
  const titleElement = screen.getByText(/The Guardians struggle to keep together/i);
  expect(titleElement).toBeInTheDocument();
  expect(movieJSON.movieId).toBe(1)
});
