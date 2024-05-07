
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/BetArea.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvQmV0QXJlYS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwrQ0FBMEM7QUFFMUMsSUFBTSxXQUFXLEdBQUcsZ0JBQWdCLENBQUM7QUFFL0IsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFFMUMsSUFBTSxVQUFVLEdBQUc7SUFDZixpQkFBaUIsRUFBRSxtQkFBbUI7Q0FDekMsQ0FBQztBQUVGO0lBQXFDLDJCQUFZO0lBQWpEO1FBQUEscUVBMEhDO1FBekhZLGdCQUFVLEdBQUcsVUFBVSxDQUFDO1FBVXpCLHNCQUFnQixHQUFhLElBQUksQ0FBQzs7SUErRzlDLENBQUM7SUE1R0csd0JBQU0sR0FBTjtRQUFBLGlCQVdDO1FBVkcsSUFBSSxDQUFDLFVBQVUsR0FBRyxDQUFDLENBQUM7UUFDcEIsSUFBSSxDQUFDLGdCQUFnQixHQUFHLENBQUMsQ0FBQztRQUMxQixJQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQztRQUNsQixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsRUFBRSxDQUFDO1FBQzNCLElBQUksQ0FBQyxjQUFjLEdBQUcsRUFBRSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsWUFBWSxDQUFDLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDMUcsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxjQUFjLENBQUMsZUFBZSxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNwSCxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxJQUFJLENB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LCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ2hpcFN0eWxlIGZyb20gXCIuL1N0eWxlL0NoaXBTdHlsZVwiO1xuXG5jb25zdCBDSElQX1BSRUZBQiA9ICdBbmltQ2hpcFByZWZhYic7XG5cbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xuXG5jb25zdCBWSUVXX0VWRU5UID0ge1xuICAgIE9OX0NMSUNLX0JFVF9BUkVBOiBcIk9OX0NMSUNLX0JFVF9BUkVBXCJcbn07XG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmV0QXJlYSBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG4gICAgcmVhZG9ubHkgVklFV19FVkVOVCA9IFZJRVdfRVZFTlQ7XG5cbiAgICBwcml2YXRlIF9hbGxyZWFkeUJldENvaW46IG51bWJlcjtcbiAgICBwcml2YXRlIF9iZXRDb2luOiBudW1iZXI7XG4gICAgcHJpdmF0ZSBfYmV0TGFiZWw6IGNjLkxhYmVsO1xuICAgIHByaXZhdGUgX2FyZWFOYW1lTGFiZWw6IGNjLkxhYmVsO1xuICAgIHByaXZhdGUgX2FuaW1DaGlwTm9kZTogY2MuTm9kZTtcbiAgICBwcml2YXRlIF9hcmVhSW5kZXg6IG51bWJlcjtcbiAgICBwcml2YXRlIF91bkNoZWNrQW5pbUNoaXA6IGNjLk5vZGVbXTtcbiAgICBwcml2YXRlIF9jaGVja0FuaW1DaGlwOiBjYy5Ob2RlW107XG4gICAgcHJpdmF0ZSBfZXZlbnREaXNwYXRjaGVyOiBGdW5jdGlvbiA9IG51bGw7XG4gICAgcHJpdmF0ZSBfYW5pbUNoaXBQcmVmYWI6IGNjLlByZWZhYjtcblxuICAgIG9uTG9hZCgpe1xuICAgICAgICB0aGlzLl9hcmVhSW5kZXggPSAwO1xuICAgICAgICB0aGlzLl9hbGxyZWFkeUJldENvaW4gPSAwO1xuICAgICAgICB0aGlzLl9iZXRDb2luID0gMDtcbiAgICAgICAgdGhpcy5fdW5DaGVja0FuaW1DaGlwID0gW107XG4gICAgICAgIHRoaXMuX2NoZWNrQW5pbUNoaXAgPSBbXTtcbiAgICAgICAgdGhpcy5fYmV0TGFiZWwgPSB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJCYWNrZ3JvdW5kXCIpLmdldENoaWxkQnlOYW1lKFwiQmV0TGFiZWxcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKTtcbiAgICAgICAgdGhpcy5fYXJlYU5hbWVMYWJlbCA9IHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIkJhY2tncm91bmRcIikuZ2V0Q2hpbGRCeU5hbWUoXCJBcmVhTmFtZUxhYmVsXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCk7XG4gICAgICAgIHRoaXMuX2FuaW1DaGlwTm9kZSA9IHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIkJhY2tncm91bmRcIikuZ2V0Q2hpbGRCeU5hbWUoXCJBbmltQ2hpcE5vZGVcIik7XG4gICAgICAgIHRoaXMuX3VwZGF0ZUJldExhYmVsKCk7XG4gICAgICAgIGNjLnJlc291cmNlcy5sb2FkKENISVBfUFJFRkFCLCAoZXJyb3I6IEVycm9yLCBhc3NldDogY2MuQXNzZXQpID0+IHt0aGlzLl9hbmltQ2hpcFByZWZhYiA9IGFzc2V0IGFzIGNjLlByZWZhYn0pO1xuICAgIH07XG5cbiAgICBzaG93QmV0KGNoaXBWYWx1ZTogbnVtYmVyKXtcbiAgICAgICAgbGV0IG5vZGUgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLl9hbmltQ2hpcFByZWZhYik7XG4gICAgICAgIHRoaXMuX2FuaW1DaGlwTm9kZS5hZGRDaGlsZChub2RlKTtcbiAgICAgICAgbm9kZS5nZXRDb21wb25lbnQoQ2hpcFN0eWxlKS5zZXRDaGlwVmFsdWUoY2hpcFZhbHVlKTtcbiAgICAgICAgXG4gICAgICAgIC8vIOiwg+aVtOetueeggemjnueahOWMuuWfn1xuICAgICAgICBsZXQgd2lkdGggPSB0aGlzLm5vZGUud2lkdGggLSAxMDA7XG4gICAgICAgIGxldCBoZWlnaHQgPSB0aGlzLm5vZGUuaGVpZ2h0IC0gMTAwO1xuICAgICAgICBsZXQgZmluYWxQb3MgPSBjYy52MyhcbiAgICAgICAgICAgIE1hdGgucmFuZG9tKCkgKiB3aWR0aCAtIHdpZHRoIC8gMixcbiAgICAgICAgICAgIE1hdGgucmFuZG9tKCkgKiBoZWlnaHQgLSBoZWlnaHQgLyAyXG4gICAgICAgICk7XG4gICAgICAgIG5vZGUuc2V0UG9zaXRpb24obm9kZS5jb252ZXJ0VG9Ob2RlU3BhY2VBUihjYy52MigwLCAwKSkpO1xuICAgICAgICBjYy50d2Vlbihub2RlKVxuICAgICAgICAudG8oMC41LCB7IHBvc2l0aW9uOiBmaW5hbFBvcywgYW5nbGU6IE1hdGgucmFuZG9tKCkgKiAzNjAgfSlcbiAgICAgICAgLnN0YXJ0KCk7XG4gICAgICAgIHRoaXMuX3VuQ2hlY2tBbmltQ2hpcC5wdXNoKG5vZGUpO1xuICAgIH07XG5cbiAgICByZXNldCgpe1xuICAgICAgICB0aGlzLl91bkNoZWNrQW5pbUNoaXAuZm9yRWFjaCgobm9kZSkgPT4gbm9kZS5kZXN0cm95KCkpO1xuICAgICAgICB0aGlzLl91bkNoZWNrQW5pbUNoaXAgPSBbXTtcbiAgICAgICAgdGhpcy5fY2hlY2tBbmltQ2hpcC5mb3JFYWNoKChub2RlKSA9PiBub2RlLmRlc3Ryb3koKSk7XG4gICAgICAgIHRoaXMuX2NoZWNrQW5pbUNoaXAgPSBbXTtcbiAgICAgICAgdGhpcy5zZXRCZXRDb2luKDApO1xuICAgICAgICB0aGlzLnNldEFsbHJlYWR5QmV0Q29pbigwKTtcbiAgICB9O1xuXG4gICAgY29uZmlybUJldCgpe1xuICAgICAgICB0aGlzLl91bkNoZWNrQW5pbUNoaXAuZm9yRWFjaCgobm9kZSkgPT4gdGhpcy5fY2hlY2tBbmltQ2hpcC5wdXNoKG5vZGUpKTtcbiAgICAgICAgdGhpcy5fdW5DaGVja0FuaW1DaGlwID0gW107XG4gICAgfTtcblxuICAgIGNhbmNlbEJldCgpe1xuICAgICAgICB0aGlzLl91bkNoZWNrQW5pbUNoaXAuZm9yRWFjaCgobm9kZSkgPT4gbm9kZS5kZXN0cm95KCkpO1xuICAgICAgICB0aGlzLl91bkNoZWNrQW5pbUNoaXAgPSBbXTtcbiAgICB9O1xuXG4gICAgcmVnaXN0ZXJDbGlja0V2ZW50KCl7XG4gICAgICAgIGxldCBjbGlja0V2ZW50SGFuZGxlciA9IG5ldyBjYy5Db21wb25lbnQuRXZlbnRIYW5kbGVyKCk7XG4gICAgICAgIGNsaWNrRXZlbnRIYW5kbGVyLnRhcmdldCA9IHRoaXMubm9kZTtcbiAgICAgICAgY2xpY2tFdmVudEhhbmRsZXIuY29tcG9uZW50ID0gXCJCZXRBcmVhXCI7XG4gICAgICAgIGNsaWNrRXZlbnRIYW5kbGVyLmhhbmRsZXIgPSBcIl9vbkNsaWNrXCI7XG4gICAgICAgIHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5jbGlja0V2ZW50cy5wdXNoKGNsaWNrRXZlbnRIYW5kbGVyKTtcbiAgICB9O1xuXG4gICAgc2V0RXZlbnREaXNwYXRjaGVyKGV2ZW50RGlzcGF0Y2hlcjogRnVuY3Rpb24pe1xuICAgICAgICB0aGlzLl9ldmVudERpc3BhdGNoZXIgPSBldmVudERpc3BhdGNoZXI7XG4gICAgfTtcblxuICAgIHNldFRvdWNoRW5hYmxlZChpc0VuYWJsZWQ6IGJvb2xlYW4pe1xuICAgICAgICB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbikuaW50ZXJhY3RhYmxlID0gaXNFbmFibGVkO1xuICAgIH07XG5cbiAgICBzZXRBcmVhSW5kZXgoaW5kZXg6IG51bWJlcil7XG4gICAgICAgIHRoaXMuX2FyZWFJbmRleCA9IGluZGV4O1xuICAgIH07XG5cbiAgICBzZXRBcmVhTmFtZShhcmVhTmFtZTogc3RyaW5nKXtcbiAgICAgICAgdGhpcy5fYXJlYU5hbWVMYWJlbC5zdHJpbmcgPSBhcmVhTmFtZTtcbiAgICB9O1xuXG4gICAgc2V0QWxscmVhZHlCZXRDb2luKGJldENvaW46IG51bWJlcil7XG4gICAgICAgIHRoaXMuX2FsbHJlYWR5QmV0Q29pbiA9IGJldENvaW47XG4gICAgICAgIHRoaXMuX3VwZGF0ZUJldExhYmVsKCk7XG4gICAgfTtcblxuICAgIGdldEFsbHJlYWR5QmV0Q29pbigpOiBudW1iZXJ7XG4gICAgICAgIHJldHVybiB0aGlzLl9hbGxyZWFkeUJldENvaW47XG4gICAgfTtcblxuICAgIHNldEJldENvaW4oYmV0Q29pbjogbnVtYmVyKXtcbiAgICAgICAgdGhpcy5fYmV0Q29pbiA9IGJldENvaW47XG4gICAgICAgIHRoaXMuX3VwZGF0ZUJldExhYmVsKCk7XG4gICAgfTtcblxuICAgIGdldEJldENvaW4oKTogbnVtYmVye1xuICAgICAgICByZXR1cm4gdGhpcy5fYmV0Q29pbjtcbiAgICB9O1xuXG4gICAgcHJpdmF0ZSBfb25DbGljayhldmVudDogRXZlbnQsIGN1c3RvbUV2ZW50RGF0YTogYW55KXtcbiAgICAgICAgdGhpcy5fZXZlbnREaXNwYXRjaGVyKFZJRVdfRVZFTlQuT05fQ0xJQ0tfQkVUX0FSRUEsIHRoaXMuX2FyZWFJbmRleCk7XG4gICAgfTtcblxuICAgIHByaXZhdGUgX3VwZGF0ZUJldExhYmVsKCl7XG4gICAgICAgIGxldCB0ZXh0ID0gXCJcIjtcbiAgICAgICAgaWYgKHRoaXMuX2FsbHJlYWR5QmV0Q29pbiA+IDAgJiYgdGhpcy5fYmV0Q29pbiA+IDApIHtcbiAgICAgICAgICAgIHRleHQgPSBgJHt0aGlzLl9hbGxyZWFkeUJldENvaW59ICsgKCR7dGhpcy5fYmV0Q29pbn0pYDtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLl9iZXRDb2luID4gMCkge1xuICAgICAgICAgICAgdGV4dCA9IGAoJHt0aGlzLl9iZXRDb2lufSlgO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGV4dCA9IGAke3RoaXMuX2FsbHJlYWR5QmV0Q29pbn1gO1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLl9iZXRMYWJlbC5zdHJpbmcgPSBcIuS4i+azqO+8mlwiICsgdGV4dDtcbiAgICB9O1xufVxuIl19