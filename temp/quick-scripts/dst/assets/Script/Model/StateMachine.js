
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Model/StateMachine.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvTW9kZWwvU3RhdGVNYWNoaW5lLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsMEJBQTBCO0FBQzFCO0lBS0k7UUFDSSxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztRQUN2QixJQUFJLENBQUMsVUFBVSxHQUFHLENBQUMsQ0FBQztRQUNwQixJQUFJLENBQUMsV0FBVyxHQUFHLEVBQUUsQ0FBQztJQUMxQixDQUFDO0lBQUEsQ0FBQztJQUVGLDZCQUFNLEdBQU4sVUFBTyxFQUFVO1FBQ2IsSUFBSSxJQUFJLENBQUMsVUFBVSxLQUFLLElBQUk7WUFDeEIsT0FBTztRQUVYLElBQUksQ0FBQyxVQUFVLElBQUksRUFBRSxDQUFDO1FBQ3RCLElBQUksSUFBSSxDQUFDLFVBQVUsSUFBSSxDQUFDLEVBQUU7WUFDdEIsSUFBSSxTQUFTLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQztZQUNoQyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztZQUN2QixJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUM7U0FDakM7UUFBQSxDQUFDO0lBQ04sQ0FBQztJQUFBLENBQUM7SUFFRixvQ0FBYSxHQUFiLFVBQWMsS0FBVSxFQUFFLFNBQWlCO1FBQ3ZDLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO1FBQ3hCLElBQUksQ0FBQyxVQUFVLEdBQUcsU0FBUyxDQUFDO0lBQ2hDLENBQUM7SUFBQSxDQUFDO0lBRUYsK0JBQVEsR0FBUixVQUFTLEtBQVU7UUFDZixJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztJQUM1QixDQUFDO0lBQUEsQ0FBQztJQUVGLCtCQUFRLEdBQVIsVUFBUyxLQUFVLEVBQUUsSUFBYztRQUMvQixJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxHQUFHLElBQUksQ0FBQztJQUNuQyxDQUFDO0lBQUEsQ0FBQztJQUNOLG1CQUFDO0FBQUQsQ0FuQ0EsQUFtQ0MsSUFBQTs7QUFBQSxDQUFDIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8g566A5Y2V55qE54q25oCB5py677yM56ym5ZCIIEdhbWVNb2RlbCDnmoTpnIDmsYJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN0YXRlTWFjaGluZSB7XG4gICAgcHJpdmF0ZSBfbmV4dFN0YXRlOiBhbnk7XG4gICAgcHJpdmF0ZSBfc3RhdGVUaW1lOiBudW1iZXI7XG4gICAgcHJpdmF0ZSBfc3RhdGVGdW5jczoge307XG5cbiAgICBjb25zdHJ1Y3Rvcigpe1xuICAgICAgICB0aGlzLl9uZXh0U3RhdGUgPSBudWxsO1xuICAgICAgICB0aGlzLl9zdGF0ZVRpbWUgPSAwO1xuICAgICAgICB0aGlzLl9zdGF0ZUZ1bmNzID0ge307XG4gICAgfTtcblxuICAgIHVwZGF0ZShkdDogbnVtYmVyKXtcbiAgICAgICAgaWYgKHRoaXMuX25leHRTdGF0ZSA9PT0gbnVsbClcbiAgICAgICAgICAgIHJldHVybjtcblxuICAgICAgICB0aGlzLl9zdGF0ZVRpbWUgLT0gZHQ7XG4gICAgICAgIGlmICh0aGlzLl9zdGF0ZVRpbWUgPD0gMCkge1xuICAgICAgICAgICAgbGV0IG5leHRTdGF0ZSA9IHRoaXMuX25leHRTdGF0ZTtcbiAgICAgICAgICAgIHRoaXMuX25leHRTdGF0ZSA9IG51bGw7XG4gICAgICAgICAgICB0aGlzLl9zdGF0ZUZ1bmNzW25leHRTdGF0ZV0oKTtcbiAgICAgICAgfTtcbiAgICB9O1xuXG4gICAgdHJhbnNmZXJTdGF0ZShzdGF0ZTogYW55LCBzdGF0ZVRpbWU6IG51bWJlcil7XG4gICAgICAgIHRoaXMuX25leHRTdGF0ZSA9IHN0YXRlO1xuICAgICAgICB0aGlzLl9zdGF0ZVRpbWUgPSBzdGF0ZVRpbWU7XG4gICAgfTtcblxuICAgIHNldFN0YXRlKHN0YXRlOiBhbnkpe1xuICAgICAgICB0aGlzLl9uZXh0U3RhdGUgPSBzdGF0ZTtcbiAgICB9O1xuXG4gICAgYWRkU3RhdGUoc3RhdGU6IGFueSwgZnVuYzogRnVuY3Rpb24pe1xuICAgICAgICB0aGlzLl9zdGF0ZUZ1bmNzW3N0YXRlXSA9IGZ1bmM7XG4gICAgfTtcbn07Il19