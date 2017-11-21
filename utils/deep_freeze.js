Object.defineProperty(exports,"__esModule",{value:true});exports.default=


























deepFreezeAndThrowOnMutation;function deepFreezeAndThrowOnMutation(object){
if(typeof object!=='object'||object===null||Object.isFrozen(object)||Object.isSealed(object)){
return object;
}

for(var key in object){
if(object.hasOwnProperty(key)){
object.__defineGetter__(key,identity.bind(null,object[key]));
object.__defineSetter__(key,throwOnImmutableMutation.bind(null,key));
}
}

Object.freeze(object);
Object.seal(object);

for(var _key in object){
if(object.hasOwnProperty(_key)){
deepFreezeAndThrowOnMutation(object[_key]);
}
}

return object;
}

function throwOnImmutableMutation(key,value){
throw Error(
'You attempted to set the key `'+key+'` with the value `'+
JSON.stringify(value)+'` on an object that is meant to be immutable '+
'and has been frozen.');

}

function identity(value){
return value;
}