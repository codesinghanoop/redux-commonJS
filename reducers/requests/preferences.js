Object.defineProperty(exports,"__esModule",{value:true});


var _redux=require('redux');
var _constants=require('../../constants');

var _helpers=require('./helpers');

function getMyPreferences(){var state=arguments.length>0&&arguments[0]!==undefined?arguments[0]:(0,_helpers.initialRequestState)();var action=arguments[1];
return(0,_helpers.handleRequest)(
_constants.PreferencesTypes.MY_PREFERENCES_REQUEST,
_constants.PreferencesTypes.MY_PREFERENCES_SUCCESS,
_constants.PreferencesTypes.MY_PREFERENCES_FAILURE,
state,
action);

}

function savePreferences(){var state=arguments.length>0&&arguments[0]!==undefined?arguments[0]:(0,_helpers.initialRequestState)();var action=arguments[1];
return(0,_helpers.handleRequest)(
_constants.PreferencesTypes.SAVE_PREFERENCES_REQUEST,
_constants.PreferencesTypes.SAVE_PREFERENCES_SUCCESS,
_constants.PreferencesTypes.SAVE_PREFERENCES_FAILURE,
state,
action);

}

function deletePreferences(){var state=arguments.length>0&&arguments[0]!==undefined?arguments[0]:(0,_helpers.initialRequestState)();var action=arguments[1];
return(0,_helpers.handleRequest)(
_constants.PreferencesTypes.DELETE_PREFERENCES_REQUEST,
_constants.PreferencesTypes.DELETE_PREFERENCES_SUCCESS,
_constants.PreferencesTypes.DELETE_PREFERENCES_FAILURE,
state,
action);

}exports.default=

(0,_redux.combineReducers)({
getMyPreferences:getMyPreferences,
savePreferences:savePreferences,
deletePreferences:deletePreferences});