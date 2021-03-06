import React from 'react';
import { Link } from 'react-router-dom';

class Pokemon extends React.Component {
  render() {
    const {
      pokemon: { name, type, averageWeight, image, id },
    } = this.props;

    return (
      <div className="pokemon">
        <div>
          <p> {name} </p>
          <p> {type} </p>
          <p>
            {' '}
            {`Average weight: ${averageWeight.value} ${averageWeight.measurementUnit}`}
          </p>
        </div>
        <img src={image} alt={`${name} sprite`} />
        <Link to={`/mais-detalhes/${id}`}>Mais detalhes</Link>
      </div>
    );
  }
}

export default Pokemon;
