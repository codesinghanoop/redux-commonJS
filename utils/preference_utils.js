Object.defineProperty(exports,"__esModule",{value:true});exports.


getPreferenceKey=getPreferenceKey;exports.



getPreferencesByCategory=getPreferencesByCategory;function getPreferenceKey(category,name){return category+"--"+name;}function getPreferencesByCategory(myPreferences,category){
var prefix=category+"--";
var preferences=new Map();
Object.keys(myPreferences).forEach(function(key){
if(key.startsWith(prefix)){
preferences.set(key.substring(prefix.length),myPreferences[key]);
}
});

return preferences;
}