import GameModel from "./Model/GameModel";
import BetAreaLayout from "./BetAreaLayout";
import ChipButtonLayout from "./ChipButtonLayout";

import { NewRoundModelStruct, SetteModelStruct, UserScoreModelStruct } from "./Common/ModelStruct";
import SettleLabel from "./SettleLabel";
import CommonButton from "./CommonButton";

const {ccclass, property} = cc._decorator;

@ccclass
export default class GameView extends cc.Component {
    // onLoad () {}
    private _gameModel: GameModel;
    private _countdownLabel: cc.Label;
    private _userScoreLabel: cc.Label;
    private _settleLabel: SettleLabel;
    private _confirmButton: CommonButton;
    private _cancelButton: CommonButton;
    private _betAreaLayout: BetAreaLayout;
    private _chipButtonLayout: ChipButtonLayout;
    private _stateTime: number;
    private _userScore: number;

    onLoad(){
        this._countdownLabel = this.node.getChildByName("CountdownLabel").getComponent(cc.Label);
        this._userScoreLabel = this.node.getChildByName("UserScoreLabel").getComponent(cc.Label);
        this._settleLabel = this.node.getChildByName("SettleLabel").getComponent("SettleLabel");
        this._confirmButton = this.node.getChildByName("ConfirmButton").getComponent("CommonButton");
        this._cancelButton = this.node.getChildByName("CancelButton").getComponent("CommonButton");
        this._betAreaLayout = this.node.getChildByName("BetAreaLayout").getComponent("BetAreaLayout");
        this._chipButtonLayout = this.node.getChildByName("ChipButtonLayout").getComponent("ChipButtonLayout");
        this._stateTime = 0;
        this._userScore = 0;
        this._gameModel = new GameModel(this._onEventListener.bind(this));
        this._init();
    };

    update(dt: number){
        this._countdownLabel.string = Math.ceil((this._stateTime / 1000)).toString();
        this._stateTime -= dt * 1000;
    };

    private _init(){
        let eventDispatcher = this._onEventListener.bind(this);
        this._confirmButton.setType(this._confirmButton.BUTTON_TYPE.CONFIRM);
        this._confirmButton.setEventDispatcher(eventDispatcher);
        this._confirmButton.registerClickEvent();

        this._cancelButton.setType(this._confirmButton.BUTTON_TYPE.CANCEL);
        this._cancelButton.setEventDispatcher(eventDispatcher);
        this._cancelButton.registerClickEvent();

        this._betAreaLayout.setEventDispatcher(eventDispatcher);
        this._gameModel.login();
    };

    private _onEventListener(event: any, data: any){
        if (event == this._gameModel.MODEL_EVENT.NEW_ROUND) {
            this._onReceiveNewRound(data);
        } else if (event == this._gameModel.MODEL_EVENT.SETTLE) {
            this._onReceiveSettle(data);
        } else if (event == this._gameModel.MODEL_EVENT.SYNC_USER_SCORE) {
            this._onReceiveSyncUserBet(data);
        } else if (event == this._betAreaLayout.VIEW_EVENT.ON_CLICK_AREA) {
            let totalScore = this._betAreaLayout.getTotalBetScore();
            let selectValue = this._chipButtonLayout.getSelectValue();
            if ((selectValue + totalScore) > this._userScore)
                return;

            this._setUserScoreLabel(this._userScore - totalScore - selectValue);
            this._betAreaLayout.showBetAnim(data, selectValue);
        } else if (event == this._cancelButton.VIEW_EVENT.CANCEL) {
            this._betAreaLayout.cancelBet();
            this._setUserScoreLabel(this._userScore);
        } else if (event == this._cancelButton.VIEW_EVENT.CONFIRM) {
            this._gameModel.userBet(this._betAreaLayout.getBetScores());
            this._betAreaLayout.confirmBet();
        };
    };

    private _onReceiveNewRound(struct: NewRoundModelStruct){
        this._stateTime = struct.stateTime;
        this._userScore = struct.userScore;
        this._settleLabel.reset();
        this._betAreaLayout.reset();
        this._betAreaLayout.setTouchEnabled(true);
        this._setUserScoreLabel(struct.userScore);
    };

    private _onReceiveSettle(struct: SetteModelStruct){
        this._stateTime = struct.stateTime;
        this._userScore = struct.userScore;
        this._betAreaLayout.cancelBet();
        this._betAreaLayout.setTouchEnabled(false);
        this._settleLabel.showSettleText(struct.winArea, struct.settleScore);
        this._setUserScoreLabel(struct.userScore);
    };

    private _onReceiveSyncUserBet(struct: UserScoreModelStruct){
        this._userScore = struct.userScore;
        this._setUserScoreLabel(struct.userScore);
    };

    private _setUserScoreLabel(score: number){
        this._userScoreLabel.string = "财产: " + score.toString();
    };
};
