Object.defineProperty(exports,"__esModule",{value:true});exports.







dismissErrorObject=dismissErrorObject;exports.






dismissError=dismissError;exports.





getLogErrorAction=getLogErrorAction;exports.







logError=logError;exports.












clearErrors=clearErrors;var _serializeError=require('serialize-error');var _serializeError2=_interopRequireDefault(_serializeError);var _client=require('../client');var _client2=_interopRequireDefault(_client);var _constants=require('../constants');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function dismissErrorObject(index){return{type:_constants.ErrorTypes.DISMISS_ERROR,index:index};}function dismissError(index){var _this=this;return function _callee(dispatch){return regeneratorRuntime.async(function _callee$(_context){while(1){switch(_context.prev=_context.next){case 0:dispatch(dismissErrorObject(index));case 1:case'end':return _context.stop();}}},null,_this);};}function getLogErrorAction(error){var displayable=arguments.length>1&&arguments[1]!==undefined?arguments[1]:true;return{type:_constants.ErrorTypes.LOG_ERROR,displayable:displayable,error:error};}function logError(error){var _this2=this;return function _callee2(){var serializedError,stringifiedSerializedError;return regeneratorRuntime.async(function _callee2$(_context2){while(1){switch(_context2.prev=_context2.next){case 0:_context2.prev=0;serializedError=(0,_serializeError2.default)(error);stringifiedSerializedError=JSON.stringify(serializedError).toString();_context2.next=5;return regeneratorRuntime.awrap(_client2.default.logClientError(stringifiedSerializedError));case 5:_context2.next=9;break;case 7:_context2.prev=7;_context2.t0=_context2['catch'](0);case 9:case'end':return _context2.stop();}}},null,_this2,[[0,7]]);};}function clearErrors(){var _this3=this;
return function _callee3(dispatch){return regeneratorRuntime.async(function _callee3$(_context3){while(1){switch(_context3.prev=_context3.next){case 0:
dispatch({type:_constants.ErrorTypes.CLEAR_ERRORS});case 1:case'end':return _context3.stop();}}},null,_this3);};

}