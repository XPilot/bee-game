import heavy from 'app/decorators/heavy';

// style
import './gamepad.scss';

@heavy
class GamepadCell {
  constructor() {
    this.displayName = 'GamepadCell';
    this.type = 'a';
    this.classNames = ['GamePadCell'];
    this.onClick = this.onClick.bind(this);

    this.hasWasp = false;
    this.hasBee = false;

    this.binder = {};
  }

  onClick(ev) {
    console.log('aici', this.binder);
    this.binder.classes = {'Porn': true};
    console.log('aici 2', this.binder);
  }

  render() {
    return null;
  }
}

export default GamepadCell;
