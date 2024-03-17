import { Unit } from "../classes";

function calculateMinFiringDistance(enemies:Unit[], towerRange: number) {
  const farthestEnemyDistance = Math.max(...enemies.map(enemy => enemy.distance));
  const enemiesSpeed = enemies.reduce((acc, enemy) => acc + enemy.unitSpeed, 0);

  return Math.abs(farthestEnemyDistance - enemiesSpeed + enemies[0].unitSpeed) + towerRange;
}

export { calculateMinFiringDistance };