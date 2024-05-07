
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/SettleLabel.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvU2V0dGxlTGFiZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsMENBQXFDO0FBRS9CLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQXlDLCtCQUFZO0lBQXJEOztJQWNBLENBQUM7SUFaRyw0QkFBTSxHQUFOO1FBQ0ksSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDbkQsQ0FBQztJQUFBLENBQUM7SUFFRiwyQkFBSyxHQUFMO1FBQ0ksSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDO0lBQzVCLENBQUM7SUFBQSxDQUFDO0lBRUYsb0NBQWMsR0FBZCxVQUFlLFNBQWlCLEVBQUUsUUFBZ0I7UUFDOUMsSUFBSSxTQUFTLEdBQUcsUUFBUSxJQUFJLENBQUMsQ0FBQSxDQUFDLENBQUMsRUFBRSxDQUFBLENBQUMsQ0FBQyxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUEsQ0FBQyxDQUFDLHdCQUFPLFFBQVUsQ0FBQSxDQUFDLENBQUMsd0JBQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUcsQ0FBQyxDQUFBO1FBQ2pHLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFNLGdCQUFNLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxXQUFHLEdBQUcsU0FBUyxDQUFDO0lBQ3hFLENBQUM7SUFBQSxDQUFDO0lBYmUsV0FBVztRQUQvQixPQUFPO09BQ2EsV0FBVyxDQWMvQjtJQUFELGtCQUFDO0NBZEQsQUFjQyxDQWR3QyxFQUFFLENBQUMsU0FBUyxHQWNwRDtrQkFkb0IsV0FBVyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDb25maWcgZnJvbSBcIi4vQ29tbW9uL0NvbmZpZ1wiO1xuXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNldHRsZUxhYmVsIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcbiAgICBwcml2YXRlIF9sYWJlbDogY2MuTGFiZWw7XG4gICAgb25Mb2FkKCl7XG4gICAgICAgIHRoaXMuX2xhYmVsID0gdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5MYWJlbCk7XG4gICAgfTtcbiAgICBcbiAgICByZXNldCgpe1xuICAgICAgICB0aGlzLl9sYWJlbC5zdHJpbmcgPSBcIlwiO1xuICAgIH07XG5cbiAgICBzaG93U2V0dGxlVGV4dChhcmVhSW5kZXg6IG51bWJlciwgd2luU2NvcmU6IG51bWJlcil7XG4gICAgICAgIGxldCBzY29yZVRleHQgPSB3aW5TY29yZSA9PSAwPyBcIlwiOiAod2luU2NvcmUgPiAwPyBg77yM5L2g6LWiICR7d2luU2NvcmV9YDogYO+8jOS9oOi+kyAke01hdGguYWJzKHdpblNjb3JlKX1gKVxuICAgICAgICB0aGlzLl9sYWJlbC5zdHJpbmcgPSBgJHtDb25maWcuQVJFQV9UWVBFU1thcmVhSW5kZXhdfeiDnGAgKyBzY29yZVRleHQ7XG4gICAgfTtcbn1cbiJdfQ==