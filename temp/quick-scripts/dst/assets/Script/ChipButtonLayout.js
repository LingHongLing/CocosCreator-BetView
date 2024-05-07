
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/ChipButtonLayout.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '318beIy/IRCWbYEZlKrBbmG', 'ChipButtonLayout');
// Script/ChipButtonLayout.ts

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
var Config_1 = require("./Common/Config");
var ChipButton_1 = require("./ChipButton");
var ChipStyle_1 = require("./Style/ChipStyle");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var CHIP_BUTTON_PREFAB = 'ChipButtonPrefab';
var SELECT_Y_DIFF = 20;
var CHIP_VALUES = Config_1.default.CHIP_VALUES;
var ChipButtonLayout = /** @class */ (function (_super) {
    __extends(ChipButtonLayout, _super);
    function ChipButtonLayout() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._selectedIndex = null;
        return _this;
    }
    ChipButtonLayout.prototype.onLoad = function () {
        this._selectedIndex = null;
        this._chipButtons = [];
        cc.resources.load(CHIP_BUTTON_PREFAB, this._onPrefabLoaded.bind(this));
    };
    ;
    ChipButtonLayout.prototype.getSelectValue = function () {
        return CHIP_VALUES[this._selectedIndex];
    };
    ;
    ChipButtonLayout.prototype.setSelectChip = function (selectIndex) {
        var _a;
        if (this._selectedIndex == selectIndex) {
            return;
        }
        ;
        // 初始化的时候 index 可能为 null;
        (_a = this._chipButtons[this._selectedIndex]) === null || _a === void 0 ? void 0 : _a.setPosition(0, 0);
        this._chipButtons[selectIndex].setPosition(0, SELECT_Y_DIFF);
        this._selectedIndex = selectIndex;
    };
    ;
    ChipButtonLayout.prototype._onEventListener = function (event, data) {
        var chipButton = this._chipButtons[0].getComponent(ChipButton_1.default);
        if (event == chipButton.VIEW_EVENT.ON_CLICK_CHIP_BUTTON) {
            this.setSelectChip(data);
        }
        ;
    };
    ;
    ChipButtonLayout.prototype._onPrefabLoaded = function (error, asset) {
        var prefab = asset;
        this._chipButtons = this._createChipButtons(prefab);
        this.setSelectChip(0);
    };
    ;
    ChipButtonLayout.prototype._createChipButtons = function (prefab) {
        var chipButtons = [];
        var eventDispatcher = this._onEventListener.bind(this);
        var node = null;
        var chipButton = null;
        for (var idx = 0; idx < CHIP_VALUES.length; idx++) {
            node = cc.instantiate(prefab);
            this.node.addChild(node);
            node.getComponent(ChipStyle_1.default).setChipValue(CHIP_VALUES[idx]);
            chipButton = node.getComponent(ChipButton_1.default);
            chipButton.setChipIndex(idx);
            chipButton.setEventDispatcher(eventDispatcher);
            chipButton.registerClickEvent();
            chipButtons[idx] = node;
        }
        ;
        return chipButtons;
    };
    ;
    ChipButtonLayout = __decorate([
        ccclass
    ], ChipButtonLayout);
    return ChipButtonLayout;
}(cc.Component));
exports.default = ChipButtonLayout;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvQ2hpcEJ1dHRvbkxheW91dC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwwQ0FBcUM7QUFDckMsMkNBQXNDO0FBQ3RDLCtDQUEwQztBQUVwQyxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUUxQyxJQUFNLGtCQUFrQixHQUFHLGtCQUFrQixDQUFDO0FBQzlDLElBQU0sYUFBYSxHQUFHLEVBQUUsQ0FBQztBQUN6QixJQUFNLFdBQVcsR0FBRyxnQkFBTSxDQUFDLFdBQVcsQ0FBQztBQUd2QztJQUE4QyxvQ0FBWTtJQUExRDtRQUFBLHFFQXVEQztRQXREVyxvQkFBYyxHQUFXLElBQUksQ0FBQzs7SUFzRDFDLENBQUM7SUFuREcsaUNBQU0sR0FBTjtRQUNJLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDO1FBQzNCLElBQUksQ0FBQyxZQUFZLEdBQUcsRUFBRSxDQUFDO1FBQ3ZCLEVBQUUsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLGtCQUFrQixFQUFFLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDM0UsQ0FBQztJQUFBLENBQUM7SUFFRix5Q0FBYyxHQUFkO1FBQ0ksT0FBTyxXQUFXLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDO0lBQzVDLENBQUM7SUFBQSxDQUFDO0lBRUYsd0NBQWEsR0FBYixVQUFjLFdBQW1COztRQUM3QixJQUFJLElBQUksQ0FBQyxjQUFjLElBQUksV0FBVyxFQUFFO1lBQ3BDLE9BQU87U0FDVjtRQUFBLENBQUM7UUFFRix5QkFBeUI7UUFDekIsTUFBQSxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsMENBQUUsV0FBVyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUU7UUFDMUQsSUFBSSxDQUFDLFlBQVksQ0FBQyxXQUFXLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxFQUFFLGFBQWEsQ0FBQyxDQUFDO1FBQzdELElBQUksQ0FBQyxjQUFjLEdBQUcsV0FBVyxDQUFDO0lBQ3RDLENBQUM7SUFBQSxDQUFDO0lBRU0sMkNBQWdCLEdBQXhCLFVBQXlCLEtBQUssRUFBRSxJQUFJO1FBQ2hDLElBQUksVUFBVSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLG9CQUFVLENBQUMsQ0FBQztRQUMvRCxJQUFJLEtBQUssSUFBSSxVQUFVLENBQUMsVUFBVSxDQUFDLG9CQUFvQixFQUFFO1lBQ3JELElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDNUI7UUFBQSxDQUFDO0lBQ04sQ0FBQztJQUFBLENBQUM7SUFFTSwwQ0FBZSxHQUF2QixVQUF3QixLQUFZLEVBQUUsS0FBZTtRQUNqRCxJQUFJLE1BQU0sR0FBRyxLQUFrQixDQUFDO1FBQ2hDLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3BELElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDMUIsQ0FBQztJQUFBLENBQUM7SUFFTSw2Q0FBa0IsR0FBMUIsVUFBMkIsTUFBaUI7UUFDeEMsSUFBSSxXQUFXLEdBQUcsRUFBRSxDQUFDO1FBQ3JCLElBQUksZUFBZSxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDdkQsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2hCLElBQUksVUFBVSxHQUFHLElBQUksQ0FBQztRQUN0QixLQUFJLElBQUksR0FBRyxHQUFHLENBQUMsRUFBRSxHQUFHLEdBQUcsV0FBVyxDQUFDLE1BQU0sRUFBRSxHQUFHLEVBQUUsRUFBQztZQUM3QyxJQUFJLEdBQUcsRUFBRSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUM5QixJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUN6QixJQUFJLENBQUMsWUFBWSxDQUFDLG1CQUFTLENBQUMsQ0FBQyxZQUFZLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFDNUQsVUFBVSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsb0JBQVUsQ0FBQyxDQUFDO1lBQzNDLFVBQVUsQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDN0IsVUFBVSxDQUFDLGtCQUFrQixDQUFDLGVBQWUsQ0FBQyxDQUFDO1lBQy9DLFVBQVUsQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO1lBQ2hDLFdBQVcsQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUM7U0FDM0I7UUFBQSxDQUFDO1FBQ0YsT0FBTyxXQUFXLENBQUM7SUFDdkIsQ0FBQztJQUFBLENBQUM7SUF0RGUsZ0JBQWdCO1FBRHBDLE9BQU87T0FDYSxnQkFBZ0IsQ0F1RHBDO0lBQUQsdUJBQUM7Q0F2REQsQUF1REMsQ0F2RDZDLEVBQUUsQ0FBQyxTQUFTLEdBdUR6RDtrQkF2RG9CLGdCQUFnQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDb25maWcgZnJvbSBcIi4vQ29tbW9uL0NvbmZpZ1wiO1xuaW1wb3J0IENoaXBCdXR0b24gZnJvbSBcIi4vQ2hpcEJ1dHRvblwiO1xuaW1wb3J0IENoaXBTdHlsZSBmcm9tIFwiLi9TdHlsZS9DaGlwU3R5bGVcIjtcblxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XG5cbmNvbnN0IENISVBfQlVUVE9OX1BSRUZBQiA9ICdDaGlwQnV0dG9uUHJlZmFiJztcbmNvbnN0IFNFTEVDVF9ZX0RJRkYgPSAyMDtcbmNvbnN0IENISVBfVkFMVUVTID0gQ29uZmlnLkNISVBfVkFMVUVTO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2hpcEJ1dHRvbkxheW91dCBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG4gICAgcHJpdmF0ZSBfc2VsZWN0ZWRJbmRleDogbnVtYmVyID0gbnVsbDtcbiAgICBwcml2YXRlIF9jaGlwQnV0dG9uczogY2MuTm9kZVtdO1xuXG4gICAgb25Mb2FkKCkge1xuICAgICAgICB0aGlzLl9zZWxlY3RlZEluZGV4ID0gbnVsbDtcbiAgICAgICAgdGhpcy5fY2hpcEJ1dHRvbnMgPSBbXTtcbiAgICAgICAgY2MucmVzb3VyY2VzLmxvYWQoQ0hJUF9CVVRUT05fUFJFRkFCLCB0aGlzLl9vblByZWZhYkxvYWRlZC5iaW5kKHRoaXMpKTtcbiAgICB9O1xuXG4gICAgZ2V0U2VsZWN0VmFsdWUoKXtcbiAgICAgICAgcmV0dXJuIENISVBfVkFMVUVTW3RoaXMuX3NlbGVjdGVkSW5kZXhdO1xuICAgIH07XG5cbiAgICBzZXRTZWxlY3RDaGlwKHNlbGVjdEluZGV4OiBudW1iZXIpe1xuICAgICAgICBpZiAodGhpcy5fc2VsZWN0ZWRJbmRleCA9PSBzZWxlY3RJbmRleCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9O1xuICAgICAgICBcbiAgICAgICAgLy8g5Yid5aeL5YyW55qE5pe25YCZIGluZGV4IOWPr+iDveS4uiBudWxsO1xuICAgICAgICB0aGlzLl9jaGlwQnV0dG9uc1t0aGlzLl9zZWxlY3RlZEluZGV4XT8uc2V0UG9zaXRpb24oMCwgMCk7XG4gICAgICAgIHRoaXMuX2NoaXBCdXR0b25zW3NlbGVjdEluZGV4XS5zZXRQb3NpdGlvbigwLCBTRUxFQ1RfWV9ESUZGKTtcbiAgICAgICAgdGhpcy5fc2VsZWN0ZWRJbmRleCA9IHNlbGVjdEluZGV4O1xuICAgIH07XG5cbiAgICBwcml2YXRlIF9vbkV2ZW50TGlzdGVuZXIoZXZlbnQsIGRhdGEpe1xuICAgICAgICBsZXQgY2hpcEJ1dHRvbiA9IHRoaXMuX2NoaXBCdXR0b25zWzBdLmdldENvbXBvbmVudChDaGlwQnV0dG9uKTtcbiAgICAgICAgaWYgKGV2ZW50ID09IGNoaXBCdXR0b24uVklFV19FVkVOVC5PTl9DTElDS19DSElQX0JVVFRPTikge1xuICAgICAgICAgICAgdGhpcy5zZXRTZWxlY3RDaGlwKGRhdGEpO1xuICAgICAgICB9O1xuICAgIH07XG5cbiAgICBwcml2YXRlIF9vblByZWZhYkxvYWRlZChlcnJvcjogRXJyb3IsIGFzc2V0OiBjYy5Bc3NldCl7XG4gICAgICAgIGxldCBwcmVmYWIgPSBhc3NldCBhcyBjYy5QcmVmYWI7XG4gICAgICAgIHRoaXMuX2NoaXBCdXR0b25zID0gdGhpcy5fY3JlYXRlQ2hpcEJ1dHRvbnMocHJlZmFiKTtcbiAgICAgICAgdGhpcy5zZXRTZWxlY3RDaGlwKDApO1xuICAgIH07XG5cbiAgICBwcml2YXRlIF9jcmVhdGVDaGlwQnV0dG9ucyhwcmVmYWI6IGNjLlByZWZhYik6IGNjLk5vZGVbXXtcbiAgICAgICAgbGV0IGNoaXBCdXR0b25zID0gW107XG4gICAgICAgIGxldCBldmVudERpc3BhdGNoZXIgPSB0aGlzLl9vbkV2ZW50TGlzdGVuZXIuYmluZCh0aGlzKTtcbiAgICAgICAgbGV0IG5vZGUgPSBudWxsO1xuICAgICAgICBsZXQgY2hpcEJ1dHRvbiA9IG51bGw7XG4gICAgICAgIGZvcihsZXQgaWR4ID0gMDsgaWR4IDwgQ0hJUF9WQUxVRVMubGVuZ3RoOyBpZHgrKyl7XG4gICAgICAgICAgICBub2RlID0gY2MuaW5zdGFudGlhdGUocHJlZmFiKTtcbiAgICAgICAgICAgIHRoaXMubm9kZS5hZGRDaGlsZChub2RlKTtcbiAgICAgICAgICAgIG5vZGUuZ2V0Q29tcG9uZW50KENoaXBTdHlsZSkuc2V0Q2hpcFZhbHVlKENISVBfVkFMVUVTW2lkeF0pO1xuICAgICAgICAgICAgY2hpcEJ1dHRvbiA9IG5vZGUuZ2V0Q29tcG9uZW50KENoaXBCdXR0b24pO1xuICAgICAgICAgICAgY2hpcEJ1dHRvbi5zZXRDaGlwSW5kZXgoaWR4KTtcbiAgICAgICAgICAgIGNoaXBCdXR0b24uc2V0RXZlbnREaXNwYXRjaGVyKGV2ZW50RGlzcGF0Y2hlcik7XG4gICAgICAgICAgICBjaGlwQnV0dG9uLnJlZ2lzdGVyQ2xpY2tFdmVudCgpO1xuICAgICAgICAgICAgY2hpcEJ1dHRvbnNbaWR4XSA9IG5vZGU7XG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBjaGlwQnV0dG9ucztcbiAgICB9O1xufVxuIl19