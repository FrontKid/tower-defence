import { Unit } from "./Unit";

class Tower {
  static towerId = 1;

  id: number;
  name: string;
  rangeAttack: number;
  isDestroyed: boolean;

  constructor (rangeAttack: number) {
    this.id = Tower.towerId++;
    this.name = `Tower ${this.id}`;
    this.isDestroyed = false;
    this.rangeAttack = rangeAttack; 
  };

  destroyed(): void {
    this.isDestroyed = true;
  };

  hasEnemyInRange(enemyDistance: number): boolean {
    return this.rangeAttack >= enemyDistance; 
  };

  killInRange(units: Unit[]): [Unit[], Unit | null] {
    const enemyDistances = units.map(enemy => enemy.distance);
    const closestEnemy = units.find(unit => unit.distance === Math.min(...enemyDistances));

    if (!closestEnemy) {
      return [units, null];
    }

    closestEnemy.dead();

    const unitsWithoutFriend = units.filter(unit => unit.id !== closestEnemy.id);

    return [unitsWithoutFriend, closestEnemy]
  };

  upRange() {
    return this.rangeAttack += 10;
  };
};

export { Tower };
