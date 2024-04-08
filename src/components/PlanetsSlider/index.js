// Write your code here

import Slider from 'react-slick'

import PlanetItem from '../PlanetItem/index'

import './index.css'

const PlanetsSlider = props => {
  const {planetsList} = props
  const settings = {
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  }

  return (
    <div className="slider-container" data-testid="planets">
      <h1 className="planets-heading">Planets</h1>
      <Slider {...settings}>
        {planetsList.map(eachItem => (
          <div key={eachItem.id}>
            <PlanetItem planetDetails={eachItem} />
          </div>
        ))}
      </Slider>
    </div>
  )
}

export default PlanetsSlider
