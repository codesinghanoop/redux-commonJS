Object.defineProperty(exports,"__esModule",{value:true});


var _constants=require('../../constants');function _toConsumableArray(arr){if(Array.isArray(arr)){for(var i=0,arr2=Array(arr.length);i<arr.length;i++){arr2[i]=arr[i];}return arr2;}else{return Array.from(arr);}}exports.default=

function(){var state=arguments.length>0&&arguments[0]!==undefined?arguments[0]:[];var action=arguments[1];
switch(action.type){
case _constants.ErrorTypes.DISMISS_ERROR:{
var nextState=[].concat(_toConsumableArray(state));
nextState.splice(action.index,1);

return nextState;
}
case _constants.ErrorTypes.LOG_ERROR:{
var _nextState=[].concat(_toConsumableArray(state));var
displayable=action.displayable,error=action.error;
_nextState.push({displayable:displayable,error:error});

return _nextState;
}
case _constants.ErrorTypes.CLEAR_ERRORS:{
return[];
}
default:
return state;}

};