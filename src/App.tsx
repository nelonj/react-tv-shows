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
      <h1 className='header'> Game of Thrones </h1>

      <div className='select'> <strong> Select an episode here: </strong>
        < DropdownBar 
          setEpisodeList = {setEpisodeList} />
      </div>

      <div className='search-bar'> <strong> Search for episodes here: </strong>
        <SearchBar 
          search={search} 
          setSearch={setSearch} 
          setEpisodeList={setEpisodeList}/>
        <p> <i> displaying {currentEpisodes}/{totalEpisodes} episodes </i></p>
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
