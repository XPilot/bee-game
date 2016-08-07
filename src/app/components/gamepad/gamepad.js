import heavy from 'app/decorators/heavy';
import { constant, times } from 'lodash';
import { grid } from 'app/constants/constants';

import GamepadCell from './gamepad-cell';

// style
import './gamepad.scss';

@heavy
class GamePad {
  constructor() {
    this.displayName = 'GamePad';
    this.type = 'div';
    this.classNames = ['GamePad'];

    console.log(grid);
  }

  render() {
    const styles = {
      width: `${(100 / grid.rows).toString()}%`,
      height: `${(100 / grid.columns).toString()}%`,
    };

    const matrix = times(grid.rows, constant(
      times(grid.columns, constant(GamepadCell.h({ styles })))
    ));
    console.log(matrix);

    return matrix;
  }
}

export default GamePad;
