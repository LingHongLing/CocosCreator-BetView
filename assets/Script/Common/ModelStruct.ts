export interface NewRoundModelStruct{
    userScore: number;
    stateTime: number;
};

export interface UserScoreModelStruct{
    userScore: number;
};

export interface SetteModelStruct{
    userScore: number;
    settleScore: number; // 当局结算分数
    winArea: number;
    stateTime: number;
};