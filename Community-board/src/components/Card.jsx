import './Card.css';

const Card = ({ title, description, image, url }) => {
  return (
    <div className="card">
      <img src={image} alt={title} className="card-image" />
      <div className="card-content">
        <h3>{title}</h3>
        <p>{description}</p>
        <a href={url} target="_blank" rel="noopener noreferrer">
          <button className="card-button">Learn More</button>
        </a>
      </div>
    </div>
  );
}

export default Card;
