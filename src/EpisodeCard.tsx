
import './App.css';


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

// function ZeroPadding(props: EpisodeProps) {
//   return (
//   <h3> S{props.season < 10 ? `0${props.season}` : props.season}E{props.number < 10 ? `0${props.number}` : props.number} </h3>
//     )
// }
function EpisodeCard(props: EpisodeProps) {

  return (
    <div className='body' key={props.id}>
      <div className='title'>
        <h3> {props.name} - S{props.season < 10 ? `0${props.season}` : props.season}E{props.number < 10 ? `0${props.number}` : props.number} </h3>
      </div>
      <img src={props.image.medium} alt="medium-sized caption of each episode"></img>
      <p>{props.summary.replace(/<p>|<\/p>/g, '')}</p>

    </div>)
}

export default EpisodeCard;