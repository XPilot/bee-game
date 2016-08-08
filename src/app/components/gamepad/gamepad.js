import heavy from 'app/decorators/heavy';
import { constant, times } from 'lodash';
import { grid } from 'app/constants/constants';
import { h } from 'maquette';

// events
import EV from 'events/domEvents';

import GamepadCell from './gamepad-cell';

// style
import './gamepad.scss';

@heavy
class GamePad {
  constructor() {
    this.displayName = 'GamePad';
    this.type = 'div';
    this.classNames = ['GamePad'];

    this.styles = {
      width: `${(100 / grid.rows).toString()}%`,
      height: `${(100 / grid.columns).toString()}%`,
    };

    /* game data */
    this.matrix = null;
    this.beeChildren = null;
    this.waspChildren = null;

    /* event tree */

    document.addEventListener(EV.InitialRenderEvent, (ev) => this.alignCreatures(ev));
  }

  generateGrid() {
    const styles = this.styles;

    return times(grid.rows, constant(
      times(grid.columns, constant(GamepadCell.h({ styles })))
    ));
  }

  setBees(bees) {
    const styles = this.styles;
    styles.top = '0px';
    styles.left = '0px';

    return bees.map(elem => {
      return h('div.creature', { styles }, elem);
    });
  }

  setWasps(wasps) {
    const styles = this.styles;
    styles.top = '0px';
    styles.left = '0px';

    return wasps.map(elem => {
      // styles.top =
      return h('div.creature', { styles }, elem);
    });
  }

  alignCreatures() {
    this.beeChildren = this.beeChildren.map(elem => {
      const updatedElem = Object.assign({}, elem, {
        properties: {
          styles: {
            left: '20px'
          }
        }
      });

      elem.domNode.style.top = 'auto';
      elem.domNode.style.bottom = '0px';

      return updatedElem;
    });

    console.log(this.beeChildren);
  }

  render(children) {
    this.matrix = this.generateGrid();
    this.beeChildren = this.setBees(children[0]);
    this.waspChildren = this.setWasps(children[1]);

    return [this.matrix, this.beeChildren, this.waspChildren];
  }
}

export default GamePad;
