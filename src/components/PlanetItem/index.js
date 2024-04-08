// Write your code here

import './index.css'

export default function PlanetItem(props) {
  const {planetDetails} = props
  const {name, description, imageUrl} = planetDetails
  return (
    <div className="card-container">
      <img src={imageUrl} alt={`planet ${name}`} className="planet-image" />
      <h1 className="planet-heading">{name}</h1>
      <p className="planet-description">{description}</p>
    </div>
  )
}
