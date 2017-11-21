Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};exports.












createPost=createPost;exports.













































deletePost=deletePost;exports.


























editPost=editPost;exports.










flagPost=flagPost;exports.













getPost=getPost;exports.





























getPosts=getPosts;exports.































getPostsSince=getPostsSince;exports.































getPostsBefore=getPostsBefore;exports.































getPostsAfter=getPostsAfter;exports.



























































removePost=removePost;exports.








selectPost=selectPost;exports.








unflagPost=unflagPost;var _reduxBatchedActions=require('redux-batched-actions');var _client=require('../client');var _client2=_interopRequireDefault(_client);var _constants=require('../constants');var _helpers=require('./helpers');var _errors=require('./errors');var _preferences=require('./preferences');var _users=require('./users');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function createPost(teamId,post,files){var _this=this;return function _callee(dispatch,getState){var newPost,fileIds,createdPost,actions;return regeneratorRuntime.async(function _callee$(_context){while(1){switch(_context.prev=_context.next){case 0:dispatch({type:_constants.PostsTypes.CREATE_POST_REQUEST},getState);newPost=post;if(files){fileIds=files.map(function(file){return file.id;});newPost=_extends({},newPost,{file_ids:fileIds});}createdPost=void 0;_context.prev=4;_context.next=7;return regeneratorRuntime.awrap(_client2.default.createPost(teamId,newPost));case 7:createdPost=_context.sent;_context.next=15;break;case 10:_context.prev=10;_context.t0=_context['catch'](4);(0,_helpers.forceLogoutIfNecessary)(_context.t0,dispatch);dispatch((0,_reduxBatchedActions.batchActions)([{type:_constants.PostsTypes.CREATE_POST_FAILURE,error:_context.t0},(0,_errors.getLogErrorAction)(_context.t0)]),getState);return _context.abrupt('return');case 15:actions=[{type:_constants.PostsTypes.RECEIVED_POST,data:_extends({},createdPost)}];if(files){actions.push({type:_constants.FilesTypes.RECEIVED_FILES_FOR_POST,postId:createdPost.id,data:files});}actions.push({type:_constants.PostsTypes.CREATE_POST_SUCCESS});dispatch((0,_reduxBatchedActions.batchActions)(actions),getState);case 19:case'end':return _context.stop();}}},null,_this,[[4,10]]);};}function deletePost(teamId,post){var _this2=this;return function _callee2(dispatch,getState){return regeneratorRuntime.async(function _callee2$(_context2){while(1){switch(_context2.prev=_context2.next){case 0:dispatch({type:_constants.PostsTypes.DELETE_POST_REQUEST},getState);_context2.prev=1;_context2.next=4;return regeneratorRuntime.awrap(_client2.default.deletePost(teamId,post.channel_id,post.id));case 4:_context2.next=11;break;case 6:_context2.prev=6;_context2.t0=_context2['catch'](1);(0,_helpers.forceLogoutIfNecessary)(_context2.t0,dispatch);dispatch((0,_reduxBatchedActions.batchActions)([{type:_constants.PostsTypes.DELETE_POST_FAILURE,error:_context2.t0},(0,_errors.getLogErrorAction)(_context2.t0)]),getState);return _context2.abrupt('return');case 11:dispatch((0,_reduxBatchedActions.batchActions)([{type:_constants.PostsTypes.POST_DELETED,data:_extends({},post)},{type:_constants.PostsTypes.DELETE_POST_SUCCESS}]),getState);case 12:case'end':return _context2.stop();}}},null,_this2,[[1,6]]);};}function editPost(teamId,post){return(0,_helpers.bindClientFunc)(_client2.default.editPost,_constants.PostsTypes.EDIT_POST_REQUEST,[_constants.PostsTypes.RECEIVED_POST,_constants.PostsTypes.EDIT_POST_SUCCESS],_constants.PostsTypes.EDIT_POST_FAILURE,teamId,post);}function flagPost(postId){var _this3=this;return function _callee3(dispatch,getState){var currentUserId,preference;return regeneratorRuntime.async(function _callee3$(_context3){while(1){switch(_context3.prev=_context3.next){case 0:currentUserId=getState().entities.users.currentUserId;preference={user_id:currentUserId,category:_constants.Preferences.CATEGORY_FLAGGED_POST,name:postId,value:'true'};return _context3.abrupt('return',(0,_preferences.savePreferences)([preference])(dispatch,getState));case 3:case'end':return _context3.stop();}}},null,_this3);};}function getPost(teamId,channelId,postId){var _this4=this;return function _callee4(dispatch,getState){var post;return regeneratorRuntime.async(function _callee4$(_context4){while(1){switch(_context4.prev=_context4.next){case 0:dispatch({type:_constants.PostsTypes.GET_POST_REQUEST},getState);post=void 0;_context4.prev=2;_context4.next=5;return regeneratorRuntime.awrap(_client2.default.getPost(teamId,channelId,postId));case 5:post=_context4.sent;getProfilesAndStatusesForPosts(post,dispatch,getState);_context4.next=14;break;case 9:_context4.prev=9;_context4.t0=_context4['catch'](2);(0,_helpers.forceLogoutIfNecessary)(_context4.t0,dispatch);dispatch((0,_reduxBatchedActions.batchActions)([{type:_constants.PostsTypes.GET_POST_FAILURE,error:_context4.t0},(0,_errors.getLogErrorAction)(_context4.t0)]),getState);return _context4.abrupt('return');case 14:dispatch((0,_reduxBatchedActions.batchActions)([{type:_constants.PostsTypes.RECEIVED_POSTS,data:_extends({},post),channelId:channelId},{type:_constants.PostsTypes.GET_POST_SUCCESS}]),getState);case 15:case'end':return _context4.stop();}}},null,_this4,[[2,9]]);};}function getPosts(teamId,channelId){var _this5=this;var offset=arguments.length>2&&arguments[2]!==undefined?arguments[2]:0;var limit=arguments.length>3&&arguments[3]!==undefined?arguments[3]:_constants.Constants.POST_CHUNK_SIZE;return function _callee5(dispatch,getState){var posts;return regeneratorRuntime.async(function _callee5$(_context5){while(1){switch(_context5.prev=_context5.next){case 0:dispatch({type:_constants.PostsTypes.GET_POSTS_REQUEST},getState);posts=void 0;_context5.prev=2;_context5.next=5;return regeneratorRuntime.awrap(_client2.default.getPosts(teamId,channelId,offset,limit));case 5:posts=_context5.sent;getProfilesAndStatusesForPosts(posts,dispatch,getState);_context5.next=14;break;case 9:_context5.prev=9;_context5.t0=_context5['catch'](2);(0,_helpers.forceLogoutIfNecessary)(_context5.t0,dispatch);dispatch((0,_reduxBatchedActions.batchActions)([{type:_constants.PostsTypes.GET_POSTS_FAILURE,error:_context5.t0},(0,_errors.getLogErrorAction)(_context5.t0)]),getState);return _context5.abrupt('return',null);case 14:dispatch((0,_reduxBatchedActions.batchActions)([{type:_constants.PostsTypes.RECEIVED_POSTS,data:posts,channelId:channelId},{type:_constants.PostsTypes.GET_POSTS_SUCCESS}]),getState);return _context5.abrupt('return',posts);case 16:case'end':return _context5.stop();}}},null,_this5,[[2,9]]);};}function getPostsSince(teamId,channelId,since){var _this6=this;return function _callee6(dispatch,getState){var posts;return regeneratorRuntime.async(function _callee6$(_context6){while(1){switch(_context6.prev=_context6.next){case 0:dispatch({type:_constants.PostsTypes.GET_POSTS_SINCE_REQUEST},getState);posts=void 0;_context6.prev=2;_context6.next=5;return regeneratorRuntime.awrap(_client2.default.getPostsSince(teamId,channelId,since));case 5:posts=_context6.sent;getProfilesAndStatusesForPosts(posts,dispatch,getState);_context6.next=14;break;case 9:_context6.prev=9;_context6.t0=_context6['catch'](2);(0,_helpers.forceLogoutIfNecessary)(_context6.t0,dispatch);dispatch((0,_reduxBatchedActions.batchActions)([{type:_constants.PostsTypes.GET_POSTS_SINCE_FAILURE,error:_context6.t0},(0,_errors.getLogErrorAction)(_context6.t0)]),getState);return _context6.abrupt('return',null);case 14:dispatch((0,_reduxBatchedActions.batchActions)([{type:_constants.PostsTypes.RECEIVED_POSTS,data:posts,channelId:channelId},{type:_constants.PostsTypes.GET_POSTS_SINCE_SUCCESS}]),getState);return _context6.abrupt('return',posts);case 16:case'end':return _context6.stop();}}},null,_this6,[[2,9]]);};}function getPostsBefore(teamId,channelId,postId){var _this7=this;var offset=arguments.length>3&&arguments[3]!==undefined?arguments[3]:0;var limit=arguments.length>4&&arguments[4]!==undefined?arguments[4]:_constants.Constants.POST_CHUNK_SIZE;return function _callee7(dispatch,getState){var posts;return regeneratorRuntime.async(function _callee7$(_context7){while(1){switch(_context7.prev=_context7.next){case 0:dispatch({type:_constants.PostsTypes.GET_POSTS_BEFORE_REQUEST},getState);posts=void 0;_context7.prev=2;_context7.next=5;return regeneratorRuntime.awrap(_client2.default.getPostsBefore(teamId,channelId,postId,offset,limit));case 5:posts=_context7.sent;getProfilesAndStatusesForPosts(posts,dispatch,getState);_context7.next=14;break;case 9:_context7.prev=9;_context7.t0=_context7['catch'](2);(0,_helpers.forceLogoutIfNecessary)(_context7.t0,dispatch);dispatch((0,_reduxBatchedActions.batchActions)([{type:_constants.PostsTypes.GET_POSTS_BEFORE_FAILURE,error:_context7.t0},(0,_errors.getLogErrorAction)(_context7.t0)]),getState);return _context7.abrupt('return',null);case 14:dispatch((0,_reduxBatchedActions.batchActions)([{type:_constants.PostsTypes.RECEIVED_POSTS,data:posts,channelId:channelId},{type:_constants.PostsTypes.GET_POSTS_BEFORE_SUCCESS}]),getState);return _context7.abrupt('return',posts);case 16:case'end':return _context7.stop();}}},null,_this7,[[2,9]]);};}function getPostsAfter(teamId,channelId,postId){var _this8=this;var offset=arguments.length>3&&arguments[3]!==undefined?arguments[3]:0;var limit=arguments.length>4&&arguments[4]!==undefined?arguments[4]:_constants.Constants.POST_CHUNK_SIZE;return function _callee8(dispatch,getState){var posts;return regeneratorRuntime.async(function _callee8$(_context8){while(1){switch(_context8.prev=_context8.next){case 0:dispatch({type:_constants.PostsTypes.GET_POSTS_AFTER_REQUEST},getState);posts=void 0;_context8.prev=2;_context8.next=5;return regeneratorRuntime.awrap(_client2.default.getPostsAfter(teamId,channelId,postId,offset,limit));case 5:posts=_context8.sent;getProfilesAndStatusesForPosts(posts,dispatch,getState);_context8.next=14;break;case 9:_context8.prev=9;_context8.t0=_context8['catch'](2);(0,_helpers.forceLogoutIfNecessary)(_context8.t0,dispatch);dispatch((0,_reduxBatchedActions.batchActions)([{type:_constants.PostsTypes.GET_POSTS_AFTER_FAILURE,error:_context8.t0},(0,_errors.getLogErrorAction)(_context8.t0)]),getState);return _context8.abrupt('return',null);case 14:dispatch((0,_reduxBatchedActions.batchActions)([{type:_constants.PostsTypes.RECEIVED_POSTS,data:posts,channelId:channelId},{type:_constants.PostsTypes.GET_POSTS_AFTER_SUCCESS}]),getState);return _context8.abrupt('return',posts);case 16:case'end':return _context8.stop();}}},null,_this8,[[2,9]]);};}function getProfilesAndStatusesForPosts(list,dispatch,getState){var _getState$entities$us,currentUserId,profiles,statuses,posts,profilesToLoad,statusesToLoad;return regeneratorRuntime.async(function getProfilesAndStatusesForPosts$(_context9){while(1){switch(_context9.prev=_context9.next){case 0:_getState$entities$us=getState().entities.users,currentUserId=_getState$entities$us.currentUserId,profiles=_getState$entities$us.profiles,statuses=_getState$entities$us.statuses;posts=list.posts;profilesToLoad=[];statusesToLoad=[];Object.keys(posts).forEach(function(key){var post=posts[key];var userId=post.user_id;if(!profiles[userId]&&!profilesToLoad.includes(userId)&&userId!==currentUserId){profilesToLoad.push(userId);}if(!statuses[userId]&&!statusesToLoad.includes(userId)&&userId!==currentUserId){statusesToLoad.push(userId);}});if(!profilesToLoad.length){_context9.next=8;break;}_context9.next=8;return regeneratorRuntime.awrap((0,_users.getProfilesByIds)(profilesToLoad)(dispatch,getState));case 8:if(!statusesToLoad.length){_context9.next=11;break;}_context9.next=11;return regeneratorRuntime.awrap((0,_users.getStatusesByIds)(statusesToLoad)(dispatch,getState));case 11:case'end':return _context9.stop();}}},null,this);}function removePost(post){var _this9=this;return function _callee9(dispatch,getState){return regeneratorRuntime.async(function _callee9$(_context10){while(1){switch(_context10.prev=_context10.next){case 0:dispatch({type:_constants.PostsTypes.REMOVE_POST,data:_extends({},post)},getState);case 1:case'end':return _context10.stop();}}},null,_this9);};}function selectPost(postId){var _this10=this;return function _callee10(dispatch,getState){return regeneratorRuntime.async(function _callee10$(_context11){while(1){switch(_context11.prev=_context11.next){case 0:dispatch({type:_constants.PostsTypes.RECEIVED_POST_SELECTED,data:postId},getState);case 1:case'end':return _context11.stop();}}},null,_this10);};}function unflagPost(postId){var _this11=this;
return function _callee11(dispatch,getState){var currentUserId,preference;return regeneratorRuntime.async(function _callee11$(_context12){while(1){switch(_context12.prev=_context12.next){case 0:
currentUserId=getState().entities.users.currentUserId;
preference={
user_id:currentUserId,
category:_constants.Preferences.CATEGORY_FLAGGED_POST,
name:postId};return _context12.abrupt('return',


(0,_preferences.deletePreferences)([preference])(dispatch,getState));case 3:case'end':return _context12.stop();}}},null,_this11);};

}exports.default=

{
createPost:createPost,
editPost:editPost,
deletePost:deletePost,
removePost:removePost,
getPost:getPost,
getPosts:getPosts,
getPostsSince:getPostsSince,
getPostsBefore:getPostsBefore,
getPostsAfter:getPostsAfter,
selectPost:selectPost};