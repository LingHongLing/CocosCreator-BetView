"use strict";
cc._RF.push(module, 'adafcU2a7BDUJkatGe9Hfd9', 'GameModel');
// Script/Model/GameModel.ts

"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
var StateMachine_1 = require("./StateMachine");
var Config_1 = require("../Common/Config");
var GAME_STATE = {
    NEW_ROUND: "new_round",
    SETTLE: "settle",
};
var STATE_TIME = (_a = {},
    _a[GAME_STATE.NEW_ROUND] = 30 * 1000,
    _a[GAME_STATE.SETTLE] = 10 * 1000,
    _a);
var MODEL_EVENT = {
    NEW_ROUND: "NEW_ROUND",
    SETTLE: "SETTLE",
    SYNC_USER_SCORE: "SYNC_USER_SCORE",
};
var INTERVAL_TIME = 1 * 1000;
var GameModel = /** @class */ (function () {
    function GameModel(eventDispatcher) {
        this.MODEL_EVENT = MODEL_EVENT;
        this._eventDispatcher = eventDispatcher;
        this._intervalHandler = null;
        this._userScore = Config_1.default.GAME_BEGIN_SCORE;
        this._betScores = [0, 0, 0];
        // 模拟 server 来封包
        this._stateMachine = this._createStateMachine();
    }
    ;
    GameModel.prototype.login = function () {
        var _this = this;
        this._stateMachine.transferState(GAME_STATE.NEW_ROUND, 0);
        this._intervalHandler = setInterval(function () { return _this._update(INTERVAL_TIME); }, INTERVAL_TIME);
    };
    ;
    GameModel.prototype.leave = function () {
        clearInterval(this._intervalHandler);
        this._intervalHandler = null;
    };
    ;
    GameModel.prototype.userBet = function (betScores) {
        for (var idx = 0; idx < betScores.length; idx++) {
            this._betScores[idx] += betScores[idx];
            this._userScore -= betScores[idx];
        }
        ;
        var struct = {
            userScore: this._userScore,
        };
        this._eventDispatcher(MODEL_EVENT.SYNC_USER_SCORE, struct);
    };
    ;
    GameModel.prototype._update = function (dt) {
        this._stateMachine.update(dt);
    };
    ;
    GameModel.prototype._onNewRound = function () {
        var stateTime = STATE_TIME[GAME_STATE.NEW_ROUND];
        var struct = {
            userScore: this._userScore,
            stateTime: stateTime
        };
        this._betScores = [0, 0, 0];
        this._eventDispatcher(MODEL_EVENT.NEW_ROUND, struct);
        this._stateMachine.transferState(GAME_STATE.SETTLE, stateTime);
    };
    ;
    GameModel.prototype._onSettle = function () {
        var stateTime = STATE_TIME[GAME_STATE.SETTLE];
        var winArea = Math.floor(Math.random() * Config_1.default.AREA_TYPES.length);
        var winScore = this._getWinScore(winArea);
        this._userScore += winScore;
        var struct = {
            userScore: this._userScore,
            winArea: winArea,
            settleScore: winScore,
            stateTime: stateTime
        };
        this._eventDispatcher(MODEL_EVENT.SETTLE, struct);
        this._stateMachine.transferState(GAME_STATE.NEW_ROUND, stateTime);
    };
    ;
    GameModel.prototype._getWinScore = function (winArea) {
        var winScore = 0;
        for (var idx = 0; idx < this._betScores.length; idx++)
            winScore += idx == winArea ? this._betScores[idx] * (Config_1.default.AREA_ODDS[idx] + 1) : -this._betScores[idx];
        return winScore;
    };
    ;
    GameModel.prototype._createStateMachine = function () {
        var stateMachine = new StateMachine_1.default();
        stateMachine.addState(GAME_STATE.NEW_ROUND, this._onNewRound.bind(this));
        stateMachine.addState(GAME_STATE.SETTLE, this._onSettle.bind(this));
        return stateMachine;
    };
    ;
    return GameModel;
}());
exports.default = GameModel;
;

cc._RF.pop();