Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};


var _redux=require('redux');
var _constants=require('../../constants');function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true});}else{obj[key]=value;}return obj;}

function currentChannelId(){var state=arguments.length>0&&arguments[0]!==undefined?arguments[0]:'';var action=arguments[1];
switch(action.type){
case _constants.ChannelTypes.SELECT_CHANNEL:
return action.data;
case _constants.UsersTypes.LOGOUT_SUCCESS:
return'';
default:
return state;}

}

function channels(){var state=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};var action=arguments[1];
var nextState=_extends({},state);

switch(action.type){
case _constants.ChannelTypes.RECEIVED_CHANNEL:
return _extends({},
state,_defineProperty({},
action.data.id,action.data));


case _constants.ChannelTypes.RECEIVED_CHANNELS:
case _constants.ChannelTypes.RECEIVED_MORE_CHANNELS:{
for(var _iterator=action.data,_isArray=Array.isArray(_iterator),_i=0,_iterator=_isArray?_iterator:_iterator[typeof Symbol==='function'?Symbol.iterator:'@@iterator']();;){var _ref;if(_isArray){if(_i>=_iterator.length)break;_ref=_iterator[_i++];}else{_i=_iterator.next();if(_i.done)break;_ref=_i.value;}var channel=_ref;
nextState[channel.id]=channel;
}
return nextState;
}
case _constants.ChannelTypes.RECEIVED_CHANNEL_DELETED:
Reflect.deleteProperty(nextState,action.data);
return nextState;
case _constants.ChannelTypes.RECEIVED_LAST_VIEWED:{
var channelId=action.data.channel_id;
var lastUpdatedAt=action.data.last_viewed_at;
var _channel=state[channelId];
if(!_channel){
return state;
}
return _extends({},
state,_defineProperty({},
channelId,_extends({},
_channel,{
extra_update_at:lastUpdatedAt})));


}
case _constants.ChannelTypes.UPDATE_CHANNEL_HEADER:{var _action$data=
action.data,_channelId=_action$data.channelId,header=_action$data.header;
return _extends({},
state,_defineProperty({},
_channelId,_extends({},
state[_channelId],{
header:header})));


}
case _constants.ChannelTypes.UPDATE_CHANNEL_PURPOSE:{var _action$data2=
action.data,_channelId2=_action$data2.channelId,purpose=_action$data2.purpose;
return _extends({},
state,_defineProperty({},
_channelId2,_extends({},
state[_channelId2],{
purpose:purpose})));


}
case _constants.UsersTypes.LOGOUT_SUCCESS:
case _constants.TeamsTypes.SELECT_TEAM:
return{};

default:
return state;}

}

function myMembers(){var state=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};var action=arguments[1];
var nextState=_extends({},state);

switch(action.type){
case _constants.ChannelTypes.RECEIVED_MY_CHANNEL_MEMBER:{
var channelMember=action.data;
return _extends({},
state,_defineProperty({},
channelMember.channel_id,channelMember));

}
case _constants.ChannelTypes.RECEIVED_MY_CHANNEL_MEMBERS:{
for(var _iterator2=action.data,_isArray2=Array.isArray(_iterator2),_i2=0,_iterator2=_isArray2?_iterator2:_iterator2[typeof Symbol==='function'?Symbol.iterator:'@@iterator']();;){var _ref2;if(_isArray2){if(_i2>=_iterator2.length)break;_ref2=_iterator2[_i2++];}else{_i2=_iterator2.next();if(_i2.done)break;_ref2=_i2.value;}var cm=_ref2;
nextState[cm.channel_id]=cm;
}
return nextState;
}
case _constants.ChannelTypes.RECEIVED_CHANNEL_PROPS:{
var member=_extends({},state[action.data.channel_id]);
member.notify_props=action.data.notifyProps;

return _extends({},
state,_defineProperty({},
action.data.channel_id,member));

}
case _constants.ChannelTypes.RECEIVED_LAST_VIEWED:{
var _member=state[action.data.channel_id];
if(!_member){
return state;
}
_member=_extends({},_member,{
last_viewed_at:action.data.last_viewed_at,
msg_count:action.data.total_msg_count,
mention_count:0});


return _extends({},
state,_defineProperty({},
action.data.channel_id,_member));

}
case _constants.ChannelTypes.LEAVE_CHANNEL:
case _constants.ChannelTypes.RECEIVED_CHANNEL_DELETED:
Reflect.deleteProperty(nextState,action.data);
return nextState;

case _constants.UsersTypes.LOGOUT_SUCCESS:
case _constants.TeamsTypes.SELECT_TEAM:
return{};
default:
return state;}

}

function stats(){var state=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};var action=arguments[1];
switch(action.type){
case _constants.ChannelTypes.RECEIVED_CHANNEL_STATS:{
var nextState=_extends({},state);
var stat=action.data;
nextState[stat.channel_id]=stat;

return nextState;
}
case _constants.UsersTypes.LOGOUT_SUCCESS:
case _constants.TeamsTypes.SELECT_TEAM:
return{};
default:
return state;}

}

function autocompleteChannels(){var state=arguments.length>0&&arguments[0]!==undefined?arguments[0]:[];var action=arguments[1];
switch(action.type){
case _constants.ChannelTypes.RECEIVED_AUTOCOMPLETE_CHANNELS:
return action.data;
default:
return state;}

}exports.default=

(0,_redux.combineReducers)({


currentChannelId:currentChannelId,


channels:channels,


myMembers:myMembers,


stats:stats,


autocompleteChannels:autocompleteChannels});