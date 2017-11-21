Object.defineProperty(exports,"__esModule",{value:true});exports.getAutocompleteUsersInCurrentChannel=exports.getProfilesNotInCurrentChannel=exports.getProfilesInCurrentChannel=exports.getProfileSetNotInCurrentChannel=exports.getProfileSetInCurrentChannel=exports.getCurrentUserRoles=exports.getCurrentUser=exports.getUsersByUsername=undefined;exports.







getCurrentUserId=getCurrentUserId;exports.



getProfilesInChannel=getProfilesInChannel;exports.



getProfilesNotInChannel=getProfilesNotInChannel;exports.



getUserStatuses=getUserStatuses;exports.



getUser=getUser;exports.



getUsers=getUsers;exports.



















getAutocompleteUsersInChannel=getAutocompleteUsersInChannel;exports.








































































getStatusForUserId=getStatusForUserId;var _reselect=require('reselect');var _channels=require('./channels');var _teams=require('./teams');function getCurrentUserId(state){return state.entities.users.currentUserId;}function getProfilesInChannel(state){return state.entities.users.profilesInChannel;}function getProfilesNotInChannel(state){return state.entities.users.profilesNotInChannel;}function getUserStatuses(state){return state.entities.users.statuses;}function getUser(state,id){return state.entities.users.profiles[id];}function getUsers(state){return state.entities.users.profiles;}var getUsersByUsername=exports.getUsersByUsername=(0,_reselect.createSelector)(getUsers,function(users){var usersByUsername={};for(var id in users){if(users.hasOwnProperty(id)){var user=users[id];usersByUsername[user.username]=user;}}return usersByUsername;});function getAutocompleteUsersInChannel(state){return state.entities.users.autocompleteUsersInChannel;}var getCurrentUser=exports.getCurrentUser=(0,_reselect.createSelector)(getUsers,getCurrentUserId,function(profiles,currentUserId){return profiles[currentUserId];});var getCurrentUserRoles=exports.getCurrentUserRoles=(0,_reselect.createSelector)(_channels.getCurrentChannelMembership,_teams.getCurrentTeamMembership,getCurrentUser,function(currentChannelMembership,currentTeamMembership,currentUser){return currentTeamMembership.roles+' '+currentChannelMembership.roles+' '+currentUser.roles;});var getProfileSetInCurrentChannel=exports.getProfileSetInCurrentChannel=(0,_reselect.createSelector)(_channels.getCurrentChannelId,getProfilesInChannel,function(currentChannel,channelProfiles){return channelProfiles[currentChannel];});var getProfileSetNotInCurrentChannel=exports.getProfileSetNotInCurrentChannel=(0,_reselect.createSelector)(_channels.getCurrentChannelId,getProfilesNotInChannel,function(currentChannel,channelProfiles){return channelProfiles[currentChannel];});function sortAndInjectProfiles(profiles,profileSet){var currentProfiles=[];if(typeof profileSet==='undefined'){return currentProfiles;}profileSet.forEach(function(p){currentProfiles.push(profiles[p]);});var sortedCurrentProfiles=currentProfiles.sort(function(a,b){var nameA=a.username;var nameB=b.username;return nameA.localeCompare(nameB);});return sortedCurrentProfiles;}var getProfilesInCurrentChannel=exports.getProfilesInCurrentChannel=(0,_reselect.createSelector)(getUsers,getProfileSetInCurrentChannel,function(profiles,currentChannelProfileSet){return sortAndInjectProfiles(profiles,currentChannelProfileSet);});var getProfilesNotInCurrentChannel=exports.getProfilesNotInCurrentChannel=(0,_reselect.createSelector)(getUsers,getProfileSetNotInCurrentChannel,function(profiles,notInCurrentChannelProfileSet){return sortAndInjectProfiles(profiles,notInCurrentChannelProfileSet);});function getStatusForUserId(state,userId){
return getUserStatuses(state)[userId];
}

var getAutocompleteUsersInCurrentChannel=exports.getAutocompleteUsersInCurrentChannel=(0,_reselect.createSelector)(_channels.getCurrentChannelId,

getAutocompleteUsersInChannel,
function(currentChannelId,autocompleteUsersInChannel){
return autocompleteUsersInChannel[currentChannelId]||{};
});