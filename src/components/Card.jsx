/* eslint-disable react/prop-types */
import locationIcon from "../assets/location-icon.png";

export default function Card(props) {
  return (
    <div className="card">
      <img className="card-image" src={props.imageUrl} alt={props.title} />
      <div className="card-text">
        <div className="location">
          <img
            className="location-icon"
            src={locationIcon}
            alt="Location Icon"
          />
          <p className="card-location">{props.location}</p>
          <a
            className="card-map-url"
            href={props.googleMapsUrl}
            target="_blank"
            rel="noreferrer"
          >
            View on Google Maps
          </a>
        </div>
        <h1 className="card-title">{props.title}</h1>
        <p className="card-date">{props.date}</p>
        <p className="card-description">{props.description}</p>
      </div>
    </div>
  );
}
