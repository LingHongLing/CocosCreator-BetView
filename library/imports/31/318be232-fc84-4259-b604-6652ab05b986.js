"use strict";
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