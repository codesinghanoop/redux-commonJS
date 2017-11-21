Object.defineProperty(exports,"__esModule",{value:true});exports.











getPing=getPing;exports.






























resetPing=resetPing;exports.





getClientConfig=getClientConfig;exports.








getLicenseConfig=getLicenseConfig;exports.








logClientError=logClientError;exports.










setAppState=setAppState;exports.












setDeviceToken=setDeviceToken;exports.





setServerVersion=setServerVersion;exports.





setStoreFromLocalData=setStoreFromLocalData;var _reduxBatchedActions=require('redux-batched-actions');var _client=require('../client');var _client2=_interopRequireDefault(_client);var _helpers=require('./helpers.js');var _constants=require('../constants');var _channels=require('./channels');var _errors=require('./errors');var _users=require('./users');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function getPing(){var _this=this;return function _callee(dispatch,getState){var data,pingError;return regeneratorRuntime.async(function _callee$(_context){while(1){switch(_context.prev=_context.next){case 0:dispatch({type:_constants.GeneralTypes.PING_REQUEST},getState);data=void 0;pingError=new _helpers.FormattedError('mobile.server_ping_failed','Cannot connect to the server. Please check your server URL and internet connection.');_context.prev=3;_context.next=6;return regeneratorRuntime.awrap(_client2.default.getPing());case 6:data=_context.sent;if(data.version){_context.next=10;break;}dispatch((0,_reduxBatchedActions.batchActions)([{type:_constants.GeneralTypes.PING_FAILURE,error:pingError},(0,_errors.getLogErrorAction)(pingError)]),getState);return _context.abrupt('return');case 10:_context.next=16;break;case 12:_context.prev=12;_context.t0=_context['catch'](3);dispatch((0,_reduxBatchedActions.batchActions)([{type:_constants.GeneralTypes.PING_FAILURE,error:pingError},(0,_errors.getLogErrorAction)(_context.t0)]),getState);return _context.abrupt('return');case 16:dispatch({type:_constants.GeneralTypes.PING_SUCCESS,data:data},getState);case 17:case'end':return _context.stop();}}},null,_this,[[3,12]]);};}function resetPing(){var _this2=this;return function _callee2(dispatch,getState){return regeneratorRuntime.async(function _callee2$(_context2){while(1){switch(_context2.prev=_context2.next){case 0:dispatch({type:_constants.GeneralTypes.PING_RESET},getState);case 1:case'end':return _context2.stop();}}},null,_this2);};}function getClientConfig(){return(0,_helpers.bindClientFunc)(_client2.default.getClientConfig,_constants.GeneralTypes.CLIENT_CONFIG_REQUEST,[_constants.GeneralTypes.CLIENT_CONFIG_RECEIVED,_constants.GeneralTypes.CLIENT_CONFIG_SUCCESS],_constants.GeneralTypes.CLIENT_CONFIG_FAILURE);}function getLicenseConfig(){return(0,_helpers.bindClientFunc)(_client2.default.getLicenseConfig,_constants.GeneralTypes.CLIENT_LICENSE_REQUEST,[_constants.GeneralTypes.CLIENT_LICENSE_RECEIVED,_constants.GeneralTypes.CLIENT_LICENSE_SUCCESS],_constants.GeneralTypes.CLIENT_LICENSE_FAILURE);}function logClientError(message){var level=arguments.length>1&&arguments[1]!==undefined?arguments[1]:'ERROR';return(0,_helpers.bindClientFunc)(_client2.default.logClientError,_constants.GeneralTypes.LOG_CLIENT_ERROR_REQUEST,_constants.GeneralTypes.LOG_CLIENT_ERROR_SUCCESS,_constants.GeneralTypes.LOG_CLIENT_ERROR_FAILURE,message,level);}function setAppState(state){var _this3=this;return function _callee3(dispatch,getState){var currentTeamId;return regeneratorRuntime.async(function _callee3$(_context3){while(1){switch(_context3.prev=_context3.next){case 0:dispatch({type:_constants.GeneralTypes.RECEIVED_APP_STATE,data:state},getState);if(state){currentTeamId=getState().entities.teams.currentTeamId;if(currentTeamId){(0,_channels.getMyChannelMembers)(currentTeamId)(dispatch,getState);}}case 2:case'end':return _context3.stop();}}},null,_this3);};}function setDeviceToken(token){var _this4=this;return function _callee4(dispatch,getState){return regeneratorRuntime.async(function _callee4$(_context4){while(1){switch(_context4.prev=_context4.next){case 0:dispatch({type:_constants.GeneralTypes.RECEIVED_APP_DEVICE_TOKEN,data:token},getState);case 1:case'end':return _context4.stop();}}},null,_this4);};}function setServerVersion(serverVersion){var _this5=this;return function _callee5(dispatch,getState){return regeneratorRuntime.async(function _callee5$(_context5){while(1){switch(_context5.prev=_context5.next){case 0:dispatch({type:_constants.GeneralTypes.RECEIVED_SERVER_VERSION,data:serverVersion},getState);case 1:case'end':return _context5.stop();}}},null,_this5);};}function setStoreFromLocalData(data){var _this6=this;
return function _callee6(dispatch,getState){return regeneratorRuntime.async(function _callee6$(_context6){while(1){switch(_context6.prev=_context6.next){case 0:
_client2.default.setToken(data.token);
_client2.default.setUrl(data.url);return _context6.abrupt('return',

(0,_users.loadMe)()(dispatch,getState));case 3:case'end':return _context6.stop();}}},null,_this6);};

}exports.default=

{
getPing:getPing,
getClientConfig:getClientConfig,
getLicenseConfig:getLicenseConfig,
logClientError:logClientError,
setAppState:setAppState,
setDeviceToken:setDeviceToken,
setServerVersion:setServerVersion,
setStoreFromLocalData:setStoreFromLocalData};