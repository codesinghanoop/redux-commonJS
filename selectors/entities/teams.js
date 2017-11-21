Object.defineProperty(exports,"__esModule",{value:true});exports.getCurrentTeamStats=exports.getCurrentTeamUrl=exports.getCurrentTeamMembership=exports.getCurrentTeam=undefined;exports.






getCurrentTeamId=getCurrentTeamId;exports.



getTeams=getTeams;exports.



getTeamStats=getTeamStats;exports.



getTeamMemberships=getTeamMemberships;var _reselect=require('reselect');var _general=require('./general');function getCurrentTeamId(state){return state.entities.teams.currentTeamId;}function getTeams(state){return state.entities.teams.teams;}function getTeamStats(state){return state.entities.teams.stats;}function getTeamMemberships(state){
return state.entities.teams.myMembers;
}

var getCurrentTeam=exports.getCurrentTeam=(0,_reselect.createSelector)(
getTeams,
getCurrentTeamId,
function(teams,currentTeamId){
return teams[currentTeamId];
});


var getCurrentTeamMembership=exports.getCurrentTeamMembership=(0,_reselect.createSelector)(
getCurrentTeamId,
getTeamMemberships,
function(currentTeamId,teamMemberships){
return teamMemberships[currentTeamId];
});


var getCurrentTeamUrl=exports.getCurrentTeamUrl=(0,_reselect.createSelector)(_general.getCurrentUrl,

getCurrentTeam,
function(currentUrl,currentTeam){
return currentUrl+'/'+currentTeam.name;
});


var getCurrentTeamStats=exports.getCurrentTeamStats=(0,_reselect.createSelector)(
getCurrentTeamId,
getTeamStats,
function(currentTeamId,teamStats){
return teamStats[currentTeamId];
});