// acts as an interface for the bee
import { beeStats, beeQueenStats, waspStats, waspQueenStats } from 'constants/constants';

const getLucky = () => Math.floor(Math.random() * (100 + 1));

class BeeAi {
  static generateStats(type) {
    switch (type) {
      case 'bee':
        return Object.assign({}, beeStats, { luck: getLucky() });
      case 'bee-queen':
        return Object.assign({}, beeQueenStats, { luck: getLucky() });
      case 'wasp':
        return Object.assign({}, waspStats, { luck: getLucky() });
      case 'wasp-queen':
        return Object.assign({}, waspQueenStats, { luck: getLucky() });
      default: return {};
    }
  }
}

export default BeeAi;
