Object.defineProperty(exports,"__esModule",{value:true});exports.canManageChannelMembers=exports.getAutocompleteChannelWithSections=exports.getUnreads=exports.getMoreChannels=exports.getDefaultChannel=exports.getChannelsByCategory=exports.getChannelsOnCurrentTeam=exports.getCurrentChannelStats=exports.getCurrentChannelMembership=exports.getCurrentChannel=undefined;var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};exports.
















getCurrentChannelId=getCurrentChannelId;exports.



getChannelMemberships=getChannelMemberships;exports.



getAutocompleteChannels=getAutocompleteChannels;var _reselect=require('reselect');var _teams=require('./teams');var _users=require('./users');var _channel_utils=require('../../utils/channel_utils');var _constants=require('../../constants');function getAllChannels(state){return state.entities.channels.channels;}function getAllChannelStats(state){return state.entities.channels.stats;}function getCurrentChannelId(state){return state.entities.channels.currentChannelId;}function getChannelMemberships(state){return state.entities.channels.myMembers;}function getAutocompleteChannels(state){
return state.entities.channels.autocompleteChannels;
}

var getCurrentChannel=exports.getCurrentChannel=(0,_reselect.createSelector)(
getAllChannels,
getCurrentChannelId,
function(state){return state.entities.users;},
function(state){return state.entities.preferences.myPreferences;},
function(allChannels,currentChannelId,users,myPreferences){
var channel=allChannels[currentChannelId];
if(channel){
return(0,_channel_utils.completeDirectChannelInfo)(users,myPreferences,channel);
}
return channel;
});


var getCurrentChannelMembership=exports.getCurrentChannelMembership=(0,_reselect.createSelector)(
getCurrentChannelId,
getChannelMemberships,
function(currentChannelId,channelMemberships){
return channelMemberships[currentChannelId]||{};
});


var getCurrentChannelStats=exports.getCurrentChannelStats=(0,_reselect.createSelector)(
getAllChannelStats,
getCurrentChannelId,
function(allChannelStats,currentChannelId){
return allChannelStats[currentChannelId];
});


var getChannelsOnCurrentTeam=exports.getChannelsOnCurrentTeam=(0,_reselect.createSelector)(
getAllChannels,_teams.getCurrentTeamId,

function(allChannels,currentTeamId){
var channels=[];

for(var _iterator=Object.values(allChannels),_isArray=Array.isArray(_iterator),_i=0,_iterator=_isArray?_iterator:_iterator[typeof Symbol==='function'?Symbol.iterator:'@@iterator']();;){var _ref;if(_isArray){if(_i>=_iterator.length)break;_ref=_iterator[_i++];}else{_i=_iterator.next();if(_i.done)break;_ref=_i.value;}var channel=_ref;
if(channel.team_id===currentTeamId||channel.team_id===''){
channels.push(channel);
}
}

return channels;
});


var getChannelsByCategory=exports.getChannelsByCategory=(0,_reselect.createSelector)(
getCurrentChannelId,
getChannelsOnCurrentTeam,
function(state){return state.entities.channels.myMembers;},
function(state){return state.entities.users;},
function(state){return state.entities.preferences.myPreferences;},
function(currentChannelId,channels,myMembers,usersState,myPreferences){
var allChannels=channels.map(function(c){
var channel=_extends({},c);
channel.isCurrent=c.id===currentChannelId;
return channel;
}).filter(function(c){return myMembers.hasOwnProperty(c.id);});

return(0,_channel_utils.buildDisplayableChannelList)(usersState,allChannels,myPreferences);
});


var getDefaultChannel=exports.getDefaultChannel=(0,_reselect.createSelector)(
getAllChannels,_teams.getCurrentTeamId,

function(channels,teamId){
return Object.values(channels).find(function(c){return c.team_id===teamId&&c.name===_constants.Constants.DEFAULT_CHANNEL;});
});


var getMoreChannels=exports.getMoreChannels=(0,_reselect.createSelector)(
getAllChannels,
getChannelMemberships,
function(allChannels,myMembers){
return(0,_channel_utils.getNotMemberChannels)(Object.values(allChannels),myMembers);
});


var getUnreads=exports.getUnreads=(0,_reselect.createSelector)(
getCurrentChannelId,
getAllChannels,
getChannelMemberships,
function(currentChannelId,channels,myMembers){
var messageCount=0;
var mentionCount=0;
Object.keys(myMembers).forEach(function(channelId){
var channel=channels[channelId];
var m=myMembers[channelId];
if(channel&&m&&channel.id!==currentChannelId){
if(channel.type==='D'){
mentionCount+=channel.total_msg_count-m.msg_count;
}else if(m.mention_count>0){
mentionCount+=m.mention_count;
}
if(m.notify_props&&m.notify_props.mark_unread!=='mention'&&channel.total_msg_count-m.msg_count>0){
messageCount+=1;
}
}
});

return{messageCount:messageCount,mentionCount:mentionCount};
});


var getAutocompleteChannelWithSections=exports.getAutocompleteChannelWithSections=(0,_reselect.createSelector)(
getChannelMemberships,
getAutocompleteChannels,
function(myMembers,autocompleteChannels){
var channels={
myChannels:[],
otherChannels:[]};

autocompleteChannels.forEach(function(c){
if(myMembers[c.id]){
channels.myChannels.push(c);
}else{
channels.otherChannels.push(c);
}
});

return channels;
});


var canManageChannelMembers=exports.canManageChannelMembers=(0,_reselect.createSelector)(
getCurrentChannel,
getCurrentChannelMembership,_teams.getCurrentTeamMembership,_users.getUsers,_users.getCurrentUserId,



function(channel,channelMembership,teamMembership,allUsers,currentUserId){
var user=allUsers[currentUserId];
var roles=channelMembership.roles+' '+teamMembership.roles+' '+user.roles;
if(channel.type===_constants.Constants.DM_CHANNEL||
channel.type===_constants.Constants.GM_CHANNEL||
channel.name===_constants.Constants.DEFAULT_CHANNEL){
return false;
}
if(channel.type===_constants.Constants.OPEN_CHANNEL){
return true;
}
return roles.includes('_admin');
});