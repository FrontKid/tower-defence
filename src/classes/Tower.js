"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tower = void 0;
var Tower = /** @class */ (function () {
    function Tower(rangeAttack) {
        this.id = Tower.towerId++;
        this.name = "Tower ".concat(this.id);
        this.isDestroyed = false;
        this.rangeAttack = rangeAttack;
    }
    ;
    Tower.prototype.destroyed = function () {
        this.isDestroyed = true;
    };
    ;
    Tower.prototype.hasEnemyInRange = function (enemyDistance) {
        return this.rangeAttack >= enemyDistance;
    };
    ;
    Tower.prototype.killInRange = function (units) {
        var enemyDistances = units.map(function (enemy) { return enemy.distance; });
        var closestEnemy = units.find(function (unit) { return unit.distance === Math.min.apply(Math, enemyDistances); });
        if (!closestEnemy) {
            return [units, null];
        }
        closestEnemy.dead();
        var unitsWithoutFriend = units.filter(function (unit) { return unit.id !== closestEnemy.id; });
        return [unitsWithoutFriend, closestEnemy];
    };
    ;
    Tower.prototype.upRange = function () {
        return this.rangeAttack += 10;
    };
    ;
    Tower.towerId = 1;
    return Tower;
}());
exports.Tower = Tower;
;
