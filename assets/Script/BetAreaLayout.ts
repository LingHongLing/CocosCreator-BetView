import BetArea from "./BetArea";
import Config from "./Common/Config";

const {ccclass, property} = cc._decorator;

const AREA_PREFAB = 'BetAreaPrefab';
const AREA_TYPES = Config.AREA_TYPES;
const VIEW_EVENT = {
    ON_CLICK_AREA: "BET_AREA_LAYOUT_CLICK_AREA"
};

@ccclass
export default class BetAreaLayout extends cc.Component {
    readonly VIEW_EVENT = VIEW_EVENT;
    private _areas: BetArea[];
    private _eventDispatcher: Function;

    onLoad(){
        cc.resources.load(AREA_PREFAB, this._onPrefabLoaded.bind(this));
    };

    getTotalBetScore(): number{
        let scores = this.getBetScores();
        let totalScore = 0;
        scores.forEach((score) => totalScore += score);
        return totalScore;
    };

    getBetScores(): number[]{
        let scores = [];
        for(let idx = 0; idx < this._areas.length; idx++) {
            scores[idx] = this._areas[idx].getBetCoin();
        };
        return scores;
    };

    setTouchEnabled(isEnabled: boolean){
        this._areas.forEach((area) => area.setTouchEnabled(isEnabled));
    };

    setEventDispatcher(eventDispatcher: Function){
        this._eventDispatcher = eventDispatcher;
    };

    showBetAnim(areaIndex: number, chipValue: number){
        let area = this._areas[areaIndex];
        area.setBetCoin(area.getBetCoin() + chipValue);
        this._areas[areaIndex].showBet(chipValue);
    };

    reset(){
        this._areas.forEach((area) => area.reset());
    };

    confirmBet(){
        this._areas.forEach((area) => {
            area.confirmBet();
            area.setAllreadyBetCoin(area.getAllreadyBetCoin() + area.getBetCoin());
            area.setBetCoin(0);
        });
    };

    cancelBet(){
        this._areas.forEach((area) => {
            area.cancelBet();
            area.setBetCoin(0);
        });
    };

    private _onEventListener(event: any, data: any){
        let area = this._areas[0];
        if (event == area.VIEW_EVENT.ON_CLICK_BET_AREA)
            this._eventDispatcher(VIEW_EVENT.ON_CLICK_AREA, data);
    };

    private _onPrefabLoaded(error: Error, asset: cc.Asset){
        this._areas = this._createBetAreas(asset as cc.Prefab);
    };

    private _createBetAreas(prefab: cc.Prefab): BetArea[]{
        let areas = [];
        let node = null;
        let betArea = null;
        let eventDispatcher = this._onEventListener.bind(this);
        for(let idx = 0; idx < AREA_TYPES.length; idx++){
            node = cc.instantiate(prefab);
            this.node.addChild(node);
            betArea = node.getComponent(BetArea);
            betArea.setEventDispatcher(eventDispatcher);
            betArea.setAreaIndex(idx);
            betArea.setAreaName(AREA_TYPES[idx]);
            betArea.registerClickEvent();
            areas[idx] = betArea;
        };
        return areas;
    };
}
