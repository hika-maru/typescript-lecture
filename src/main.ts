import { Mage } from "./mage";
import { Warrior } from "./warrior";

const warrior = new Warrior("アーサー", 100);
warrior.showStatus();
console.log(warrior.attack());

const mage = new Mage("メディア", 80);
mage.showStatus();
mage.castSpell();
