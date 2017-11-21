Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};exports.default=




typing;var _constants=require('../../constants');function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true});}else{obj[key]=value;}return obj;}function typing(){var state=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};var action=arguments[1];var
data=action.data,type=action.type;
switch(type){
case _constants.WebsocketEvents.TYPING:{var
id=data.id,userId=data.userId;

if(id&&userId){
return _extends({},
state,_defineProperty({},
id,_extends({},
state[id]||{},_defineProperty({},
userId,true))));


}
return state;
}
case _constants.WebsocketEvents.STOP_TYPING:{
var nextState=_extends({},state);var
_id=data.id,_userId=data.userId;
var users=_extends({},nextState[_id]||{});
if(users){
Reflect.deleteProperty(users,_userId);
}

nextState[_id]=users;
if(!Object.keys(users).length){
Reflect.deleteProperty(nextState,_id);
}

return nextState;
}
default:
return state;}

}