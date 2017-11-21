Object.defineProperty(exports,"__esModule",{value:true});exports.FormattedError=undefined;exports.








forceLogoutIfNecessary=forceLogoutIfNecessary;exports.















requestData=requestData;exports.





requestSuccess=requestSuccess;exports.






requestFailure=requestFailure;exports.






bindClientFunc=bindClientFunc;exports.


























debounce=debounce;var _reduxBatchedActions=require('redux-batched-actions');var _client=require('../client');var _client2=_interopRequireDefault(_client);var _constants=require('../constants');var _errors=require('./errors');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var HTTP_UNAUTHORIZED=401;function forceLogoutIfNecessary(err,dispatch){return regeneratorRuntime.async(function forceLogoutIfNecessary$(_context){while(1){switch(_context.prev=_context.next){case 0:if(!(err.status_code===HTTP_UNAUTHORIZED&&err.url.indexOf('/login')===-1)){_context.next=5;break;}dispatch({type:_constants.UsersTypes.LOGOUT_REQUEST});_context.next=4;return regeneratorRuntime.awrap(_client2.default.logout());case 4:dispatch({type:_constants.UsersTypes.LOGOUT_SUCCESS});case 5:case'end':return _context.stop();}}},null,this);}function dispatcher(type,data,dispatch,getState){if(type.indexOf('SUCCESS')===-1){dispatch(requestSuccess(type,data),getState);}else{dispatch(requestData(type),getState);}}function requestData(type){return{type:type};}function requestSuccess(type,data){return{type:type,data:data};}function requestFailure(type,error){return{type:type,error:error};}function bindClientFunc(clientFunc,request,success,failure){for(var _len=arguments.length,args=Array(_len>4?_len-4:0),_key=4;_key<_len;_key++){args[_key-4]=arguments[_key];}var _this=this;return function _callee(dispatch,getState){var data;return regeneratorRuntime.async(function _callee$(_context2){while(1){switch(_context2.prev=_context2.next){case 0:dispatch(requestData(request),getState);data=null;_context2.prev=2;_context2.next=5;return regeneratorRuntime.awrap(clientFunc.apply(undefined,args));case 5:data=_context2.sent;_context2.next=13;break;case 8:_context2.prev=8;_context2.t0=_context2['catch'](2);forceLogoutIfNecessary(_context2.t0,dispatch);dispatch((0,_reduxBatchedActions.batchActions)([requestFailure(failure,_context2.t0),(0,_errors.getLogErrorAction)(_context2.t0)]),getState);return _context2.abrupt('return');case 13:if(Array.isArray(success)){success.forEach(function(s){dispatcher(s,data,dispatch,getState);});}else{dispatcher(success,data,dispatch,getState);}case 14:case'end':return _context2.stop();}}},null,_this,[[2,8]]);};}function debounce(func,wait,immediate,cb){
var timeout=void 0;
return function fx(){var _this2=this;for(var _len2=arguments.length,args=Array(_len2),_key2=0;_key2<_len2;_key2++){args[_key2]=arguments[_key2];}
var runLater=function runLater(){
timeout=null;
if(!immediate){
Reflect.apply(func,_this2,args);
if(cb){
cb();
}
}
};
var callNow=immediate&&!timeout;
clearTimeout(timeout);
timeout=setTimeout(runLater,wait);
if(callNow){
Reflect.apply(func,this,args);
if(cb){
cb();
}
}
};
}var

FormattedError=exports.FormattedError=function(_Error){_inherits(FormattedError,_Error);
function FormattedError(id,defaultMessage){var values=arguments.length>2&&arguments[2]!==undefined?arguments[2]:{};_classCallCheck(this,FormattedError);var _this3=_possibleConstructorReturn(this,(FormattedError.__proto__||Object.getPrototypeOf(FormattedError)).call(this,
defaultMessage));
_this3.intl={
id:id,
defaultMessage:defaultMessage,
values:values};return _this3;

}return FormattedError;}(Error);