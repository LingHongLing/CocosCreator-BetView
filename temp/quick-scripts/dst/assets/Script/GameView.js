
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/GameView.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvR2FtZVZpZXcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsK0NBQTBDO0FBUXBDLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQXNDLDRCQUFZO0lBQWxEOztJQWdHQSxDQUFDO0lBbkZHLHlCQUFNLEdBQU47UUFDSSxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLGdCQUFnQixDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN6RixJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLGdCQUFnQixDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN6RixJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLGFBQWEsQ0FBQyxDQUFDLFlBQVksQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUN4RixJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLGVBQWUsQ0FBQyxDQUFDLFlBQVksQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUM3RixJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLGNBQWMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUMzRixJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLGVBQWUsQ0FBQyxDQUFDLFlBQVksQ0FBQyxlQUFlLENBQUMsQ0FBQztRQUM5RixJQUFJLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENB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SSxDQUFDLFlBQVksQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRSxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDckUsSUFBSSxDQUFDLGtCQUFrQixDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUM5QyxDQUFDO0lBQUEsQ0FBQztJQUVNLHdDQUFxQixHQUE3QixVQUE4QixNQUE0QjtRQUN0RCxJQUFJLENBQUMsVUFBVSxHQUFHLE1BQU0sQ0FBQyxTQUFTLENBQUM7UUFDbkMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUM5QyxDQUFDO0lBQUEsQ0FBQztJQUVNLHFDQUFrQixHQUExQixVQUEyQixLQUFhO1FBQ3BDLElBQUksQ0FBQyxlQUFlLENBQUMsTUFBTSxHQUFHLE1BQU0sR0FBRyxLQUFLLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDNUQsQ0FBQztJQUFBLENBQUM7SUEvRmUsUUFBUTtRQUQ1QixPQUFPO09BQ2EsUUFBUSxDQWdHNUI7SUFBRCxlQUFDO0NBaEdELEFBZ0dDLENBaEdxQyxFQUFFLENBQUMsU0FBUyxHQWdHakQ7a0JBaEdvQixRQUFRO0FBZ0c1QixDQUFDIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEdhbWVNb2RlbCBmcm9tIFwiLi9Nb2RlbC9HYW1lTW9kZWxcIjtcbmltcG9ydCBCZXRBcmVhTGF5b3V0IGZyb20gXCIuL0JldEFyZWFMYXlvdXRcIjtcbmltcG9ydCBDaGlwQnV0dG9uTGF5b3V0IGZyb20gXCIuL0NoaXBCdXR0b25MYXlvdXRcIjtcblxuaW1wb3J0IHsgTmV3Um91bmRNb2RlbFN0cnVjdCwgU2V0dGVNb2RlbFN0cnVjdCwgVXNlclNjb3JlTW9kZWxTdHJ1Y3QgfSBmcm9tIFwiLi9Db21tb24vTW9kZWxTdHJ1Y3RcIjtcbmltcG9ydCBTZXR0bGVMYWJlbCBmcm9tIFwiLi9TZXR0bGVMYWJlbFwiO1xuaW1wb3J0IENvbW1vbkJ1dHRvbiBmcm9tIFwiLi9Db21tb25CdXR0b25cIjtcblxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lVmlldyBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG4gICAgLy8gb25Mb2FkICgpIHt9XG4gICAgcHJpdmF0ZSBfZ2FtZU1vZGVsOiBHYW1lTW9kZWw7XG4gICAgcHJpdmF0ZSBfY291bnRkb3duTGFiZWw6IGNjLkxhYmVsO1xuICAgIHByaXZhdGUgX3VzZXJTY29yZUxhYmVsOiBjYy5MYWJlbDtcbiAgICBwcml2YXRlIF9zZXR0bGVMYWJlbDogU2V0dGxlTGFiZWw7XG4gICAgcHJpdmF0ZSBfY29uZmlybUJ1dHRvbjogQ29tbW9uQnV0dG9uO1xuICAgIHByaXZhdGUgX2NhbmNlbEJ1dHRvbjogQ29tbW9uQnV0dG9uO1xuICAgIHByaXZhdGUgX2JldEFyZWFMYXlvdXQ6IEJldEFyZWFMYXlvdXQ7XG4gICAgcHJpdmF0ZSBfY2hpcEJ1dHRvbkxheW91dDogQ2hpcEJ1dHRvbkxheW91dDtcbiAgICBwcml2YXRlIF9zdGF0ZVRpbWU6IG51bWJlcjtcbiAgICBwcml2YXRlIF91c2VyU2NvcmU6IG51bWJlcjtcblxuICAgIG9uTG9hZCgpe1xuICAgICAgICB0aGlzLl9jb3VudGRvd25MYWJlbCA9IHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIkNvdW50ZG93bkxhYmVsXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCk7XG4gICAgICAgIHRoaXMuX3VzZXJTY29yZUxhYmVsID0gdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiVXNlclNjb3JlTGFiZWxcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKTtcbiAgICAgICAgdGhpcy5fc2V0dGxlTGFiZWwgPSB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJTZXR0bGVMYWJlbFwiKS5nZXRDb21wb25lbnQoXCJTZXR0bGVMYWJlbFwiKTtcbiAgICAgICAgdGhpcy5fY29uZmlybUJ1dHRvbiA9IHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIkNvbmZpcm1CdXR0b25cIikuZ2V0Q29tcG9uZW50KFwiQ29tbW9uQnV0dG9uXCIpO1xuICAgICAgICB0aGlzLl9jYW5jZWxCdXR0b24gPSB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJDYW5jZWxCdXR0b25cIikuZ2V0Q29tcG9uZW50KFwiQ29tbW9uQnV0dG9uXCIpO1xuICAgICAgICB0aGlzLl9iZXRBcmVhTGF5b3V0ID0gdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiQmV0QXJlYUxheW91dFwiKS5nZXRDb21wb25lbnQoXCJCZXRBcmVhTGF5b3V0XCIpO1xuICAgICAgICB0aGlzLl9jaGlwQnV0dG9uTGF5b3V0ID0gdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiQ2hpcEJ1dHRvbkxheW91dFwiKS5nZXRDb21wb25lbnQoXCJDaGlwQnV0dG9uTGF5b3V0XCIpO1xuICAgICAgICB0aGlzLl9zdGF0ZVRpbWUgPSAwO1xuICAgICAgICB0aGlzLl91c2VyU2NvcmUgPSAwO1xuICAgICAgICB0aGlzLl9nYW1lTW9kZWwgPSBuZXcgR2FtZU1vZGVsKHRoaXMuX29uRXZlbnRMaXN0ZW5lci5iaW5kKHRoaXMpKTtcbiAgICAgICAgdGhpcy5faW5pdCgpO1xuICAgIH07XG5cbiAgICB1cGRhdGUoZHQ6IG51bWJlcil7XG4gICAgICAgIHRoaXMuX2NvdW50ZG93bkxhYmVsLnN0cmluZyA9IE1hdGguY2VpbCgodGhpcy5fc3RhdGVUaW1lIC8gMTAwMCkpLnRvU3RyaW5nKCk7XG4gICAgICAgIHRoaXMuX3N0YXRlVGltZSAtPSBkdCAqIDEwMDA7XG4gICAgfTtcblxuICAgIHByaXZhdGUgX2luaXQoKXtcbiAgICAgICAgbGV0IGV2ZW50RGlzcGF0Y2hlciA9IHRoaXMuX29uRXZlbnRMaXN0ZW5lci5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLl9jb25maXJtQnV0dG9uLnNldFR5cGUodGhpcy5fY29uZmlybUJ1dHRvbi5CVVRUT05fVFlQRS5DT05GSVJNKTtcbiAgICAgICAgdGhpcy5fY29uZmlybUJ1dHRvbi5zZXRFdmVudERpc3BhdGNoZXIoZXZlbnREaXNwYXRjaGVyKTtcbiAgICAgICAgdGhpcy5fY29uZmlybUJ1dHRvbi5yZWdpc3RlckNsaWNrRXZlbnQoKTtcblxuICAgICAgICB0aGlzLl9jYW5jZWxCdXR0b24uc2V0VHlwZSh0aGlzLl9jb25maXJtQnV0dG9uLkJVVFRPTl9UWVBFLkNBTkNFTCk7XG4gICAgICAgIHRoaXMuX2NhbmNlbEJ1dHRvbi5zZXRFdmVudERpc3BhdGNoZXIoZXZlbnREaXNwYXRjaGVyKTtcbiAgICAgICAgdGhpcy5fY2FuY2VsQnV0dG9uLnJlZ2lzdGVyQ2xpY2tFdmVudCgpO1xuXG4gICAgICAgIHRoaXMuX2JldEFyZWFMYXlvdXQuc2V0RXZlbnREaXNwYXRjaGVyKGV2ZW50RGlzcGF0Y2hlcik7XG4gICAgICAgIHRoaXMuX2dhbWVNb2RlbC5sb2dpbigpO1xuICAgIH07XG5cbiAgICBwcml2YXRlIF9vbkV2ZW50TGlzdGVuZXIoZXZlbnQ6IGFueSwgZGF0YTogYW55KXtcbiAgICAgICAgaWYgKGV2ZW50ID09IHRoaXMuX2dhbWVNb2RlbC5NT0RFTF9FVkVOVC5ORVdfUk9VTkQpIHtcbiAgICAgICAgICAgIHRoaXMuX29uUmVjZWl2ZU5ld1JvdW5kKGRhdGEpO1xuICAgICAgICB9IGVsc2UgaWYgKGV2ZW50ID09IHRoaXMuX2dhbWVNb2RlbC5NT0RFTF9FVkVOVC5TRVRUTEUpIHtcbiAgICAgICAgICAgIHRoaXMuX29uUmVjZWl2ZVNldHRsZShkYXRhKTtcbiAgICAgICAgfSBlbHNlIGlmIChldmVudCA9PSB0aGlzLl9nYW1lTW9kZWwuTU9ERUxfRVZFTlQuU1lOQ19VU0VSX1NDT1JFKSB7XG4gICAgICAgICAgICB0aGlzLl9vblJlY2VpdmVTeW5jVXNlckJldChkYXRhKTtcbiAgICAgICAgfSBlbHNlIGlmIChldmVudCA9PSB0aGlzLl9iZXRBcmVhTGF5b3V0LlZJRVdfRVZFTlQuT05fQ0xJQ0tfQVJFQSkge1xuICAgICAgICAgICAgbGV0IHRvdGFsU2NvcmUgPSB0aGlzLl9iZXRBcmVhTGF5b3V0LmdldFRvdGFsQmV0U2NvcmUoKTtcbiAgICAgICAgICAgIGxldCBzZWxlY3RWYWx1ZSA9IHRoaXMuX2NoaXBCdXR0b25MYXlvdXQuZ2V0U2VsZWN0VmFsdWUoKTtcbiAgICAgICAgICAgIGlmICgoc2VsZWN0VmFsdWUgKyB0b3RhbFNjb3JlKSA+IHRoaXMuX3VzZXJTY29yZSlcbiAgICAgICAgICAgICAgICByZXR1cm47XG5cbiAgICAgICAgICAgIHRoaXMuX3NldFVzZXJTY29yZUxhYmVsKHRoaXMuX3VzZXJTY29yZSAtIHRvdGFsU2NvcmUgLSBzZWxlY3RWYWx1ZSk7XG4gICAgICAgICAgICB0aGlzLl9iZXRBcmVhTGF5b3V0LnNob3dCZXRBbmltKGRhdGEsIHNlbGVjdFZhbHVlKTtcbiAgICAgICAgfSBlbHNlIGlmIChldmVudCA9PSB0aGlzLl9jYW5jZWxCdXR0b24uVklFV19FVkVOVC5DQU5DRUwpIHtcbiAgICAgICAgICAgIHRoaXMuX2JldEFyZWFMYXlvdXQuY2FuY2VsQmV0KCk7XG4gICAgICAgICAgICB0aGlzLl9zZXRVc2VyU2NvcmVMYWJlbCh0aGlzLl91c2VyU2NvcmUpO1xuICAgICAgICB9IGVsc2UgaWYgKGV2ZW50ID09IHRoaXMuX2NhbmNlbEJ1dHRvbi5WSUVXX0VWRU5ULkNPTkZJUk0pIHtcbiAgICAgICAgICAgIHRoaXMuX2dhbWVNb2RlbC51c2VyQmV0KHRoaXMuX2JldEFyZWFMYXlvdXQuZ2V0QmV0U2NvcmVzKCkpO1xuICAgICAgICAgICAgdGhpcy5fYmV0QXJlYUxheW91dC5jb25maXJtQmV0KCk7XG4gICAgICAgIH07XG4gICAgfTtcblxuICAgIHByaXZhdGUgX29uUmVjZWl2ZU5ld1JvdW5kKHN0cnVjdDogTmV3Um91bmRNb2RlbFN0cnVjdCl7XG4gICAgICAgIHRoaXMuX3N0YXRlVGltZSA9IHN0cnVjdC5zdGF0ZVRpbWU7XG4gICAgICAgIHRoaXMuX3VzZXJTY29yZSA9IHN0cnVjdC51c2VyU2NvcmU7XG4gICAgICAgIHRoaXMuX3NldHRsZUxhYmVsLnJlc2V0KCk7XG4gICAgICAgIHRoaXMuX2JldEFyZWFMYXlvdXQucmVzZXQoKTtcbiAgICAgICAgdGhpcy5fYmV0QXJlYUxheW91dC5zZXRUb3VjaEVuYWJsZWQodHJ1ZSk7XG4gICAgICAgIHRoaXMuX3NldFVzZXJTY29yZUxhYmVsKHN0cnVjdC51c2VyU2NvcmUpO1xuICAgIH07XG5cbiAgICBwcml2YXRlIF9vblJlY2VpdmVTZXR0bGUoc3RydWN0OiBTZXR0ZU1vZGVsU3RydWN0KXtcbiAgICAgICAgdGhpcy5fc3RhdGVUaW1lID0gc3RydWN0LnN0YXRlVGltZTtcbiAgICAgICAgdGhpcy5fdXNlclNjb3JlID0gc3RydWN0LnVzZXJTY29yZTtcbiAgICAgICAgdGhpcy5fYmV0QXJlYUxheW91dC5jYW5jZWxCZXQoKTtcbiAgICAgICAgdGhpcy5fYmV0QXJlYUxheW91dC5zZXRUb3VjaEVuYWJsZWQoZmFsc2UpO1xuICAgICAgICB0aGlzLl9zZXR0bGVMYWJlbC5zaG93U2V0dGxlVGV4dChzdHJ1Y3Qud2luQXJlYSwgc3RydWN0LnNldHRsZVNjb3JlKTtcbiAgICAgICAgdGhpcy5fc2V0VXNlclNjb3JlTGFiZWwoc3RydWN0LnVzZXJTY29yZSk7XG4gICAgfTtcblxuICAgIHByaXZhdGUgX29uUmVjZWl2ZVN5bmNVc2VyQmV0KHN0cnVjdDogVXNlclNjb3JlTW9kZWxTdHJ1Y3Qpe1xuICAgICAgICB0aGlzLl91c2VyU2NvcmUgPSBzdHJ1Y3QudXNlclNjb3JlO1xuICAgICAgICB0aGlzLl9zZXRVc2VyU2NvcmVMYWJlbChzdHJ1Y3QudXNlclNjb3JlKTtcbiAgICB9O1xuXG4gICAgcHJpdmF0ZSBfc2V0VXNlclNjb3JlTGFiZWwoc2NvcmU6IG51bWJlcil7XG4gICAgICAgIHRoaXMuX3VzZXJTY29yZUxhYmVsLnN0cmluZyA9IFwi6LSi5LqnOiBcIiArIHNjb3JlLnRvU3RyaW5nKCk7XG4gICAgfTtcbn07XG4iXX0=