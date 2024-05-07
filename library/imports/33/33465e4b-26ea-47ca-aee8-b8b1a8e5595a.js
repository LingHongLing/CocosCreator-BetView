"use strict";
cc._RF.push(module, '334655LJupHyq7ouLGo5Vla', 'StateMachine');
// Script/Model/StateMachine.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 简单的状态机，符合 GameModel 的需求
var StateMachine = /** @class */ (function () {
    function StateMachine() {
        this._nextState = null;
        this._stateTime = 0;
        this._stateFuncs = {};
    }
    ;
    StateMachine.prototype.update = function (dt) {
        if (this._nextState === null)
            return;
        this._stateTime -= dt;
        if (this._stateTime <= 0) {
            var nextState = this._nextState;
            this._nextState = null;
            this._stateFuncs[nextState]();
        }
        ;
    };
    ;
    StateMachine.prototype.transferState = function (state, stateTime) {
        this._nextState = state;
        this._stateTime = stateTime;
    };
    ;
    StateMachine.prototype.setState = function (state) {
        this._nextState = state;
    };
    ;
    StateMachine.prototype.addState = function (state, func) {
        this._stateFuncs[state] = func;
    };
    ;
    return StateMachine;
}());
exports.default = StateMachine;
;

cc._RF.pop();