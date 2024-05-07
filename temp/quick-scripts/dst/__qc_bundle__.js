
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/__qc_index__.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}
require('./assets/Script/BetArea');
require('./assets/Script/BetAreaLayout');
require('./assets/Script/ChipButton');
require('./assets/Script/ChipButtonLayout');
require('./assets/Script/Common/Config');
require('./assets/Script/Common/ModelStruct');
require('./assets/Script/CommonButton');
require('./assets/Script/GameView');
require('./assets/Script/Model/GameModel');
require('./assets/Script/Model/StateMachine');
require('./assets/Script/SettleLabel');
require('./assets/Script/Style/ChipStyle');

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Common/ModelStruct.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'b37708S92JERqdoWKhugmcR', 'ModelStruct');
// Script/Common/ModelStruct.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
;
;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvQ29tbW9uL01vZGVsU3RydWN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBR0MsQ0FBQztBQUlELENBQUM7QUFPRCxDQUFDIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGludGVyZmFjZSBOZXdSb3VuZE1vZGVsU3RydWN0e1xuICAgIHVzZXJTY29yZTogbnVtYmVyO1xuICAgIHN0YXRlVGltZTogbnVtYmVyO1xufTtcblxuZXhwb3J0IGludGVyZmFjZSBVc2VyU2NvcmVNb2RlbFN0cnVjdHtcbiAgICB1c2VyU2NvcmU6IG51bWJlcjtcbn07XG5cbmV4cG9ydCBpbnRlcmZhY2UgU2V0dGVNb2RlbFN0cnVjdHtcbiAgICB1c2VyU2NvcmU6IG51bWJlcjtcbiAgICBzZXR0bGVTY29yZTogbnVtYmVyOyAvLyDlvZPlsYDnu5PnrpfliIbmlbBcbiAgICB3aW5BcmVhOiBudW1iZXI7XG4gICAgc3RhdGVUaW1lOiBudW1iZXI7XG59OyJdfQ==
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/GameView.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'f9d53KwIBRFXZH75AabEt1A', 'GameView');
// Script/GameView.ts

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
var GameModel_1 = require("./Model/GameModel");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var GameView = /** @class */ (function (_super) {
    __extends(GameView, _super);
    function GameView() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    GameView.prototype.onLoad = function () {
        this._countdownLabel = this.node.getChildByName("CountdownLabel").getComponent(cc.Label);
        this._userScoreLabel = this.node.getChildByName("UserScoreLabel").getComponent(cc.Label);
        this._settleLabel = this.node.getChildByName("SettleLabel").getComponent("SettleLabel");
        this._confirmButton = this.node.getChildByName("ConfirmButton").getComponent("CommonButton");
        this._cancelButton = this.node.getChildByName("CancelButton").getComponent("CommonButton");
        this._betAreaLayout = this.node.getChildByName("BetAreaLayout").getComponent("BetAreaLayout");
        this._chipButtonLayout = this.node.getChildByName("ChipButtonLayout").getComponent("ChipButtonLayout");
        this._stateTime = 0;
        this._userScore = 0;
        this._gameModel = new GameModel_1.default(this._onEventListener.bind(this));
        this._init();
    };
    ;
    GameView.prototype.update = function (dt) {
        this._countdownLabel.string = Math.ceil((this._stateTime / 1000)).toString();
        this._stateTime -= dt * 1000;
    };
    ;
    GameView.prototype._init = function () {
        var eventDispatcher = this._onEventListener.bind(this);
        this._confirmButton.setType(this._confirmButton.BUTTON_TYPE.CONFIRM);
        this._confirmButton.setEventDispatcher(eventDispatcher);
        this._confirmButton.registerClickEvent();
        this._cancelButton.setType(this._confirmButton.BUTTON_TYPE.CANCEL);
        this._cancelButton.setEventDispatcher(eventDispatcher);
        this._cancelButton.registerClickEvent();
        this._betAreaLayout.setEventDispatcher(eventDispatcher);
        this._gameModel.login();
    };
    ;
    GameView.prototype._onEventListener = function (event, data) {
        if (event == this._gameModel.MODEL_EVENT.NEW_ROUND) {
            this._onReceiveNewRound(data);
        }
        else if (event == this._gameModel.MODEL_EVENT.SETTLE) {
            this._onReceiveSettle(data);
        }
        else if (event == this._gameModel.MODEL_EVENT.SYNC_USER_SCORE) {
            this._onReceiveSyncUserBet(data);
        }
        else if (event == this._betAreaLayout.VIEW_EVENT.ON_CLICK_AREA) {
            var totalScore = this._betAreaLayout.getTotalBetScore();
            var selectValue = this._chipButtonLayout.getSelectValue();
            if ((selectValue + totalScore) > this._userScore)
                return;
            this._setUserScoreLabel(this._userScore - totalScore - selectValue);
            this._betAreaLayout.showBetAnim(data, selectValue);
        }
        else if (event == this._cancelButton.VIEW_EVENT.CANCEL) {
            this._betAreaLayout.cancelBet();
            this._setUserScoreLabel(this._userScore);
        }
        else if (event == this._cancelButton.VIEW_EVENT.CONFIRM) {
            this._gameModel.userBet(this._betAreaLayout.getBetScores());
            this._betAreaLayout.confirmBet();
        }
        ;
    };
    ;
    GameView.prototype._onReceiveNewRound = function (struct) {
        this._stateTime = struct.stateTime;
        this._userScore = struct.userScore;
        this._settleLabel.reset();
        this._betAreaLayout.reset();
        this._betAreaLayout.setTouchEnabled(true);
        this._setUserScoreLabel(struct.userScore);
    };
    ;
    GameView.prototype._onReceiveSettle = function (struct) {
        this._stateTime = struct.stateTime;
        this._userScore = struct.userScore;
        this._betAreaLayout.cancelBet();
        this._betAreaLayout.setTouchEnabled(false);
        this._settleLabel.showSettleText(struct.winArea, struct.settleScore);
        this._setUserScoreLabel(struct.userScore);
    };
    ;
    GameView.prototype._onReceiveSyncUserBet = function (struct) {
        this._userScore = struct.userScore;
        this._setUserScoreLabel(struct.userScore);
    };
    ;
    GameView.prototype._setUserScoreLabel = function (score) {
        this._userScoreLabel.string = "财产: " + score.toString();
    };
    ;
    GameView = __decorate([
        ccclass
    ], GameView);
    return GameView;
}(cc.Component));
exports.default = GameView;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvR2FtZVZpZXcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsK0NBQTBDO0FBUXBDLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQXNDLDRCQUFZO0lBQWxEOztJQWdHQSxDQUFDO0lBbkZHLHlCQUFNLEdBQU47UUFDSSxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLGdCQUFnQixDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN6RixJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLGdCQUFnQixDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN6RixJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLGFBQWEsQ0FBQyxDQUFDLFlBQVksQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUN4RixJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLGVBQWUsQ0FBQyxDQUFDLFlBQVksQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUM3RixJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLGNBQWMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUMzRixJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLGVBQWUsQ0FBQyxDQUFDLFlBQVksQ0FBQyxlQUFlLENBQUMsQ0FBQztRQUM5RixJQUFJLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENB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SSxDQUFDLFlBQVksQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRSxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDckUsSUFBSSxDQUFDLGtCQUFrQixDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUM5QyxDQUFDO0lBQUEsQ0FBQztJQUVNLHdDQUFxQixHQUE3QixVQUE4QixNQUE0QjtRQUN0RCxJQUFJLENBQUMsVUFBVSxHQUFHLE1BQU0sQ0FBQyxTQUFTLENBQUM7UUFDbkMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUM5QyxDQUFDO0lBQUEsQ0FBQztJQUVNLHFDQUFrQixHQUExQixVQUEyQixLQUFhO1FBQ3BDLElBQUksQ0FBQyxlQUFlLENBQUMsTUFBTSxHQUFHLE1BQU0sR0FBRyxLQUFLLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDNUQsQ0FBQztJQUFBLENBQUM7SUEvRmUsUUFBUTtRQUQ1QixPQUFPO09BQ2EsUUFBUSxDQWdHNUI7SUFBRCxlQUFDO0NBaEdELEFBZ0dDLENBaEdxQyxFQUFFLENBQUMsU0FBUyxHQWdHakQ7a0JBaEdvQixRQUFRO0FBZ0c1QixDQUFDIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEdhbWVNb2RlbCBmcm9tIFwiLi9Nb2RlbC9HYW1lTW9kZWxcIjtcbmltcG9ydCBCZXRBcmVhTGF5b3V0IGZyb20gXCIuL0JldEFyZWFMYXlvdXRcIjtcbmltcG9ydCBDaGlwQnV0dG9uTGF5b3V0IGZyb20gXCIuL0NoaXBCdXR0b25MYXlvdXRcIjtcblxuaW1wb3J0IHsgTmV3Um91bmRNb2RlbFN0cnVjdCwgU2V0dGVNb2RlbFN0cnVjdCwgVXNlclNjb3JlTW9kZWxTdHJ1Y3QgfSBmcm9tIFwiLi9Db21tb24vTW9kZWxTdHJ1Y3RcIjtcbmltcG9ydCBTZXR0bGVMYWJlbCBmcm9tIFwiLi9TZXR0bGVMYWJlbFwiO1xuaW1wb3J0IENvbW1vbkJ1dHRvbiBmcm9tIFwiLi9Db21tb25CdXR0b25cIjtcblxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lVmlldyBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG4gICAgLy8gb25Mb2FkICgpIHt9XG4gICAgcHJpdmF0ZSBfZ2FtZU1vZGVsOiBHYW1lTW9kZWw7XG4gICAgcHJpdmF0ZSBfY291bnRkb3duTGFiZWw6IGNjLkxhYmVsO1xuICAgIHByaXZhdGUgX3VzZXJTY29yZUxhYmVsOiBjYy5MYWJlbDtcbiAgICBwcml2YXRlIF9zZXR0bGVMYWJlbDogU2V0dGxlTGFiZWw7XG4gICAgcHJpdmF0ZSBfY29uZmlybUJ1dHRvbjogQ29tbW9uQnV0dG9uO1xuICAgIHByaXZhdGUgX2NhbmNlbEJ1dHRvbjogQ29tbW9uQnV0dG9uO1xuICAgIHByaXZhdGUgX2JldEFyZWFMYXlvdXQ6IEJldEFyZWFMYXlvdXQ7XG4gICAgcHJpdmF0ZSBfY2hpcEJ1dHRvbkxheW91dDogQ2hpcEJ1dHRvbkxheW91dDtcbiAgICBwcml2YXRlIF9zdGF0ZVRpbWU6IG51bWJlcjtcbiAgICBwcml2YXRlIF91c2VyU2NvcmU6IG51bWJlcjtcblxuICAgIG9uTG9hZCgpe1xuICAgICAgICB0aGlzLl9jb3VudGRvd25MYWJlbCA9IHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIkNvdW50ZG93bkxhYmVsXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCk7XG4gICAgICAgIHRoaXMuX3VzZXJTY29yZUxhYmVsID0gdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiVXNlclNjb3JlTGFiZWxcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKTtcbiAgICAgICAgdGhpcy5fc2V0dGxlTGFiZWwgPSB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJTZXR0bGVMYWJlbFwiKS5nZXRDb21wb25lbnQoXCJTZXR0bGVMYWJlbFwiKTtcbiAgICAgICAgdGhpcy5fY29uZmlybUJ1dHRvbiA9IHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIkNvbmZpcm1CdXR0b25cIikuZ2V0Q29tcG9uZW50KFwiQ29tbW9uQnV0dG9uXCIpO1xuICAgICAgICB0aGlzLl9jYW5jZWxCdXR0b24gPSB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJDYW5jZWxCdXR0b25cIikuZ2V0Q29tcG9uZW50KFwiQ29tbW9uQnV0dG9uXCIpO1xuICAgICAgICB0aGlzLl9iZXRBcmVhTGF5b3V0ID0gdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiQmV0QXJlYUxheW91dFwiKS5nZXRDb21wb25lbnQoXCJCZXRBcmVhTGF5b3V0XCIpO1xuICAgICAgICB0aGlzLl9jaGlwQnV0dG9uTGF5b3V0ID0gdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiQ2hpcEJ1dHRvbkxheW91dFwiKS5nZXRDb21wb25lbnQoXCJDaGlwQnV0dG9uTGF5b3V0XCIpO1xuICAgICAgICB0aGlzLl9zdGF0ZVRpbWUgPSAwO1xuICAgICAgICB0aGlzLl91c2VyU2NvcmUgPSAwO1xuICAgICAgICB0aGlzLl9nYW1lTW9kZWwgPSBuZXcgR2FtZU1vZGVsKHRoaXMuX29uRXZlbnRMaXN0ZW5lci5iaW5kKHRoaXMpKTtcbiAgICAgICAgdGhpcy5faW5pdCgpO1xuICAgIH07XG5cbiAgICB1cGRhdGUoZHQ6IG51bWJlcil7XG4gICAgICAgIHRoaXMuX2NvdW50ZG93bkxhYmVsLnN0cmluZyA9IE1hdGguY2VpbCgodGhpcy5fc3RhdGVUaW1lIC8gMTAwMCkpLnRvU3RyaW5nKCk7XG4gICAgICAgIHRoaXMuX3N0YXRlVGltZSAtPSBkdCAqIDEwMDA7XG4gICAgfTtcblxuICAgIHByaXZhdGUgX2luaXQoKXtcbiAgICAgICAgbGV0IGV2ZW50RGlzcGF0Y2hlciA9IHRoaXMuX29uRXZlbnRMaXN0ZW5lci5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLl9jb25maXJtQnV0dG9uLnNldFR5cGUodGhpcy5fY29uZmlybUJ1dHRvbi5CVVRUT05fVFlQRS5DT05GSVJNKTtcbiAgICAgICAgdGhpcy5fY29uZmlybUJ1dHRvbi5zZXRFdmVudERpc3BhdGNoZXIoZXZlbnREaXNwYXRjaGVyKTtcbiAgICAgICAgdGhpcy5fY29uZmlybUJ1dHRvbi5yZWdpc3RlckNsaWNrRXZlbnQoKTtcblxuICAgICAgICB0aGlzLl9jYW5jZWxCdXR0b24uc2V0VHlwZSh0aGlzLl9jb25maXJtQnV0dG9uLkJVVFRPTl9UWVBFLkNBTkNFTCk7XG4gICAgICAgIHRoaXMuX2NhbmNlbEJ1dHRvbi5zZXRFdmVudERpc3BhdGNoZXIoZXZlbnREaXNwYXRjaGVyKTtcbiAgICAgICAgdGhpcy5fY2FuY2VsQnV0dG9uLnJlZ2lzdGVyQ2xpY2tFdmVudCgpO1xuXG4gICAgICAgIHRoaXMuX2JldEFyZWFMYXlvdXQuc2V0RXZlbnREaXNwYXRjaGVyKGV2ZW50RGlzcGF0Y2hlcik7XG4gICAgICAgIHRoaXMuX2dhbWVNb2RlbC5sb2dpbigpO1xuICAgIH07XG5cbiAgICBwcml2YXRlIF9vbkV2ZW50TGlzdGVuZXIoZXZlbnQ6IGFueSwgZGF0YTogYW55KXtcbiAgICAgICAgaWYgKGV2ZW50ID09IHRoaXMuX2dhbWVNb2RlbC5NT0RFTF9FVkVOVC5ORVdfUk9VTkQpIHtcbiAgICAgICAgICAgIHRoaXMuX29uUmVjZWl2ZU5ld1JvdW5kKGRhdGEpO1xuICAgICAgICB9IGVsc2UgaWYgKGV2ZW50ID09IHRoaXMuX2dhbWVNb2RlbC5NT0RFTF9FVkVOVC5TRVRUTEUpIHtcbiAgICAgICAgICAgIHRoaXMuX29uUmVjZWl2ZVNldHRsZShkYXRhKTtcbiAgICAgICAgfSBlbHNlIGlmIChldmVudCA9PSB0aGlzLl9nYW1lTW9kZWwuTU9ERUxfRVZFTlQuU1lOQ19VU0VSX1NDT1JFKSB7XG4gICAgICAgICAgICB0aGlzLl9vblJlY2VpdmVTeW5jVXNlckJldChkYXRhKTtcbiAgICAgICAgfSBlbHNlIGlmIChldmVudCA9PSB0aGlzLl9iZXRBcmVhTGF5b3V0LlZJRVdfRVZFTlQuT05fQ0xJQ0tfQVJFQSkge1xuICAgICAgICAgICAgbGV0IHRvdGFsU2NvcmUgPSB0aGlzLl9iZXRBcmVhTGF5b3V0LmdldFRvdGFsQmV0U2NvcmUoKTtcbiAgICAgICAgICAgIGxldCBzZWxlY3RWYWx1ZSA9IHRoaXMuX2NoaXBCdXR0b25MYXlvdXQuZ2V0U2VsZWN0VmFsdWUoKTtcbiAgICAgICAgICAgIGlmICgoc2VsZWN0VmFsdWUgKyB0b3RhbFNjb3JlKSA+IHRoaXMuX3VzZXJTY29yZSlcbiAgICAgICAgICAgICAgICByZXR1cm47XG5cbiAgICAgICAgICAgIHRoaXMuX3NldFVzZXJTY29yZUxhYmVsKHRoaXMuX3VzZXJTY29yZSAtIHRvdGFsU2NvcmUgLSBzZWxlY3RWYWx1ZSk7XG4gICAgICAgICAgICB0aGlzLl9iZXRBcmVhTGF5b3V0LnNob3dCZXRBbmltKGRhdGEsIHNlbGVjdFZhbHVlKTtcbiAgICAgICAgfSBlbHNlIGlmIChldmVudCA9PSB0aGlzLl9jYW5jZWxCdXR0b24uVklFV19FVkVOVC5DQU5DRUwpIHtcbiAgICAgICAgICAgIHRoaXMuX2JldEFyZWFMYXlvdXQuY2FuY2VsQmV0KCk7XG4gICAgICAgICAgICB0aGlzLl9zZXRVc2VyU2NvcmVMYWJlbCh0aGlzLl91c2VyU2NvcmUpO1xuICAgICAgICB9IGVsc2UgaWYgKGV2ZW50ID09IHRoaXMuX2NhbmNlbEJ1dHRvbi5WSUVXX0VWRU5ULkNPTkZJUk0pIHtcbiAgICAgICAgICAgIHRoaXMuX2dhbWVNb2RlbC51c2VyQmV0KHRoaXMuX2JldEFyZWFMYXlvdXQuZ2V0QmV0U2NvcmVzKCkpO1xuICAgICAgICAgICAgdGhpcy5fYmV0QXJlYUxheW91dC5jb25maXJtQmV0KCk7XG4gICAgICAgIH07XG4gICAgfTtcblxuICAgIHByaXZhdGUgX29uUmVjZWl2ZU5ld1JvdW5kKHN0cnVjdDogTmV3Um91bmRNb2RlbFN0cnVjdCl7XG4gICAgICAgIHRoaXMuX3N0YXRlVGltZSA9IHN0cnVjdC5zdGF0ZVRpbWU7XG4gICAgICAgIHRoaXMuX3VzZXJTY29yZSA9IHN0cnVjdC51c2VyU2NvcmU7XG4gICAgICAgIHRoaXMuX3NldHRsZUxhYmVsLnJlc2V0KCk7XG4gICAgICAgIHRoaXMuX2JldEFyZWFMYXlvdXQucmVzZXQoKTtcbiAgICAgICAgdGhpcy5fYmV0QXJlYUxheW91dC5zZXRUb3VjaEVuYWJsZWQodHJ1ZSk7XG4gICAgICAgIHRoaXMuX3NldFVzZXJTY29yZUxhYmVsKHN0cnVjdC51c2VyU2NvcmUpO1xuICAgIH07XG5cbiAgICBwcml2YXRlIF9vblJlY2VpdmVTZXR0bGUoc3RydWN0OiBTZXR0ZU1vZGVsU3RydWN0KXtcbiAgICAgICAgdGhpcy5fc3RhdGVUaW1lID0gc3RydWN0LnN0YXRlVGltZTtcbiAgICAgICAgdGhpcy5fdXNlclNjb3JlID0gc3RydWN0LnVzZXJTY29yZTtcbiAgICAgICAgdGhpcy5fYmV0QXJlYUxheW91dC5jYW5jZWxCZXQoKTtcbiAgICAgICAgdGhpcy5fYmV0QXJlYUxheW91dC5zZXRUb3VjaEVuYWJsZWQoZmFsc2UpO1xuICAgICAgICB0aGlzLl9zZXR0bGVMYWJlbC5zaG93U2V0dGxlVGV4dChzdHJ1Y3Qud2luQXJlYSwgc3RydWN0LnNldHRsZVNjb3JlKTtcbiAgICAgICAgdGhpcy5fc2V0VXNlclNjb3JlTGFiZWwoc3RydWN0LnVzZXJTY29yZSk7XG4gICAgfTtcblxuICAgIHByaXZhdGUgX29uUmVjZWl2ZVN5bmNVc2VyQmV0KHN0cnVjdDogVXNlclNjb3JlTW9kZWxTdHJ1Y3Qpe1xuICAgICAgICB0aGlzLl91c2VyU2NvcmUgPSBzdHJ1Y3QudXNlclNjb3JlO1xuICAgICAgICB0aGlzLl9zZXRVc2VyU2NvcmVMYWJlbChzdHJ1Y3QudXNlclNjb3JlKTtcbiAgICB9O1xuXG4gICAgcHJpdmF0ZSBfc2V0VXNlclNjb3JlTGFiZWwoc2NvcmU6IG51bWJlcil7XG4gICAgICAgIHRoaXMuX3VzZXJTY29yZUxhYmVsLnN0cmluZyA9IFwi6LSi5LqnOiBcIiArIHNjb3JlLnRvU3RyaW5nKCk7XG4gICAgfTtcbn07XG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/ChipButton.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvQ2hpcEJ1dHRvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTSxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUUxQyxJQUFNLFVBQVUsR0FBRztJQUNmLG9CQUFvQixFQUFFLHNCQUFzQjtDQUMvQyxDQUFDO0FBR0Y7SUFBd0MsOEJBQVM7SUFBakQ7UUFBQSxxRUE4QkM7UUE3QlksZ0JBQVUsR0FBRyxVQUFVLENBQUM7O0lBNkJyQyxDQUFDO0lBeEJHLGlDQUFZLEdBQVo7UUFDSSxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUM7SUFDM0IsQ0FBQztJQUFBLENBQUM7SUFFRixpQ0FBWSxHQUFaLFVBQWEsS0FBYTtRQUN0QixJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztJQUM1QixDQUFDO0lBQUEsQ0FBQztJQUVGLHVDQUFrQixHQUFsQixVQUFtQixlQUF5QjtRQUN4QyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsZUFBZSxDQUFDO0lBQzVDLENBQUM7SUFBQSxDQUFDO0lBRUYsdUNBQWtCLEdBQWxCO1FBQ0ksSUFBSSxpQkFBaUIsR0FBRyxJQUFJLEVBQUUsQ0FBQyxTQUFTLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDeEQsaUJBQWlCLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDckMsaUJBQWlCLENBQUMsU0FBUyxHQUFHLFlBQVksQ0FBQztRQUMzQyxpQkFBaUIsQ0FBQyxPQUFPLEdBQUcsVUFBVSxDQUFDO1FBQ3ZDLGlCQUFpQixDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQy9ELElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUM7SUFDMUUsQ0FBQztJQUFBLENBQUM7SUFFTSw2QkFBUSxHQUFoQixVQUFpQixLQUFZLEVBQUUsZUFBb0I7UUFDL0MsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFVBQVUsQ0FBQyxvQkFBb0IsRUFBRSxlQUFlLENBQUMsQ0FBQztJQUM1RSxDQUFDO0lBQUEsQ0FBQztJQTdCZSxVQUFVO1FBRDlCLE9BQU87T0FDYSxVQUFVLENBOEI5QjtJQUFELGlCQUFDO0NBOUJELEFBOEJDLENBOUJ1QyxFQUFFLENBQUMsTUFBTSxHQThCaEQ7a0JBOUJvQixVQUFVIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XG5cbmNvbnN0IFZJRVdfRVZFTlQgPSB7XG4gICAgT05fQ0xJQ0tfQ0hJUF9CVVRUT046IFwiT05fQ0xJQ0tfQ0hJUF9CVVRUT05cIlxufTtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENoaXBCdXR0b24gZXh0ZW5kcyBjYy5CdXR0b257XG4gICAgcmVhZG9ubHkgVklFV19FVkVOVCA9IFZJRVdfRVZFTlQ7XG5cbiAgICBwcml2YXRlIF9jaGlwSW5kZXg6IG51bWJlcjtcbiAgICBwcml2YXRlIF9ldmVudERpc3BhdGNoZXI6IEZ1bmN0aW9uO1xuXG4gICAgZ2V0Q2hpcEluZGV4KCk6IG51bWJlcntcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NoaXBJbmRleDtcbiAgICB9O1xuXG4gICAgc2V0Q2hpcEluZGV4KGluZGV4OiBudW1iZXIpe1xuICAgICAgICB0aGlzLl9jaGlwSW5kZXggPSBpbmRleDtcbiAgICB9O1xuXG4gICAgc2V0RXZlbnREaXNwYXRjaGVyKGV2ZW50RGlzcGF0Y2hlcjogRnVuY3Rpb24pe1xuICAgICAgICB0aGlzLl9ldmVudERpc3BhdGNoZXIgPSBldmVudERpc3BhdGNoZXI7XG4gICAgfTtcblxuICAgIHJlZ2lzdGVyQ2xpY2tFdmVudCgpe1xuICAgICAgICBsZXQgY2xpY2tFdmVudEhhbmRsZXIgPSBuZXcgY2MuQ29tcG9uZW50LkV2ZW50SGFuZGxlcigpO1xuICAgICAgICBjbGlja0V2ZW50SGFuZGxlci50YXJnZXQgPSB0aGlzLm5vZGU7XG4gICAgICAgIGNsaWNrRXZlbnRIYW5kbGVyLmNvbXBvbmVudCA9IFwiQ2hpcEJ1dHRvblwiO1xuICAgICAgICBjbGlja0V2ZW50SGFuZGxlci5oYW5kbGVyID0gXCJfb25DbGlja1wiO1xuICAgICAgICBjbGlja0V2ZW50SGFuZGxlci5jdXN0b21FdmVudERhdGEgPSB0aGlzLl9jaGlwSW5kZXgudG9TdHJpbmcoKTtcbiAgICAgICAgdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5CdXR0b24pLmNsaWNrRXZlbnRzLnB1c2goY2xpY2tFdmVudEhhbmRsZXIpO1xuICAgIH07XG5cbiAgICBwcml2YXRlIF9vbkNsaWNrKGV2ZW50OiBFdmVudCwgY3VzdG9tRXZlbnREYXRhOiBhbnkpe1xuICAgICAgICB0aGlzLl9ldmVudERpc3BhdGNoZXIoVklFV19FVkVOVC5PTl9DTElDS19DSElQX0JVVFRPTiwgY3VzdG9tRXZlbnREYXRhKTtcbiAgICB9O1xufVxuIl19
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Common/Config.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'ccbc4Kwx5pKAa3enDwP8uMD', 'Config');
// Script/Common/Config.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    AREA_TYPES: ["庄", "闲", "和"],
    AREA_ODDS: [1, 1, 1],
    CHIP_VALUES: [1, 5, 10, 50, 100, 500, 1000],
    // 游戏初始金额
    GAME_BEGIN_SCORE: 100000,
};

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvQ29tbW9uL0NvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGtCQUFlO0lBQ1gsVUFBVSxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUM7SUFDM0IsU0FBUyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDcEIsV0FBVyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsSUFBSSxDQUFDO0lBQzNDLFNBQVM7SUFDVCxnQkFBZ0IsRUFBRSxNQUFNO0NBQzNCLENBQUMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCB7XG4gICAgQVJFQV9UWVBFUzogW1wi5bqEXCIsIFwi6ZeyXCIsIFwi5ZKMXCJdLFxuICAgIEFSRUFfT0REUzogWzEsIDEsIDFdLFxuICAgIENISVBfVkFMVUVTOiBbMSwgNSwgMTAsIDUwLCAxMDAsIDUwMCwgMTAwMF0sXG4gICAgLy8g5ri45oiP5Yid5aeL6YeR6aKdXG4gICAgR0FNRV9CRUdJTl9TQ09SRTogMTAwMDAwLCBcbn07Il19
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Model/GameModel.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'adafcU2a7BDUJkatGe9Hfd9', 'GameModel');
// Script/Model/GameModel.ts

"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
var StateMachine_1 = require("./StateMachine");
var Config_1 = require("../Common/Config");
var GAME_STATE = {
    NEW_ROUND: "new_round",
    SETTLE: "settle",
};
var STATE_TIME = (_a = {},
    _a[GAME_STATE.NEW_ROUND] = 30 * 1000,
    _a[GAME_STATE.SETTLE] = 10 * 1000,
    _a);
var MODEL_EVENT = {
    NEW_ROUND: "NEW_ROUND",
    SETTLE: "SETTLE",
    SYNC_USER_SCORE: "SYNC_USER_SCORE",
};
var INTERVAL_TIME = 1 * 1000;
var GameModel = /** @class */ (function () {
    function GameModel(eventDispatcher) {
        this.MODEL_EVENT = MODEL_EVENT;
        this._eventDispatcher = eventDispatcher;
        this._intervalHandler = null;
        this._userScore = Config_1.default.GAME_BEGIN_SCORE;
        this._betScores = [0, 0, 0];
        // 模拟 server 来封包
        this._stateMachine = this._createStateMachine();
    }
    ;
    GameModel.prototype.login = function () {
        var _this = this;
        this._stateMachine.transferState(GAME_STATE.NEW_ROUND, 0);
        this._intervalHandler = setInterval(function () { return _this._update(INTERVAL_TIME); }, INTERVAL_TIME);
    };
    ;
    GameModel.prototype.leave = function () {
        clearInterval(this._intervalHandler);
        this._intervalHandler = null;
    };
    ;
    GameModel.prototype.userBet = function (betScores) {
        for (var idx = 0; idx < betScores.length; idx++) {
            this._betScores[idx] += betScores[idx];
            this._userScore -= betScores[idx];
        }
        ;
        var struct = {
            userScore: this._userScore,
        };
        this._eventDispatcher(MODEL_EVENT.SYNC_USER_SCORE, struct);
    };
    ;
    GameModel.prototype._update = function (dt) {
        this._stateMachine.update(dt);
    };
    ;
    GameModel.prototype._onNewRound = function () {
        var stateTime = STATE_TIME[GAME_STATE.NEW_ROUND];
        var struct = {
            userScore: this._userScore,
            stateTime: stateTime
        };
        this._betScores = [0, 0, 0];
        this._eventDispatcher(MODEL_EVENT.NEW_ROUND, struct);
        this._stateMachine.transferState(GAME_STATE.SETTLE, stateTime);
    };
    ;
    GameModel.prototype._onSettle = function () {
        var stateTime = STATE_TIME[GAME_STATE.SETTLE];
        var winArea = Math.floor(Math.random() * Config_1.default.AREA_TYPES.length);
        var winScore = this._getWinScore(winArea);
        this._userScore += winScore;
        var struct = {
            userScore: this._userScore,
            winArea: winArea,
            settleScore: winScore,
            stateTime: stateTime
        };
        this._eventDispatcher(MODEL_EVENT.SETTLE, struct);
        this._stateMachine.transferState(GAME_STATE.NEW_ROUND, stateTime);
    };
    ;
    GameModel.prototype._getWinScore = function (winArea) {
        var winScore = 0;
        for (var idx = 0; idx < this._betScores.length; idx++)
            winScore += idx == winArea ? this._betScores[idx] * (Config_1.default.AREA_ODDS[idx] + 1) : -this._betScores[idx];
        return winScore;
    };
    ;
    GameModel.prototype._createStateMachine = function () {
        var stateMachine = new StateMachine_1.default();
        stateMachine.addState(GAME_STATE.NEW_ROUND, this._onNewRound.bind(this));
        stateMachine.addState(GAME_STATE.SETTLE, this._onSettle.bind(this));
        return stateMachine;
    };
    ;
    return GameModel;
}());
exports.default = GameModel;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvTW9kZWwvR2FtZU1vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLCtDQUEwQztBQUMxQywyQ0FBc0M7QUFHdEMsSUFBTSxVQUFVLEdBQUc7SUFDZixTQUFTLEVBQUUsV0FBVztJQUN0QixNQUFNLEVBQUUsUUFBUTtDQUNuQixDQUFDO0FBRUYsSUFBTSxVQUFVO0lBQ1osR0FBQyxVQUFVLENBQUMsU0FBUyxJQUFHLEVBQUUsR0FBRyxJQUFJO0lBQ2pDLEdBQUMsVUFBVSxDQUFDLE1BQU0sSUFBRyxFQUFFLEdBQUcsSUFBSTtPQUNqQyxDQUFDO0FBRUYsSUFBTSxXQUFXLEdBQUc7SUFDaEIsU0FBUyxFQUFFLFdBQVc7SUFDdEIsTUFBTSxFQUFFLFFBQVE7SUFDaEIsZUFBZSxFQUFFLGlCQUFpQjtDQUNyQyxDQUFDO0FBRUYsSUFBTSxhQUFhLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQztBQUUvQjtJQVVJLG1CQUFZLGVBQXlCO1FBVDVCLGdCQUFXLEdBQUcsV0FBVyxDQUFDO1FBVS9CLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxlQUFlLENBQUM7UUFDeEMsSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQztRQUU3QixJQUFJLENBQUMsVUFBVSxHQUFHLGdCQUFNLENBQUMsZ0JBQWdCLENBQUM7UUFDMUMsSUFBSSxDQUFDLFVBQVUsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDNUIsZ0JBQWdCO1FBQ2hCLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixFQUFFLENBQUM7SUFDcEQsQ0FBQztJQUFBLENBQUM7SUFFRix5QkFBSyxHQUFMO1FBQUEsaUJBR0M7UUFGRyxJQUFJLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQzFELElBQUksQ0FBQyxnQkFBZ0Is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LElBQUksT0FBTyxDQUFBLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsZ0JBQU0sQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUMxRyxPQUFPLFFBQVEsQ0FBQztJQUNwQixDQUFDO0lBQUEsQ0FBQztJQUVNLHVDQUFtQixHQUEzQjtRQUNJLElBQUksWUFBWSxHQUFHLElBQUksc0JBQVksRUFBRSxDQUFDO1FBQ3RDLFlBQVksQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQ3pFLFlBQVksQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQ3BFLE9BQU8sWUFBWSxDQUFDO0lBQ3hCLENBQUM7SUFBQSxDQUFDO0lBQ04sZ0JBQUM7QUFBRCxDQXRGQSxBQXNGQyxJQUFBOztBQUFBLENBQUMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgU3RhdGVNYWNoaW5lIGZyb20gXCIuL1N0YXRlTWFjaGluZVwiO1xuaW1wb3J0IENvbmZpZyBmcm9tIFwiLi4vQ29tbW9uL0NvbmZpZ1wiO1xuaW1wb3J0IHsgTmV3Um91bmRNb2RlbFN0cnVjdCwgU2V0dGVNb2RlbFN0cnVjdCwgVXNlclNjb3JlTW9kZWxTdHJ1Y3QgfSBmcm9tIFwiLi4vQ29tbW9uL01vZGVsU3RydWN0XCI7XG5cbmNvbnN0IEdBTUVfU1RBVEUgPSB7XG4gICAgTkVXX1JPVU5EOiBcIm5ld19yb3VuZFwiLFxuICAgIFNFVFRMRTogXCJzZXR0bGVcIixcbn07XG5cbmNvbnN0IFNUQVRFX1RJTUUgPSB7XG4gICAgW0dBTUVfU1RBVEUuTkVXX1JPVU5EXTogMzAgKiAxMDAwLFxuICAgIFtHQU1FX1NUQVRFLlNFVFRMRV06IDEwICogMTAwMCxcbn07XG5cbmNvbnN0IE1PREVMX0VWRU5UID0ge1xuICAgIE5FV19ST1VORDogXCJORVdfUk9VTkRcIixcbiAgICBTRVRUTEU6IFwiU0VUVExFXCIsXG4gICAgU1lOQ19VU0VSX1NDT1JFOiBcIlNZTkNfVVNFUl9TQ09SRVwiLFxufTtcblxuY29uc3QgSU5URVJWQUxfVElNRSA9IDEgKiAxMDAwO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lTW9kZWwge1xuICAgIHJlYWRvbmx5IE1PREVMX0VWRU5UID0gTU9ERUxfRVZFTlQ7XG5cbiAgICBwcml2YXRlIF9zdGF0ZU1hY2hpbmU6IFN0YXRlTWFjaGluZTtcbiAgICBwcml2YXRlIF9pbnRlcnZhbEhhbmRsZXI6IGFueTtcbiAgICBwcml2YXRlIF9ldmVudERpc3BhdGNoZXI6IEZ1bmN0aW9uO1xuICAgIC8vIOa4uOaIj+mAu+i+keebuOWFs1xuICAgIHByaXZhdGUgX3VzZXJTY29yZTogbnVtYmVyO1xuICAgIHByaXZhdGUgX2JldFNjb3JlczogbnVtYmVyW107XG5cbiAgICBjb25zdHJ1Y3RvcihldmVudERpc3BhdGNoZXI6IEZ1bmN0aW9uKXtcbiAgICAgICAgdGhpcy5fZXZlbnREaXNwYXRjaGVyID0gZXZlbnREaXNwYXRjaGVyO1xuICAgICAgICB0aGlzLl9pbnRlcnZhbEhhbmRsZXIgPSBudWxsO1xuXG4gICAgICAgIHRoaXMuX3VzZXJTY29yZSA9IENvbmZpZy5HQU1FX0JFR0lOX1NDT1JFO1xuICAgICAgICB0aGlzLl9iZXRTY29yZXMgPSBbMCwgMCwgMF07XG4gICAgICAgIC8vIOaooeaLnyBzZXJ2ZXIg5p2l5bCB5YyFXG4gICAgICAgIHRoaXMuX3N0YXRlTWFjaGluZSA9IHRoaXMuX2NyZWF0ZVN0YXRlTWFjaGluZSgpO1xuICAgIH07XG5cbiAgICBsb2dpbigpe1xuICAgICAgICB0aGlzLl9zdGF0ZU1hY2hpbmUudHJhbnNmZXJTdGF0ZShHQU1FX1NUQVRFLk5FV19ST1VORCwgMCk7XG4gICAgICAgIHRoaXMuX2ludGVydmFsSGFuZGxlciA9IHNldEludGVydmFsKCgpID0+IHRoaXMuX3VwZGF0ZShJTlRFUlZBTF9USU1FKSwgSU5URVJWQUxfVElNRSk7XG4gICAgfTtcblxuICAgIGxlYXZlKCl7XG4gICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5faW50ZXJ2YWxIYW5kbGVyKTtcbiAgICAgICAgdGhpcy5faW50ZXJ2YWxIYW5kbGVyID0gbnVsbDtcbiAgICB9O1xuXG4gICAgdXNlckJldChiZXRTY29yZXM6IG51bWJlcltdKXtcbiAgICAgICAgZm9yKGxldCBpZHggPSAwOyBpZHggPCBiZXRTY29yZXMubGVuZ3RoOyBpZHgrKyl7XG4gICAgICAgICAgICB0aGlzLl9iZXRTY29yZXNbaWR4XSArPSBiZXRTY29yZXNbaWR4XTtcbiAgICAgICAgICAgIHRoaXMuX3VzZXJTY29yZSAtPSBiZXRTY29yZXNbaWR4XTtcbiAgICAgICAgfTtcblxuICAgICAgICBsZXQgc3RydWN0OiBVc2VyU2NvcmVNb2RlbFN0cnVjdCA9IHtcbiAgICAgICAgICAgIHVzZXJTY29yZTogdGhpcy5fdXNlclNjb3JlLFxuICAgICAgICB9O1xuICAgICAgICB0aGlzLl9ldmVudERpc3BhdGNoZXIoTU9ERUxfRVZFTlQuU1lOQ19VU0VSX1NDT1JFLCBzdHJ1Y3QpO1xuICAgIH07XG5cbiAgICBwcml2YXRlIF91cGRhdGUoZHQ6IG51bWJlcil7XG4gICAgICAgIHRoaXMuX3N0YXRlTWFjaGluZS51cGRhdGUoZHQpO1xuICAgIH07XG5cbiAgICBwcml2YXRlIF9vbk5ld1JvdW5kKCl7XG4gICAgICAgIGxldCBzdGF0ZVRpbWUgPSBTVEFURV9USU1FW0dBTUVfU1RBVEUuTkVXX1JPVU5EXTtcbiAgICAgICAgbGV0IHN0cnVjdDogTmV3Um91bmRNb2RlbFN0cnVjdCA9IHtcbiAgICAgICAgICAgIHVzZXJTY29yZTogdGhpcy5fdXNlclNjb3JlLFxuICAgICAgICAgICAgc3RhdGVUaW1lOiBzdGF0ZVRpbWVcbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLl9iZXRTY29yZXMgPSBbMCwgMCwgMF07XG4gICAgICAgIHRoaXMuX2V2ZW50RGlzcGF0Y2hlcihNT0RFTF9FVkVOVC5ORVdfUk9VTkQsIHN0cnVjdCk7XG4gICAgICAgIHRoaXMuX3N0YXRlTWFjaGluZS50cmFuc2ZlclN0YXRlKEdBTUVfU1RBVEUuU0VUVExFLCBzdGF0ZVRpbWUpO1xuICAgIH07XG5cbiAgICBwcml2YXRlIF9vblNldHRsZSgpe1xuICAgICAgICBsZXQgc3RhdGVUaW1lID0gU1RBVEVfVElNRVtHQU1FX1NUQVRFLlNFVFRMRV07XG4gICAgICAgIGxldCB3aW5BcmVhID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogQ29uZmlnLkFSRUFfVFlQRVMubGVuZ3RoKTtcbiAgICAgICAgbGV0IHdpblNjb3JlID0gdGhpcy5fZ2V0V2luU2NvcmUod2luQXJlYSk7XG4gICAgICAgIHRoaXMuX3VzZXJTY29yZSArPSB3aW5TY29yZTtcbiAgICAgICAgbGV0IHN0cnVjdDogU2V0dGVNb2RlbFN0cnVjdCA9IHtcbiAgICAgICAgICAgIHVzZXJTY29yZTogdGhpcy5fdXNlclNjb3JlLFxuICAgICAgICAgICAgd2luQXJlYTogd2luQXJlYSxcbiAgICAgICAgICAgIHNldHRsZVNjb3JlOiB3aW5TY29yZSxcbiAgICAgICAgICAgIHN0YXRlVGltZTogc3RhdGVUaW1lXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuX2V2ZW50RGlzcGF0Y2hlcihNT0RFTF9FVkVOVC5TRVRUTEUsIHN0cnVjdCk7XG4gICAgICAgIHRoaXMuX3N0YXRlTWFjaGluZS50cmFuc2ZlclN0YXRlKEdBTUVfU1RBVEUuTkVXX1JPVU5ELCBzdGF0ZVRpbWUpO1xuICAgIH07XG5cbiAgICBwcml2YXRlIF9nZXRXaW5TY29yZSh3aW5BcmVhOiBudW1iZXIpOiBudW1iZXJ7XG4gICAgICAgIGxldCB3aW5TY29yZSA9IDA7XG4gICAgICAgIGZvciAobGV0IGlkeCA9IDA7IGlkeCA8IHRoaXMuX2JldFNjb3Jlcy5sZW5ndGg7IGlkeCsrKVxuICAgICAgICAgICAgd2luU2NvcmUgKz0gaWR4ID09IHdpbkFyZWE/IHRoaXMuX2JldFNjb3Jlc1tpZHhdICogKENvbmZpZy5BUkVBX09ERFNbaWR4XSArIDEpOiAtdGhpcy5fYmV0U2NvcmVzW2lkeF07XG4gICAgICAgIHJldHVybiB3aW5TY29yZTtcbiAgICB9O1xuXG4gICAgcHJpdmF0ZSBfY3JlYXRlU3RhdGVNYWNoaW5lKCk6IFN0YXRlTWFjaGluZXtcbiAgICAgICAgbGV0IHN0YXRlTWFjaGluZSA9IG5ldyBTdGF0ZU1hY2hpbmUoKTtcbiAgICAgICAgc3RhdGVNYWNoaW5lLmFkZFN0YXRlKEdBTUVfU1RBVEUuTkVXX1JPVU5ELCB0aGlzLl9vbk5ld1JvdW5kLmJpbmQodGhpcykpO1xuICAgICAgICBzdGF0ZU1hY2hpbmUuYWRkU3RhdGUoR0FNRV9TVEFURS5TRVRUTEUsIHRoaXMuX29uU2V0dGxlLmJpbmQodGhpcykpO1xuICAgICAgICByZXR1cm4gc3RhdGVNYWNoaW5lO1xuICAgIH07XG59OyJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Model/StateMachine.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '334655LJupHyq7ouLGo5Vla', 'StateMachine');
// Script/Model/StateMachine.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 简单的状态机，符合 GameModel 的需求
var StateMachine = /** @class */ (function () {
    function StateMachine() {
        this._nextState = null;
        this._stateTime = 0;
        this._stateFuncs = {};
    }
    ;
    StateMachine.prototype.update = function (dt) {
        if (this._nextState === null)
            return;
        this._stateTime -= dt;
        if (this._stateTime <= 0) {
            var nextState = this._nextState;
            this._nextState = null;
            this._stateFuncs[nextState]();
        }
        ;
    };
    ;
    StateMachine.prototype.transferState = function (state, stateTime) {
        this._nextState = state;
        this._stateTime = stateTime;
    };
    ;
    StateMachine.prototype.setState = function (state) {
        this._nextState = state;
    };
    ;
    StateMachine.prototype.addState = function (state, func) {
        this._stateFuncs[state] = func;
    };
    ;
    return StateMachine;
}());
exports.default = StateMachine;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvTW9kZWwvU3RhdGVNYWNoaW5lLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsMEJBQTBCO0FBQzFCO0lBS0k7UUFDSSxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztRQUN2QixJQUFJLENBQUMsVUFBVSxHQUFHLENBQUMsQ0FBQztRQUNwQixJQUFJLENBQUMsV0FBVyxHQUFHLEVBQUUsQ0FBQztJQUMxQixDQUFDO0lBQUEsQ0FBQztJQUVGLDZCQUFNLEdBQU4sVUFBTyxFQUFVO1FBQ2IsSUFBSSxJQUFJLENBQUMsVUFBVSxLQUFLLElBQUk7WUFDeEIsT0FBTztRQUVYLElBQUksQ0FBQyxVQUFVLElBQUksRUFBRSxDQUFDO1FBQ3RCLElBQUksSUFBSSxDQUFDLFVBQVUsSUFBSSxDQUFDLEVBQUU7WUFDdEIsSUFBSSxTQUFTLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQztZQUNoQyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztZQUN2QixJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUM7U0FDakM7UUFBQSxDQUFDO0lBQ04sQ0FBQztJQUFBLENBQUM7SUFFRixvQ0FBYSxHQUFiLFVBQWMsS0FBVSxFQUFFLFNBQWlCO1FBQ3ZDLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO1FBQ3hCLElBQUksQ0FBQyxVQUFVLEdBQUcsU0FBUyxDQUFDO0lBQ2hDLENBQUM7SUFBQSxDQUFDO0lBRUYsK0JBQVEsR0FBUixVQUFTLEtBQVU7UUFDZixJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztJQUM1QixDQUFDO0lBQUEsQ0FBQztJQUVGLCtCQUFRLEdBQVIsVUFBUyxLQUFVLEVBQUUsSUFBYztRQUMvQixJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxHQUFHLElBQUksQ0FBQztJQUNuQyxDQUFDO0lBQUEsQ0FBQztJQUNOLG1CQUFDO0FBQUQsQ0FuQ0EsQUFtQ0MsSUFBQTs7QUFBQSxDQUFDIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8g566A5Y2V55qE54q25oCB5py677yM56ym5ZCIIEdhbWVNb2RlbCDnmoTpnIDmsYJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN0YXRlTWFjaGluZSB7XG4gICAgcHJpdmF0ZSBfbmV4dFN0YXRlOiBhbnk7XG4gICAgcHJpdmF0ZSBfc3RhdGVUaW1lOiBudW1iZXI7XG4gICAgcHJpdmF0ZSBfc3RhdGVGdW5jczoge307XG5cbiAgICBjb25zdHJ1Y3Rvcigpe1xuICAgICAgICB0aGlzLl9uZXh0U3RhdGUgPSBudWxsO1xuICAgICAgICB0aGlzLl9zdGF0ZVRpbWUgPSAwO1xuICAgICAgICB0aGlzLl9zdGF0ZUZ1bmNzID0ge307XG4gICAgfTtcblxuICAgIHVwZGF0ZShkdDogbnVtYmVyKXtcbiAgICAgICAgaWYgKHRoaXMuX25leHRTdGF0ZSA9PT0gbnVsbClcbiAgICAgICAgICAgIHJldHVybjtcblxuICAgICAgICB0aGlzLl9zdGF0ZVRpbWUgLT0gZHQ7XG4gICAgICAgIGlmICh0aGlzLl9zdGF0ZVRpbWUgPD0gMCkge1xuICAgICAgICAgICAgbGV0IG5leHRTdGF0ZSA9IHRoaXMuX25leHRTdGF0ZTtcbiAgICAgICAgICAgIHRoaXMuX25leHRTdGF0ZSA9IG51bGw7XG4gICAgICAgICAgICB0aGlzLl9zdGF0ZUZ1bmNzW25leHRTdGF0ZV0oKTtcbiAgICAgICAgfTtcbiAgICB9O1xuXG4gICAgdHJhbnNmZXJTdGF0ZShzdGF0ZTogYW55LCBzdGF0ZVRpbWU6IG51bWJlcil7XG4gICAgICAgIHRoaXMuX25leHRTdGF0ZSA9IHN0YXRlO1xuICAgICAgICB0aGlzLl9zdGF0ZVRpbWUgPSBzdGF0ZVRpbWU7XG4gICAgfTtcblxuICAgIHNldFN0YXRlKHN0YXRlOiBhbnkpe1xuICAgICAgICB0aGlzLl9uZXh0U3RhdGUgPSBzdGF0ZTtcbiAgICB9O1xuXG4gICAgYWRkU3RhdGUoc3RhdGU6IGFueSwgZnVuYzogRnVuY3Rpb24pe1xuICAgICAgICB0aGlzLl9zdGF0ZUZ1bmNzW3N0YXRlXSA9IGZ1bmM7XG4gICAgfTtcbn07Il19
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------
