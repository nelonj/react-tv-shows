
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

interface ISearchBar {
    search: string;
    setSearch: (search: string) => void;
    setEpisodeList: (episodeList:EpisodeProps[]) => void
}

function SearchBar({search, setSearch, setEpisodeList}: ISearchBar) {
    return (
        <input
          className='input'
          value={search}
          placeholder= {'search for episodes here...'}
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
    )};

    export default SearchBar;