"use strict";
cc._RF.push(module, 'f9d53KwIBRFXZH75AabEt1A', 'GameView');
// Script/GameView.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var GameModel_1 = require("./Model/GameModel");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var GameView = /** @class */ (function (_super) {
    __extends(GameView, _super);
    function GameView() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    GameView.prototype.onLoad = function () {
        this._countdownLabel = this.node.getChildByName("CountdownLabel").getComponent(cc.Label);
        this._userScoreLabel = this.node.getChildByName("UserScoreLabel").getComponent(cc.Label);
        this._settleLabel = this.node.getChildByName("SettleLabel").getComponent("SettleLabel");
        this._confirmButton = this.node.getChildByName("ConfirmButton").getComponent("CommonButton");
        this._cancelButton = this.node.getChildByName("CancelButton").getComponent("CommonButton");
        this._betAreaLayout = this.node.getChildByName("BetAreaLayout").getComponent("BetAreaLayout");
        this._chipButtonLayout = this.node.getChildByName("ChipButtonLayout").getComponent("ChipButtonLayout");
        this._stateTime = 0;
        this._userScore = 0;
        this._gameModel = new GameModel_1.default(this._onEventListener.bind(this));
        this._init();
    };
    ;
    GameView.prototype.update = function (dt) {
        this._countdownLabel.string = Math.ceil((this._stateTime / 1000)).toString();
        this._stateTime -= dt * 1000;
    };
    ;
    GameView.prototype._init = function () {
        var eventDispatcher = this._onEventListener.bind(this);
        this._confirmButton.setType(this._confirmButton.BUTTON_TYPE.CONFIRM);
        this._confirmButton.setEventDispatcher(eventDispatcher);
        this._confirmButton.registerClickEvent();
        this._cancelButton.setType(this._confirmButton.BUTTON_TYPE.CANCEL);
        this._cancelButton.setEventDispatcher(eventDispatcher);
        this._cancelButton.registerClickEvent();
        this._betAreaLayout.setEventDispatcher(eventDispatcher);
        this._gameModel.login();
    };
    ;
    GameView.prototype._onEventListener = function (event, data) {
        if (event == this._gameModel.MODEL_EVENT.NEW_ROUND) {
            this._onReceiveNewRound(data);
        }
        else if (event == this._gameModel.MODEL_EVENT.SETTLE) {
            this._onReceiveSettle(data);
        }
        else if (event == this._gameModel.MODEL_EVENT.SYNC_USER_SCORE) {
            this._onReceiveSyncUserBet(data);
        }
        else if (event == this._betAreaLayout.VIEW_EVENT.ON_CLICK_AREA) {
            var totalScore = this._betAreaLayout.getTotalBetScore();
            var selectValue = this._chipButtonLayout.getSelectValue();
            if ((selectValue + totalScore) > this._userScore)
                return;
            this._setUserScoreLabel(this._userScore - totalScore - selectValue);
            this._betAreaLayout.showBetAnim(data, selectValue);
        }
        else if (event == this._cancelButton.VIEW_EVENT.CANCEL) {
            this._betAreaLayout.cancelBet();
            this._setUserScoreLabel(this._userScore);
        }
        else if (event == this._cancelButton.VIEW_EVENT.CONFIRM) {
            this._gameModel.userBet(this._betAreaLayout.getBetScores());
            this._betAreaLayout.confirmBet();
        }
        ;
    };
    ;
    GameView.prototype._onReceiveNewRound = function (struct) {
        this._stateTime = struct.stateTime;
        this._userScore = struct.userScore;
        this._settleLabel.reset();
        this._betAreaLayout.reset();
        this._betAreaLayout.setTouchEnabled(true);
        this._setUserScoreLabel(struct.userScore);
    };
    ;
    GameView.prototype._onReceiveSettle = function (struct) {
        this._stateTime = struct.stateTime;
        this._userScore = struct.userScore;
        this._betAreaLayout.cancelBet();
        this._betAreaLayout.setTouchEnabled(false);
        this._settleLabel.showSettleText(struct.winArea, struct.settleScore);
        this._setUserScoreLabel(struct.userScore);
    };
    ;
    GameView.prototype._onReceiveSyncUserBet = function (struct) {
        this._userScore = struct.userScore;
        this._setUserScoreLabel(struct.userScore);
    };
    ;
    GameView.prototype._setUserScoreLabel = function (score) {
        this._userScoreLabel.string = "财产: " + score.toString();
    };
    ;
    GameView = __decorate([
        ccclass
    ], GameView);
    return GameView;
}(cc.Component));
exports.default = GameView;
;

cc._RF.pop();