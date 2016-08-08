import heavy from 'app/decorators/heavy';

// style
import './gamepad.scss';

@heavy
class GamepadCell {
  constructor() {
    this.displayName = 'GamepadCell';
    this.type = 'a';
    this.classNames = ['GamePadCell'];
  }

  onClick(ev) {
    const elem = ev.target;

    console.log(elem.offsetTop, elem.offsetLeft);
  }

  render() {
    return null;
  }
}

export default GamepadCell;
