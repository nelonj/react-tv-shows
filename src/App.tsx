import React, { useState } from 'react';
import './App.css';
import episodes from './episodes.json';
import EpisodeCard from './EpisodeCard';
import SearchBar from './SearchBar';
import DropdownBar from './DropdownBar'
// import Select from 'react-select';


// const myJSON = data;
// const episodes = JSON.parse(myJSON);




function App() {
  const [search, setSearch] = useState('')
  console.log("the state:", search)
  const [episodeList, setEpisodeList] = useState(episodes)
  const totalEpisodes: number = episodes.length
  let currentEpisodes: number = episodeList.length

  return (
    <div className="App">
      <header className='header'>
        <h1 className='universal-header'> TV shows </h1>
        <h1 className='specific-header'> Game of Thrones</h1>
      </header>
      <div className='search-material'> 
      <div className='search-bar'> 
        <SearchBar 
          search={search} 
          setSearch={setSearch} 
          setEpisodeList={setEpisodeList}/>
      </div>

      <div className='select'> 
        < DropdownBar 
          setEpisodeList = {setEpisodeList} />
     
      </div>
        <div className = 'displaying-episodes'> 
          <p> <i> displaying {currentEpisodes}/{totalEpisodes} episodes </i></p>
          </div>
      </div>

      <div className='episodes'> {episodeList.map(EpisodeCard)} </div>

      <footer className="footer"> 
        <strong>The data on this website has been provided by 
          <a href=" https://tvmaze.com/"> TvMaze.com </a> </strong> 
      </footer>
    </div>
  );
}

export default App;
