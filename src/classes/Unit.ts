class Unit {
  static nextId = 1;

  id: number;
  name: string;
  distance: number;
  unitSpeed: number;
  isKilled: boolean;


  constructor(name: string, distance: number, unitSpeed: number) {
    this.id = Unit.nextId++;
    this.name = name;
    this.distance = distance;
    this.unitSpeed = unitSpeed;
    this.isKilled = false;
  };

  dead(): void {
    this.isKilled = true;
  };

  goForward(): void {
    const currentDistance = this.distance - this.unitSpeed;

    if (currentDistance < 0) {
      this.distance = 0;

      return;
    };

    this.distance -= this.unitSpeed;
  };
};

export { Unit };
