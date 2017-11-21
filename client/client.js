Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();


var _event_emitter=require('../utils/event_emitter');var _event_emitter2=_interopRequireDefault(_event_emitter);
var _constants=require('../constants');

var _fetch_etag=require('./fetch_etag');var _fetch_etag2=_interopRequireDefault(_fetch_etag);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _toConsumableArray(arr){if(Array.isArray(arr)){for(var i=0,arr2=Array(arr.length);i<arr.length;i++){arr2[i]=arr[i];}return arr2;}else{return Array.from(arr);}}function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true});}else{obj[key]=value;}return obj;}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}

var HEADER_AUTH='Authorization';
var HEADER_BEARER='BEARER';
var HEADER_REQUESTED_WITH='X-Requested-With';
var HEADER_TOKEN='Token';
var HEADER_X_VERSION_ID='X-Version-Id';
var HEADER_USER_AGENT='User-Agent';var

Client=function(){
function Client(){var _this=this;_classCallCheck(this,Client);this.














































































































































getClientConfig=function _callee(){return regeneratorRuntime.async(function _callee$(_context){while(1){switch(_context.prev=_context.next){case 0:return _context.abrupt('return',
_this.doFetch(
_this.getGeneralRoute()+'/client_props',
{method:'get'}));case 1:case'end':return _context.stop();}}},null,_this);};this.



getLicenseConfig=function _callee2(){return regeneratorRuntime.async(function _callee2$(_context2){while(1){switch(_context2.prev=_context2.next){case 0:return _context2.abrupt('return',
_this.doFetch(
_this.getLicenseRoute()+'/client_config',
{method:'get'}));case 1:case'end':return _context2.stop();}}},null,_this);};this.



getPing=function _callee3(){return regeneratorRuntime.async(function _callee3$(_context3){while(1){switch(_context3.prev=_context3.next){case 0:return _context3.abrupt('return',
_this.doFetch(
_this.getGeneralRoute()+'/ping',
{method:'get'}));case 1:case'end':return _context3.stop();}}},null,_this);};this.



logClientError=function _callee4(message){var level=arguments.length>1&&arguments[1]!==undefined?arguments[1]:'ERROR';var body;return regeneratorRuntime.async(function _callee4$(_context4){while(1){switch(_context4.prev=_context4.next){case 0:
body={
message:message,
level:level};return _context4.abrupt('return',


_this.doFetch(
_this.getGeneralRoute()+'/log_client',
{method:'post',body:JSON.stringify(body)}));case 2:case'end':return _context4.stop();}}},null,_this);};this.




createUser=function _callee5(user){return regeneratorRuntime.async(function _callee5$(_context5){while(1){switch(_context5.prev=_context5.next){case 0:return _context5.abrupt('return',
_this.createUserWithInvite(user));case 1:case'end':return _context5.stop();}}},null,_this);};this.




createUserWithInvite=function _callee6(user,data,emailHash,inviteId){var url;return regeneratorRuntime.async(function _callee6$(_context6){while(1){switch(_context6.prev=_context6.next){case 0:
url=_this.getUsersRoute()+'/create';

url+='?d='+encodeURIComponent(data);

if(emailHash){
url+='&h='+encodeURIComponent(emailHash);
}

if(inviteId){
url+='&iid='+encodeURIComponent(inviteId);
}return _context6.abrupt('return',

_this.doFetch(
url,
{method:'post',body:JSON.stringify(user)}));case 5:case'end':return _context6.stop();}}},null,_this);};this.



checkMfa=function _callee7(loginId){return regeneratorRuntime.async(function _callee7$(_context7){while(1){switch(_context7.prev=_context7.next){case 0:return _context7.abrupt('return',
_this.doFetch(
_this.getUsersRoute()+'/mfa',
{method:'post',body:JSON.stringify({login_id:loginId})}));case 1:case'end':return _context7.stop();}}},null,_this);};this.



login=function _callee8(loginId,password){var token=arguments.length>2&&arguments[2]!==undefined?arguments[2]:'';var deviceId=arguments.length>3&&arguments[3]!==undefined?arguments[3]:'';var body,_ref,headers,data;return regeneratorRuntime.async(function _callee8$(_context8){while(1){switch(_context8.prev=_context8.next){case 0:
body={
device_id:deviceId,
login_id:loginId,
password:password,
token:token};_context8.next=3;return regeneratorRuntime.awrap(


_this.doFetchWithResponse(
_this.getUsersRoute()+'/login',
{method:'post',body:JSON.stringify(body)}));case 3:_ref=_context8.sent;headers=_ref.headers;data=_ref.data;


if(headers.has(HEADER_TOKEN)){
_this.token=headers.get(HEADER_TOKEN);
}return _context8.abrupt('return',

data);case 8:case'end':return _context8.stop();}}},null,_this);};this.


logout=function _callee9(){var _ref2,response;return regeneratorRuntime.async(function _callee9$(_context9){while(1){switch(_context9.prev=_context9.next){case 0:_context9.next=2;return regeneratorRuntime.awrap(
_this.doFetchWithResponse(
_this.getUsersRoute()+'/logout',
{method:'post'}));case 2:_ref2=_context9.sent;response=_ref2.response;

if(response.ok){
_this.token='';
}
_this.serverVersion='';return _context9.abrupt('return',
response);case 7:case'end':return _context9.stop();}}},null,_this);};this.


attachDevice=function _callee10(deviceId){return regeneratorRuntime.async(function _callee10$(_context10){while(1){switch(_context10.prev=_context10.next){case 0:return _context10.abrupt('return',
_this.doFetch(
_this.getUsersRoute()+'/attach_device',
{method:'post',body:JSON.stringify({device_id:deviceId})}));case 1:case'end':return _context10.stop();}}},null,_this);};this.



updateUser=function _callee11(user){return regeneratorRuntime.async(function _callee11$(_context11){while(1){switch(_context11.prev=_context11.next){case 0:return _context11.abrupt('return',
_this.doFetch(
_this.getUsersRoute()+'/update',
{method:'post',body:JSON.stringify(user)}));case 1:case'end':return _context11.stop();}}},null,_this);};this.



updatePassword=function _callee12(userId,currentPassword,newPassword){var data;return regeneratorRuntime.async(function _callee12$(_context12){while(1){switch(_context12.prev=_context12.next){case 0:
data={
user_id:userId,
current_password:currentPassword,
new_password:newPassword};return _context12.abrupt('return',


_this.doFetch(
_this.getUsersRoute()+'/newpassword',
{method:'post',body:JSON.stringify(data)}));case 2:case'end':return _context12.stop();}}},null,_this);};this.



updateUserNotifyProps=function _callee13(notifyProps){return regeneratorRuntime.async(function _callee13$(_context13){while(1){switch(_context13.prev=_context13.next){case 0:return _context13.abrupt('return',
_this.doFetch(
_this.getUsersRoute()+'/update_notify',
{method:'post',body:JSON.stringify(notifyProps)}));case 1:case'end':return _context13.stop();}}},null,_this);};this.



updateUserRoles=function _callee14(userId,newRoles){return regeneratorRuntime.async(function _callee14$(_context14){while(1){switch(_context14.prev=_context14.next){case 0:return _context14.abrupt('return',
_this.doFetch(
_this.getUserNeededRoute(userId)+'/update_roles',
{method:'post',body:JSON.stringify({new_roles:newRoles})}));case 1:case'end':return _context14.stop();}}},null,_this);};this.



getMe=function _callee15(){return regeneratorRuntime.async(function _callee15$(_context15){while(1){switch(_context15.prev=_context15.next){case 0:return _context15.abrupt('return',
_this.doFetch(
_this.getUsersRoute()+'/me',
{method:'get'}));case 1:case'end':return _context15.stop();}}},null,_this);};this.



getProfiles=function _callee16(offset,limit){return regeneratorRuntime.async(function _callee16$(_context16){while(1){switch(_context16.prev=_context16.next){case 0:return _context16.abrupt('return',
_this.doFetch(
_this.getUsersRoute()+'/'+offset+'/'+limit,
{method:'get'}));case 1:case'end':return _context16.stop();}}},null,_this);};this.



getProfilesByIds=function _callee17(userIds){return regeneratorRuntime.async(function _callee17$(_context17){while(1){switch(_context17.prev=_context17.next){case 0:return _context17.abrupt('return',
_this.doFetch(
_this.getUsersRoute()+'/ids',
{method:'post',body:JSON.stringify(userIds)}));case 1:case'end':return _context17.stop();}}},null,_this);};this.



getProfilesInTeam=function _callee18(teamId,offset,limit){return regeneratorRuntime.async(function _callee18$(_context18){while(1){switch(_context18.prev=_context18.next){case 0:return _context18.abrupt('return',
_this.doFetch(
_this.getTeamNeededRoute(teamId)+'/users/'+offset+'/'+limit,
{method:'get'}));case 1:case'end':return _context18.stop();}}},null,_this);};this.



getProfilesInChannel=function _callee19(teamId,channelId,offset,limit){return regeneratorRuntime.async(function _callee19$(_context19){while(1){switch(_context19.prev=_context19.next){case 0:return _context19.abrupt('return',
_this.doFetch(
_this.getChannelNeededRoute(teamId,channelId)+'/users/'+offset+'/'+limit,
{method:'get'}));case 1:case'end':return _context19.stop();}}},null,_this);};this.



getProfilesNotInChannel=function _callee20(teamId,channelId,offset,limit){return regeneratorRuntime.async(function _callee20$(_context20){while(1){switch(_context20.prev=_context20.next){case 0:return _context20.abrupt('return',
_this.doFetch(
_this.getChannelNeededRoute(teamId,channelId)+'/users/not_in_channel/'+offset+'/'+limit,
{method:'get'}));case 1:case'end':return _context20.stop();}}},null,_this);};this.



getUser=function _callee21(userId){return regeneratorRuntime.async(function _callee21$(_context21){while(1){switch(_context21.prev=_context21.next){case 0:return _context21.abrupt('return',
_this.doFetch(
_this.getUserNeededRoute(userId)+'/get',
{method:'get'}));case 1:case'end':return _context21.stop();}}},null,_this);};this.



getUserByUsername=function _callee22(username){return regeneratorRuntime.async(function _callee22$(_context22){while(1){switch(_context22.prev=_context22.next){case 0:return _context22.abrupt('return',
_this.doFetch(
_this.getUsersRoute()+'/name/'+username,
{method:'get'}));case 1:case'end':return _context22.stop();}}},null,_this);};this.



getStatusesByIds=function _callee23(userIds){return regeneratorRuntime.async(function _callee23$(_context23){while(1){switch(_context23.prev=_context23.next){case 0:return _context23.abrupt('return',
_this.doFetch(
_this.getUsersRoute()+'/status/ids',
{method:'post',body:JSON.stringify(userIds)}));case 1:case'end':return _context23.stop();}}},null,_this);};this.



getSessions=function _callee24(userId){return regeneratorRuntime.async(function _callee24$(_context24){while(1){switch(_context24.prev=_context24.next){case 0:return _context24.abrupt('return',
_this.doFetch(
_this.getUserNeededRoute(userId)+'/sessions',
{method:'get'}));case 1:case'end':return _context24.stop();}}},null,_this);};this.



revokeSession=function _callee25(id){return regeneratorRuntime.async(function _callee25$(_context25){while(1){switch(_context25.prev=_context25.next){case 0:return _context25.abrupt('return',
_this.doFetch(
_this.getUsersRoute()+'/revoke_session',
{method:'post',body:JSON.stringify({id:id})}));case 1:case'end':return _context25.stop();}}},null,_this);};this.



getAudits=function _callee26(userId){return regeneratorRuntime.async(function _callee26$(_context26){while(1){switch(_context26.prev=_context26.next){case 0:return _context26.abrupt('return',
_this.doFetch(
_this.getUserNeededRoute(userId)+'/audits',
{method:'get'}));case 1:case'end':return _context26.stop();}}},null,_this);};this.



getProfilePictureUrl=function(userId,lastPictureUpdate){
var params='';
if(lastPictureUpdate){
params='?time='+lastPictureUpdate;
}

return _this.getUsersRoute()+'/'+userId+'/image'+params;
};this.

autocompleteUsersInChannel=function(teamId,channelId,term){
return _this.doFetch(
_this.getChannelNeededRoute(teamId,channelId)+'/users/autocomplete?term='+encodeURIComponent(term),
{method:'get'});

};this.

searchProfiles=function(term,options){
return _this.doFetch(
_this.getUsersRoute()+'/search',
{method:'post',body:JSON.stringify(_extends({term:term},options))});

};this.



createTeam=function _callee27(team){return regeneratorRuntime.async(function _callee27$(_context27){while(1){switch(_context27.prev=_context27.next){case 0:return _context27.abrupt('return',
_this.doFetch(
_this.getTeamsRoute()+'/create',
{method:'post',body:JSON.stringify(team)}));case 1:case'end':return _context27.stop();}}},null,_this);};this.



updateTeam=function _callee28(team){return regeneratorRuntime.async(function _callee28$(_context28){while(1){switch(_context28.prev=_context28.next){case 0:return _context28.abrupt('return',
_this.doFetch(
_this.getTeamNeededRoute(team.id)+'/update',
{method:'post',body:JSON.stringify(team)}));case 1:case'end':return _context28.stop();}}},null,_this);};this.



getAllTeams=function _callee29(){return regeneratorRuntime.async(function _callee29$(_context29){while(1){switch(_context29.prev=_context29.next){case 0:return _context29.abrupt('return',
_this.doFetch(
_this.getTeamsRoute()+'/all',
{method:'get'}));case 1:case'end':return _context29.stop();}}},null,_this);};this.



getMyTeamMembers=function _callee30(){return regeneratorRuntime.async(function _callee30$(_context30){while(1){switch(_context30.prev=_context30.next){case 0:return _context30.abrupt('return',
_this.doFetch(
_this.getTeamsRoute()+'/members',
{method:'get'}));case 1:case'end':return _context30.stop();}}},null,_this);};this.



getAllTeamListings=function _callee31(){return regeneratorRuntime.async(function _callee31$(_context31){while(1){switch(_context31.prev=_context31.next){case 0:return _context31.abrupt('return',
_this.doFetch(
_this.getTeamsRoute()+'/all_team_listings',
{method:'get'}));case 1:case'end':return _context31.stop();}}},null,_this);};this.



getTeamMember=function _callee32(teamId,userId){return regeneratorRuntime.async(function _callee32$(_context32){while(1){switch(_context32.prev=_context32.next){case 0:return _context32.abrupt('return',
_this.doFetch(
_this.getTeamNeededRoute(teamId)+'/members/'+userId,
{method:'get'}));case 1:case'end':return _context32.stop();}}},null,_this);};this.



getTeamMemberByIds=function _callee33(teamId,userIds){return regeneratorRuntime.async(function _callee33$(_context33){while(1){switch(_context33.prev=_context33.next){case 0:return _context33.abrupt('return',
_this.doFetch(
_this.getTeamNeededRoute(teamId)+'/members/ids',
{method:'post',body:JSON.stringify(userIds)}));case 1:case'end':return _context33.stop();}}},null,_this);};this.



getTeamStats=function _callee34(teamId){return regeneratorRuntime.async(function _callee34$(_context34){while(1){switch(_context34.prev=_context34.next){case 0:return _context34.abrupt('return',
_this.doFetch(
_this.getTeamNeededRoute(teamId)+'/stats',
{method:'get'}));case 1:case'end':return _context34.stop();}}},null,_this);};this.



addUserToTeam=function _callee35(teamId,userId){return regeneratorRuntime.async(function _callee35$(_context35){while(1){switch(_context35.prev=_context35.next){case 0:return _context35.abrupt('return',
_this.doFetch(
_this.getTeamNeededRoute(teamId)+'/add_user_to_team',
{method:'post',body:JSON.stringify({user_id:userId})}));case 1:case'end':return _context35.stop();}}},null,_this);};this.



removeUserFromTeam=function _callee36(teamId,userId){return regeneratorRuntime.async(function _callee36$(_context36){while(1){switch(_context36.prev=_context36.next){case 0:return _context36.abrupt('return',
_this.doFetch(
_this.getTeamNeededRoute(teamId)+'/remove_user_from_team',
{method:'post',body:JSON.stringify({user_id:userId})}));case 1:case'end':return _context36.stop();}}},null,_this);};this.





createChannel=function _callee37(channel){return regeneratorRuntime.async(function _callee37$(_context37){while(1){switch(_context37.prev=_context37.next){case 0:return _context37.abrupt('return',
_this.doFetch(
_this.getChannelsRoute(channel.team_id)+'/create',
{method:'post',body:JSON.stringify(channel)}));case 1:case'end':return _context37.stop();}}},null,_this);};this.



createDirectChannel=function _callee38(teamId,userId){return regeneratorRuntime.async(function _callee38$(_context38){while(1){switch(_context38.prev=_context38.next){case 0:return _context38.abrupt('return',
_this.doFetch(
_this.getChannelsRoute(teamId)+'/create_direct',
{method:'post',body:JSON.stringify({user_id:userId})}));case 1:case'end':return _context38.stop();}}},null,_this);};this.



getChannel=function _callee39(teamId,channelId){return regeneratorRuntime.async(function _callee39$(_context39){while(1){switch(_context39.prev=_context39.next){case 0:return _context39.abrupt('return',
_this.doFetch(
_this.getChannelNeededRoute(teamId,channelId)+'/',
{method:'get'}));case 1:case'end':return _context39.stop();}}},null,_this);};this.



getChannels=function _callee40(teamId){return regeneratorRuntime.async(function _callee40$(_context40){while(1){switch(_context40.prev=_context40.next){case 0:return _context40.abrupt('return',
_this.doFetch(
_this.getChannelsRoute(teamId)+'/',
{method:'get'}));case 1:case'end':return _context40.stop();}}},null,_this);};this.



getMyChannelMembers=function _callee41(teamId){return regeneratorRuntime.async(function _callee41$(_context41){while(1){switch(_context41.prev=_context41.next){case 0:return _context41.abrupt('return',
_this.doFetch(
_this.getChannelsRoute(teamId)+'/members',
{method:'get'}));case 1:case'end':return _context41.stop();}}},null,_this);};this.



updateChannel=function _callee42(channel){return regeneratorRuntime.async(function _callee42$(_context42){while(1){switch(_context42.prev=_context42.next){case 0:return _context42.abrupt('return',
_this.doFetch(
_this.getChannelsRoute(channel.team_id)+'/update',
{method:'post',body:JSON.stringify(channel)}));case 1:case'end':return _context42.stop();}}},null,_this);};this.



updateChannelNotifyProps=function _callee43(teamId,data){return regeneratorRuntime.async(function _callee43$(_context43){while(1){switch(_context43.prev=_context43.next){case 0:return _context43.abrupt('return',
_this.doFetch(
_this.getChannelsRoute(teamId)+'/update_notify_props',
{method:'post',body:JSON.stringify(data)}));case 1:case'end':return _context43.stop();}}},null,_this);};this.



leaveChannel=function _callee44(teamId,channelId){return regeneratorRuntime.async(function _callee44$(_context44){while(1){switch(_context44.prev=_context44.next){case 0:return _context44.abrupt('return',
_this.doFetch(
_this.getChannelNeededRoute(teamId,channelId)+'/leave',
{method:'post'}));case 1:case'end':return _context44.stop();}}},null,_this);};this.



joinChannel=function _callee45(teamId,channelId){return regeneratorRuntime.async(function _callee45$(_context45){while(1){switch(_context45.prev=_context45.next){case 0:return _context45.abrupt('return',
_this.doFetch(
_this.getChannelNeededRoute(teamId,channelId)+'/join',
{method:'post'}));case 1:case'end':return _context45.stop();}}},null,_this);};this.



joinChannelByName=function _callee46(teamId,channelName){return regeneratorRuntime.async(function _callee46$(_context46){while(1){switch(_context46.prev=_context46.next){case 0:return _context46.abrupt('return',
_this.doFetch(
_this.getChannelNameRoute(teamId,channelName)+'/join',
{method:'post'}));case 1:case'end':return _context46.stop();}}},null,_this);};this.



deleteChannel=function _callee47(teamId,channelId){return regeneratorRuntime.async(function _callee47$(_context47){while(1){switch(_context47.prev=_context47.next){case 0:return _context47.abrupt('return',
_this.doFetch(
_this.getChannelNeededRoute(teamId,channelId)+'/delete',
{method:'post'}));case 1:case'end':return _context47.stop();}}},null,_this);};this.



viewChannel=function _callee48(teamId,channelId){var prevChannelId=arguments.length>2&&arguments[2]!==undefined?arguments[2]:'';var data;return regeneratorRuntime.async(function _callee48$(_context48){while(1){switch(_context48.prev=_context48.next){case 0:
data={
channel_id:channelId,
prev_channel_id:prevChannelId};return _context48.abrupt('return',


_this.doFetch(
_this.getChannelsRoute(teamId)+'/view',
{method:'post',body:JSON.stringify(data)}));case 2:case'end':return _context48.stop();}}},null,_this);};this.



getMoreChannels=function _callee49(teamId,offset,limit){return regeneratorRuntime.async(function _callee49$(_context49){while(1){switch(_context49.prev=_context49.next){case 0:return _context49.abrupt('return',
_this.doFetch(
_this.getChannelsRoute(teamId)+'/more/'+offset+'/'+limit,
{method:'get'}));case 1:case'end':return _context49.stop();}}},null,_this);};this.



searchMoreChannels=function _callee50(teamId,term){return regeneratorRuntime.async(function _callee50$(_context50){while(1){switch(_context50.prev=_context50.next){case 0:return _context50.abrupt('return',
_this.doFetch(
_this.getChannelsRoute(teamId)+'/more/search',
{method:'post',body:JSON.stringify({term:term})}));case 1:case'end':return _context50.stop();}}},null,_this);};this.



getChannelStats=function _callee51(teamId,channelId){return regeneratorRuntime.async(function _callee51$(_context51){while(1){switch(_context51.prev=_context51.next){case 0:return _context51.abrupt('return',
_this.doFetch(
_this.getChannelNeededRoute(teamId,channelId)+'/stats',
{method:'get'}));case 1:case'end':return _context51.stop();}}},null,_this);};this.



addChannelMember=function _callee52(teamId,channelId,userId){return regeneratorRuntime.async(function _callee52$(_context52){while(1){switch(_context52.prev=_context52.next){case 0:return _context52.abrupt('return',
_this.doFetch(
_this.getChannelNeededRoute(teamId,channelId)+'/add',
{method:'post',body:JSON.stringify({user_id:userId})}));case 1:case'end':return _context52.stop();}}},null,_this);};this.



removeChannelMember=function _callee53(teamId,channelId,userId){return regeneratorRuntime.async(function _callee53$(_context53){while(1){switch(_context53.prev=_context53.next){case 0:return _context53.abrupt('return',
_this.doFetch(
_this.getChannelNeededRoute(teamId,channelId)+'/remove',
{method:'post',body:JSON.stringify({user_id:userId})}));case 1:case'end':return _context53.stop();}}},null,_this);};this.



autocompleteChannels=function _callee54(teamId,term){return regeneratorRuntime.async(function _callee54$(_context54){while(1){switch(_context54.prev=_context54.next){case 0:return _context54.abrupt('return',
_this.doFetch(
_this.getChannelsRoute(teamId)+'/autocomplete?term='+encodeURIComponent(term),
{method:'get'}));case 1:case'end':return _context54.stop();}}},null,_this);};this.




createPost=function _callee55(teamId,post){return regeneratorRuntime.async(function _callee55$(_context55){while(1){switch(_context55.prev=_context55.next){case 0:return _context55.abrupt('return',
_this.doFetch(
_this.getPostsRoute(teamId,post.channel_id)+'/create',
{method:'post',body:JSON.stringify(post)}));case 1:case'end':return _context55.stop();}}},null,_this);};this.



editPost=function _callee56(teamId,post){return regeneratorRuntime.async(function _callee56$(_context56){while(1){switch(_context56.prev=_context56.next){case 0:return _context56.abrupt('return',
_this.doFetch(
_this.getPostsRoute(teamId,post.channel_id)+'/update',
{method:'post',body:JSON.stringify(post)}));case 1:case'end':return _context56.stop();}}},null,_this);};this.



deletePost=function _callee57(teamId,channelId,postId){return regeneratorRuntime.async(function _callee57$(_context57){while(1){switch(_context57.prev=_context57.next){case 0:return _context57.abrupt('return',
_this.doFetch(
_this.getPostsRoute(teamId,channelId)+'/'+postId+'/delete',
{method:'post'}));case 1:case'end':return _context57.stop();}}},null,_this);};this.



getPost=function _callee58(teamId,channelId,postId){return regeneratorRuntime.async(function _callee58$(_context58){while(1){switch(_context58.prev=_context58.next){case 0:return _context58.abrupt('return',
_this.doFetch(
_this.getPostsRoute(teamId,channelId)+'/'+postId+'/get',
{method:'get'}));case 1:case'end':return _context58.stop();}}},null,_this);};this.



getPosts=function _callee59(teamId,channelId,offset,limit){return regeneratorRuntime.async(function _callee59$(_context59){while(1){switch(_context59.prev=_context59.next){case 0:return _context59.abrupt('return',
_this.doFetch(
_this.getPostsRoute(teamId,channelId)+'/page/'+offset+'/'+limit,
{method:'get'}));case 1:case'end':return _context59.stop();}}},null,_this);};this.



getPostsSince=function _callee60(teamId,channelId,since){return regeneratorRuntime.async(function _callee60$(_context60){while(1){switch(_context60.prev=_context60.next){case 0:return _context60.abrupt('return',
_this.doFetch(
_this.getPostsRoute(teamId,channelId)+'/since/'+since,
{method:'get'}));case 1:case'end':return _context60.stop();}}},null,_this);};this.



getPostsBefore=function _callee61(teamId,channelId,postId,offset,limit){return regeneratorRuntime.async(function _callee61$(_context61){while(1){switch(_context61.prev=_context61.next){case 0:return _context61.abrupt('return',
_this.doFetch(
_this.getPostsRoute(teamId,channelId)+'/'+postId+'/before/'+offset+'/'+limit,
{method:'get'}));case 1:case'end':return _context61.stop();}}},null,_this);};this.



getPostsAfter=function _callee62(teamId,channelId,postId,offset,limit){return regeneratorRuntime.async(function _callee62$(_context62){while(1){switch(_context62.prev=_context62.next){case 0:return _context62.abrupt('return',
_this.doFetch(
_this.getPostsRoute(teamId,channelId)+'/'+postId+'/after/'+offset+'/'+limit,
{method:'get'}));case 1:case'end':return _context62.stop();}}},null,_this);};this.



getFileInfosForPost=function _callee63(teamId,channelId,postId){return regeneratorRuntime.async(function _callee63$(_context63){while(1){switch(_context63.prev=_context63.next){case 0:return _context63.abrupt('return',
_this.doFetch(
_this.getChannelNeededRoute(teamId,channelId)+'/posts/'+postId+'/get_file_infos',
{method:'get'}));case 1:case'end':return _context63.stop();}}},null,_this);};this.



uploadFile=function _callee64(teamId,channelId,fileFormData,formBoundary){var contentType;return regeneratorRuntime.async(function _callee64$(_context64){while(1){switch(_context64.prev=_context64.next){case 0:
contentType='multipart/form-data';
if(formBoundary){
contentType+='; boundary='+formBoundary;
}return _context64.abrupt('return',

_this.doFetch(
_this.getTeamNeededRoute(teamId)+'/files/upload',
{
method:'post',
headers:{
'Content-Type':contentType},

body:fileFormData}));case 3:case'end':return _context64.stop();}}},null,_this);};this.





getMyPreferences=function _callee65(){return regeneratorRuntime.async(function _callee65$(_context65){while(1){switch(_context65.prev=_context65.next){case 0:return _context65.abrupt('return',
_this.doFetch(
_this.getPreferencesRoute()+'/',
{method:'get'}));case 1:case'end':return _context65.stop();}}},null,_this);};this.



savePreferences=function _callee66(preferences){return regeneratorRuntime.async(function _callee66$(_context66){while(1){switch(_context66.prev=_context66.next){case 0:return _context66.abrupt('return',
_this.doFetch(
_this.getPreferencesRoute()+'/save',
{method:'post',body:JSON.stringify(preferences)}));case 1:case'end':return _context66.stop();}}},null,_this);};this.



deletePreferences=function _callee67(preferences){return regeneratorRuntime.async(function _callee67$(_context67){while(1){switch(_context67.prev=_context67.next){case 0:return _context67.abrupt('return',
_this.doFetch(
_this.getPreferencesRoute()+'/delete',
{method:'post',body:JSON.stringify(preferences)}));case 1:case'end':return _context67.stop();}}},null,_this);};this.



getPreferenceCategory=function _callee68(category){return regeneratorRuntime.async(function _callee68$(_context68){while(1){switch(_context68.prev=_context68.next){case 0:return _context68.abrupt('return',
_this.doFetch(
_this.getPreferencesRoute()+'/'+category,
{method:'get'}));case 1:case'end':return _context68.stop();}}},null,_this);};this.



getPreference=function _callee69(category,name){return regeneratorRuntime.async(function _callee69$(_context69){while(1){switch(_context69.prev=_context69.next){case 0:return _context69.abrupt('return',
_this.doFetch(
_this.getPreferencesRoute()+'/'+category+'/'+name,
{method:'get'}));case 1:case'end':return _context69.stop();}}},null,_this);};this.
































doFetch=function _callee70(url,options){var _ref3,data;return regeneratorRuntime.async(function _callee70$(_context70){while(1){switch(_context70.prev=_context70.next){case 0:_context70.next=2;return regeneratorRuntime.awrap(
_this.doFetchWithResponse(url,options));case 2:_ref3=_context70.sent;data=_ref3.data;return _context70.abrupt('return',

data);case 5:case'end':return _context70.stop();}}},null,_this);};this.


doFetchWithResponse=function _callee71(url,options){var response,headers,data,serverVersion,msg;return regeneratorRuntime.async(function _callee71$(_context71){while(1){switch(_context71.prev=_context71.next){case 0:_context71.next=2;return regeneratorRuntime.awrap(
(0,_fetch_etag2.default)(url,_this.getOptions(options)));case 2:response=_context71.sent;
headers=parseAndMergeNestedHeaders(response.headers);

data=void 0;_context71.prev=5;_context71.next=8;return regeneratorRuntime.awrap(

response.json());case 8:data=_context71.sent;_context71.next=14;break;case 11:_context71.prev=11;_context71.t0=_context71['catch'](5);throw(

{
intl:{
id:'mobile.request.invalid_response',
defaultMessage:'Received invalid response from the server.'}});case 14:




if(headers.has(HEADER_X_VERSION_ID)){
serverVersion=headers.get(HEADER_X_VERSION_ID);
if(serverVersion&&_this.serverVersion!==serverVersion){
_this.serverVersion=serverVersion;
_event_emitter2.default.emit(_constants.Constants.CONFIG_CHANGED,serverVersion);
}
}if(!

response.ok){_context71.next=17;break;}return _context71.abrupt('return',
{
response:response,
headers:headers,
data:data});case 17:



msg=data.message||'';

if(_this.logToConsole){
console.error(msg);
}throw(

{
message:msg,
server_error_id:data.id,
status_code:data.status_code,
url:url});case 20:case'end':return _context71.stop();}}},null,_this,[[5,11]]);};this.logToConsole=false;this.serverVersion='';this.token='';this.url='';this.urlVersion='/api/v3';this.userAgent=null;this.translations={connectionError:'There appears to be a problem with your internet connection.',unknownError:'We received an unexpected status code from the server.'};}_createClass(Client,[{key:'getUrl',value:function getUrl(){return this.url;}},{key:'setUrl',value:function setUrl(url){this.url=url;}},{key:'setUserAgent',value:function setUserAgent(userAgent){this.userAgent=userAgent;}},{key:'getToken',value:function getToken(){return this.token;}},{key:'setToken',value:function setToken(token){this.token=token;}},{key:'getServerVersion',value:function getServerVersion(){return this.serverVersion;}},{key:'getUrlVersion',value:function getUrlVersion(){return this.urlVersion;}},{key:'getBaseRoute',value:function getBaseRoute(){return''+this.url+this.urlVersion;}},{key:'getAdminRoute',value:function getAdminRoute(){return''+this.url+this.urlVersion+'/admin';}},{key:'getGeneralRoute',value:function getGeneralRoute(){return''+this.url+this.urlVersion+'/general';}},{key:'getLicenseRoute',value:function getLicenseRoute(){return''+this.url+this.urlVersion+'/license';}},{key:'getTeamsRoute',value:function getTeamsRoute(){return''+this.url+this.urlVersion+'/teams';}},{key:'getPreferencesRoute',value:function getPreferencesRoute(){return''+this.url+this.urlVersion+'/preferences';}},{key:'getTeamNeededRoute',value:function getTeamNeededRoute(teamId){return''+this.url+this.urlVersion+'/teams/'+teamId;}},{key:'getChannelsRoute',value:function getChannelsRoute(teamId){return''+this.url+this.urlVersion+'/teams/'+teamId+'/channels';}},{key:'getChannelNameRoute',value:function getChannelNameRoute(teamId,channelName){return''+this.url+this.urlVersion+'/teams/'+teamId+'/channels/name/'+channelName;}},{key:'getChannelNeededRoute',value:function getChannelNeededRoute(teamId,channelId){return''+this.url+this.urlVersion+'/teams/'+teamId+'/channels/'+channelId;}},{key:'getCommandsRoute',value:function getCommandsRoute(teamId){return''+this.url+this.urlVersion+'/teams/'+teamId+'/commands';}},{key:'getEmojiRoute',value:function getEmojiRoute(){return''+this.url+this.urlVersion+'/emoji';}},{key:'getHooksRoute',value:function getHooksRoute(teamId){return''+this.url+this.urlVersion+'/teams/'+teamId+'/hooks';}},{key:'getPostsRoute',value:function getPostsRoute(teamId,channelId){return''+this.url+this.urlVersion+'/teams/'+teamId+'/channels/'+channelId+'/posts';}},{key:'getUsersRoute',value:function getUsersRoute(){return''+this.url+this.urlVersion+'/users';}},{key:'getFilesRoute',value:function getFilesRoute(){return''+this.url+this.urlVersion+'/files';}},{key:'getOAuthRoute',value:function getOAuthRoute(){return''+this.url+this.urlVersion+'/oauth';}},{key:'getUserNeededRoute',value:function getUserNeededRoute(userId){return''+this.url+this.urlVersion+'/users/'+userId;}},{key:'enableLogErrorsToConsole',value:function enableLogErrorsToConsole(enabled){this.logToConsole=enabled;}},{key:'getOptions',value:function getOptions(options){var headers=_defineProperty({},HEADER_REQUESTED_WITH,'XMLHttpRequest');if(this.token){headers[HEADER_AUTH]=HEADER_BEARER+' '+this.token;}if(this.userAgent){headers[HEADER_USER_AGENT]=this.userAgent;}if(options.headers){_extends(headers,options.headers);}return _extends({},options,{headers:headers});}},{key:'getFileUrl',value:function getFileUrl(fileId,timestamp){var url=this.getFilesRoute()+'/'+fileId+'/get';if(timestamp){url+='?'+timestamp;}return url;}},{key:'getFileThumbnailUrl',value:function getFileThumbnailUrl(fileId,timestamp){var url=this.getFilesRoute()+'/'+fileId+'/get_thumbnail';if(timestamp){url+='?'+timestamp;}return url;}},{key:'getFilePreviewUrl',value:function getFilePreviewUrl(fileId,timestamp){var url=this.getFilesRoute()+'/'+fileId+'/get_preview';if(timestamp){url+='?'+timestamp;}return url;}}]);return Client;}();exports.default=Client;




function parseAndMergeNestedHeaders(originalHeaders){


var headers=new Map();
var nestedHeaders=new Map();
originalHeaders.forEach(function(val,key){
var capitalizedKey=key.replace(/\b[a-z]/g,function(l){return l.toUpperCase();});
var realVal=val;
if(val&&val.match(/\n\S+:\s\S+/)){
var nestedHeaderStrings=val.split('\n');
realVal=nestedHeaderStrings.shift();
var moreNestedHeaders=new Map(
nestedHeaderStrings.map(function(h){return h.split(/:\s/);}));

nestedHeaders=new Map([].concat(_toConsumableArray(nestedHeaders),_toConsumableArray(moreNestedHeaders)));
}
headers.set(capitalizedKey,realVal);
});
return new Map([].concat(_toConsumableArray(headers),_toConsumableArray(nestedHeaders)));
}