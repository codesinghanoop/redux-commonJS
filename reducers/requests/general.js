Object.defineProperty(exports,"__esModule",{value:true});


var _redux=require('redux');
var _constants=require('../../constants');

var _helpers=require('./helpers');

function server(){var state=arguments.length>0&&arguments[0]!==undefined?arguments[0]:(0,_helpers.initialRequestState)();var action=arguments[1];
if(action.type===_constants.GeneralTypes.PING_RESET){
return(0,_helpers.initialRequestState)();
}

return(0,_helpers.handleRequest)(
_constants.GeneralTypes.PING_REQUEST,
_constants.GeneralTypes.PING_SUCCESS,
_constants.GeneralTypes.PING_FAILURE,
state,
action);

}

function config(){var state=arguments.length>0&&arguments[0]!==undefined?arguments[0]:(0,_helpers.initialRequestState)();var action=arguments[1];
return(0,_helpers.handleRequest)(
_constants.GeneralTypes.CLIENT_CONFIG_REQUEST,
_constants.GeneralTypes.CLIENT_CONFIG_SUCCESS,
_constants.GeneralTypes.CLIENT_CONFIG_FAILURE,
state,
action);

}

function license(){var state=arguments.length>0&&arguments[0]!==undefined?arguments[0]:(0,_helpers.initialRequestState)();var action=arguments[1];
return(0,_helpers.handleRequest)(
_constants.GeneralTypes.CLIENT_LICENSE_REQUEST,
_constants.GeneralTypes.CLIENT_LICENSE_SUCCESS,
_constants.GeneralTypes.CLIENT_LICENSE_FAILURE,
state,
action);

}

function websocket(){var state=arguments.length>0&&arguments[0]!==undefined?arguments[0]:(0,_helpers.initialRequestState)();var action=arguments[1];
return(0,_helpers.handleRequest)(
_constants.GeneralTypes.WEBSOCKET_REQUEST,
_constants.GeneralTypes.WEBSOCKET_SUCCESS,
_constants.GeneralTypes.WEBSOCKET_FAILURE,
state,
action);

}exports.default=

(0,_redux.combineReducers)({
server:server,
config:config,
license:license,
websocket:websocket});