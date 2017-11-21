Object.defineProperty(exports,"__esModule",{value:true});exports.

































selectTeam=selectTeam;exports.






fetchTeams=fetchTeams;exports.








getAllTeamListings=getAllTeamListings;exports.








createTeam=createTeam;exports.












































updateTeam=updateTeam;exports.









getMyTeamMembers=getMyTeamMembers;exports.








getTeamMember=getTeamMember;exports.




























getTeamMembersByIds=getTeamMembersByIds;exports.



























getTeamStats=getTeamStats;exports.









addUserToTeam=addUserToTeam;exports.































removeUserFromTeam=removeUserFromTeam;var _reduxBatchedActions=require('redux-batched-actions');var _client=require('../client');var _client2=_interopRequireDefault(_client);var _constants=require('../constants');var _errors=require('./errors');var _helpers=require('./helpers');var _users=require('./users');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function getProfilesAndStatusesForMembers(userIds,dispatch,getState){var _getState$entities$us,currentUserId,profiles,statuses,profilesToLoad,statusesToLoad;return regeneratorRuntime.async(function getProfilesAndStatusesForMembers$(_context){while(1){switch(_context.prev=_context.next){case 0:_getState$entities$us=getState().entities.users,currentUserId=_getState$entities$us.currentUserId,profiles=_getState$entities$us.profiles,statuses=_getState$entities$us.statuses;profilesToLoad=[];statusesToLoad=[];userIds.forEach(function(userId){if(!profiles[userId]&&!profilesToLoad.includes(userId)&&userId!==currentUserId){profilesToLoad.push(userId);}if(!statuses[userId]&&!statusesToLoad.includes(userId)&&userId!==currentUserId){statusesToLoad.push(userId);}});if(!profilesToLoad.length){_context.next=7;break;}_context.next=7;return regeneratorRuntime.awrap((0,_users.getProfilesByIds)(profilesToLoad)(dispatch,getState));case 7:if(!statusesToLoad.length){_context.next=10;break;}_context.next=10;return regeneratorRuntime.awrap((0,_users.getStatusesByIds)(statusesToLoad)(dispatch,getState));case 10:case'end':return _context.stop();}}},null,this);}function selectTeam(team){var _this=this;return function _callee(dispatch,getState){return regeneratorRuntime.async(function _callee$(_context2){while(1){switch(_context2.prev=_context2.next){case 0:return _context2.abrupt('return',dispatch({type:_constants.TeamsTypes.SELECT_TEAM,data:team.id},getState));case 1:case'end':return _context2.stop();}}},null,_this);};}function fetchTeams(){return(0,_helpers.bindClientFunc)(_client2.default.getAllTeams,_constants.TeamsTypes.FETCH_TEAMS_REQUEST,[_constants.TeamsTypes.RECEIVED_ALL_TEAMS,_constants.TeamsTypes.FETCH_TEAMS_SUCCESS],_constants.TeamsTypes.FETCH_TEAMS_FAILURE);}function getAllTeamListings(){return(0,_helpers.bindClientFunc)(_client2.default.getAllTeamListings,_constants.TeamsTypes.TEAM_LISTINGS_REQUEST,[_constants.TeamsTypes.RECEIVED_TEAM_LISTINGS,_constants.TeamsTypes.TEAM_LISTINGS_SUCCESS],_constants.TeamsTypes.TEAM_LISTINGS_FAILURE);}function createTeam(userId,team){var _this2=this;return function _callee2(dispatch,getState){var created,member;return regeneratorRuntime.async(function _callee2$(_context3){while(1){switch(_context3.prev=_context3.next){case 0:dispatch({type:_constants.TeamsTypes.CREATE_TEAM_REQUEST},getState);created=void 0;_context3.prev=2;_context3.next=5;return regeneratorRuntime.awrap(_client2.default.createTeam(team));case 5:created=_context3.sent;_context3.next=13;break;case 8:_context3.prev=8;_context3.t0=_context3['catch'](2);(0,_helpers.forceLogoutIfNecessary)(_context3.t0,dispatch);dispatch((0,_reduxBatchedActions.batchActions)([{type:_constants.TeamsTypes.CREATE_TEAM_FAILURE,error:_context3.t0},(0,_errors.getLogErrorAction)(_context3.t0)]),getState);return _context3.abrupt('return');case 13:member={team_id:created.id,user_id:userId,roles:_constants.Constants.TEAM_ADMIN_ROLE+' '+_constants.Constants.TEAM_USER_ROLE,delete_at:0,msg_count:0,mention_count:0};dispatch((0,_reduxBatchedActions.batchActions)([{type:_constants.TeamsTypes.CREATED_TEAM,data:created},{type:_constants.TeamsTypes.RECEIVED_MY_TEAM_MEMBERS,data:[member]},{type:_constants.TeamsTypes.SELECT_TEAM,data:created.id},{type:_constants.TeamsTypes.CREATE_TEAM_SUCCESS}]),getState);case 15:case'end':return _context3.stop();}}},null,_this2,[[2,8]]);};}function updateTeam(team){return(0,_helpers.bindClientFunc)(_client2.default.updateTeam,_constants.TeamsTypes.UPDATE_TEAM_REQUEST,[_constants.TeamsTypes.UPDATED_TEAM,_constants.TeamsTypes.UPDATE_TEAM_SUCCESS],_constants.TeamsTypes.UPDATE_TEAM_FAILURE,team);}function getMyTeamMembers(){return(0,_helpers.bindClientFunc)(_client2.default.getMyTeamMembers,_constants.TeamsTypes.MY_TEAM_MEMBERS_REQUEST,[_constants.TeamsTypes.RECEIVED_MY_TEAM_MEMBERS,_constants.TeamsTypes.MY_TEAM_MEMBERS_SUCCESS],_constants.TeamsTypes.MY_TEAM_MEMBERS_FAILURE);}function getTeamMember(teamId,userId){var _this3=this;return function _callee3(dispatch,getState){var member;return regeneratorRuntime.async(function _callee3$(_context4){while(1){switch(_context4.prev=_context4.next){case 0:dispatch({type:_constants.TeamsTypes.TEAM_MEMBERS_REQUEST},getState);member=void 0;_context4.prev=2;_context4.next=5;return regeneratorRuntime.awrap(_client2.default.getTeamMember(teamId,userId));case 5:member=_context4.sent;getProfilesAndStatusesForMembers([userId],dispatch,getState);_context4.next=14;break;case 9:_context4.prev=9;_context4.t0=_context4['catch'](2);(0,_helpers.forceLogoutIfNecessary)(_context4.t0,dispatch);dispatch((0,_reduxBatchedActions.batchActions)([{type:_constants.TeamsTypes.TEAM_MEMBERS_FAILURE,error:_context4.t0},(0,_errors.getLogErrorAction)(_context4.t0)]),getState);return _context4.abrupt('return');case 14:dispatch((0,_reduxBatchedActions.batchActions)([{type:_constants.TeamsTypes.RECEIVED_MEMBERS_IN_TEAM,data:[member]},{type:_constants.TeamsTypes.TEAM_MEMBERS_SUCCESS}]),getState);case 15:case'end':return _context4.stop();}}},null,_this3,[[2,9]]);};}function getTeamMembersByIds(teamId,userIds){var _this4=this;return function _callee4(dispatch,getState){var members;return regeneratorRuntime.async(function _callee4$(_context5){while(1){switch(_context5.prev=_context5.next){case 0:dispatch({type:_constants.TeamsTypes.TEAM_MEMBERS_REQUEST},getState);members=void 0;_context5.prev=2;_context5.next=5;return regeneratorRuntime.awrap(_client2.default.getTeamMemberByIds(teamId,userIds));case 5:members=_context5.sent;getProfilesAndStatusesForMembers(userIds,dispatch,getState);_context5.next=13;break;case 9:_context5.prev=9;_context5.t0=_context5['catch'](2);(0,_helpers.forceLogoutIfNecessary)(_context5.t0,dispatch);dispatch((0,_reduxBatchedActions.batchActions)([{type:_constants.TeamsTypes.TEAM_MEMBERS_FAILURE,error:_context5.t0},(0,_errors.getLogErrorAction)(_context5.t0)]),getState);case 13:dispatch((0,_reduxBatchedActions.batchActions)([{type:_constants.TeamsTypes.RECEIVED_MEMBERS_IN_TEAM,data:members},{type:_constants.TeamsTypes.TEAM_MEMBERS_SUCCESS}]),getState);case 14:case'end':return _context5.stop();}}},null,_this4,[[2,9]]);};}function getTeamStats(teamId){return(0,_helpers.bindClientFunc)(_client2.default.getTeamStats,_constants.TeamsTypes.TEAM_STATS_REQUEST,[_constants.TeamsTypes.RECEIVED_TEAM_STATS,_constants.TeamsTypes.TEAM_STATS_SUCCESS],_constants.TeamsTypes.TEAM_STATS_FAILURE,teamId);}function addUserToTeam(teamId,userId){var _this5=this;return function _callee5(dispatch,getState){var member;return regeneratorRuntime.async(function _callee5$(_context6){while(1){switch(_context6.prev=_context6.next){case 0:dispatch({type:_constants.TeamsTypes.ADD_TEAM_MEMBER_REQUEST},getState);_context6.prev=1;_context6.next=4;return regeneratorRuntime.awrap(_client2.default.addUserToTeam(teamId,userId));case 4:_context6.next=11;break;case 6:_context6.prev=6;_context6.t0=_context6['catch'](1);(0,_helpers.forceLogoutIfNecessary)(_context6.t0,dispatch);dispatch((0,_reduxBatchedActions.batchActions)([{type:_constants.TeamsTypes.ADD_TEAM_MEMBER_FAILURE,error:_context6.t0},(0,_errors.getLogErrorAction)(_context6.t0)]),getState);return _context6.abrupt('return');case 11:member={team_id:teamId,user_id:userId};dispatch((0,_reduxBatchedActions.batchActions)([{type:_constants.TeamsTypes.RECEIVED_MEMBER_IN_TEAM,data:member},{type:_constants.TeamsTypes.ADD_TEAM_MEMBER_SUCCESS}]),getState);case 13:case'end':return _context6.stop();}}},null,_this5,[[1,6]]);};}function removeUserFromTeam(teamId,userId){var _this6=this;
return function _callee6(dispatch,getState){var member;return regeneratorRuntime.async(function _callee6$(_context7){while(1){switch(_context7.prev=_context7.next){case 0:
dispatch({type:_constants.TeamsTypes.REMOVE_TEAM_MEMBER_REQUEST},getState);_context7.prev=1;_context7.next=4;return regeneratorRuntime.awrap(


_client2.default.removeUserFromTeam(teamId,userId));case 4:_context7.next=11;break;case 6:_context7.prev=6;_context7.t0=_context7['catch'](1);

(0,_helpers.forceLogoutIfNecessary)(_context7.t0,dispatch);
dispatch((0,_reduxBatchedActions.batchActions)([
{type:_constants.TeamsTypes.REMOVE_TEAM_MEMBER_FAILURE,error:_context7.t0},
(0,_errors.getLogErrorAction)(_context7.t0)]),
getState);return _context7.abrupt('return');case 11:



member={
team_id:teamId,
user_id:userId};


dispatch((0,_reduxBatchedActions.batchActions)([
{
type:_constants.TeamsTypes.REMOVE_MEMBER_FROM_TEAM,
data:member},

{
type:_constants.TeamsTypes.REMOVE_TEAM_MEMBER_SUCCESS}]),

getState);case 13:case'end':return _context7.stop();}}},null,_this6,[[1,6]]);};

}