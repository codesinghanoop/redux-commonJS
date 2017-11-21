Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};exports.









getFilesForPost=getFilesForPost;exports.





























uploadFile=uploadFile;var _reduxBatchedActions=require('redux-batched-actions');var _client=require('../client');var _client2=_interopRequireDefault(_client);var _constants=require('../constants');var _errors=require('./errors');var _helpers=require('./helpers');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function getFilesForPost(teamId,channelId,postId){var _this=this;return function _callee(dispatch,getState){var files;return regeneratorRuntime.async(function _callee$(_context){while(1){switch(_context.prev=_context.next){case 0:dispatch({type:_constants.FilesTypes.FETCH_FILES_FOR_POST_REQUEST},getState);files=void 0;_context.prev=2;_context.next=5;return regeneratorRuntime.awrap(_client2.default.getFileInfosForPost(teamId,channelId,postId));case 5:files=_context.sent;_context.next=13;break;case 8:_context.prev=8;_context.t0=_context['catch'](2);(0,_helpers.forceLogoutIfNecessary)(_context.t0,dispatch);dispatch((0,_reduxBatchedActions.batchActions)([{type:_constants.FilesTypes.FETCH_FILES_FOR_POST_FAILURE,error:_context.t0},(0,_errors.getLogErrorAction)(_context.t0)]),getState);return _context.abrupt('return');case 13:dispatch((0,_reduxBatchedActions.batchActions)([{type:_constants.FilesTypes.RECEIVED_FILES_FOR_POST,data:files,postId:postId},{type:_constants.FilesTypes.FETCH_FILES_FOR_POST_SUCCESS}]),getState);case 14:case'end':return _context.stop();}}},null,_this,[[2,8]]);};}function uploadFile(teamId,channelId,fileFormData,formBoundary,rootId){var _this2=this;
return function _callee2(dispatch,getState){var files,data;return regeneratorRuntime.async(function _callee2$(_context2){while(1){switch(_context2.prev=_context2.next){case 0:
dispatch({type:_constants.FilesTypes.UPLOAD_FILES_REQUEST},getState);

files=void 0;_context2.prev=2;_context2.next=5;return regeneratorRuntime.awrap(

_client2.default.uploadFile(teamId,channelId,fileFormData,formBoundary));case 5:files=_context2.sent;_context2.next=13;break;case 8:_context2.prev=8;_context2.t0=_context2['catch'](2);

(0,_helpers.forceLogoutIfNecessary)(_context2.t0,dispatch);
dispatch((0,_reduxBatchedActions.batchActions)([
{type:_constants.FilesTypes.UPLOAD_FILES_FAILURE,error:_context2.t0},
(0,_errors.getLogErrorAction)(_context2.t0)]),
getState);return _context2.abrupt('return');case 13:



data=files.file_infos.map(function(file,index){
return _extends({},
file,{
clientId:files.client_ids[index]});

});

dispatch((0,_reduxBatchedActions.batchActions)([
{
type:_constants.FilesTypes.RECEIVED_UPLOAD_FILES,
data:data,
channelId:channelId,
rootId:rootId},

{
type:_constants.FilesTypes.UPLOAD_FILES_SUCCESS}]),

getState);case 15:case'end':return _context2.stop();}}},null,_this2,[[2,8]]);};

}