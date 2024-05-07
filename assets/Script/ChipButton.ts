const {ccclass, property} = cc._decorator;

const VIEW_EVENT = {
    ON_CLICK_CHIP_BUTTON: "ON_CLICK_CHIP_BUTTON"
};

@ccclass
export default class ChipButton extends cc.Button{
    readonly VIEW_EVENT = VIEW_EVENT;

    private _chipIndex: number;
    private _eventDispatcher: Function;

    getChipIndex(): number{
        return this._chipIndex;
    };

    setChipIndex(index: number){
        this._chipIndex = index;
    };

    setEventDispatcher(eventDispatcher: Function){
        this._eventDispatcher = eventDispatcher;
    };

    registerClickEvent(){
        let clickEventHandler = new cc.Component.EventHandler();
        clickEventHandler.target = this.node;
        clickEventHandler.component = "ChipButton";
        clickEventHandler.handler = "_onClick";
        clickEventHandler.customEventData = this._chipIndex.toString();
        this.node.getComponent(cc.Button).clickEvents.push(clickEventHandler);
    };

    private _onClick(event: Event, customEventData: any){
        this._eventDispatcher(VIEW_EVENT.ON_CLICK_CHIP_BUTTON, customEventData);
    };
}
