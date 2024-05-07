const {ccclass, property} = cc._decorator;

@ccclass
export default class ChipStyle extends cc.Component {
    private _sprite: cc.Sprite;
    private _label: cc.Label;

    onLoad () {
        this._sprite = this.node.getChildByName("Sprite").getComponent(cc.Sprite);
        this._label = this.node.getChildByName("Sprite").getChildByName("Label").getComponent(cc.Label);
    };

    setChipValue(value: number){
        this._label.string = value.toString();
        // TODO 图档资源好了更换 spriteFrame
        // this._sprite.spriteFrame = "";
    };

};
