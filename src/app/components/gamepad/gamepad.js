import heavy from 'app/decorators/heavy';
import { grid } from 'app/constants/constants';
import { h } from 'maquette';

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
    const matrix = [];
    const styles = this.styles;

    for (let i = 0; i < grid.rows; i++) {
      matrix[i] = [];
      for (let j = 0; j < grid.columns; j++) {
        matrix[i][j] = GamepadCell.h({styles, key: `row-${i}|col-${j}` });
      }
    }
    return matrix;
  }

  setBees(bees) {
    const styles = this.styles;

    return bees.map((elem, indx) => {
      return h('div.creature', { styles, key: `CreatureBee-${indx}` }, elem);
    });
  }

  setWasps(wasps) {
    const styles = this.styles;

    return wasps.map((elem, indx) => {
      return h('div.creature', { styles, key: `CreatureBee-${indx}` }, elem);
    });
  }

  getCoordonates(elem) {
    return {
      left: typeof (elem.offsetLeft) !== 'undefined' ? `${elem.offsetLeft}px` : 'auto',
      right: typeof (elem.offsetRight) !== 'undefined' ? `${elem.offsetRight}px` : 'auto',
      top: typeof (elem.offsetTop) !== 'undefined' ? `${elem.offsetTop}px` : 'auto',
      bottom: typeof (elem.offsetBottom) !== 'undefined' ? `${elem.offsetBottom}px` : 'auto'
    };
  }

  onCreate() {
    const rows = grid.rows;
    const columns = grid.columns;

    this.waspChildren = this.waspChildren.map((elem, indx) => {
      const updatedElem = Object.assign({}, elem);
      const waspDOMNode = updatedElem.domNode;

      let waspRefCell = null;
      let waspGridRow = Math.floor(indx / columns);
      let waspColumn = indx % columns;

      if (this.matrix[waspGridRow][waspColumn]) {
        waspRefCell = this.matrix[waspGridRow][waspColumn];
      }

      const { left, right, top, bottom } = this.getCoordonates(waspRefCell.domNode);

      waspDOMNode.style.left = left;
      waspDOMNode.style.right = right;
      waspDOMNode.style.top = top;
      waspDOMNode.style.bottom = bottom;

      updatedElem.properties.reference = waspRefCell;

      return updatedElem;
    });

    this.beeChildren = this.beeChildren.map((elem, indx) => {
      const updatedElem = Object.assign({}, elem);
      const beeDOMNode = elem.domNode;

      let beeRefCell = null;
      let beeGridRow = (rows - 1) - Math.floor(indx / columns);
      let beeColumn = (columns - 1) - (indx % columns);

      if (this.matrix[beeGridRow][beeColumn]) {
        beeRefCell = this.matrix[beeGridRow][beeColumn];
      }

      const { left, right, top, bottom } = this.getCoordonates(beeRefCell.domNode);

      beeDOMNode.style.left = left;
      beeDOMNode.style.right = right;
      beeDOMNode.style.top = top;
      beeDOMNode.style.bottom = bottom;

      updatedElem.properties.reference = beeRefCell;
      console.log(beeRefCell);

      return updatedElem;
    });
  }

  render(children) {
    this.matrix = this.generateGrid();
    this.beeChildren = this.setBees(children[0]);
    this.waspChildren = this.setWasps(children[1]);

    return [this.matrix, this.beeChildren, this.waspChildren];
  }
}

export default GamePad;
