import React, { useState } from 'react';
import './App.css';
import episodes from './episodes.json'

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


function EpisodeMaker(props: EpisodeProps) {
  
  return (
    <div className='body'>
      <div className='title'> 
      <h3> {props.name} - S{props.season<10 ? `0${props.season}` : props.season}E{props.number<10 ? `0${props.number}` : props.number} </h3> 
      </div>
      <img src={props.image.medium} alt="medium-sized caption of each episode"></img>
      <p>{props.summary.replace(/<p>|<\/p>/g, '')}</p>

    </div>)
}

function App() {
  const [search, setSearch] = useState('')
  console.log("the state:", search)
  const [episodeList, setEpisodeList] = useState(episodes)
  
  return (
    <div className="App">

      <h1 className='header'> Game of Thrones </h1>
      
      <div className='search-bar'> <strong> Search for episodes here: </strong>
        <input value={search}
          onChange={(event) => {
            setSearch(event.target.value);
            let input: string = event.target.value;
            console.log("the variable:", input);
            setEpisodeList(episodes.filter((episode) => {
              return (
                episode.name.toLowerCase().includes(input.toLowerCase()) ||
                episode.summary.toLowerCase().includes(input.toLowerCase())
            )}))

          }}></input></div>

      <div className='episodes'> {episodeList.map(EpisodeMaker)} </div>

      <footer className="footer"> <strong>The data on this website has been provided by <a href=" https://tvmaze.com/"> TvMaze.com </a> </strong> </footer>
    </div>
  );
}

export default App;
