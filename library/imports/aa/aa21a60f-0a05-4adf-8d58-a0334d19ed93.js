"use strict";
cc._RF.push(module, 'aa21aYPCgVK341YoDNNGe2T', 'BetAreaLayout');
// Script/BetAreaLayout.ts

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
var BetArea_1 = require("./BetArea");
var Config_1 = require("./Common/Config");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var AREA_PREFAB = 'BetAreaPrefab';
var AREA_TYPES = Config_1.default.AREA_TYPES;
var VIEW_EVENT = {
    ON_CLICK_AREA: "BET_AREA_LAYOUT_CLICK_AREA"
};
var BetAreaLayout = /** @class */ (function (_super) {
    __extends(BetAreaLayout, _super);
    function BetAreaLayout() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.VIEW_EVENT = VIEW_EVENT;
        return _this;
    }
    BetAreaLayout.prototype.onLoad = function () {
        cc.resources.load(AREA_PREFAB, this._onPrefabLoaded.bind(this));
    };
    ;
    BetAreaLayout.prototype.getTotalBetScore = function () {
        var scores = this.getBetScores();
        var totalScore = 0;
        scores.forEach(function (score) { return totalScore += score; });
        return totalScore;
    };
    ;
    BetAreaLayout.prototype.getBetScores = function () {
        var scores = [];
        for (var idx = 0; idx < this._areas.length; idx++) {
            scores[idx] = this._areas[idx].getBetCoin();
        }
        ;
        return scores;
    };
    ;
    BetAreaLayout.prototype.setTouchEnabled = function (isEnabled) {
        this._areas.forEach(function (area) { return area.setTouchEnabled(isEnabled); });
    };
    ;
    BetAreaLayout.prototype.setEventDispatcher = function (eventDispatcher) {
        this._eventDispatcher = eventDispatcher;
    };
    ;
    BetAreaLayout.prototype.showBetAnim = function (areaIndex, chipValue) {
        var area = this._areas[areaIndex];
        area.setBetCoin(area.getBetCoin() + chipValue);
        this._areas[areaIndex].showBet(chipValue);
    };
    ;
    BetAreaLayout.prototype.reset = function () {
        this._areas.forEach(function (area) { return area.reset(); });
    };
    ;
    BetAreaLayout.prototype.confirmBet = function () {
        this._areas.forEach(function (area) {
            area.confirmBet();
            area.setAllreadyBetCoin(area.getAllreadyBetCoin() + area.getBetCoin());
            area.setBetCoin(0);
        });
    };
    ;
    BetAreaLayout.prototype.cancelBet = function () {
        this._areas.forEach(function (area) {
            area.cancelBet();
            area.setBetCoin(0);
        });
    };
    ;
    BetAreaLayout.prototype._onEventListener = function (event, data) {
        var area = this._areas[0];
        if (event == area.VIEW_EVENT.ON_CLICK_BET_AREA)
            this._eventDispatcher(VIEW_EVENT.ON_CLICK_AREA, data);
    };
    ;
    BetAreaLayout.prototype._onPrefabLoaded = function (error, asset) {
        this._areas = this._createBetAreas(asset);
    };
    ;
    BetAreaLayout.prototype._createBetAreas = function (prefab) {
        var areas = [];
        var node = null;
        var betArea = null;
        var eventDispatcher = this._onEventListener.bind(this);
        for (var idx = 0; idx < AREA_TYPES.length; idx++) {
            node = cc.instantiate(prefab);
            this.node.addChild(node);
            betArea = node.getComponent(BetArea_1.default);
            betArea.setEventDispatcher(eventDispatcher);
            betArea.setAreaIndex(idx);
            betArea.setAreaName(AREA_TYPES[idx]);
            betArea.registerClickEvent();
            areas[idx] = betArea;
        }
        ;
        return areas;
    };
    ;
    BetAreaLayout = __decorate([
        ccclass
    ], BetAreaLayout);
    return BetAreaLayout;
}(cc.Component));
exports.default = BetAreaLayout;

cc._RF.pop();