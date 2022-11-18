/**
 * 设置LayaNative屏幕方向，可设置以下值
 * landscape           横屏
 * portrait            竖屏
 * sensor_landscape    横屏(双方向)
 * sensor_portrait     竖屏(双方向)
 */
window.screenOrientation = "sensor_landscape";
loadLib("babel/runtime/helpers/typeof.js");
loadLib("babel/runtime/helpers/set.js");
loadLib("babel/runtime/helpers/get.js");
loadLib("babel/runtime/helpers/getPrototypeOf.js");
loadLib("babel/runtime/helpers/setPrototypeOf.js");
loadLib("babel/runtime/helpers/Arrayincludes.js");
loadLib("babel/runtime/helpers/assertThisInitialized.js");
loadLib("babel/runtime/helpers/createClass.js");
loadLib("babel/runtime/helpers/classCallCheck.js");
loadLib("babel/runtime/helpers/defineProperty.js");
loadLib("babel/runtime/helpers/inherits.js");
loadLib("babel/runtime/helpers/interopRequireDefault.js");
loadLib("babel/runtime/helpers/possibleConstructorReturn.js");
loadLib("babel/runtime/helpers/superPropBase.js");
loadLib("babel/runtime/regenerator.js");
//-----libs-begin-----
loadLib("libs/laya.core.js");

loadLib("libs/laya.ui.js");

loadLib("libs/laya.d3.js");

window.CANNON = loadLib("libs/cannon.js");

//-----libs-end-------
loadLib("js/bundle.js");