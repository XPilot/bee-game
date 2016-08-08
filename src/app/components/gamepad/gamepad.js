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

    /* binding */
    this.onCreate = this.onCreate.bind(this);
  }

  generateGrid() {
    return times(grid.rows, constant(
      times(grid.columns, constant(GamepadCell.h()))
    ));
  }

  setBees(bees) {
    const styles = this.styles;

    return bees.map(elem => {
      return h('div.creature', { styles }, elem);
    });
  }

  setWasps(wasps) {
    const styles = this.styles;

    return wasps.map(elem => {
      return h('div.creature', { styles }, elem);
    });
  }

  onCreate() {
    const rows = grid.rows;
    const columns = grid.columns;

    const beeRows = Math.ceil(this.beeChildren.length / columns);
    const waspRows = Math.ceil(this.waspChildren.length / columns);

    let beeGridRow = rows - 1;
    let beeGridColumn = columns - 1;
    let indexModifier = 0;

    this.waspChildren = this.waspChildren.map((elem, indx) => {
      let waspRefCell = null;
      let waspGridRow = Math.floor(indx / columns);
      let waspColumn = indx % columns;

      if (this.matrix[waspGridRow][waspColumn]) {
        waspRefCell = this.matrix[waspGridRow][waspColumn];
      }

      console.log(waspRefCell);

      return elem;
    });

    // this.beeChildren = this.beeChildren.map((elem, indx) => {
    //   let domCell = null;
    //   let beeColumn = (beeGridColumn + indexModifier) - indx;
    //
    //   if ((beeColumn >= 0) && (this.matrix[beeGridRow][beeColumn])) {
    //     domCell = this.matrix[beeGridRow][beeColumn].domNode;
    //   } else {
    //     beeGridRow = beeGridRow--;
    //     beeGridColumn = columns - 1;
    //     indexModifier += columns;
    //     beeColumn = (beeGridColumn + indexModifier) - indx;
    //
    //     domCell = this.matrix[beeGridRow][beeColumn].domNode;
    //   }
    //
    //   domCell.style.background = 'red';
    //   console.log(domCell.offsetLeft);
    //   /*
    //   console.log(domCell.offsetParent.clientWidth, domCell.offsetParent.clientHeight);
    //   console.log(domCell.clientWidth, domCell.clientHeight);
    //   console.log(domCell.offsetLeft);
    //
    //   /*
    //   const positionOffset = {
    //     left: domCell.offsetLeft,
    //     right: domCell.offsetRight,
    //     top: domCell.offsetTop,
    //     bottom: domCell.offsetBottom
    //   };
    //   */
    //
    //   // remap bee props
    //   const updatedElem = Object.assign({}, elem, {
    //     properties: {
    //       styles: {
    //         left: '20px'
    //       },
    //       key: `${beeGridRow}-${beeColumn}`
    //     }
    //   });
    //
    //   // console.log(positionOffset);
    //
    //   const domNode = elem.domNode;
    //   /*
    //   domNode.style.left = positionOffset.left ? positionOffset.left + 'px' : 'auto';
    //   domNode.style.right = positionOffset.right ? positionOffset.right + 'px' : 'auto';
    //   domNode.style.top = positionOffset.top ? positionOffset.top + 'px' : 'auto';
    //   domNode.style.bottom = positionOffset.bottom ? positionOffset.bottom + 'px' : 'auto';
    //   */
    //
    //   return updatedElem;
    // });
  }

  render(children) {
    this.matrix = this.generateGrid();
    this.beeChildren = this.setBees(children[0]);
    this.waspChildren = this.setWasps(children[1]);

    return [this.matrix, this.beeChildren, this.waspChildren];
  }
}

export default GamePad;
