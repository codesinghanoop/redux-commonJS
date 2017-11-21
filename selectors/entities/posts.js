Object.defineProperty(exports,"__esModule",{value:true});exports.getPostsInCurrentChannel=undefined;exports.




getAllPosts=getAllPosts;exports.


















makeGetPostsForThread=makeGetPostsForThread;exports.




















makeGetCommentCountForPost=makeGetCommentCountForPost;var _reselect=require('reselect');function getAllPosts(state){return state.entities.posts.posts;}function getPostIdsInCurrentChannel(state){return state.entities.posts.postsByChannel[state.entities.channels.currentChannelId]||[];}var getPostsInCurrentChannel=exports.getPostsInCurrentChannel=(0,_reselect.createSelector)(getAllPosts,getPostIdsInCurrentChannel,function(posts,postIds){return postIds.map(function(id){return posts[id];});});function makeGetPostsForThread(){return(0,_reselect.createSelector)(getAllPosts,function(state,props){return state.entities.posts.postsByChannel[props.channelId];},function(state,props){return props;},function(posts,postIds,_ref){var rootId=_ref.rootId;var thread=[];for(var _iterator=postIds,_isArray=Array.isArray(_iterator),_i=0,_iterator=_isArray?_iterator:_iterator[typeof Symbol==='function'?Symbol.iterator:'@@iterator']();;){var _ref2;if(_isArray){if(_i>=_iterator.length)break;_ref2=_iterator[_i++];}else{_i=_iterator.next();if(_i.done)break;_ref2=_i.value;}var id=_ref2;var post=posts[id];if(id===rootId||post.root_id===rootId){thread.push(post);}}return thread;});}function makeGetCommentCountForPost(){
return(0,_reselect.createSelector)(
getAllPosts,
function(state,props){return props;},
function(posts,_ref3){var currentPost=_ref3.post;
var count=0;
for(var id in posts){
if(posts.hasOwnProperty(id)){
var post=posts[id];

if(post.root_id===currentPost.id){
count+=1;
}
}
}

return count;
});

}