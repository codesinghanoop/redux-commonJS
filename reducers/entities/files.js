Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};


var _redux=require('redux');
var _constants=require('../../constants');function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true});}else{obj[key]=value;}return obj;}

function files(){var state=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};var action=arguments[1];
switch(action.type){
case _constants.FilesTypes.RECEIVED_UPLOAD_FILES:
case _constants.FilesTypes.RECEIVED_FILES_FOR_POST:{
var filesById=action.data.reduce(function(filesMap,file){
return _extends({},filesMap,_defineProperty({},
file.id,file));

},{});
return _extends({},state,
filesById);

}
case _constants.UsersTypes.LOGOUT_SUCCESS:
return{};
default:
return state;}

}

function fileIdsByPostId(){var state=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};var action=arguments[1];
switch(action.type){
case _constants.FilesTypes.RECEIVED_FILES_FOR_POST:{var
data=action.data,postId=action.postId;
var filesIdsForPost=data.map(function(file){return file.id;});
return _extends({},state,_defineProperty({},
postId,filesIdsForPost));

}

case _constants.UsersTypes.LOGOUT_SUCCESS:
return{};
default:
return state;}

}exports.default=

(0,_redux.combineReducers)({
files:files,
fileIdsByPostId:fileIdsByPostId});