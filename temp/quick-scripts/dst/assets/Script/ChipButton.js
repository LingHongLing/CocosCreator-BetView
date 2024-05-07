
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