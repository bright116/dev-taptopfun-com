/*
 * @Author: your name
 * @Date: 2021-09-01 15:02:48
 * @LastEditTime: 2021-09-01 16:59:06
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Qiu Qiu\bin\index.js
 */
// "undefined" != typeof swan && "undefined" != typeof swanGlobal ? (require("swan-game-adapter.js"),
//     require("libs/laya.bdmini.js")) : "undefined" != typeof wx && (require("weapp-adapter.js"),
//         require("libs/laya.wxmini.js")),
//     window.loadLib = require, "use strict";

window.screenOrientation = "portrait",
// loadLib("swan-game-adapter.js"),
// loadLib("libs/laya.bdmini.js"),
// loadLib("weapp-adapter.js"),
// loadLib("libs/laya.wxmini.js"),


    loadLib("libs/laya.core.js"),
    
    loadLib("libs/laya.ui.js"),

    loadLib("libs/fairygui.js"),


    // window.webuzzSDK = loadLib("webuzzSDK.js"),
    loadLib("js/bundle.js");