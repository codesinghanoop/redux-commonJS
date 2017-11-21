Object.defineProperty(exports,"__esModule",{value:true});exports.




getFullName=getFullName;exports.











displayUsername=displayUsername;exports.





















isAdmin=isAdmin;exports.



isTeamAdmin=isTeamAdmin;exports.



isSystemAdmin=isSystemAdmin;exports.



isChannelAdmin=isChannelAdmin;var _constants=require('../constants');function getFullName(user){if(user.first_name&&user.last_name){return user.first_name+' '+user.last_name;}else if(user.first_name){return user.first_name;}else if(user.last_name){return user.last_name;}return'';}function displayUsername(user,myPreferences){var nameFormat='false';var pref=myPreferences[_constants.Constants.CATEGORY_DISPLAY_SETTINGS+'--name_format'];if(pref&&pref.value){nameFormat=pref.value;}var username='';if(user){if(nameFormat===_constants.Constants.DISPLAY_PREFER_NICKNAME){username=user.nickname||getFullName(user);}else if(nameFormat===_constants.Constants.DISPLAY_PREFER_FULL_NAME){username=getFullName(user);}if(!username.trim().length){username=user.username;}}return username;}function isAdmin(roles){return isSystemAdmin(roles)||isTeamAdmin(roles);}function isTeamAdmin(roles){return roles.includes(_constants.Constants.TEAM_ADMIN_ROLE);}function isSystemAdmin(roles){return roles.includes(_constants.Constants.SYSTEM_ADMIN_ROLE);}function isChannelAdmin(roles){
return roles.includes(_constants.Constants.CHANNEL_ADMIN_ROLE);
}