import ChipStyle from "./Style/ChipStyle";

const CHIP_PREFAB = 'AnimChipPrefab';

const {ccclass, property} = cc._decorator;

const VIEW_EVENT = {
    ON_CLICK_BET_AREA: "ON_CLICK_BET_AREA"
};
@ccclass
export default class BetArea extends cc.Component {
    readonly VIEW_EVENT = VIEW_EVENT;

    private _allreadyBetCoin: number;
    private _betCoin: number;
    private _betLabel: cc.Label;
    private _areaNameLabel: cc.Label;
    private _animChipNode: cc.Node;
    private _areaIndex: number;
    private _unCheckAnimChip: cc.Node[];
    private _checkAnimChip: cc.Node[];
    private _eventDispatcher: Function = null;
    private _animChipPrefab: cc.Prefab;

    onLoad(){
        this._areaIndex = 0;
        this._allreadyBetCoin = 0;
        this._betCoin = 0;
        this._unCheckAnimChip = [];
        this._checkAnimChip = [];
        this._betLabel = this.node.getChildByName("Background").getChildByName("BetLabel").getComponent(cc.Label);
        this._areaNameLabel = this.node.getChildByName("Background").getChildByName("AreaNameLabel").getComponent(cc.Label);
        this._animChipNode = this.node.getChildByName("Background").getChildByName("AnimChipNode");
        this._updateBetLabel();
        cc.resources.load(CHIP_PREFAB, (error: Error, asset: cc.Asset) => {this._animChipPrefab = asset as cc.Prefab});
    };

    showBet(chipValue: number){
        let node = cc.instantiate(this._animChipPrefab);
        this._animChipNode.addChild(node);
        node.getComponent(ChipStyle).setChipValue(chipValue);
        
        // 调整筹码飞的区域
        let width = this.node.width - 100;
        let height = this.node.height - 100;
        let finalPos = cc.v3(
            Math.random() * width - width / 2,
            Math.random() * height - height / 2
        );
        node.setPosition(node.convertToNodeSpaceAR(cc.v2(0, 0)));
        cc.tween(node)
        .to(0.5, { position: finalPos, angle: Math.random() * 360 })
        .start();
        this._unCheckAnimChip.push(node);
    };

    reset(){
        this._unCheckAnimChip.forEach((node) => node.destroy());
        this._unCheckAnimChip = [];
        this._checkAnimChip.forEach((node) => node.destroy());
        this._checkAnimChip = [];
        this.setBetCoin(0);
        this.setAllreadyBetCoin(0);
    };

    confirmBet(){
        this._unCheckAnimChip.forEach((node) => this._checkAnimChip.push(node));
        this._unCheckAnimChip = [];
    };

    cancelBet(){
        this._unCheckAnimChip.forEach((node) => node.destroy());
        this._unCheckAnimChip = [];
    };

    registerClickEvent(){
        let clickEventHandler = new cc.Component.EventHandler();
        clickEventHandler.target = this.node;
        clickEventHandler.component = "BetArea";
        clickEventHandler.handler = "_onClick";
        this.node.getComponent(cc.Button).clickEvents.push(clickEventHandler);
    };

    setEventDispatcher(eventDispatcher: Function){
        this._eventDispatcher = eventDispatcher;
    };

    setTouchEnabled(isEnabled: boolean){
        this.node.getComponent(cc.Button).interactable = isEnabled;
    };

    setAreaIndex(index: number){
        this._areaIndex = index;
    };

    setAreaName(areaName: string){
        this._areaNameLabel.string = areaName;
    };

    setAllreadyBetCoin(betCoin: number){
        this._allreadyBetCoin = betCoin;
        this._updateBetLabel();
    };

    getAllreadyBetCoin(): number{
        return this._allreadyBetCoin;
    };

    setBetCoin(betCoin: number){
        this._betCoin = betCoin;
        this._updateBetLabel();
    };

    getBetCoin(): number{
        return this._betCoin;
    };

    private _onClick(event: Event, customEventData: any){
        this._eventDispatcher(VIEW_EVENT.ON_CLICK_BET_AREA, this._areaIndex);
    };

    private _updateBetLabel(){
        let text = "";
        if (this._allreadyBetCoin > 0 && this._betCoin > 0) {
            text = `${this._allreadyBetCoin} + (${this._betCoin})`;
        } else if (this._betCoin > 0) {
            text = `(${this._betCoin})`;
        } else {
            text = `${this._allreadyBetCoin}`;
        };
        this._betLabel.string = "下注：" + text;
    };
}
