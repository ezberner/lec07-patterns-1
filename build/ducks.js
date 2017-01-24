"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/**
 * A class that represents a Duck.
 * Indented to be extended to specific species.
 */
var Duck = (function () {
    function Duck() {
    }
    /**
     * Has the duck make a sound
     */
    Duck.prototype.quack = function () {
        console.log("quack!");
    };
    /**
     * Has the duck swim.
     * @param distance how far to swim
     */
    Duck.prototype.swim = function (distance) {
        console.log("Swims the " + distance + "m duckstyle.");
    };
    return Duck;
}());
exports.Duck = Duck;
var RedheadDuck = (function (_super) {
    __extends(RedheadDuck, _super);
    function RedheadDuck() {
        return _super.apply(this, arguments) || this;
    }
    RedheadDuck.prototype.display = function () {
        return "Looks like a RedHead";
    };
    return RedheadDuck;
}(Duck));
exports.RedheadDuck = RedheadDuck;
var MallardDuck = (function (_super) {
    __extends(MallardDuck, _super);
    function MallardDuck() {
        return _super.apply(this, arguments) || this;
    }
    MallardDuck.prototype.display = function () {
        return "Looks like a Mallard";
    };
    return MallardDuck;
}(Duck));
exports.MallardDuck = MallardDuck;
var TealDuck = (function (_super) {
    __extends(TealDuck, _super);
    function TealDuck() {
        return _super.apply(this, arguments) || this;
    }
    TealDuck.prototype.display = function () {
        return "Looks like a Teal";
    };
    return TealDuck;
}(Duck));
exports.TealDuck = TealDuck;
var RubberDuck = (function (_super) {
    __extends(RubberDuck, _super);
    function RubberDuck() {
        return _super.apply(this, arguments) || this;
    }
    RubberDuck.prototype.quack = function () {
        console.log('squeek!');
    };
    RubberDuck.prototype.display = function () {
        return "A rubber ducky!";
    };
    return RubberDuck;
}(Duck));
exports.RubberDuck = RubberDuck;
