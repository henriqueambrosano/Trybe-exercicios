import React from 'react';
import PropTypes from 'prop-types';

class Pokemon extends React.Component {
  render() {
    const { pokeInfo: { name, type, image, averageWeight } } = this.props;
    return (
      <div className='pokeCard'>
        <p>{name}</p>
        <p>{type}</p>
        <p>
          AverageWeight: {averageWeight.value} {averageWeight.measurementUnit}
        </p>
        <img src={image} alt={name}></img>
      </div>
    );
  }
}

Pokemon.propTypes ={
  pokeInfo: PropTypes.shape({
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    averageWeight: PropTypes.shape({
      value: PropTypes.number.isRequired,
      measurementUnit: PropTypes.string.isRequired
    })
  })
}

export default Pokemon
