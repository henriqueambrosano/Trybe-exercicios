// src/Cars.jsx

import React from 'react';
import carBlue from './images/carBlue.jpeg';
import carRed from './images/carRed.jpeg';
import carYellow from './images/carYellow.jpeg';
import MyContext from './MyContext';

function Cars({ redCar, blueCar, yellowCar, moveCar }) {
  return (
    <MyContext.Consumer>
      {({state, moveCar}) => (
        <div>
          <div>
            <img
              className={state.red ? 'car-right' : 'car-left'}
              src={carRed}
              alt="red car"
            />
            <button onClick={() => moveCar('red', !state.red)} type="button">
              Move
            </button>
          </div>
          <div>
            <img
              className={state.blue ? 'car-right' : 'car-left'}
              src={carBlue}
              alt="blue car"
            />
            <button onClick={() => moveCar('blue', !state.blue)} type="button">
              Move
            </button>
          </div>
          <div>
            <img
              className={state.yellow ? 'car-right' : 'car-left'}
              src={carYellow}
              alt="yellow car"
            />
            <button onClick={() => moveCar('yellow', !state.yellow)} type="button">
              Move
            </button>
          </div>
        </div>
      )}
    </MyContext.Consumer>
  );
}

export default (Cars);
