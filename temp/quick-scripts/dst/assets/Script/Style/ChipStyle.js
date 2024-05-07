
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Style/ChipStyle.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '2ef6aifSupD5LECHT++j6hW', 'ChipStyle');
// Script/ChipStyle.ts

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
var ChipStyle = /** @class */ (function (_super) {
    __extends(ChipStyle, _super);
    function ChipStyle() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ChipStyle.prototype.onLoad = function () {
        this._sprite = this.node.getChildByName("Sprite").getComponent(cc.Sprite);
        this._label = this.node.getChildByName("Sprite").getChildByName("Label").getComponent(cc.Label);
    };
    ;
    ChipStyle.prototype.setChipValue = function (value) {
        this._label.string = value.toString();
        // TODO 图档资源好了更换 spriteFrame
        // this._sprite.spriteFrame = "";
    };
    ;
    ChipStyle = __decorate([
        ccclass
    ], ChipStyle);
    return ChipStyle;
}(cc.Component));
exports.default = ChipStyle;
;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvQ2hpcFN0eWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFNLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQXVDLDZCQUFZO0lBQW5EOztJQWVBLENBQUM7SUFYRywwQkFBTSxHQUFOO1FBQ0ksSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzFFLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDcEcsQ0FBQztJQUFBLENBQUM7SUFFRixnQ0FBWSxHQUFaLFVBQWEsS0FBYTtRQUN0QixJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDdEMsNEJBQTRCO1FBQzVCLGlDQUFpQztJQUNyQyxDQUFDO0lBQUEsQ0FBQztJQWJlLFNBQVM7UUFEN0IsT0FBTztPQUNhLFNBQVMsQ0FlN0I7SUFBRCxnQkFBQztDQWZELEFBZUMsQ0Fmc0MsRUFBRSxDQUFDLFNBQVMsR0FlbEQ7a0JBZm9CLFNBQVM7QUFlN0IsQ0FBQyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2hpcFN0eWxlIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcbiAgICBwcml2YXRlIF9zcHJpdGU6IGNjLlNwcml0ZTtcbiAgICBwcml2YXRlIF9sYWJlbDogY2MuTGFiZWw7XG5cbiAgICBvbkxvYWQgKCkge1xuICAgICAgICB0aGlzLl9zcHJpdGUgPSB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJTcHJpdGVcIikuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSk7XG4gICAgICAgIHRoaXMuX2xhYmVsID0gdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiU3ByaXRlXCIpLmdldENoaWxkQnlOYW1lKFwiTGFiZWxcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKTtcbiAgICB9O1xuXG4gICAgc2V0Q2hpcFZhbHVlKHZhbHVlOiBudW1iZXIpe1xuICAgICAgICB0aGlzLl9sYWJlbC5zdHJpbmcgPSB2YWx1ZS50b1N0cmluZygpO1xuICAgICAgICAvLyBUT0RPIOWbvuaho+i1hOa6kOWlveS6huabtOaNoiBzcHJpdGVGcmFtZVxuICAgICAgICAvLyB0aGlzLl9zcHJpdGUuc3ByaXRlRnJhbWUgPSBcIlwiO1xuICAgIH07XG5cbn07XG4iXX0=