Object.defineProperty(exports,"__esModule",{value:true});


var _redux=require('redux');
var _constants=require('../../constants');

var _helpers=require('./helpers');

function allTeams(){var state=arguments.length>0&&arguments[0]!==undefined?arguments[0]:(0,_helpers.initialRequestState)();var action=arguments[1];
return(0,_helpers.handleRequest)(
_constants.TeamsTypes.FETCH_TEAMS_REQUEST,
_constants.TeamsTypes.FETCH_TEAMS_SUCCESS,
_constants.TeamsTypes.FETCH_TEAMS_FAILURE,
state,
action);

}

function getAllTeamListings(){var state=arguments.length>0&&arguments[0]!==undefined?arguments[0]:(0,_helpers.initialRequestState)();var action=arguments[1];
return(0,_helpers.handleRequest)(
_constants.TeamsTypes.TEAM_LISTINGS_REQUEST,
_constants.TeamsTypes.TEAM_LISTINGS_SUCCESS,
_constants.TeamsTypes.TEAM_LISTINGS_FAILURE,
state,
action);

}

function createTeam(){var state=arguments.length>0&&arguments[0]!==undefined?arguments[0]:(0,_helpers.initialRequestState)();var action=arguments[1];
return(0,_helpers.handleRequest)(
_constants.TeamsTypes.CREATE_TEAM_REQUEST,
_constants.TeamsTypes.CREATE_TEAM_SUCCESS,
_constants.TeamsTypes.CREATE_TEAM_FAILURE,
state,
action);

}

function updateTeam(){var state=arguments.length>0&&arguments[0]!==undefined?arguments[0]:(0,_helpers.initialRequestState)();var action=arguments[1];
return(0,_helpers.handleRequest)(
_constants.TeamsTypes.UPDATE_TEAM_REQUEST,
_constants.TeamsTypes.UPDATE_TEAM_SUCCESS,
_constants.TeamsTypes.UPDATE_TEAM_FAILURE,
state,
action);

}

function getMyTeamMembers(){var state=arguments.length>0&&arguments[0]!==undefined?arguments[0]:(0,_helpers.initialRequestState)();var action=arguments[1];
return(0,_helpers.handleRequest)(
_constants.TeamsTypes.MY_TEAM_MEMBERS_REQUEST,
_constants.TeamsTypes.MY_TEAM_MEMBERS_SUCCESS,
_constants.TeamsTypes.MY_TEAM_MEMBERS_FAILURE,
state,
action);

}

function getTeamMembers(){var state=arguments.length>0&&arguments[0]!==undefined?arguments[0]:(0,_helpers.initialRequestState)();var action=arguments[1];
return(0,_helpers.handleRequest)(
_constants.TeamsTypes.TEAM_MEMBERS_REQUEST,
_constants.TeamsTypes.TEAM_MEMBERS_SUCCESS,
_constants.TeamsTypes.TEAM_MEMBERS_FAILURE,
state,
action);

}

function getTeamStats(){var state=arguments.length>0&&arguments[0]!==undefined?arguments[0]:(0,_helpers.initialRequestState)();var action=arguments[1];
return(0,_helpers.handleRequest)(
_constants.TeamsTypes.TEAM_STATS_REQUEST,
_constants.TeamsTypes.TEAM_STATS_SUCCESS,
_constants.TeamsTypes.TEAM_STATS_FAILURE,
state,
action);

}

function addUserToTeam(){var state=arguments.length>0&&arguments[0]!==undefined?arguments[0]:(0,_helpers.initialRequestState)();var action=arguments[1];
return(0,_helpers.handleRequest)(
_constants.TeamsTypes.ADD_TEAM_MEMBER_REQUEST,
_constants.TeamsTypes.ADD_TEAM_MEMBER_SUCCESS,
_constants.TeamsTypes.ADD_TEAM_MEMBER_FAILURE,
state,
action);

}

function removeUserFromTeam(){var state=arguments.length>0&&arguments[0]!==undefined?arguments[0]:(0,_helpers.initialRequestState)();var action=arguments[1];
return(0,_helpers.handleRequest)(
_constants.TeamsTypes.REMOVE_TEAM_MEMBER_REQUEST,
_constants.TeamsTypes.REMOVE_TEAM_MEMBER_SUCCESS,
_constants.TeamsTypes.REMOVE_TEAM_MEMBER_FAILURE,
state,
action);

}exports.default=

(0,_redux.combineReducers)({
allTeams:allTeams,
getAllTeamListings:getAllTeamListings,
createTeam:createTeam,
updateTeam:updateTeam,
getMyTeamMembers:getMyTeamMembers,
getTeamMembers:getTeamMembers,
getTeamStats:getTeamStats,
addUserToTeam:addUserToTeam,
removeUserFromTeam:removeUserFromTeam});