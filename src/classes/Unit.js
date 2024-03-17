"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Unit = void 0;
var Unit = /** @class */ (function () {
    function Unit(name, distance, unitSpeed) {
        this.id = Unit.nextId++;
        this.name = name;
        this.distance = distance;
        this.unitSpeed = unitSpeed;
        this.isKilled = false;
    }
    ;
    Unit.prototype.dead = function () {
        this.isKilled = true;
    };
    ;
    Unit.prototype.goForward = function () {
        var currentDistance = this.distance - this.unitSpeed;
        if (currentDistance < 0) {
            this.distance = 0;
            return;
        }
        ;
        this.distance -= this.unitSpeed;
    };
    ;
    Unit.nextId = 1;
    return Unit;
}());
exports.Unit = Unit;
;
