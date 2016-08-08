import { h } from 'maquette';

import heavy from 'app/decorators/heavy';

// style
import './bee.scss';

@heavy
class Bee {
  constructor() {
    this.displayName = 'Bee';
    this.type = 'div';
    this.classNames = ['Bee'];
  }

  render() {
    return null;
  }
}

export default Bee;
