Object.defineProperty(exports,"__esModule",{value:true});exports.












makeGetFilesForPost=makeGetFilesForPost;var _reselect=require('reselect');function getAllFiles(state){return state.entities.files.files;}function getFilesIdsForPost(state,post){return state.entities.files.fileIdsByPostId[post.id]||[];}function makeGetFilesForPost(){
return(0,_reselect.createSelector)(
[getAllFiles,getFilesIdsForPost],
function(allFiles,fileIdsForPost){
return fileIdsForPost.map(function(id){return allFiles[id];});
});

}