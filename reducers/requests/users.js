Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};


var _redux=require('redux');
var _constants=require('../../constants');

var _helpers=require('./helpers');

function checkMfa(){var state=arguments.length>0&&arguments[0]!==undefined?arguments[0]:(0,_helpers.initialRequestState)();var action=arguments[1];
switch(action.type){
case _constants.UsersTypes.CHECK_MFA_REQUEST:
return _extends({},state,{status:_constants.RequestStatus.STARTED});

case _constants.UsersTypes.CHECK_MFA_SUCCESS:
return _extends({},state,{status:_constants.RequestStatus.SUCCESS,error:null});

case _constants.UsersTypes.CHECK_MFA_FAILURE:
return _extends({},state,{status:_constants.RequestStatus.FAILURE,error:action.error});

case _constants.UsersTypes.LOGOUT_SUCCESS:
return _extends({},state,{status:_constants.RequestStatus.NOT_STARTED,error:null});

default:
return state;}

}

function login(){var state=arguments.length>0&&arguments[0]!==undefined?arguments[0]:(0,_helpers.initialRequestState)();var action=arguments[1];
switch(action.type){
case _constants.UsersTypes.LOGIN_REQUEST:
return _extends({},state,{status:_constants.RequestStatus.STARTED});

case _constants.UsersTypes.LOGIN_SUCCESS:
return _extends({},state,{status:_constants.RequestStatus.SUCCESS,error:null});

case _constants.UsersTypes.LOGIN_FAILURE:
return _extends({},state,{status:_constants.RequestStatus.FAILURE,error:action.error});

case _constants.UsersTypes.LOGOUT_SUCCESS:
return _extends({},state,{status:_constants.RequestStatus.NOT_STARTED,error:null});

default:
return state;}

}

function logout(){var state=arguments.length>0&&arguments[0]!==undefined?arguments[0]:(0,_helpers.initialRequestState)();var action=arguments[1];
switch(action.type){
case _constants.UsersTypes.LOGOUT_REQUEST:
return _extends({},state,{status:_constants.RequestStatus.STARTED});

case _constants.UsersTypes.LOGOUT_SUCCESS:
return _extends({},state,{status:_constants.RequestStatus.SUCCESS,error:null});

case _constants.UsersTypes.LOGOUT_FAILURE:
return _extends({},state,{status:_constants.RequestStatus.FAILURE,error:action.error});

case _constants.UsersTypes.RESET_LOGOUT_STATE:
return(0,_helpers.initialRequestState)();

default:
return state;}

}

function getProfiles(){var state=arguments.length>0&&arguments[0]!==undefined?arguments[0]:(0,_helpers.initialRequestState)();var action=arguments[1];
return(0,_helpers.handleRequest)(
_constants.UsersTypes.PROFILES_REQUEST,
_constants.UsersTypes.PROFILES_SUCCESS,
_constants.UsersTypes.PROFILES_FAILURE,
state,
action);

}

function getProfilesInTeam(){var state=arguments.length>0&&arguments[0]!==undefined?arguments[0]:(0,_helpers.initialRequestState)();var action=arguments[1];
return(0,_helpers.handleRequest)(
_constants.UsersTypes.PROFILES_IN_TEAM_REQUEST,
_constants.UsersTypes.PROFILES_IN_TEAM_SUCCESS,
_constants.UsersTypes.PROFILES_IN_TEAM_FAILURE,
state,
action);

}

function getProfilesInChannel(){var state=arguments.length>0&&arguments[0]!==undefined?arguments[0]:(0,_helpers.initialRequestState)();var action=arguments[1];
return(0,_helpers.handleRequest)(
_constants.UsersTypes.PROFILES_IN_CHANNEL_REQUEST,
_constants.UsersTypes.PROFILES_IN_CHANNEL_SUCCESS,
_constants.UsersTypes.PROFILES_IN_CHANNEL_FAILURE,
state,
action);

}

function getProfilesNotInChannel(){var state=arguments.length>0&&arguments[0]!==undefined?arguments[0]:(0,_helpers.initialRequestState)();var action=arguments[1];
return(0,_helpers.handleRequest)(
_constants.UsersTypes.PROFILES_NOT_IN_CHANNEL_REQUEST,
_constants.UsersTypes.PROFILES_NOT_IN_CHANNEL_SUCCESS,
_constants.UsersTypes.PROFILES_NOT_IN_CHANNEL_FAILURE,
state,
action);

}

function getUser(){var state=arguments.length>0&&arguments[0]!==undefined?arguments[0]:(0,_helpers.initialRequestState)();var action=arguments[1];
return(0,_helpers.handleRequest)(
_constants.UsersTypes.USER_REQUEST,
_constants.UsersTypes.USER_SUCCESS,
_constants.UsersTypes.USER_FAILURE,
state,
action);

}

function getUserByUsername(){var state=arguments.length>0&&arguments[0]!==undefined?arguments[0]:(0,_helpers.initialRequestState)();var action=arguments[1];
return(0,_helpers.handleRequest)(
_constants.UsersTypes.USER_BY_USERNAME_REQUEST,
_constants.UsersTypes.USER_BY_USERNAME_SUCCESS,
_constants.UsersTypes.USER_BY_USERNAME_FAILURE,
state,
action);

}

function getStatusesByIds(){var state=arguments.length>0&&arguments[0]!==undefined?arguments[0]:(0,_helpers.initialRequestState)();var action=arguments[1];
return(0,_helpers.handleRequest)(
_constants.UsersTypes.PROFILES_STATUSES_REQUEST,
_constants.UsersTypes.PROFILES_STATUSES_SUCCESS,
_constants.UsersTypes.PROFILES_STATUSES_FAILURE,
state,
action);

}

function getSessions(){var state=arguments.length>0&&arguments[0]!==undefined?arguments[0]:(0,_helpers.initialRequestState)();var action=arguments[1];
return(0,_helpers.handleRequest)(
_constants.UsersTypes.SESSIONS_REQUEST,
_constants.UsersTypes.SESSIONS_SUCCESS,
_constants.UsersTypes.SESSIONS_FAILURE,
state,
action);

}

function revokeSession(){var state=arguments.length>0&&arguments[0]!==undefined?arguments[0]:(0,_helpers.initialRequestState)();var action=arguments[1];
return(0,_helpers.handleRequest)(
_constants.UsersTypes.REVOKE_SESSION_REQUEST,
_constants.UsersTypes.REVOKE_SESSION_SUCCESS,
_constants.UsersTypes.REVOKE_SESSION_FAILURE,
state,
action);

}

function getAudits(){var state=arguments.length>0&&arguments[0]!==undefined?arguments[0]:(0,_helpers.initialRequestState)();var action=arguments[1];
return(0,_helpers.handleRequest)(
_constants.UsersTypes.AUDITS_REQUEST,
_constants.UsersTypes.AUDITS_SUCCESS,
_constants.UsersTypes.AUDITS_FAILURE,
state,
action);

}

function autocompleteUsersInChannel(){var state=arguments.length>0&&arguments[0]!==undefined?arguments[0]:(0,_helpers.initialRequestState)();var action=arguments[1];
return(0,_helpers.handleRequest)(
_constants.UsersTypes.AUTOCOMPLETE_IN_CHANNEL_REQUEST,
_constants.UsersTypes.AUTOCOMPLETE_IN_CHANNEL_SUCCESS,
_constants.UsersTypes.AUTOCOMPLETE_IN_CHANNEL_FAILURE,
state,
action);

}

function searchProfiles(){var state=arguments.length>0&&arguments[0]!==undefined?arguments[0]:(0,_helpers.initialRequestState)();var action=arguments[1];
return(0,_helpers.handleRequest)(
_constants.UsersTypes.SEARCH_PROFILES_REQUEST,
_constants.UsersTypes.SEARCH_PROFILES_SUCCESS,
_constants.UsersTypes.SEARCH_PROFILES_FAILURE,
state,
action);

}

function updateUserNotifyProps(){var state=arguments.length>0&&arguments[0]!==undefined?arguments[0]:(0,_helpers.initialRequestState)();var action=arguments[1];
return(0,_helpers.handleRequest)(
_constants.UsersTypes.UPDATE_NOTIFY_PROPS_REQUEST,
_constants.UsersTypes.UPDATE_NOTIFY_PROPS_SUCCESS,
_constants.UsersTypes.UPDATE_NOTIFY_PROPS_FAILURE,
state,
action);

}exports.default=

(0,_redux.combineReducers)({
checkMfa:checkMfa,
login:login,
logout:logout,
getProfiles:getProfiles,
getProfilesInTeam:getProfilesInTeam,
getProfilesInChannel:getProfilesInChannel,
getProfilesNotInChannel:getProfilesNotInChannel,
getUser:getUser,
getUserByUsername:getUserByUsername,
getStatusesByIds:getStatusesByIds,
getSessions:getSessions,
revokeSession:revokeSession,
getAudits:getAudits,
autocompleteUsersInChannel:autocompleteUsersInChannel,
searchProfiles:searchProfiles,
updateUserNotifyProps:updateUserNotifyProps});