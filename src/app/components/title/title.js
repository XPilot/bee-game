import { constant, times } from 'lodash';
import { h } from 'maquette';
import heavy from 'app/decorators/heavy';


// style
import './title.scss';

@heavy
class Title {
  constructor() {
    this.displayName = 'Title';
    this.type = 'div';
    this.classNames = ['TitleWrap'];
  }

  render() {
    return times(20, constant(h('div.Title')));
  }
}

export default Title;
