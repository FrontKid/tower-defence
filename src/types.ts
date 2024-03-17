import { Unit } from "./classes";

type TDeadEnemies = {
  name: string;
  deadDistance: number;
  steps: number;
}

interface IFightLogs {
  deadEnemies: TDeadEnemies[];
  aliveEnemies: Unit[];
  towerKiller: string;
  towerMinRangeToWin: number;
  turns: number;
}

export {type IFightLogs}