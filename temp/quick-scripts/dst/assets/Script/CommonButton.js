
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/CommonButton.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvQ29tbW9uQnV0dG9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTSxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUUxQyxJQUFNLFdBQVcsR0FBRztJQUNoQixPQUFPLEVBQUUsQ0FBQztJQUNWLE1BQU0sRUFBRSxDQUFDO0NBQ1osQ0FBQztBQUVGLElBQU0sVUFBVSxHQUFHO0lBQ2YsT0FBTyxFQUFFLFNBQVM7SUFDbEIsTUFBTSxFQUFFLFFBQVE7Q0FDbkIsQ0FBQztBQUVGLElBQU0sU0FBUztJQUNYLEdBQUMsV0FBVyxDQUFDLE9BQU8sSUFBRyxVQUFVLENBQUMsT0FBTztJQUN6QyxHQUFDLFdBQVcsQ0FBQyxNQUFNLElBQUcsVUFBVSxDQUFDLE1BQU07T0FDMUMsQ0FBQztBQUdGO0lBQTBDLGdDQUFTO0lBQW5EO1FBQUEscUVBMEJDO1FBekJZLGlCQUFXLEdBQUcsV0FBVyxDQUFDO1FBQzFCLGdCQUFVLEdBQUcsVUFBVSxDQUFDOztJQXdCckMsQ0FBQztJQW5CRyw4QkFBTyxHQUFQLFVBQVEsSUFBWTtRQUNoQixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztJQUN0QixDQUFDO0lBQUEsQ0FBQztJQUVGLHlDQUFrQixHQUFsQixVQUFtQixlQUF5QjtRQUN4QyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsZUFBZSxDQUFDO0lBQzVDLENBQUM7SUFBQSxDQUFDO0lBRUYseUNBQWtCLEdBQWxCO1FBQ0ksSUFBSSxpQkFBaUIsR0FBRyxJQUFJLEVBQUUsQ0FBQyxTQUFTLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDeEQsaUJBQWlCLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDckMsaUJBQWlCLENBQUMsU0FBUyxHQUFHLGNBQWMsQ0FBQztRQUM3QyxpQkFBaUIsQ0FBQyxPQUFPLEdBQUcsVUFBVSxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUM7SUFDMUUsQ0FBQztJQUFBLENBQUM7SUFFTSwrQkFBUSxHQUFoQixVQUFpQixLQUFZLEVBQUUsZUFBb0I7UUFDL0MsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztJQUNqRCxDQUFDO0lBQUEsQ0FBQztJQXpCZSxZQUFZO1FBRGhDLE9BQU87T0FDYSxZQUFZLENBMEJoQztJQUFELG1CQUFDO0NBMUJELEFBMEJDLENBMUJ5QyxFQUFFLENBQUMsTUFBTSxHQTBCbEQ7a0JBMUJvQixZQUFZIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XG5cbmNvbnN0IEJVVFRPTl9UWVBFID0ge1xuICAgIENPTkZJUk06IDAsXG4gICAgQ0FOQ0VMOiAxLFxufTtcblxuY29uc3QgVklFV19FVkVOVCA9IHtcbiAgICBDT05GSVJNOiBcIkNPTkZJUk1cIixcbiAgICBDQU5DRUw6IFwiQ0FOQ0VMXCJcbn07XG5cbmNvbnN0IEVWRU5UX01BUCA9IHtcbiAgICBbQlVUVE9OX1RZUEUuQ09ORklSTV06IFZJRVdfRVZFTlQuQ09ORklSTSxcbiAgICBbQlVUVE9OX1RZUEUuQ0FOQ0VMXTogVklFV19FVkVOVC5DQU5DRUxcbn07XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb21tb25CdXR0b24gZXh0ZW5kcyBjYy5CdXR0b257XG4gICAgcmVhZG9ubHkgQlVUVE9OX1RZUEUgPSBCVVRUT05fVFlQRTtcbiAgICByZWFkb25seSBWSUVXX0VWRU5UID0gVklFV19FVkVOVDtcbiAgICBcbiAgICBwcml2YXRlIF9ldmVudERpc3BhdGNoZXI6IEZ1bmN0aW9uO1xuICAgIHByaXZhdGUgX3R5cGU6IG51bWJlcjtcblxuICAgIHNldFR5cGUodHlwZTogbnVtYmVyKXtcbiAgICAgICAgdGhpcy5fdHlwZSA9IHR5cGU7XG4gICAgfTtcblxuICAgIHNldEV2ZW50RGlzcGF0Y2hlcihldmVudERpc3BhdGNoZXI6IEZ1bmN0aW9uKXtcbiAgICAgICAgdGhpcy5fZXZlbnREaXNwYXRjaGVyID0gZXZlbnREaXNwYXRjaGVyO1xuICAgIH07XG5cbiAgICByZWdpc3RlckNsaWNrRXZlbnQoKXtcbiAgICAgICAgbGV0IGNsaWNrRXZlbnRIYW5kbGVyID0gbmV3IGNjLkNvbXBvbmVudC5FdmVudEhhbmRsZXIoKTtcbiAgICAgICAgY2xpY2tFdmVudEhhbmRsZXIudGFyZ2V0ID0gdGhpcy5ub2RlO1xuICAgICAgICBjbGlja0V2ZW50SGFuZGxlci5jb21wb25lbnQgPSBcIkNvbW1vbkJ1dHRvblwiO1xuICAgICAgICBjbGlja0V2ZW50SGFuZGxlci5oYW5kbGVyID0gXCJfb25DbGlja1wiO1xuICAgICAgICB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbikuY2xpY2tFdmVudHMucHVzaChjbGlja0V2ZW50SGFuZGxlcik7XG4gICAgfTtcblxuICAgIHByaXZhdGUgX29uQ2xpY2soZXZlbnQ6IEV2ZW50LCBjdXN0b21FdmVudERhdGE6IGFueSl7XG4gICAgICAgIHRoaXMuX2V2ZW50RGlzcGF0Y2hlcihFVkVOVF9NQVBbdGhpcy5fdHlwZV0pO1xuICAgIH07XG59XG4iXX0=