/**
 * Starts the game simulation by determining the outcome of battles between enemy units and the tower.
 * @param { Unit[] } bots - An array of enemy units participating in the battle.
 * @param { Tower } tower - The tower that defends against enemy attacks.
 * @returns { IFightLogs } An object containing logs generated during the game simulation.
 */

import { Tower, Unit } from "./classes";
import { startGame } from "./gameEngine";
import { displayInTerminal } from "./lib/displayInTerminal";
import { IFightLogs } from "./types";


const tower = new Tower(50);

const bots = [
  new Unit('BotA', 100, 10),
  new Unit('BotB', 50, 20),
  new Unit('BotC', 30, 20),
  // new Unit('BotD', 80, 10),
  // new Unit('BotE', 80, 10),
  // new Unit('BotF', 80, 10),
  // new Unit('BotG', 40, 10),
]

const {
  deadEnemies,
  towerKiller,
  aliveEnemies,
  towerMinRangeToWin,
  turns,
}: IFightLogs = startGame(bots, tower);

displayInTerminal(`Firing range is ${tower.rangeAttack}m`);

deadEnemies.forEach(logs => {
  displayInTerminal(`Turn ${logs.steps}: Kill ${logs.name} at ${logs.deadDistance}m`);
});

const totalMoveCount = turns;

tower.isDestroyed 
  ? displayInTerminal(`Tower LOSE in ${totalMoveCount} by ${towerKiller}`)   
  : displayInTerminal(`Tower WIN in ${totalMoveCount} turn${totalMoveCount === 1 ? '' : 's'}`);

tower.isDestroyed && displayInTerminal(`Minimum firing distance to  win is: ${towerMinRangeToWin}`)

displayInTerminal(`ALive enemies: [${aliveEnemies.map(aliveEnemy => aliveEnemy.name)}]`);
