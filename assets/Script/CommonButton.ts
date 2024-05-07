const {ccclass, property} = cc._decorator;

const BUTTON_TYPE = {
    CONFIRM: 0,
    CANCEL: 1,
};

const VIEW_EVENT = {
    CONFIRM: "CONFIRM",
    CANCEL: "CANCEL"
};

const EVENT_MAP = {
    [BUTTON_TYPE.CONFIRM]: VIEW_EVENT.CONFIRM,
    [BUTTON_TYPE.CANCEL]: VIEW_EVENT.CANCEL
};

@ccclass
export default class CommonButton extends cc.Button{
    readonly BUTTON_TYPE = BUTTON_TYPE;
    readonly VIEW_EVENT = VIEW_EVENT;
    
    private _eventDispatcher: Function;
    private _type: number;

    setType(type: number){
        this._type = type;
    };

    setEventDispatcher(eventDispatcher: Function){
        this._eventDispatcher = eventDispatcher;
    };

    registerClickEvent(){
        let clickEventHandler = new cc.Component.EventHandler();
        clickEventHandler.target = this.node;
        clickEventHandler.component = "CommonButton";
        clickEventHandler.handler = "_onClick";
        this.node.getComponent(cc.Button).clickEvents.push(clickEventHandler);
    };

    private _onClick(event: Event, customEventData: any){
        this._eventDispatcher(EVENT_MAP[this._type]);
    };
}
