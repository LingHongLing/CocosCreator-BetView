// 简单的状态机，符合 GameModel 的需求
export default class StateMachine {
    private _nextState: any;
    private _stateTime: number;
    private _stateFuncs: {};

    constructor(){
        this._nextState = null;
        this._stateTime = 0;
        this._stateFuncs = {};
    };

    update(dt: number){
        if (this._nextState === null)
            return;

        this._stateTime -= dt;
        if (this._stateTime <= 0) {
            let nextState = this._nextState;
            this._nextState = null;
            this._stateFuncs[nextState]();
        };
    };

    transferState(state: any, stateTime: number){
        this._nextState = state;
        this._stateTime = stateTime;
    };

    setState(state: any){
        this._nextState = state;
    };

    addState(state: any, func: Function){
        this._stateFuncs[state] = func;
    };
};