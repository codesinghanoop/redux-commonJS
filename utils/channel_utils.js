Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _typeToPrefixMap;exports.



















buildDisplayableChannelList=buildDisplayableChannelList;exports.





























completeDirectChannelInfo=completeDirectChannelInfo;exports.
















cleanUpUrlable=cleanUpUrlable;exports.







getChannelByName=getChannelByName;exports.










getDirectChannelName=getDirectChannelName;exports.











getNotMemberChannels=getNotMemberChannels;exports.



getUserIdFromChannelName=getUserIdFromChannelName;exports.











isDirectChannel=isDirectChannel;exports.



isDirectChannelVisible=isDirectChannelVisible;exports.





isGroupChannel=isGroupChannel;exports.



isGroupChannelVisible=isGroupChannelVisible;exports.




showCreateOption=showCreateOption;exports.





















showManagementOptions=showManagementOptions;exports.





























showDeleteOption=showDeleteOption;var _constants=require('../constants');var _user_utils=require('./user_utils');var _preference_utils=require('./preference_utils');function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true});}else{obj[key]=value;}return obj;}var defaultPrefix='D';var typeToPrefixMap=(_typeToPrefixMap={},_defineProperty(_typeToPrefixMap,_constants.Constants.OPEN_CHANNEL,'A'),_defineProperty(_typeToPrefixMap,_constants.Constants.PRIVATE_CHANNEL,'B'),_defineProperty(_typeToPrefixMap,_constants.Constants.DM_CHANNEL,'C'),_defineProperty(_typeToPrefixMap,_constants.Constants.GM_CHANNEL,'C'),_typeToPrefixMap);function buildDisplayableChannelList(usersState,allChannels,myPreferences){var missingDirectChannels=createMissingDirectChannels(usersState.currentUserId,allChannels,myPreferences);var currentUserId=usersState.currentUserId,profiles=usersState.profiles;var locale=profiles&&profiles[currentUserId]?profiles[currentUserId].locale:'en';var channels=allChannels.concat(missingDirectChannels).map(completeDirectChannelInfo.bind(null,usersState,myPreferences)).filter(isNotDeletedChannel).sort(sortChannelsByDisplayName.bind(null,locale));var favoriteChannels=channels.filter(isFavoriteChannel.bind(null,myPreferences)).sort(sortFavorites.bind(null,locale));var notFavoriteChannels=channels.filter(not(isFavoriteChannel.bind(null,myPreferences)));var directAndGroupChannels=notFavoriteChannels.filter(orX(andX(isGroupChannel,isGroupChannelVisible.bind(null,myPreferences)),andX(isDirectChannel,isDirectChannelVisible.bind(null,currentUserId,myPreferences))));return{favoriteChannels:favoriteChannels,publicChannels:notFavoriteChannels.filter(isOpenChannel),privateChannels:notFavoriteChannels.filter(isPrivateChannel),directAndGroupChannels:directAndGroupChannels};}function completeDirectChannelInfo(usersState,myPreferences,channel){if(isDirectChannel(channel)){var dmChannelClone=_extends({},channel);var teammateId=getUserIdFromChannelName(usersState.currentUserId,channel.name);return _extends(dmChannelClone,{display_name:(0,_user_utils.displayUsername)(usersState.profiles[teammateId],myPreferences),teammate_id:teammateId,status:usersState.statuses[teammateId]||'offline'});}else if(isGroupChannel(channel)){return completeDirectGroupInfo(usersState,myPreferences,channel);}return channel;}function cleanUpUrlable(input){var cleaned=input.trim().replace(/-/g,' ').replace(/[^\w\s]/gi,'').toLowerCase().replace(/\s/g,'-');cleaned=cleaned.replace(/-{2,}/,'-');cleaned=cleaned.replace(/^-+/,'');cleaned=cleaned.replace(/-+$/,'');return cleaned;}function getChannelByName(channels,name){var channelIds=Object.keys(channels);for(var i=0;i<channelIds.length;i++){var id=channelIds[i];if(channels[id].name===name){return channels[id];}}return null;}function getDirectChannelName(id,otherId){var handle=void 0;if(otherId>id){handle=id+'__'+otherId;}else{handle=otherId+'__'+id;}return handle;}function getNotMemberChannels(allChannels,myMembers){return allChannels.filter(not(isNotMemberOf.bind(this,myMembers)));}function getUserIdFromChannelName(userId,channelName){var ids=channelName.split('__');var otherUserId='';if(ids[0]===userId){otherUserId=ids[1];}else{otherUserId=ids[0];}return otherUserId;}function isDirectChannel(channel){return channel.type===_constants.Constants.DM_CHANNEL;}function isDirectChannelVisible(userId,myPreferences,channel){var channelId=getUserIdFromChannelName(userId,channel.name);var dm=myPreferences[_constants.Constants.CATEGORY_DIRECT_CHANNEL_SHOW+'--'+channelId];return dm&&dm.value==='true';}function isGroupChannel(channel){return channel.type===_constants.Constants.GM_CHANNEL;}function isGroupChannelVisible(myPreferences,channel){var gm=myPreferences[_constants.Preferences.CATEGORY_GROUP_CHANNEL_SHOW+'--'+channel.id];return gm&&gm.value==='true';}function showCreateOption(config,license,channelType,isAdmin,isSystemAdmin){if(license.IsLicensed!=='true'){return true;}if(channelType===_constants.Constants.OPEN_CHANNEL){if(config.RestrictPublicChannelCreation===_constants.Constants.SYSTEM_ADMIN_ROLE&&!isSystemAdmin){return false;}else if(config.RestrictPublicChannelCreation===_constants.Constants.TEAM_ADMIN_ROLE&&!isAdmin){return false;}}else if(channelType===_constants.Constants.PRIVATE_CHANNEL){if(config.RestrictPrivateChannelCreation===_constants.Constants.SYSTEM_ADMIN_ROLE&&!isSystemAdmin){return false;}else if(config.RestrictPrivateChannelCreation===_constants.Constants.TEAM_ADMIN_ROLE&&!isAdmin){return false;}}return true;}function showManagementOptions(config,license,channel,isAdmin,isSystemAdmin,isChannelAdmin){if(license.IsLicensed!=='true'){return true;}if(channel.type===_constants.Constants.OPEN_CHANNEL){if(config.RestrictPublicChannelManagement===_constants.Constants.SYSTEM_ADMIN_ROLE&&!isSystemAdmin){return false;}if(config.RestrictPublicChannelManagement===_constants.Constants.TEAM_ADMIN_ROLE&&!isAdmin){return false;}if(config.RestrictPublicChannelManagement===_constants.Constants.CHANNEL_ADMIN_ROLE&&!isChannelAdmin&&!isAdmin){return false;}}else if(channel.type===_constants.Constants.PRIVATE_CHANNEL){if(config.RestrictPrivateChannelManagement===_constants.Constants.SYSTEM_ADMIN_ROLE&&!isSystemAdmin){return false;}if(config.RestrictPrivateChannelManagement===_constants.Constants.TEAM_ADMIN_ROLE&&!isAdmin){return false;}if(config.RestrictPrivateChannelManagement===_constants.Constants.CHANNEL_ADMIN_ROLE&&!isChannelAdmin&&!isAdmin){return false;}}return true;}function showDeleteOption(config,license,channel,isAdmin,isSystemAdmin,isChannelAdmin){
if(license.IsLicensed!=='true'){
return true;
}

if(channel.type===_constants.Constants.OPEN_CHANNEL){
if(config.RestrictPublicChannelDeletion===_constants.Constants.SYSTEM_ADMIN_ROLE&&!isSystemAdmin){
return false;
}
if(config.RestrictPublicChannelDeletion===_constants.Constants.TEAM_ADMIN_ROLE&&!isAdmin){
return false;
}
if(config.RestrictPublicChannelDeletion===_constants.Constants.CHANNEL_ADMIN_ROLE&&!isChannelAdmin&&!isAdmin){
return false;
}
}else if(channel.type===_constants.Constants.PRIVATE_CHANNEL){
if(config.RestrictPrivateChannelDeletion===_constants.Constants.SYSTEM_ADMIN_ROLE&&!isSystemAdmin){
return false;
}
if(config.RestrictPrivateChannelDeletion===_constants.Constants.TEAM_ADMIN_ROLE&&!isAdmin){
return false;
}
if(config.RestrictPrivateChannelDeletion===_constants.Constants.CHANNEL_ADMIN_ROLE&&!isChannelAdmin&&!isAdmin){
return false;
}
}

return true;
}



function createFakeChannel(userId,otherUserId){
return{
name:getDirectChannelName(userId,otherUserId),
last_post_at:0,
total_msg_count:0,
type:_constants.Constants.DM_CHANNEL,
fake:true};

}

function createFakeChannelCurried(userId){
return function(otherUserId){return createFakeChannel(userId,otherUserId);};
}

function createMissingDirectChannels(currentUserId,allChannels,myPreferences){
var directChannelsDisplayPreferences=(0,_preference_utils.getPreferencesByCategory)(myPreferences,_constants.Constants.CATEGORY_DIRECT_CHANNEL_SHOW);

return Array.
from(directChannelsDisplayPreferences).
filter(function(entry){return entry[1]==='true';}).
map(function(entry){return entry[0];}).
filter(function(teammateId){return!allChannels.some(isDirectChannelForUser.bind(null,currentUserId,teammateId));}).
map(createFakeChannelCurried(currentUserId));
}

function completeDirectGroupInfo(usersState,myPreferences,channel){var
currentUserId=usersState.currentUserId,profiles=usersState.profiles,profilesInChannel=usersState.profilesInChannel;
var profilesIds=profilesInChannel[channel.id];
if(profilesIds){
function sortUsernames(a,b){
var locale=profiles[currentUserId].locale;
return a.localeCompare(b,locale,{numeric:true});
}

var displayName=[];
profilesIds.forEach(function(teammateId){
if(teammateId!==currentUserId){
displayName.push((0,_user_utils.displayUsername)(usersState.profiles[teammateId],myPreferences));
}
});

var gm=_extends({},channel);
return _extends(gm,{
display_name:displayName.sort(sortUsernames).join(', ')});

}
return channel;
}

function isDirectChannelForUser(userId,otherUserId,channel){
return channel.type===_constants.Constants.DM_CHANNEL&&getUserIdFromChannelName(userId,channel.name)===otherUserId;
}

function isFavoriteChannel(myPreferences,channel){
var fav=myPreferences[_constants.Constants.CATEGORY_FAVORITE_CHANNEL+'--'+channel.id];
channel.isFavorite=fav&&fav.value==='true';
return channel.isFavorite;
}

function isNotDeletedChannel(channel){
return channel.delete_at===0;
}

function isNotMemberOf(myMembers,channel){
return myMembers[channel.id];
}

function isOpenChannel(channel){
return channel.type===_constants.Constants.OPEN_CHANNEL;
}

function isPrivateChannel(channel){
return channel.type===_constants.Constants.PRIVATE_CHANNEL;
}

function sortChannelsByDisplayName(locale,a,b){
if(a.type!==b.type&&typeToPrefixMap[a.type]!==typeToPrefixMap[b.type]){
return(typeToPrefixMap[a.type]||defaultPrefix).localeCompare(typeToPrefixMap[b.type]||defaultPrefix,locale);
}

if(a.display_name!==b.display_name){
return a.display_name.toLowerCase().localeCompare(b.display_name.toLowerCase(),locale,{numeric:true});
}

return a.name.toLowerCase().localeCompare(b.name.toLowerCase(),locale,{numeric:true});
}

function sortFavorites(locale,a,b){
if(a.display_name!==b.display_name){
return a.display_name.toLowerCase().localeCompare(b.display_name.toLowerCase(),locale,{numeric:true});
}

return a.name.toLowerCase().localeCompare(b.name.toLowerCase(),locale,{numeric:true});
}

function not(f){
return function(){return!f.apply(undefined,arguments);};
}

function andX(){for(var _len=arguments.length,fns=Array(_len),_key=0;_key<_len;_key++){fns[_key]=arguments[_key];}
return function(){for(var _len2=arguments.length,args=Array(_len2),_key2=0;_key2<_len2;_key2++){args[_key2]=arguments[_key2];}return fns.every(function(f){return f.apply(undefined,args);});};
}

function orX(){for(var _len3=arguments.length,fns=Array(_len3),_key3=0;_key3<_len3;_key3++){fns[_key3]=arguments[_key3];}
return function(){for(var _len4=arguments.length,args=Array(_len4),_key4=0;_key4<_len4;_key4++){args[_key4]=arguments[_key4];}return fns.some(function(f){return f.apply(undefined,args);});};
}