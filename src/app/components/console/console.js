import heavy from 'app/decorators/heavy';

// style
import './console.scss';

@heavy
class Console {
  constructor() {
    this.displayName = 'Console';
    this.type = 'div';
    this.classNames = ['Console'];
  }

  render() {
    return null;
  }
}

export default Console;
