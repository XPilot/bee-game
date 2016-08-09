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

    this.__prop__hasCreature = {
      creatureId: null,
      bee: false,
      wasp: false,
    };

    this.__func__updateCreature = this.updateCreature.bind(this);
  }

  // events
  onClick(ev) {
  }

  // update creature
  updateCreature(creature) {

  }

  render() {
    return null;
  }
}

export default GamepadCell;
