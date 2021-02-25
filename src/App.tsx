import React, { useState } from 'react';
import './App.css';
import episodes from './episodes.json';
import EpisodeCard from './EpisodeCard'
// import Select from 'react-select';


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



// const dropdownEpisodes: EpisodeProps[] = episodes

function selectDropdown(props: EpisodeProps) {

  return (
    <option key={props.id} value={props.id} > S{props.season < 10 ? `0${props.season}` : props.season}E{props.number < 10 ? `0${props.number}` : props.number} - {props.name}</option>
  )
}


function App() {
  const [search, setSearch] = useState('')
  console.log("the state:", search)
  const [episodeList, setEpisodeList] = useState(episodes)
  const totalEpisodes: number = episodes.length
  let currentEpisodes: number = episodeList.length
  // const [dropdown, setDropdown] = useState('')
  
  
  // console.log("dropdown state: ", dropdown)

  return (
    <div className="App">

      <h1 className='header'> Game of Thrones </h1>

      <div className='select'> <strong> Select an episode here: </strong>
        <select
          // value={dropdown} 
          // placeholder={'search here'}
          onChange={(event) => {
            // var element = document.getElementById(dropdown); // because dropdown is my selected episode's props.id
            // element.scrollIntoView();
            // setDropdown(event.target.value);
            if (event.target.value === 'all') {
              setEpisodeList(episodes)
            }
            else {
              setEpisodeList(episodes.filter((episode) =>
                episode.id.toString() === event.target.value))
            };
           
          }}>

          {episodes.map(selectDropdown)}
          <option value='all'> Select all episodes </option>
        </select>
      </div>

      <div className='search-bar'> <strong> Search for episodes here: </strong>
        <input
          value={search}
          placeholder={'search here'}
          onChange={(event) => {
            setSearch(event.target.value);
            let input: string = event.target.value;
            console.log("the variable:", input);
            setEpisodeList(episodes.filter((episode) => {
              return (
                episode.name.toLowerCase().includes(input.toLowerCase()) ||
                episode.summary.toLowerCase().includes(input.toLowerCase())
              )
            }));
             
          }}>
        </input>
        <p> <i> displaying {currentEpisodes}/{totalEpisodes} episodes </i></p>
      </div>

      <div className='episodes'> {episodeList.map(EpisodeCard)} </div>

      <footer className="footer"> <strong>The data on this website has been provided by <a href=" https://tvmaze.com/"> TvMaze.com </a> </strong> </footer>
    </div>
  );
}

export default App;
