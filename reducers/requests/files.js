Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};exports.

















handleUploadFilesRequest=handleUploadFilesRequest;var _redux=require('redux');var _constants=require('../../constants');var _helpers=require('./helpers');function getFilesForPost(){var state=arguments.length>0&&arguments[0]!==undefined?arguments[0]:(0,_helpers.initialRequestState)();var action=arguments[1];return(0,_helpers.handleRequest)(_constants.FilesTypes.FETCH_FILES_FOR_POST_REQUEST,_constants.FilesTypes.FETCH_FILES_FOR_POST_SUCCESS,_constants.FilesTypes.FETCH_FILES_FOR_POST_FAILURE,state,action);}function handleUploadFilesRequest(REQUEST,SUCCESS,FAILURE,CANCEL,state,action){
switch(action.type){
case REQUEST:
return _extends({},
state,{
status:_constants.RequestStatus.STARTED});

case SUCCESS:
return _extends({},
state,{
status:_constants.RequestStatus.SUCCESS,
error:null});

case FAILURE:{
var error=action.error;

if(error instanceof Error){
error=error.hasOwnProperty('intl')?_extends({},error):error.toString();
}

return _extends({},
state,{
status:_constants.RequestStatus.FAILURE,
error:error});

}
case CANCEL:
return _extends({},
state,{
status:_constants.RequestStatus.CANCELLED,
error:null});

default:
return state;}

}

function uploadFiles(){var state=arguments.length>0&&arguments[0]!==undefined?arguments[0]:(0,_helpers.initialRequestState)();var action=arguments[1];
return handleUploadFilesRequest(
_constants.FilesTypes.UPLOAD_FILES_REQUEST,
_constants.FilesTypes.UPLOAD_FILES_SUCCESS,
_constants.FilesTypes.UPLOAD_FILES_FAILURE,
_constants.FilesTypes.UPLOAD_FILES_CANCEL,
state,
action);

}exports.default=

(0,_redux.combineReducers)({
getFilesForPost:getFilesForPost,
uploadFiles:uploadFiles});