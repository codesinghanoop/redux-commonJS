Object.defineProperty(exports,"__esModule",{value:true});exports.default=



























keyMirror;function keyMirror(obj){
if(!(obj instanceof Object&&!Array.isArray(obj))){
throw new Error('keyMirror(...): Argument must be an object.');
}

var ret={};
for(var key in obj){
if(!obj.hasOwnProperty(key)){
continue;
}

ret[key]=key;
}

return ret;
}