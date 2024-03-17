import { Unit, Tower } from "./classes";
import { IFightLogs } from "./types";

const startGame = (bots: Unit[], tower: Tower): IFightLogs => {
  let enemies: Unit[] = [...bots];
  let turns = 1;

  const fightLogs: IFightLogs = {
    deadEnemies: [],
    aliveEnemies: [],
    towerKiller: '',
    turns,
  }

  while(!tower.isDestroyed && !(enemies.length === 0)) {
    const currentEnemies = [...enemies];
    let isTowerKillSomebody = false

    currentEnemies.forEach(enemy => {
      const enemyDistanceToTower = enemy.distance;
      const isEnemyInTowerRange = tower.hasEnemyInRange(enemyDistanceToTower)

      if (isEnemyInTowerRange && !isTowerKillSomebody) {
        // kill only one enemy in range
        const [aliveEnemies, deadEnemy] = tower.killInRange(enemies);

        isTowerKillSomebody = true;
        enemies = aliveEnemies;

        if (deadEnemy) {
          fightLogs.deadEnemies.push({
            name: deadEnemy.name,
            deadDistance: deadEnemy.distance,
            steps: turns
          })
        }
      } 

      enemy.goForward();
    })

    isTowerKillSomebody = false;
    turns++;

    const enemyGotTower = enemies.find(enemie => enemie.distance === 0);

    if (enemyGotTower) {
      tower.destroyed();
      fightLogs.towerKiller = enemyGotTower.name
      fightLogs.aliveEnemies.push(...enemies)

      break;
    }
  }

  fightLogs.turns = turns - 1;

  return fightLogs
}

export { startGame };
