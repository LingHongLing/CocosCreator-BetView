import Config from "./Common/Config";
import ChipButton from "./ChipButton";
import ChipStyle from "./Style/ChipStyle";

const {ccclass, property} = cc._decorator;

const CHIP_BUTTON_PREFAB = 'ChipButtonPrefab';
const SELECT_Y_DIFF = 20;
const CHIP_VALUES = Config.CHIP_VALUES;

@ccclass
export default class ChipButtonLayout extends cc.Component {
    private _selectedIndex: number = null;
    private _chipButtons: cc.Node[];

    onLoad() {
        this._selectedIndex = null;
        this._chipButtons = [];
        cc.resources.load(CHIP_BUTTON_PREFAB, this._onPrefabLoaded.bind(this));
    };

    getSelectValue(){
        return CHIP_VALUES[this._selectedIndex];
    };

    setSelectChip(selectIndex: number){
        if (this._selectedIndex == selectIndex) {
            return;
        };
        
        // 初始化的时候 index 可能为 null;
        this._chipButtons[this._selectedIndex]?.setPosition(0, 0);
        this._chipButtons[selectIndex].setPosition(0, SELECT_Y_DIFF);
        this._selectedIndex = selectIndex;
    };

    private _onEventListener(event, data){
        let chipButton = this._chipButtons[0].getComponent(ChipButton);
        if (event == chipButton.VIEW_EVENT.ON_CLICK_CHIP_BUTTON) {
            this.setSelectChip(data);
        };
    };

    private _onPrefabLoaded(error: Error, asset: cc.Asset){
        let prefab = asset as cc.Prefab;
        this._chipButtons = this._createChipButtons(prefab);
        this.setSelectChip(0);
    };

    private _createChipButtons(prefab: cc.Prefab): cc.Node[]{
        let chipButtons = [];
        let eventDispatcher = this._onEventListener.bind(this);
        let node = null;
        let chipButton = null;
        for(let idx = 0; idx < CHIP_VALUES.length; idx++){
            node = cc.instantiate(prefab);
            this.node.addChild(node);
            node.getComponent(ChipStyle).setChipValue(CHIP_VALUES[idx]);
            chipButton = node.getComponent(ChipButton);
            chipButton.setChipIndex(idx);
            chipButton.setEventDispatcher(eventDispatcher);
            chipButton.registerClickEvent();
            chipButtons[idx] = node;
        };
        return chipButtons;
    };
}
