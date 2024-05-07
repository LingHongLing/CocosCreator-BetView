import StateMachine from "./StateMachine";
import Config from "../Common/Config";
import { NewRoundModelStruct, SetteModelStruct, UserScoreModelStruct } from "../Common/ModelStruct";

const GAME_STATE = {
    NEW_ROUND: "new_round",
    SETTLE: "settle",
};

const STATE_TIME = {
    [GAME_STATE.NEW_ROUND]: 30 * 1000,
    [GAME_STATE.SETTLE]: 10 * 1000,
};

const MODEL_EVENT = {
    NEW_ROUND: "NEW_ROUND",
    SETTLE: "SETTLE",
    SYNC_USER_SCORE: "SYNC_USER_SCORE",
};

const INTERVAL_TIME = 1 * 1000;

export default class GameModel {
    readonly MODEL_EVENT = MODEL_EVENT;

    private _stateMachine: StateMachine;
    private _intervalHandler: any;
    private _eventDispatcher: Function;
    // 游戏逻辑相关
    private _userScore: number;
    private _betScores: number[];

    constructor(eventDispatcher: Function){
        this._eventDispatcher = eventDispatcher;
        this._intervalHandler = null;

        this._userScore = Config.GAME_BEGIN_SCORE;
        this._betScores = [0, 0, 0];
        // 模拟 server 来封包
        this._stateMachine = this._createStateMachine();
    };

    login(){
        this._stateMachine.transferState(GAME_STATE.NEW_ROUND, 0);
        this._intervalHandler = setInterval(() => this._update(INTERVAL_TIME), INTERVAL_TIME);
    };

    leave(){
        clearInterval(this._intervalHandler);
        this._intervalHandler = null;
    };

    userBet(betScores: number[]){
        for(let idx = 0; idx < betScores.length; idx++){
            this._betScores[idx] += betScores[idx];
            this._userScore -= betScores[idx];
        };

        let struct: UserScoreModelStruct = {
            userScore: this._userScore,
        };
        this._eventDispatcher(MODEL_EVENT.SYNC_USER_SCORE, struct);
    };

    private _update(dt: number){
        this._stateMachine.update(dt);
    };

    private _onNewRound(){
        let stateTime = STATE_TIME[GAME_STATE.NEW_ROUND];
        let struct: NewRoundModelStruct = {
            userScore: this._userScore,
            stateTime: stateTime
        };

        this._betScores = [0, 0, 0];
        this._eventDispatcher(MODEL_EVENT.NEW_ROUND, struct);
        this._stateMachine.transferState(GAME_STATE.SETTLE, stateTime);
    };

    private _onSettle(){
        let stateTime = STATE_TIME[GAME_STATE.SETTLE];
        let winArea = Math.floor(Math.random() * Config.AREA_TYPES.length);
        let winScore = this._getWinScore(winArea);
        this._userScore += winScore;
        let struct: SetteModelStruct = {
            userScore: this._userScore,
            winArea: winArea,
            settleScore: winScore,
            stateTime: stateTime
        };
        this._eventDispatcher(MODEL_EVENT.SETTLE, struct);
        this._stateMachine.transferState(GAME_STATE.NEW_ROUND, stateTime);
    };

    private _getWinScore(winArea: number): number{
        let winScore = 0;
        for (let idx = 0; idx < this._betScores.length; idx++)
            winScore += idx == winArea? this._betScores[idx] * (Config.AREA_ODDS[idx] + 1): -this._betScores[idx];
        return winScore;
    };

    private _createStateMachine(): StateMachine{
        let stateMachine = new StateMachine();
        stateMachine.addState(GAME_STATE.NEW_ROUND, this._onNewRound.bind(this));
        stateMachine.addState(GAME_STATE.SETTLE, this._onSettle.bind(this));
        return stateMachine;
    };
};