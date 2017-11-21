Object.defineProperty(exports,"__esModule",{value:true});exports.getUsersTyping=undefined;


var _reselect=require('reselect');
var _channels=require('./channels');
var _preferences=require('./preferences');
var _users=require('./users');
var _user_utils=require('../../utils/user_utils');

var getUsersTyping=exports.getUsersTyping=(0,_reselect.createSelector)(_users.getUsers,_preferences.getMyPreferences,_channels.getCurrentChannelId,



function(state){return state.entities.posts.selectedPostId;},
function(state){return state.entities.typing;},
function(profiles,preferences,channelId,parentPostId,typing){
var id=channelId+parentPostId;

if(typing[id]){
var users=Object.keys(typing[id]);

if(users.length){
return users.map(function(userId){
return(0,_user_utils.displayUsername)(profiles[userId],preferences);
});
}
}

return[];
});