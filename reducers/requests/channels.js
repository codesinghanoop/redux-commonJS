Object.defineProperty(exports,"__esModule",{value:true});


var _redux=require('redux');
var _constants=require('../../constants');

var _helpers=require('./helpers');

function getChannel(){var state=arguments.length>0&&arguments[0]!==undefined?arguments[0]:(0,_helpers.initialRequestState)();var action=arguments[1];
return(0,_helpers.handleRequest)(
_constants.ChannelTypes.CHANNEL_REQUEST,
_constants.ChannelTypes.CHANNEL_SUCCESS,
_constants.ChannelTypes.CHANNEL_FAILURE,
state,
action);

}

function getChannels(){var state=arguments.length>0&&arguments[0]!==undefined?arguments[0]:(0,_helpers.initialRequestState)();var action=arguments[1];
return(0,_helpers.handleRequest)(
_constants.ChannelTypes.CHANNELS_REQUEST,
_constants.ChannelTypes.CHANNELS_SUCCESS,
_constants.ChannelTypes.CHANNELS_FAILURE,
state,
action);

}

function myMembers(){var state=arguments.length>0&&arguments[0]!==undefined?arguments[0]:(0,_helpers.initialRequestState)();var action=arguments[1];
return(0,_helpers.handleRequest)(
_constants.ChannelTypes.CHANNEL_MEMBERS_REQUEST,
_constants.ChannelTypes.CHANNEL_MEMBERS_SUCCESS,
_constants.ChannelTypes.CHANNEL_MEMBERS_FAILURE,
state,
action);

}

function createChannel(){var state=arguments.length>0&&arguments[0]!==undefined?arguments[0]:(0,_helpers.initialRequestState)();var action=arguments[1];
return(0,_helpers.handleRequest)(
_constants.ChannelTypes.CREATE_CHANNEL_REQUEST,
_constants.ChannelTypes.CREATE_CHANNEL_SUCCESS,
_constants.ChannelTypes.CREATE_CHANNEL_FAILURE,
state,
action);

}

function updateChannel(){var state=arguments.length>0&&arguments[0]!==undefined?arguments[0]:(0,_helpers.initialRequestState)();var action=arguments[1];
return(0,_helpers.handleRequest)(
_constants.ChannelTypes.UPDATE_CHANNEL_REQUEST,
_constants.ChannelTypes.UPDATE_CHANNEL_SUCCESS,
_constants.ChannelTypes.UPDATE_CHANNEL_FAILURE,
state,
action);

}

function updateChannelNotifyProps(){var state=arguments.length>0&&arguments[0]!==undefined?arguments[0]:(0,_helpers.initialRequestState)();var action=arguments[1];
return(0,_helpers.handleRequest)(
_constants.ChannelTypes.NOTIFY_PROPS_REQUEST,
_constants.ChannelTypes.NOTIFY_PROPS_SUCCESS,
_constants.ChannelTypes.NOTIFY_PROPS_FAILURE,
state,
action);

}

function leaveChannel(){var state=arguments.length>0&&arguments[0]!==undefined?arguments[0]:(0,_helpers.initialRequestState)();var action=arguments[1];
return(0,_helpers.handleRequest)(
_constants.ChannelTypes.LEAVE_CHANNEL_REQUEST,
_constants.ChannelTypes.LEAVE_CHANNEL_SUCCESS,
_constants.ChannelTypes.LEAVE_CHANNEL_FAILURE,
state,
action);

}

function joinChannel(){var state=arguments.length>0&&arguments[0]!==undefined?arguments[0]:(0,_helpers.initialRequestState)();var action=arguments[1];
return(0,_helpers.handleRequest)(
_constants.ChannelTypes.JOIN_CHANNEL_REQUEST,
_constants.ChannelTypes.JOIN_CHANNEL_SUCCESS,
_constants.ChannelTypes.JOIN_CHANNEL_FAILURE,
state,
action);

}

function deleteChannel(){var state=arguments.length>0&&arguments[0]!==undefined?arguments[0]:(0,_helpers.initialRequestState)();var action=arguments[1];
return(0,_helpers.handleRequest)(
_constants.ChannelTypes.DELETE_CHANNEL_REQUEST,
_constants.ChannelTypes.DELETE_CHANNEL_SUCCESS,
_constants.ChannelTypes.DELETE_CHANNEL_FAILURE,
state,
action);

}

function updateLastViewedAt(){var state=arguments.length>0&&arguments[0]!==undefined?arguments[0]:(0,_helpers.initialRequestState)();var action=arguments[1];
return(0,_helpers.handleRequest)(
_constants.ChannelTypes.UPDATE_LAST_VIEWED_REQUEST,
_constants.ChannelTypes.UPDATE_LAST_VIEWED_SUCCESS,
_constants.ChannelTypes.UPDATE_LAST_VIEWED_FAILURE,
state,
action);

}

function getMoreChannels(){var state=arguments.length>0&&arguments[0]!==undefined?arguments[0]:(0,_helpers.initialRequestState)();var action=arguments[1];
return(0,_helpers.handleRequest)(
_constants.ChannelTypes.MORE_CHANNELS_REQUEST,
_constants.ChannelTypes.MORE_CHANNELS_SUCCESS,
_constants.ChannelTypes.MORE_CHANNELS_FAILURE,
state,
action);

}

function getChannelStats(){var state=arguments.length>0&&arguments[0]!==undefined?arguments[0]:(0,_helpers.initialRequestState)();var action=arguments[1];
return(0,_helpers.handleRequest)(
_constants.ChannelTypes.CHANNEL_STATS_REQUEST,
_constants.ChannelTypes.CHANNEL_STATS_SUCCESS,
_constants.ChannelTypes.CHANNEL_STATS_FAILURE,
state,
action);

}

function addChannelMember(){var state=arguments.length>0&&arguments[0]!==undefined?arguments[0]:(0,_helpers.initialRequestState)();var action=arguments[1];
return(0,_helpers.handleRequest)(
_constants.ChannelTypes.ADD_CHANNEL_MEMBER_REQUEST,
_constants.ChannelTypes.ADD_CHANNEL_MEMBER_SUCCESS,
_constants.ChannelTypes.ADD_CHANNEL_MEMBER_FAILURE,
state,
action);

}

function removeChannelMember(){var state=arguments.length>0&&arguments[0]!==undefined?arguments[0]:(0,_helpers.initialRequestState)();var action=arguments[1];
return(0,_helpers.handleRequest)(
_constants.ChannelTypes.REMOVE_CHANNEL_MEMBER_REQUEST,
_constants.ChannelTypes.REMOVE_CHANNEL_MEMBER_SUCCESS,
_constants.ChannelTypes.REMOVE_CHANNEL_MEMBER_FAILURE,
state,
action);

}

function autocompleteChannels(){var state=arguments.length>0&&arguments[0]!==undefined?arguments[0]:(0,_helpers.initialRequestState)();var action=arguments[1];
return(0,_helpers.handleRequest)(
_constants.ChannelTypes.AUTOCOMPLETE_CHANNELS_REQUEST,
_constants.ChannelTypes.AUTOCOMPLETE_CHANNELS_SUCCESS,
_constants.ChannelTypes.AUTOCOMPLETE_CHANNELS_FAILURE,
state,
action);

}exports.default=

(0,_redux.combineReducers)({
getChannel:getChannel,
getChannels:getChannels,
myMembers:myMembers,
createChannel:createChannel,
updateChannel:updateChannel,
updateChannelNotifyProps:updateChannelNotifyProps,
leaveChannel:leaveChannel,
joinChannel:joinChannel,
deleteChannel:deleteChannel,
updateLastViewedAt:updateLastViewedAt,
getMoreChannels:getMoreChannels,
getChannelStats:getChannelStats,
addChannelMember:addChannelMember,
removeChannelMember:removeChannelMember,
autocompleteChannels:autocompleteChannels});