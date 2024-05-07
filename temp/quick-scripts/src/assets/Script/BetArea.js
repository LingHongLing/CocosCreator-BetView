"use strict";
cc._RF.push(module, '4e8b5X1irlKYJnxW8NCJKKT', 'BetArea');
// Script/BetArea.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var ChipStyle_1 = require("./Style/ChipStyle");
var CHIP_PREFAB = 'AnimChipPrefab';
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var VIEW_EVENT = {
    ON_CLICK_BET_AREA: "ON_CLICK_BET_AREA"
};
var BetArea = /** @class */ (function (_super) {
    __extends(BetArea, _super);
    function BetArea() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.VIEW_EVENT = VIEW_EVENT;
        _this._eventDispatcher = null;
        return _this;
    }
    BetArea.prototype.onLoad = function () {
        var _this = this;
        this._areaIndex = 0;
        this._allreadyBetCoin = 0;
        this._betCoin = 0;
        this._unCheckAnimChip = [];
        this._checkAnimChip = [];
        this._betLabel = this.node.getChildByName("Background").getChildByName("BetLabel").getComponent(cc.Label);
        this._areaNameLabel = this.node.getChildByName("Background").getChildByName("AreaNameLabel").getComponent(cc.Label);
        this._animChipNode = this.node.getChildByName("Background").getChildByName("AnimChipNode");
        this._updateBetLabel();
        cc.resources.load(CHIP_PREFAB, function (error, asset) { _this._animChipPrefab = asset; });
    };
    ;
    BetArea.prototype.showBet = function (chipValue) {
        var node = cc.instantiate(this._animChipPrefab);
        this._animChipNode.addChild(node);
        node.getComponent(ChipStyle_1.default).setChipValue(chipValue);
        // 调整筹码飞的区域
        var width = this.node.width - 100;
        var height = this.node.height - 100;
        var finalPos = cc.v3(Math.random() * width - width / 2, Math.random() * height - height / 2);
        node.setPosition(node.convertToNodeSpaceAR(cc.v2(0, 0)));
        cc.tween(node)
            .to(0.5, { position: finalPos, angle: Math.random() * 360 })
            .start();
        this._unCheckAnimChip.push(node);
    };
    ;
    BetArea.prototype.reset = function () {
        this._unCheckAnimChip.forEach(function (node) { return node.destroy(); });
        this._unCheckAnimChip = [];
        this._checkAnimChip.forEach(function (node) { return node.destroy(); });
        this._checkAnimChip = [];
        this.setBetCoin(0);
        this.setAllreadyBetCoin(0);
    };
    ;
    BetArea.prototype.confirmBet = function () {
        var _this = this;
        this._unCheckAnimChip.forEach(function (node) { return _this._checkAnimChip.push(node); });
        this._unCheckAnimChip = [];
    };
    ;
    BetArea.prototype.cancelBet = function () {
        this._unCheckAnimChip.forEach(function (node) { return node.destroy(); });
        this._unCheckAnimChip = [];
    };
    ;
    BetArea.prototype.registerClickEvent = function () {
        var clickEventHandler = new cc.Component.EventHandler();
        clickEventHandler.target = this.node;
        clickEventHandler.component = "BetArea";
        clickEventHandler.handler = "_onClick";
        this.node.getComponent(cc.Button).clickEvents.push(clickEventHandler);
    };
    ;
    BetArea.prototype.setEventDispatcher = function (eventDispatcher) {
        this._eventDispatcher = eventDispatcher;
    };
    ;
    BetArea.prototype.setTouchEnabled = function (isEnabled) {
        this.node.getComponent(cc.Button).interactable = isEnabled;
    };
    ;
    BetArea.prototype.setAreaIndex = function (index) {
        this._areaIndex = index;
    };
    ;
    BetArea.prototype.setAreaName = function (areaName) {
        this._areaNameLabel.string = areaName;
    };
    ;
    BetArea.prototype.setAllreadyBetCoin = function (betCoin) {
        this._allreadyBetCoin = betCoin;
        this._updateBetLabel();
    };
    ;
    BetArea.prototype.getAllreadyBetCoin = function () {
        return this._allreadyBetCoin;
    };
    ;
    BetArea.prototype.setBetCoin = function (betCoin) {
        this._betCoin = betCoin;
        this._updateBetLabel();
    };
    ;
    BetArea.prototype.getBetCoin = function () {
        return this._betCoin;
    };
    ;
    BetArea.prototype._onClick = function (event, customEventData) {
        this._eventDispatcher(VIEW_EVENT.ON_CLICK_BET_AREA, this._areaIndex);
    };
    ;
    BetArea.prototype._updateBetLabel = function () {
        var text = "";
        if (this._allreadyBetCoin > 0 && this._betCoin > 0) {
            text = this._allreadyBetCoin + " + (" + this._betCoin + ")";
        }
        else if (this._betCoin > 0) {
            text = "(" + this._betCoin + ")";
        }
        else {
            text = "" + this._allreadyBetCoin;
        }
        ;
        this._betLabel.string = "下注：" + text;
    };
    ;
    BetArea = __decorate([
        ccclass
    ], BetArea);
    return BetArea;
}(cc.Component));
exports.default = BetArea;

cc._RF.pop();