Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};exports.default=















































































































































































function(){var state=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};var action=arguments[1];var _handlePosts=
handlePosts(state.posts,state.postsByChannel,action),posts=_handlePosts.posts,postsByChannel=_handlePosts.postsByChannel;

var nextState={


posts:posts,


postsByChannel:postsByChannel,


selectedPostId:selectedPostId(state.selectedPostId,action),


currentFocusedPostId:currentFocusedPostId(state.currentFocusedPostId,action)};


if(state.posts===nextState.posts&&state.postsByChannel===nextState.postsByChannel&&
state.selectedPostId===nextState.selectedPostId&&
state.currentFocusedPostId===nextState.currentFocusedPostId){

return state;
}

return nextState;
};var _constants=require('../../constants');function _toConsumableArray(arr){if(Array.isArray(arr)){for(var i=0,arr2=Array(arr.length);i<arr.length;i++){arr2[i]=arr[i];}return arr2;}else{return Array.from(arr);}}function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true});}else{obj[key]=value;}return obj;}function handleReceivedPost(){var posts=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};var postsByChannel=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};var action=arguments[2];var post=action.data;var channelId=post.channel_id;var nextPosts=_extends({},posts,_defineProperty({},post.id,post));var nextPostsByChannel=postsByChannel;if(!postsByChannel[channelId]||postsByChannel[channelId].indexOf(post.id)===-1){var postsInChannel=postsByChannel[channelId]||[];nextPostsByChannel=_extends({},postsByChannel);nextPostsByChannel[channelId]=[post.id].concat(_toConsumableArray(postsInChannel));}return{posts:nextPosts,postsByChannel:nextPostsByChannel};}function handleReceivedPosts(){var posts=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};var postsByChannel=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};var action=arguments[2];var newPosts=action.data.posts;var channelId=action.channelId;var nextPosts=_extends({},posts);var nextPostsByChannel=_extends({},postsByChannel);var postsInChannel=postsByChannel[channelId]?[].concat(_toConsumableArray(postsByChannel[channelId])):[];for(var _iterator=Object.values(newPosts),_isArray=Array.isArray(_iterator),_i=0,_iterator=_isArray?_iterator:_iterator[typeof Symbol==='function'?Symbol.iterator:'@@iterator']();;){var _ref;if(_isArray){if(_i>=_iterator.length)break;_ref=_iterator[_i++];}else{_i=_iterator.next();if(_i.done)break;_ref=_i.value;}var newPost=_ref;if(newPost.delete_at>0){continue;}if(!nextPosts[newPost.id]||nextPosts[newPost.id].update_at>newPost.update_at){nextPosts[newPost.id]=newPost;}if(postsInChannel.indexOf(newPost.id)===-1){postsInChannel.push(newPost.id);}}postsInChannel.sort(function(a,b){if(nextPosts[a].create_at>nextPosts[b].create_at){return-1;}else if(nextPosts[a].create_at<nextPosts[b].create_at){return 1;}return 0;});nextPostsByChannel[channelId]=postsInChannel;return{posts:nextPosts,postsByChannel:nextPostsByChannel};}function handlePostDeleted(){var posts=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};var postsByChannel=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};var action=arguments[2];var post=action.data;var nextPosts=posts;if(posts[post.id]){nextPosts=_extends({},posts);nextPosts[post.id]=_extends({},posts[post.id],{state:_constants.Constants.POST_DELETED,file_ids:[],has_reactions:false});}return{posts:nextPosts,postsByChannel:postsByChannel};}function handleRemovePost(){var posts=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};var postsByChannel=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};var action=arguments[2];var post=action.data;var channelId=post.channel_id;var nextPosts=posts;var nextPostsByChannel=postsByChannel;if(nextPosts[post.id]){nextPosts=_extends({},posts);nextPostsByChannel=_extends({},postsByChannel);var postsInChannel=postsByChannel[channelId]?[].concat(_toConsumableArray(postsByChannel[channelId])):[];Reflect.deleteProperty(nextPosts,post.id);var index=postsInChannel.indexOf(post.id);if(index!==-1){postsInChannel.splice(index,1);}for(var _iterator2=postsInChannel,_isArray2=Array.isArray(_iterator2),_i2=0,_iterator2=_isArray2?_iterator2:_iterator2[typeof Symbol==='function'?Symbol.iterator:'@@iterator']();;){var _ref2;if(_isArray2){if(_i2>=_iterator2.length)break;_ref2=_iterator2[_i2++];}else{_i2=_iterator2.next();if(_i2.done)break;_ref2=_i2.value;}var id=_ref2;if(nextPosts[id].root_id===post.id){Reflect.deleteProperty(nextPosts,id);var commentIndex=postsInChannel.indexOf(id);if(commentIndex!==-1){postsInChannel.splice(commentIndex,1);}}}nextPostsByChannel[channelId]=postsInChannel;}return{posts:nextPosts,postsByChannel:nextPostsByChannel};}function handlePosts(){var posts=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};var postsByChannel=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};var action=arguments[2];switch(action.type){case _constants.PostsTypes.RECEIVED_POST:return handleReceivedPost(posts,postsByChannel,action);case _constants.PostsTypes.RECEIVED_POSTS:return handleReceivedPosts(posts,postsByChannel,action);case _constants.PostsTypes.POST_DELETED:return handlePostDeleted(posts,postsByChannel,action);case _constants.PostsTypes.REMOVE_POST:return handleRemovePost(posts,postsByChannel,action);case _constants.UsersTypes.LOGOUT_SUCCESS:return{posts:{},postsByChannel:{}};default:return{posts:posts,postsByChannel:postsByChannel};}}function selectedPostId(){var state=arguments.length>0&&arguments[0]!==undefined?arguments[0]:'';var action=arguments[1];switch(action.type){case _constants.PostsTypes.RECEIVED_POST_SELECTED:return action.data;case _constants.UsersTypes.LOGOUT_SUCCESS:return'';default:return state;}}function currentFocusedPostId(){var state=arguments.length>0&&arguments[0]!==undefined?arguments[0]:'';var action=arguments[1];switch(action.type){case _constants.UsersTypes.LOGOUT_SUCCESS:return'';default:return state;}}