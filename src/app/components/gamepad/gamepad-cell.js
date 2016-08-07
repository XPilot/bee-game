import heavy from 'app/decorators/heavy';

// style
import './gamepad.scss';

@heavy
class GamepadCell {
  constructor() {
    this.displayName = 'GamepadCell';
    this.type = 'div';
    this.classNames = ['GamePadCell'];
  }

  render() {
    return null;
  }
}

export default GamepadCell;
