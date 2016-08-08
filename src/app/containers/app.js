import heavy from 'decorators/heavy';

import Title from 'components/title/title';
import GamePad from 'components/gamepad/gamepad';

import Bee from 'components/bee/bee';

import { h } from 'maquette';
import { bees, wasps, grid } from 'app/constants/constants';

// style
import './app.scss';

@heavy
class App {
  constructor() {
    this.displayName = 'App';
    this.type = 'div';
    this.classNames = ['App'];
  }

  createBees(nrBees) {
    let colony = [];

    for (let i = 0; i < nrBees; i++) {
      colony[i] = Bee.h({ classes: { Bee: true }, category: 'bee' });
      if (i === Math.round(nrBees / 2)) {
        colony[i] = Bee.h({ classes: {Bee: true, 'Bee--queen': true}, category: 'bee-queen' });
      }
    }
    return colony;
  }

  createWasps(nrWasps) {
    let colony = [];

    for (let i = 0; i < nrWasps; i++) {
      colony[i] = Bee.h({ classes: { Wasp: true }, category: 'wasp' });
      if (i === Math.round(nrWasps / 2)) {
        colony[i] = Bee.h({ classes: { Wasp: true, 'Wasp--queen': true }, category: 'wasp-queen' });
      }
    }
    return colony;
  }

  render() {
    const BeesColony = this.createBees(bees);
    const WaspsColony = this.createWasps(wasps);
    const GameArea = GamePad.h(null, [BeesColony, WaspsColony]);

    return h('div', {
      classes: {
        GameArea: true,
      }
    }, [Title.h(), GameArea]);
  }
}

export default App;
