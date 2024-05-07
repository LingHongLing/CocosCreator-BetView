
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