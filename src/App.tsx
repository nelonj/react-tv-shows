import React from 'react';
import './App.css';
import episodes from  './episodes.json'

// const myJSON = data;
// const episodes = JSON.parse(myJSON);
interface EpisodeProps {
  id: number;
  url: string;
  name: string;
  season: number;
  number: number;
  type: string;
  airdate: string;
  airtime: string;
  airstamp: string;
  runtime: number;
  image: {
    medium: string;
    original: string;
  };
  summary: string;
  _links: { self: { href: string } };
}


function EpisodeMaker (props: EpisodeProps) {
  return (
    <div className='body'> 
      <div className='title'> <h3> {`${props.name} - S0${props.season}E0${props.number}`} </h3> </div>
      <img src={props.image.medium} alt="medium-sized caption of each episode"></img>
      <p>{props.summary}</p>
      
  </div>)
}

function App() {
  console.log(episodes)
  return (
    <div className="App">
      
      <h1 className='header'> Game of Thrones </h1> 
      
      {episodes.map(EpisodeMaker) }
    
    <footer className = "footer"> <strong>The data on this website has been provided by <a href=" https://tvmaze.com/"> TvMaze.com </a> </strong> </footer>
    </div>
  );
}

export default App;
