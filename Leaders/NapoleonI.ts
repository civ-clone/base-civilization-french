import Leader from '@civ-clone/core-civilization/Leader';
import Civilization from '@civ-clone/core-civilization/Civilization';
import French from '../French';

export class NapoleonI extends Leader {
  static civilization(): typeof Civilization {
    return French;
  }

  name(): string {
    return 'Napoleon I';
  }
}

export default NapoleonI;
