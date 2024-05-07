"use strict";
cc._RF.push(module, '3b5e1OygbFF2pi2kywY39Bu', 'ChipButton');
// Script/ChipButton.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var VIEW_EVENT = {
    ON_CLICK_CHIP_BUTTON: "ON_CLICK_CHIP_BUTTON"
};
var ChipButton = /** @class */ (function (_super) {
    __extends(ChipButton, _super);
    function ChipButton() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.VIEW_EVENT = VIEW_EVENT;
        return _this;
    }
    ChipButton.prototype.getChipIndex = function () {
        return this._chipIndex;
    };
    ;
    ChipButton.prototype.setChipIndex = function (index) {
        this._chipIndex = index;
    };
    ;
    ChipButton.prototype.setEventDispatcher = function (eventDispatcher) {
        this._eventDispatcher = eventDispatcher;
    };
    ;
    ChipButton.prototype.registerClickEvent = function () {
        var clickEventHandler = new cc.Component.EventHandler();
        clickEventHandler.target = this.node;
        clickEventHandler.component = "ChipButton";
        clickEventHandler.handler = "_onClick";
        clickEventHandler.customEventData = this._chipIndex.toString();
        this.node.getComponent(cc.Button).clickEvents.push(clickEventHandler);
    };
    ;
    ChipButton.prototype._onClick = function (event, customEventData) {
        this._eventDispatcher(VIEW_EVENT.ON_CLICK_CHIP_BUTTON, customEventData);
    };
    ;
    ChipButton = __decorate([
        ccclass
    ], ChipButton);
    return ChipButton;
}(cc.Button));
exports.default = ChipButton;

cc._RF.pop();