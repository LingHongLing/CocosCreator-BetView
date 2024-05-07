
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