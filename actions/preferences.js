Object.defineProperty(exports,"__esModule",{value:true});exports.















deletePreferences=deletePreferences;exports.


























getMyPreferences=getMyPreferences;exports.








makeDirectChannelVisibleIfNecessary=makeDirectChannelVisibleIfNecessary;exports.




















makeGroupMessageVisibleIfNecessary=makeGroupMessageVisibleIfNecessary;exports.






















savePreferences=savePreferences;var _reduxBatchedActions=require('redux-batched-actions');var _client=require('../client');var _client2=_interopRequireDefault(_client);var _constants=require('../constants');var _preferences=require('../selectors/entities/preferences');var _teams=require('../selectors/entities/teams');var _users=require('../selectors/entities/users');var _preference_utils=require('../utils/preference_utils');var _helpers=require('./helpers');var _errors=require('./errors');var _users2=require('./users');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function deletePreferences(preferences){var _this=this;return function _callee(dispatch,getState){return regeneratorRuntime.async(function _callee$(_context){while(1){switch(_context.prev=_context.next){case 0:dispatch({type:_constants.PreferencesTypes.DELETE_PREFERENCES_REQUEST},getState);_context.prev=1;_context.next=4;return regeneratorRuntime.awrap(_client2.default.deletePreferences(preferences));case 4:_context.next=11;break;case 6:_context.prev=6;_context.t0=_context['catch'](1);(0,_helpers.forceLogoutIfNecessary)(_context.t0,dispatch);dispatch((0,_reduxBatchedActions.batchActions)([{type:_constants.PreferencesTypes.DELETE_PREFERENCES_FAILURE,error:_context.t0},(0,_errors.getLogErrorAction)(_context.t0)]),getState);return _context.abrupt('return');case 11:dispatch((0,_reduxBatchedActions.batchActions)([{type:_constants.PreferencesTypes.DELETED_PREFERENCES,data:preferences},{type:_constants.PreferencesTypes.DELETE_PREFERENCES_SUCCESS}]),getState);case 12:case'end':return _context.stop();}}},null,_this,[[1,6]]);};}function getMyPreferences(){return(0,_helpers.bindClientFunc)(_client2.default.getMyPreferences,_constants.PreferencesTypes.MY_PREFERENCES_REQUEST,[_constants.PreferencesTypes.RECEIVED_PREFERENCES,_constants.PreferencesTypes.MY_PREFERENCES_SUCCESS],_constants.PreferencesTypes.MY_PREFERENCES_FAILURE);}function makeDirectChannelVisibleIfNecessary(otherUserId){var _this2=this;return function _callee2(dispatch,getState){var state,myPreferences,currentUserId,preference;return regeneratorRuntime.async(function _callee2$(_context2){while(1){switch(_context2.prev=_context2.next){case 0:state=getState();myPreferences=(0,_preferences.getMyPreferences)(state);currentUserId=(0,_users.getCurrentUserId)(state);preference=myPreferences[(0,_preference_utils.getPreferenceKey)(_constants.Preferences.CATEGORY_DIRECT_CHANNEL_SHOW,otherUserId)];if(!(!preference||preference.value==='false')){_context2.next=9;break;}preference={user_id:currentUserId,category:_constants.Preferences.CATEGORY_DIRECT_CHANNEL_SHOW,name:otherUserId,value:'true'};(0,_users2.getProfilesByIds)([otherUserId])(dispatch,getState);_context2.next=9;return regeneratorRuntime.awrap(savePreferences([preference])(dispatch,getState));case 9:case'end':return _context2.stop();}}},null,_this2);};}function makeGroupMessageVisibleIfNecessary(channelId){var _this3=this;return function _callee3(dispatch,getState){var state,myPreferences,currentTeamId,currentUserId,preference;return regeneratorRuntime.async(function _callee3$(_context3){while(1){switch(_context3.prev=_context3.next){case 0:state=getState();myPreferences=(0,_preferences.getMyPreferences)(state);currentTeamId=(0,_teams.getCurrentTeamId)(state);currentUserId=(0,_users.getCurrentUserId)(state);preference=myPreferences[(0,_preference_utils.getPreferenceKey)(_constants.Preferences.CATEGORY_GROUP_CHANNEL_SHOW,channelId)];if(!(!preference||preference.value==='false')){_context3.next=10;break;}preference={user_id:currentUserId,category:_constants.Preferences.CATEGORY_GROUP_CHANNEL_SHOW,name:channelId,value:'true'};(0,_users2.getProfilesInChannel)(currentTeamId,channelId,0)(dispatch,getState);_context3.next=10;return regeneratorRuntime.awrap(savePreferences([preference])(dispatch,getState));case 10:case'end':return _context3.stop();}}},null,_this3);};}function savePreferences(preferences){var _this4=this;
return function _callee4(dispatch,getState){return regeneratorRuntime.async(function _callee4$(_context4){while(1){switch(_context4.prev=_context4.next){case 0:
dispatch({type:_constants.PreferencesTypes.SAVE_PREFERENCES_REQUEST},getState);_context4.prev=1;_context4.next=4;return regeneratorRuntime.awrap(


_client2.default.savePreferences(preferences));case 4:_context4.next=11;break;case 6:_context4.prev=6;_context4.t0=_context4['catch'](1);

(0,_helpers.forceLogoutIfNecessary)(_context4.t0,dispatch);
dispatch((0,_reduxBatchedActions.batchActions)([
{type:_constants.PreferencesTypes.SAVE_PREFERENCES_FAILURE,error:_context4.t0},
(0,_errors.getLogErrorAction)(_context4.t0)]),
getState);return _context4.abrupt('return');case 11:



dispatch((0,_reduxBatchedActions.batchActions)([
{
type:_constants.PreferencesTypes.RECEIVED_PREFERENCES,
data:preferences},

{
type:_constants.PreferencesTypes.SAVE_PREFERENCES_SUCCESS}]),

getState);case 12:case'end':return _context4.stop();}}},null,_this4,[[1,6]]);};

}