import Config from "./Common/Config";

const {ccclass, property} = cc._decorator;

@ccclass
export default class SettleLabel extends cc.Component {
    private _label: cc.Label;
    onLoad(){
        this._label = this.node.getComponent(cc.Label);
    };
    
    reset(){
        this._label.string = "";
    };

    showSettleText(areaIndex: number, winScore: number){
        let scoreText = winScore == 0? "": (winScore > 0? `，你赢 ${winScore}`: `，你输 ${Math.abs(winScore)}`)
        this._label.string = `${Config.AREA_TYPES[areaIndex]}胜` + scoreText;
    };
}
