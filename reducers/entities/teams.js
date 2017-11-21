Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};


var _redux=require('redux');
var _constants=require('../../constants');function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true});}else{obj[key]=value;}return obj;}

function currentTeamId(){var state=arguments.length>0&&arguments[0]!==undefined?arguments[0]:'';var action=arguments[1];
switch(action.type){
case _constants.TeamsTypes.SELECT_TEAM:
return action.data;

case _constants.UsersTypes.LOGOUT_SUCCESS:
return'';
default:
return state;}

}

function teams(){var state=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};var action=arguments[1];
switch(action.type){
case _constants.TeamsTypes.RECEIVED_ALL_TEAMS:
case _constants.TeamsTypes.RECEIVED_TEAM_LISTINGS:
return _extends({},state,action.data);

case _constants.TeamsTypes.CREATED_TEAM:
case _constants.TeamsTypes.UPDATED_TEAM:
return _extends({},
state,_defineProperty({},
action.data.id,action.data));


case _constants.UsersTypes.LOGOUT_SUCCESS:
return{};

default:
return state;}

}

function myMembers(){var state=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};var action=arguments[1];
switch(action.type){
case _constants.TeamsTypes.RECEIVED_MY_TEAM_MEMBERS:{
var nextState={};
var members=action.data;
for(var _iterator=members,_isArray=Array.isArray(_iterator),_i=0,_iterator=_isArray?_iterator:_iterator[typeof Symbol==='function'?Symbol.iterator:'@@iterator']();;){var _ref;if(_isArray){if(_i>=_iterator.length)break;_ref=_iterator[_i++];}else{_i=_iterator.next();if(_i.done)break;_ref=_i.value;}var m=_ref;
nextState[m.team_id]=m;
}
return nextState;
}

case _constants.TeamsTypes.LEAVE_TEAM:{
var _nextState=_extends({},state);
var data=action.data;
Reflect.deleteProperty(_nextState,data.id);
return _nextState;
}
case _constants.UsersTypes.LOGOUT_SUCCESS:
return{};

default:
return state;}

}

function membersInTeam(){var state=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};var action=arguments[1];
switch(action.type){
case _constants.TeamsTypes.RECEIVED_MEMBER_IN_TEAM:{
var data=action.data;
var members=new Set(state[data.team_id]);
members.add(data.user_id);
return _extends({},
state,_defineProperty({},
data.team_id,members));

}
case _constants.TeamsTypes.RECEIVED_MEMBERS_IN_TEAM:{
var _data=action.data;
if(_data.length){
var teamId=_data[0].team_id;
var _members=new Set(state[teamId]);
for(var _iterator2=_data,_isArray2=Array.isArray(_iterator2),_i2=0,_iterator2=_isArray2?_iterator2:_iterator2[typeof Symbol==='function'?Symbol.iterator:'@@iterator']();;){var _ref2;if(_isArray2){if(_i2>=_iterator2.length)break;_ref2=_iterator2[_i2++];}else{_i2=_iterator2.next();if(_i2.done)break;_ref2=_i2.value;}var member=_ref2;
_members.add(member.user_id);
}

return _extends({},
state,_defineProperty({},
teamId,_members));

}

return state;
}
case _constants.TeamsTypes.REMOVE_MEMBER_FROM_TEAM:{
var _data2=action.data;
var _members2=state[_data2.team_id];
if(_members2){
var set=new Set(_members2);
set.delete(_data2.user_id);
return _extends({},
state,_defineProperty({},
_data2.team_id,set));

}

return state;
}
case _constants.UsersTypes.LOGOUT_SUCCESS:
return{};
default:
return state;}

}

function stats(){var state=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};var action=arguments[1];
switch(action.type){
case _constants.TeamsTypes.RECEIVED_TEAM_STATS:{
var stat=action.data;
return _extends({},
state,_defineProperty({},
stat.team_id,stat));

}
case _constants.UsersTypes.LOGOUT_SUCCESS:
return{};
default:
return state;}

}

function openTeamIds(){var state=arguments.length>0&&arguments[0]!==undefined?arguments[0]:new Set();var action=arguments[1];
switch(action.type){
case _constants.TeamsTypes.RECEIVED_TEAM_LISTINGS:{
var teamsData=action.data;
var newState=new Set();
for(var teamId in teamsData){
if(teamsData.hasOwnProperty(teamId)){
newState.add(teamId);
}
}
return newState;
}
default:
return state;}

}exports.default=

(0,_redux.combineReducers)({


currentTeamId:currentTeamId,


teams:teams,


myMembers:myMembers,


membersInTeam:membersInTeam,


stats:stats,


openTeamIds:openTeamIds});