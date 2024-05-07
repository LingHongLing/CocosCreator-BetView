"use strict";
cc._RF.push(module, 'fd94aadQS5FP4ks8DfJTNwu', 'SettleLabel');
// Script/SettleLabel.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var SettleLabel = /** @class */ (function (_super) {
    __extends(SettleLabel, _super);
    function SettleLabel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SettleLabel.prototype.onLoad = function () {
        this._label = this.node.getComponent(cc.Label);
    };
    ;
    SettleLabel.prototype.reset = function () {
        this._label.string = "";
    };
    ;
    SettleLabel.prototype.showSettleText = function (areaIndex, winScore) {
        var scoreText = winScore == 0 ? "" : (winScore > 0 ? "\uFF0C\u4F60\u8D62 " + winScore : "\uFF0C\u4F60\u8F93 " + Math.abs(winScore));
        this._label.string = Config_1.default.AREA_TYPES[areaIndex] + "\u80DC" + scoreText;
    };
    ;
    SettleLabel = __decorate([
        ccclass
    ], SettleLabel);
    return SettleLabel;
}(cc.Component));
exports.default = SettleLabel;

cc._RF.pop();