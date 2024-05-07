"use strict";
cc._RF.push(module, '273f4RdLNlKnINz9Fv5RgrT', 'CommonButton');
// Script/CommonButton.ts

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
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
var _b = cc._decorator, ccclass = _b.ccclass, property = _b.property;
var BUTTON_TYPE = {
    CONFIRM: 0,
    CANCEL: 1,
};
var VIEW_EVENT = {
    CONFIRM: "CONFIRM",
    CANCEL: "CANCEL"
};
var EVENT_MAP = (_a = {},
    _a[BUTTON_TYPE.CONFIRM] = VIEW_EVENT.CONFIRM,
    _a[BUTTON_TYPE.CANCEL] = VIEW_EVENT.CANCEL,
    _a);
var CommonButton = /** @class */ (function (_super) {
    __extends(CommonButton, _super);
    function CommonButton() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.BUTTON_TYPE = BUTTON_TYPE;
        _this.VIEW_EVENT = VIEW_EVENT;
        return _this;
    }
    CommonButton.prototype.setType = function (type) {
        this._type = type;
    };
    ;
    CommonButton.prototype.setEventDispatcher = function (eventDispatcher) {
        this._eventDispatcher = eventDispatcher;
    };
    ;
    CommonButton.prototype.registerClickEvent = function () {
        var clickEventHandler = new cc.Component.EventHandler();
        clickEventHandler.target = this.node;
        clickEventHandler.component = "CommonButton";
        clickEventHandler.handler = "_onClick";
        this.node.getComponent(cc.Button).clickEvents.push(clickEventHandler);
    };
    ;
    CommonButton.prototype._onClick = function (event, customEventData) {
        this._eventDispatcher(EVENT_MAP[this._type]);
    };
    ;
    CommonButton = __decorate([
        ccclass
    ], CommonButton);
    return CommonButton;
}(cc.Button));
exports.default = CommonButton;

cc._RF.pop();