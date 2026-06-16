import { Character } from './character.ts';

export class Warrior extends Character {
  attack() {
    return `${this.name}は剣で攻撃した！`
  };
}
