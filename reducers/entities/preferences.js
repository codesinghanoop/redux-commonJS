Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};


var _redux=require('redux');
var _constants=require('../../constants');

function getKey(preference){
return preference.category+'--'+preference.name;
}

function myPreferences(){var state=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};var action=arguments[1];
switch(action.type){
case _constants.PreferencesTypes.RECEIVED_PREFERENCES:{
var nextState=_extends({},state);

for(var _iterator=action.data,_isArray=Array.isArray(_iterator),_i=0,_iterator=_isArray?_iterator:_iterator[typeof Symbol==='function'?Symbol.iterator:'@@iterator']();;){var _ref;if(_isArray){if(_i>=_iterator.length)break;_ref=_iterator[_i++];}else{_i=_iterator.next();if(_i.done)break;_ref=_i.value;}var preference=_ref;
nextState[getKey(preference)]=preference;
}

return nextState;
}
case _constants.PreferencesTypes.DELETED_PREFERENCES:{
var _nextState=_extends({},state);

for(var _iterator2=action.data,_isArray2=Array.isArray(_iterator2),_i2=0,_iterator2=_isArray2?_iterator2:_iterator2[typeof Symbol==='function'?Symbol.iterator:'@@iterator']();;){var _ref2;if(_isArray2){if(_i2>=_iterator2.length)break;_ref2=_iterator2[_i2++];}else{_i2=_iterator2.next();if(_i2.done)break;_ref2=_i2.value;}var _preference=_ref2;
Reflect.deleteProperty(_nextState,getKey(_preference));
}

return _nextState;
}

case _constants.UsersTypes.LOGOUT_SUCCESS:
return{};
default:
return state;}

}exports.default=

(0,_redux.combineReducers)({


myPreferences:myPreferences});