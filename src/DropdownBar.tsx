import './App.css';
import episodes from './episodes.json';


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

interface IDropdownBar {
  setEpisodeList: (episodes: EpisodeProps[]) => void
}

function DropdownBar ({setEpisodeList}: IDropdownBar) {
  
  return (
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

          {episodes.map(DropdownList)}
          <option value='all'> Select all episodes </option>
        </select>
  )}

function DropdownList(props: EpisodeProps) {

    return (
      <option key={props.id} value={props.id} > S{props.season < 10 ? `0${props.season}` : props.season}E{props.number < 10 ? `0${props.number}` : props.number} - {props.name}</option>
    )
  }



  export default DropdownBar;