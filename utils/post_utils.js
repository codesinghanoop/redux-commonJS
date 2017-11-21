Object.defineProperty(exports,"__esModule",{value:true});exports.






addDatesToPostList=addDatesToPostList;exports.






































isPostFlagged=isPostFlagged;exports.




isSystemMessage=isSystemMessage;exports.



shouldIgnorePost=shouldIgnorePost;exports.



isPostOwner=isPostOwner;exports.



isEdited=isEdited;exports.



canDeletePost=canDeletePost;exports.










canEditPost=canEditPost;var _constants=require('../constants');var _preference_utils=require('./preference_utils');function addDatesToPostList(posts){var options=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};var indicateNewMessages=options.indicateNewMessages,currentUserId=options.currentUserId,lastViewedAt=options.lastViewedAt;var out=[];var lastDate=null;var subsequentPostIsUnread=false;var subsequentPostUserId=void 0;var postIsUnread=void 0;for(var _iterator=posts,_isArray=Array.isArray(_iterator),_i=0,_iterator=_isArray?_iterator:_iterator[typeof Symbol==='function'?Symbol.iterator:'@@iterator']();;){var _ref;if(_isArray){if(_i>=_iterator.length)break;_ref=_iterator[_i++];}else{_i=_iterator.next();if(_i.done)break;_ref=_i.value;}var post=_ref;if(post.state===_constants.Constants.POST_DELETED&&post.user_id===currentUserId){continue;}postIsUnread=post.create_at>lastViewedAt;if(indicateNewMessages&&subsequentPostIsUnread&&!postIsUnread&&subsequentPostUserId!==currentUserId){out.push(_constants.Constants.START_OF_NEW_MESSAGES);}subsequentPostIsUnread=postIsUnread;subsequentPostUserId=post.user_id;var postDate=new Date(post.create_at);if(lastDate&&lastDate.toDateString()!==postDate.toDateString()){out.push(lastDate);}lastDate=postDate;out.push(post);}if(lastDate){out.push(lastDate);}return out;}function isPostFlagged(postId,myPreferences){var key=(0,_preference_utils.getPreferenceKey)(_constants.Preferences.CATEGORY_FLAGGED_POST,postId);return myPreferences.hasOwnProperty(key);}function isSystemMessage(post){return post.type&&post.type.startsWith(_constants.Constants.SYSTEM_MESSAGE_PREFIX);}function shouldIgnorePost(post){return _constants.Constants.IGNORE_POST_TYPES.includes(post.type);}function isPostOwner(userId,post){return userId===post.user_id;}function isEdited(post){return post.edit_at>0;}function canDeletePost(config,license,userId,post,isAdmin,isSystemAdmin){var isOwner=isPostOwner(userId,post);if(license.IsLicensed==='true'){return config.RestrictPostDelete===_constants.Constants.PERMISSIONS_DELETE_POST_ALL&&(isOwner||isAdmin)||config.RestrictPostDelete===_constants.Constants.PERMISSIONS_DELETE_POST_TEAM_ADMIN&&isAdmin||config.RestrictPostDelete===_constants.Constants.PERMISSIONS_DELETE_POST_SYSTEM_ADMIN&&isSystemAdmin;}return isOwner||isAdmin;}function canEditPost(config,license,userId,post,editDisableAction){
var isOwner=isPostOwner(userId,post);
var canEdit=isOwner&&!isSystemMessage(post);

if(canEdit&&license.IsLicensed==='true'){
if(config.AllowEditPost===_constants.Constants.ALLOW_EDIT_POST_NEVER){
canEdit=false;
}else if(config.AllowEditPost===_constants.Constants.ALLOW_EDIT_POST_TIME_LIMIT){
var timeLeft=post.create_at+config.PostEditTimeLimit*1000-Date.now();
if(timeLeft>0){
editDisableAction.fireAfter(timeLeft+1000);
}else{
canEdit=false;
}
}
}
return canEdit;
}