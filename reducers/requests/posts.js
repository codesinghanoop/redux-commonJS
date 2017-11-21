Object.defineProperty(exports,"__esModule",{value:true});


var _redux=require('redux');
var _constants=require('../../constants');

var _helpers=require('./helpers');

function createPost(){var state=arguments.length>0&&arguments[0]!==undefined?arguments[0]:(0,_helpers.initialRequestState)();var action=arguments[1];
return(0,_helpers.handleRequest)(
_constants.PostsTypes.CREATE_POST_REQUEST,
_constants.PostsTypes.CREATE_POST_SUCCESS,
_constants.PostsTypes.CREATE_POST_FAILURE,
state,
action);

}

function editPost(){var state=arguments.length>0&&arguments[0]!==undefined?arguments[0]:(0,_helpers.initialRequestState)();var action=arguments[1];
return(0,_helpers.handleRequest)(
_constants.PostsTypes.EDIT_POST_REQUEST,
_constants.PostsTypes.EDIT_POST_SUCCESS,
_constants.PostsTypes.EDIT_POST_FAILURE,
state,
action);

}

function deletePost(){var state=arguments.length>0&&arguments[0]!==undefined?arguments[0]:(0,_helpers.initialRequestState)();var action=arguments[1];
return(0,_helpers.handleRequest)(
_constants.PostsTypes.DELETE_POST_REQUEST,
_constants.PostsTypes.DELETE_POST_SUCCESS,
_constants.PostsTypes.DELETE_POST_FAILURE,
state,
action);

}

function getPost(){var state=arguments.length>0&&arguments[0]!==undefined?arguments[0]:(0,_helpers.initialRequestState)();var action=arguments[1];
return(0,_helpers.handleRequest)(
_constants.PostsTypes.GET_POST_REQUEST,
_constants.PostsTypes.GET_POST_SUCCESS,
_constants.PostsTypes.GET_POST_FAILURE,
state,
action);

}

function getPosts(){var state=arguments.length>0&&arguments[0]!==undefined?arguments[0]:(0,_helpers.initialRequestState)();var action=arguments[1];
return(0,_helpers.handleRequest)(
_constants.PostsTypes.GET_POSTS_REQUEST,
_constants.PostsTypes.GET_POSTS_SUCCESS,
_constants.PostsTypes.GET_POSTS_FAILURE,
state,
action);

}

function getPostsSince(){var state=arguments.length>0&&arguments[0]!==undefined?arguments[0]:(0,_helpers.initialRequestState)();var action=arguments[1];
return(0,_helpers.handleRequest)(
_constants.PostsTypes.GET_POSTS_SINCE_REQUEST,
_constants.PostsTypes.GET_POSTS_SINCE_SUCCESS,
_constants.PostsTypes.GET_POSTS_SINCE_FAILURE,
state,
action);

}

function getPostsBefore(){var state=arguments.length>0&&arguments[0]!==undefined?arguments[0]:(0,_helpers.initialRequestState)();var action=arguments[1];
return(0,_helpers.handleRequest)(
_constants.PostsTypes.GET_POSTS_BEFORE_REQUEST,
_constants.PostsTypes.GET_POSTS_BEFORE_SUCCESS,
_constants.PostsTypes.GET_POSTS_BEFORE_FAILURE,
state,
action);

}

function getPostsAfter(){var state=arguments.length>0&&arguments[0]!==undefined?arguments[0]:(0,_helpers.initialRequestState)();var action=arguments[1];
return(0,_helpers.handleRequest)(
_constants.PostsTypes.GET_POSTS_AFTER_REQUEST,
_constants.PostsTypes.GET_POSTS_AFTER_SUCCESS,
_constants.PostsTypes.GET_POSTS_AFTER_FAILURE,
state,
action);

}exports.default=

(0,_redux.combineReducers)({
createPost:createPost,
editPost:editPost,
deletePost:deletePost,
getPost:getPost,
getPosts:getPosts,
getPostsSince:getPostsSince,
getPostsBefore:getPostsBefore,
getPostsAfter:getPostsAfter});