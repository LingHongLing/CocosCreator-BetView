
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/BetAreaLayout.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvQmV0QXJlYUxheW91dC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxxQ0FBZ0M7QUFDaEMsMENBQXFDO0FBRS9CLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRTFDLElBQU0sV0FBVyxHQUFHLGVBQWUsQ0FBQztBQUNwQyxJQUFNLFVBQVUsR0FBRyxnQkFBTSxDQUFDLFVBQVUsQ0FBQztBQUNyQyxJQUFNLFVBQVUsR0FBRztJQUNmLGFBQWEsRUFBRSw0QkFBNEI7Q0FDOUMsQ0FBQztBQUdGO0lBQTJDLGlDQUFZO0lBQXZEO1FBQUEscUVBb0ZDO1FBbkZZLGdCQUFVLEdBQUcsVUFBVSxDQUFDOztJQW1GckMsQ0FBQztJQS9FRyw4QkFBTSxHQUFOO1FBQ0ksRUFBRSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDcEUsQ0FBQztJQUFBLENBQUM7SUFFRix3Q0FBZ0IsR0FBaEI7UUFDSSxJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDakMsSUFBSSxVQUFVLEdBQUcsQ0FBQyxDQUFDO1FBQ25CLE1BQU0sQ0FBQyxPQUFPLENBQUMsVUFBQyxLQUFLLElBQUssT0FBQSxVQUFVLElBQUksS0FBSyxFQUFuQixDQUFtQixDQUFDLENBQUM7UUFDL0MsT0FBTyxVQUFVLENBQUM7SUFDdEIsQ0FBQztJQUFBLENBQUM7SUFFRixvQ0FBWSxHQUFaO1FBQ0ksSUFBSSxNQUFNLEdBQUcsRUFBRSxDQUFDO1FBQ2hCLEtBQUksSUFBSSxHQUFHLEdBQUcsQ0FBQyxFQUFFLEdBQUcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxHQUFHLEVBQUUsRUFB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LEdBQUcsRUFBRSxFQUFDO1lBQzVDLElBQUksR0FBRyxFQUFFLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQzlCLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3pCLE9BQU8sR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLGlCQUFPLENBQUMsQ0FBQztZQUNyQyxPQUFPLENBQUMsa0JBQWtCLENBQUMsZUFBZSxDQUFDLENBQUM7WUFDNUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUMxQixPQUFPLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBQ3JDLE9BQU8sQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO1lBQzdCLEtBQUssQ0FBQyxHQUFHLENBQUMsR0FBRyxPQUFPLENBQUM7U0FDeEI7UUFBQSxDQUFDO1FBQ0YsT0FBTyxLQUFLLENBQUM7SUFDakIsQ0FBQztJQUFBLENBQUM7SUFuRmUsYUFBYTtRQURqQyxPQUFPO09BQ2EsYUFBYSxDQW9GakM7SUFBRCxvQkFBQztDQXBGRCxBQW9GQyxDQXBGMEMsRUFBRSxDQUFDLFNBQVMsR0FvRnREO2tCQXBGb0IsYUFBYSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBCZXRBcmVhIGZyb20gXCIuL0JldEFyZWFcIjtcbmltcG9ydCBDb25maWcgZnJvbSBcIi4vQ29tbW9uL0NvbmZpZ1wiO1xuXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcblxuY29uc3QgQVJFQV9QUkVGQUIgPSAnQmV0QXJlYVByZWZhYic7XG5jb25zdCBBUkVBX1RZUEVTID0gQ29uZmlnLkFSRUFfVFlQRVM7XG5jb25zdCBWSUVXX0VWRU5UID0ge1xuICAgIE9OX0NMSUNLX0FSRUE6IFwiQkVUX0FSRUFfTEFZT1VUX0NMSUNLX0FSRUFcIlxufTtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJldEFyZWFMYXlvdXQgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuICAgIHJlYWRvbmx5IFZJRVdfRVZFTlQgPSBWSUVXX0VWRU5UO1xuICAgIHByaXZhdGUgX2FyZWFzOiBCZXRBcmVhW107XG4gICAgcHJpdmF0ZSBfZXZlbnREaXNwYXRjaGVyOiBGdW5jdGlvbjtcblxuICAgIG9uTG9hZCgpe1xuICAgICAgICBjYy5yZXNvdXJjZXMubG9hZChBUkVBX1BSRUZBQiwgdGhpcy5fb25QcmVmYWJMb2FkZWQuYmluZCh0aGlzKSk7XG4gICAgfTtcblxuICAgIGdldFRvdGFsQmV0U2NvcmUoKTogbnVtYmVye1xuICAgICAgICBsZXQgc2NvcmVzID0gdGhpcy5nZXRCZXRTY29yZXMoKTtcbiAgICAgICAgbGV0IHRvdGFsU2NvcmUgPSAwO1xuICAgICAgICBzY29yZXMuZm9yRWFjaCgoc2NvcmUpID0+IHRvdGFsU2NvcmUgKz0gc2NvcmUpO1xuICAgICAgICByZXR1cm4gdG90YWxTY29yZTtcbiAgICB9O1xuXG4gICAgZ2V0QmV0U2NvcmVzKCk6IG51bWJlcltde1xuICAgICAgICBsZXQgc2NvcmVzID0gW107XG4gICAgICAgIGZvcihsZXQgaWR4ID0gMDsgaWR4IDwgdGhpcy5fYXJlYXMubGVuZ3RoOyBpZHgrKykge1xuICAgICAgICAgICAgc2NvcmVzW2lkeF0gPSB0aGlzLl9hcmVhc1tpZHhdLmdldEJldENvaW4oKTtcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIHNjb3JlcztcbiAgICB9O1xuXG4gICAgc2V0VG91Y2hFbmFibGVkKGlzRW5hYmxlZDogYm9vbGVhbil7XG4gICAgICAgIHRoaXMuX2FyZWFzLmZvckVhY2goKGFyZWEpID0+IGFyZWEuc2V0VG91Y2hFbmFibGVkKGlzRW5hYmxlZCkpO1xuICAgIH07XG5cbiAgICBzZXRFdmVudERpc3BhdGNoZXIoZXZlbnREaXNwYXRjaGVyOiBGdW5jdGlvbil7XG4gICAgICAgIHRoaXMuX2V2ZW50RGlzcGF0Y2hlciA9IGV2ZW50RGlzcGF0Y2hlcjtcbiAgICB9O1xuXG4gICAgc2hvd0JldEFuaW0oYXJlYUluZGV4OiBudW1iZXIsIGNoaXBWYWx1ZTogbnVtYmVyKXtcbiAgICAgICAgbGV0IGFyZWEgPSB0aGlzLl9hcmVhc1thcmVhSW5kZXhdO1xuICAgICAgICBhcmVhLnNldEJldENvaW4oYXJlYS5nZXRCZXRDb2luKCkgKyBjaGlwVmFsdWUpO1xuICAgICAgICB0aGlzLl9hcmVhc1thcmVhSW5kZXhdLnNob3dCZXQoY2hpcFZhbHVlKTtcbiAgICB9O1xuXG4gICAgcmVzZXQoKXtcbiAgICAgICAgdGhpcy5fYXJlYXMuZm9yRWFjaCgoYXJlYSkgPT4gYXJlYS5yZXNldCgpKTtcbiAgICB9O1xuXG4gICAgY29uZmlybUJldCgpe1xuICAgICAgICB0aGlzLl9hcmVhcy5mb3JFYWNoKChhcmVhKSA9PiB7XG4gICAgICAgICAgICBhcmVhLmNvbmZpcm1CZXQoKTtcbiAgICAgICAgICAgIGFyZWEuc2V0QWxscmVhZHlCZXRDb2luKGFyZWEuZ2V0QWxscmVhZHlCZXRDb2luKCkgKyBhcmVhLmdldEJldENvaW4oKSk7XG4gICAgICAgICAgICBhcmVhLnNldEJldENvaW4oMCk7XG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICBjYW5jZWxCZXQoKXtcbiAgICAgICAgdGhpcy5fYXJlYXMuZm9yRWFjaCgoYXJlYSkgPT4ge1xuICAgICAgICAgICAgYXJlYS5jYW5jZWxCZXQoKTtcbiAgICAgICAgICAgIGFyZWEuc2V0QmV0Q29pbigwKTtcbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIHByaXZhdGUgX29uRXZlbnRMaXN0ZW5lcihldmVudDogYW55LCBkYXRhOiBhbnkpe1xuICAgICAgICBsZXQgYXJlYSA9IHRoaXMuX2FyZWFzWzBdO1xuICAgICAgICBpZiAoZXZlbnQgPT0gYXJlYS5WSUVXX0VWRU5ULk9OX0NMSUNLX0JFVF9BUkVBKVxuICAgICAgICAgICAgdGhpcy5fZXZlbnREaXNwYXRjaGVyKFZJRVdfRVZFTlQuT05fQ0xJQ0tfQVJFQSwgZGF0YSk7XG4gICAgfTtcblxuICAgIHByaXZhdGUgX29uUHJlZmFiTG9hZGVkKGVycm9yOiBFcnJvciwgYXNzZXQ6IGNjLkFzc2V0KXtcbiAgICAgICAgdGhpcy5fYXJlYXMgPSB0aGlzLl9jcmVhdGVCZXRBcmVhcyhhc3NldCBhcyBjYy5QcmVmYWIpO1xuICAgIH07XG5cbiAgICBwcml2YXRlIF9jcmVhdGVCZXRBcmVhcyhwcmVmYWI6IGNjLlByZWZhYik6IEJldEFyZWFbXXtcbiAgICAgICAgbGV0IGFyZWFzID0gW107XG4gICAgICAgIGxldCBub2RlID0gbnVsbDtcbiAgICAgICAgbGV0IGJldEFyZWEgPSBudWxsO1xuICAgICAgICBsZXQgZXZlbnREaXNwYXRjaGVyID0gdGhpcy5fb25FdmVudExpc3RlbmVyLmJpbmQodGhpcyk7XG4gICAgICAgIGZvcihsZXQgaWR4ID0gMDsgaWR4IDwgQVJFQV9UWVBFUy5sZW5ndGg7IGlkeCsrKXtcbiAgICAgICAgICAgIG5vZGUgPSBjYy5pbnN0YW50aWF0ZShwcmVmYWIpO1xuICAgICAgICAgICAgdGhpcy5ub2RlLmFkZENoaWxkKG5vZGUpO1xuICAgICAgICAgICAgYmV0QXJlYSA9IG5vZGUuZ2V0Q29tcG9uZW50KEJldEFyZWEpO1xuICAgICAgICAgICAgYmV0QXJlYS5zZXRFdmVudERpc3BhdGNoZXIoZXZlbnREaXNwYXRjaGVyKTtcbiAgICAgICAgICAgIGJldEFyZWEuc2V0QXJlYUluZGV4KGlkeCk7XG4gICAgICAgICAgICBiZXRBcmVhLnNldEFyZWFOYW1lKEFSRUFfVFlQRVNbaWR4XSk7XG4gICAgICAgICAgICBiZXRBcmVhLnJlZ2lzdGVyQ2xpY2tFdmVudCgpO1xuICAgICAgICAgICAgYXJlYXNbaWR4XSA9IGJldEFyZWE7XG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBhcmVhcztcbiAgICB9O1xufVxuIl19