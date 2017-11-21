Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};


var _redux=require('redux');
var _constants=require('../../constants');

function config(){var state=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};var action=arguments[1];
switch(action.type){
case _constants.GeneralTypes.CLIENT_CONFIG_RECEIVED:
return _extends({},state,action.data);
case _constants.UsersTypes.LOGOUT_SUCCESS:
return{};
default:
return state;}

}

function appState(){var state=arguments.length>0&&arguments[0]!==undefined?arguments[0]:false;var action=arguments[1];
switch(action.type){
case _constants.GeneralTypes.RECEIVED_APP_STATE:
return action.data;

default:
return state;}

}

function credentials(){var state=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};var action=arguments[1];
switch(action.type){
case _constants.GeneralTypes.RECEIVED_APP_CREDENTIALS:
return _extends({},state,action.data);

case _constants.UsersTypes.LOGOUT_SUCCESS:
return{};
default:
return state;}

}

function deviceToken(){var state=arguments.length>0&&arguments[0]!==undefined?arguments[0]:'';var action=arguments[1];
switch(action.type){
case _constants.GeneralTypes.RECEIVED_APP_DEVICE_TOKEN:
return action.data;
default:
return state;}

}

function license(){var state=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};var action=arguments[1];
switch(action.type){
case _constants.GeneralTypes.CLIENT_LICENSE_RECEIVED:
return _extends({},state,action.data);
case _constants.UsersTypes.LOGOUT_SUCCESS:
return{};
default:
return state;}

}

function serverVersion(){var state=arguments.length>0&&arguments[0]!==undefined?arguments[0]:'';var action=arguments[1];
switch(action.type){
case _constants.GeneralTypes.RECEIVED_SERVER_VERSION:
return action.data;
case _constants.UsersTypes.LOGOUT_SUCCESS:
return'';
default:
return state;}

}exports.default=

(0,_redux.combineReducers)({
appState:appState,
credentials:credentials,
config:config,
deviceToken:deviceToken,
license:license,
serverVersion:serverVersion});