import heavy from 'decorators/heavy';

import Title from 'components/title/title';
import GamePad from 'components/gamepad/gamepad';

import { h } from 'maquette';

// style
import './app.scss';

@heavy
class App {
  constructor() {
    this.displayName = 'App';
    this.type = 'div';
    this.classNames = ['App'];
  }

  render() {
    return h('div', {
      classes: {
        GameArea: true,
      }
    }, [Title.h(), GamePad.h()]);
  }
}

export default App;
