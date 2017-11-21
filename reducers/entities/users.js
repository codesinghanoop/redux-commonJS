Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};


var _redux=require('redux');
var _constants=require('../../constants');function _toConsumableArray(arr){if(Array.isArray(arr)){for(var i=0,arr2=Array(arr.length);i<arr.length;i++){arr2[i]=arr[i];}return arr2;}else{return Array.from(arr);}}function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true});}else{obj[key]=value;}return obj;}

function profilesToSet(state,action){
var id=action.id;
var nextSet=new Set(state[id]);
Object.keys(action.data).forEach(function(key){
nextSet.add(key);
});

return _extends({},
state,_defineProperty({},
id,nextSet));

}

function addProfileToSet(state,action){
var id=action.id;
var nextSet=new Set(state[id]);
nextSet.add(action.data.user_id);
return _extends({},
state,_defineProperty({},
id,nextSet));

}

function removeProfileFromSet(state,action){
var id=action.id;
var nextSet=new Set(state[id]);
nextSet.delete(action.data.user_id);
return _extends({},
state,_defineProperty({},
id,nextSet));

}

function currentUserId(){var state=arguments.length>0&&arguments[0]!==undefined?arguments[0]:'';var action=arguments[1];
switch(action.type){
case _constants.UsersTypes.RECEIVED_ME:
return action.data.id;

case _constants.UsersTypes.LOGOUT_SUCCESS:
return'';}



return state;
}

function mySessions(){var state=arguments.length>0&&arguments[0]!==undefined?arguments[0]:[];var action=arguments[1];
switch(action.type){
case _constants.UsersTypes.RECEIVED_SESSIONS:
return[].concat(_toConsumableArray(action.data));

case _constants.UsersTypes.RECEIVED_REVOKED_SESSION:{
var index=-1;
var length=state.length;
for(var i=0;i<length;i++){
if(state[i].id===action.data.id){
index=i;
break;
}
}
if(index>-1){
return state.slice(0,index).concat(state.slice(index+1));
}

return state;
}
case _constants.UsersTypes.LOGOUT_SUCCESS:
return[];

default:
return state;}

}

function myAudits(){var state=arguments.length>0&&arguments[0]!==undefined?arguments[0]:[];var action=arguments[1];
switch(action.type){
case _constants.UsersTypes.RECEIVED_AUDITS:
return[].concat(_toConsumableArray(action.data));

case _constants.UsersTypes.LOGOUT_SUCCESS:
return[];

default:
return state;}

}

function profiles(){var state=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};var action=arguments[1];
switch(action.type){
case _constants.UsersTypes.RECEIVED_ME:
case _constants.UsersTypes.RECEIVED_PROFILE:{
return _extends({},
state,_defineProperty({},
action.data.id,_extends({},action.data)));

}
case _constants.UsersTypes.RECEIVED_PROFILES:
return _extends({},state,action.data);

case _constants.UsersTypes.LOGOUT_SUCCESS:
return{};

default:
return state;}

}

function profilesInTeam(){var state=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};var action=arguments[1];
switch(action.type){
case _constants.UsersTypes.RECEIVED_PROFILES_IN_TEAM:
return profilesToSet(state,action);

case _constants.UsersTypes.LOGOUT_SUCCESS:
return{};

default:
return state;}

}

function profilesInChannel(){var state=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};var action=arguments[1];
switch(action.type){
case _constants.UsersTypes.RECEIVED_PROFILE_IN_CHANNEL:
return addProfileToSet(state,action);

case _constants.UsersTypes.RECEIVED_PROFILES_IN_CHANNEL:
return profilesToSet(state,action);

case _constants.UsersTypes.RECEIVED_PROFILE_NOT_IN_CHANNEL:
return removeProfileFromSet(state,action);

case _constants.UsersTypes.LOGOUT_SUCCESS:
return{};

default:
return state;}

}

function profilesNotInChannel(){var state=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};var action=arguments[1];
switch(action.type){
case _constants.UsersTypes.RECEIVED_PROFILE_NOT_IN_CHANNEL:
return addProfileToSet(state,action);

case _constants.UsersTypes.RECEIVED_PROFILES_NOT_IN_CHANNEL:
return profilesToSet(state,action);

case _constants.UsersTypes.RECEIVED_PROFILE_IN_CHANNEL:
return removeProfileFromSet(state,action);

case _constants.UsersTypes.LOGOUT_SUCCESS:
return{};

default:
return state;}

}

function statuses(){var state=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};var action=arguments[1];
switch(action.type){
case _constants.UsersTypes.RECEIVED_STATUSES:{
return _extends({},state,action.data);
}
case _constants.UsersTypes.LOGOUT_SUCCESS:
return{};

default:
return state;}

}

function autocompleteUsersInChannel(){var state=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};var action=arguments[1];
switch(action.type){
case _constants.UsersTypes.RECEIVED_AUTOCOMPLETE_IN_CHANNEL:
return _extends({},state,_defineProperty({},action.channelId,action.data));
default:
return state;}

}exports.default=

(0,_redux.combineReducers)({


currentUserId:currentUserId,


mySessions:mySessions,


myAudits:myAudits,


profiles:profiles,


profilesInTeam:profilesInTeam,


profilesInChannel:profilesInChannel,


profilesNotInChannel:profilesNotInChannel,


statuses:statuses,


autocompleteUsersInChannel:autocompleteUsersInChannel});